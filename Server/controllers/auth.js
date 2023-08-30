import user from "../models/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import crypto from "crypto"
import sendEmail from "../sendEmail.js"
import OTP from "../models/otp.js"
import twilio from 'twilio'




const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

// Generate a random OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Send OTP via SMS
export const sendotp = async (req, res) => {
  const phoneNumber = req.body.phoneNumber;

  if (!phoneNumber) {
    return res.status(400).json({ error: 'Phone number is required.' });
  }

  const otp = generateOTP();

  try {
    await OTP.create({ phoneNumber, otp });

    client.messages.create({
      body: `Your OTP: ${otp}. It will expire in 5 minutes`,
      from: twilioPhoneNumber,
      to: phoneNumber,
    });

    res.json({ message: 'OTP sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send OTP.' });
  }
};

// Verify OTP
export const verifyotp = async (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const userOTP = req.body.otp;

  if (!phoneNumber || !userOTP) {
    return res.status(400).json({ error: 'Phone number and OTP are required.' });
  }

  try {
    const otpDocument = await OTP.findOne({ phoneNumber, otp: userOTP });

    if (otpDocument) {
      await otpDocument.deleteOne();
      res.json({ message: 'OTP verified successfully.' });
    } else {
      res.status(401).json({ error: 'Invalid OTP.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to verify OTP.' });
  }
};



export const signup = async(req,res) => {

    try {
        if (!req.body.password) {
            return res.status(400).json({ error: "Password is required" });
        }
        const password = req.body.password.toString()
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt);
        const newuser = new user({...req.body, password: hash})

        await newuser.save()
        res.status(200).send("User created")
    } catch (error) {
        console.log (error)
        res.status(500).send(error)
    }
}


export const login = async (req, res) => {
    try {
        const users = await user.findOne({ email: req.body.email });
        if (!users) {
            console.log('Incorrect email');
            return res.status(404).json({ error: "Incorrect email" });
        }


        if (!users.password) {
            console.log('Password field missing in user object');
            return res.status(500).json({ error: "Internal Server Error" });
        }

        const isCorrect = await bcrypt.compare(req.body.password.toString(), users.password);
        if (!isCorrect) {
            console.log('Incorrect password');
            return res.status(401).json({ error: "Incorrect password" });
        }

        const { password, ...others } = users._doc;
        const token = jwt.sign({ id: users._id }, process.env.JWT);
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({others,token});
        console.log('Logged in');
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred");
    }
};








export const logout = async (req, res) => {
    try {
        res.cookie('access_token', null, {
            httpOnly: true,
            expires: new Date(0) 
        }).status(200).json('Logged Out');
    } catch (error) {
        console.log(error);
    }
};


// admin

export const admin = async (req, res, next) => {
    try {
        const User = await user.findById({_id:req.user.id});

        if (!User || User.role !== "admin") {
            console.log("You are not authorized to make changes.");
            return res.status(403).json({ message: "You are not authorized to make changes." });
        }


        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// rest password

export const resetPassword = async (req, res, next) => {
  const resetToken = crypto.randomBytes(20).toString('hex');
  const resetpasswordtoken = crypto.createHash("sha256").update(resetToken).digest('hex')

  const resetpasswordexipre = Date.now() + 15 * 60 * 1000;
  
  const User = await user.findOne({
    email: req.body.email
  });
  try {

    if (!User) {
      console.log("User not found");
    } else {
        const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;


      User.resetpasswordtoken = resetpasswordtoken;
      User.resetPasswordUrl = resetPasswordUrl;
      User.resetpasswordexipre = resetpasswordexipre;


      await User.save({ validateBeforeSave: false });

      const message = `Your OTP to reset password: \n\n ${resetPasswordUrl} \n\n If you have not requested this email then please ignore`;

      await sendEmail({
        email: User.email,
        subject: 'Ecommerce Password Recovery',
        message
      });

      res.status(200).json(
        `Email sent to ${User.email} successfully`
      );
    }
  } catch (error) {
    User.resetpasswordtoken = undefined;
    User.resetpasswordexipre = undefined;

    await User.save({ validateBeforeSave: false });
    console.log(error);
  }
};

export const resetPass = async(req,res) =>{
    const resetpasswordtoken = crypto.createHash("sha256").update(req.params.token).digest('hex')

    const User = await user.findOne({
        resetpasswordtoken,
        resetpasswordexipre: {$gt: Date.now()}

    })

    if (!User) {
        console.log('user not found')
    } else {
        if(req.body.password !== req.body.confirmPassword){
            console.log('Password do not match')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        User.password = hash;
        User.resetpasswordtoken = undefined;
        User.resetpasswordexipre = undefined;

        await User.save()
        res.status(200).json("password reset successful")
    }
}

