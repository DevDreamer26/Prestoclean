import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OtpLogin = ({setIsAdminAuthenticated}) => {
  const navigate = useNavigate()
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = () => {
    // Here, you would typically send the OTP to the provided phone number using a backend API.
    // For this example, we'll just simulate it.
    setIsOtpSent(true);
  };

  const handleLogin = () => {
    // Here, you would typically verify the OTP with the backend API and log the user in.
    // For this example, we'll just simulate a successful login.
    alert('Login successful!');
    setIsAdminAuthenticated(true)
    navigate('/schedule')
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} className="otp-login">
        <Typography variant="h4" align="center" gutterBottom>
          PrestoClean OTP Login
        </Typography>
        {isOtpSent ? (
          <div>
            <TextField
              label="OTP"
              fullWidth
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        ) : (
          <div>
            <TextField
              label="Phone Number"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSendOtp}
            >
              Send OTP
            </Button>
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default OtpLogin;
