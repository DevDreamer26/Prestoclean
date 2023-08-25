import mongoose from "mongoose"


const Schema = mongoose.Schema


const orderschema = new Schema ({
    shippinginfo:{
        address:{
            type: String,
            required: true
        },
        hno:{
            type: Number,
            required: true
        },
        Pincode:{
            type: Number,
            required: true
        },
        Landmark:{
            type:Number,
            required: true,
        },
        phoneno:{
            type: Number,
            required: true
        },
        name:{
            type:String,
            required:true,
        },
        pickupdate:{
            type:String,
            required:true,
        }
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true
    },
    orderreceived:{
        type: String,
        default: "pending"
    },
    deliveredat: Date,
    createdat: {
        type: Date,
        default: Date.now
    }

})


const orders = mongoose.model("orders", orderschema)

export default orders