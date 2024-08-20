import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Typography, Paper, Link as MuiLink, Grid } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // Corrected useNavigate
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle login submission
  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      // Check if the response is JSON
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const result = await response.json();
        const { success, message, jwtToken } = result;
  
        if (success) {
          alert("Login successful");
          localStorage.setItem('token', jwtToken);
          setTimeout(() => {
            navigate('/profile');
          }, 1000);
        } else {
          alert(message);
        }
      } else {
        const text = await response.text();
        console.error("Unexpected response:", text);
        alert("An unexpected error1234 occurred.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };
  
  return (
    <Paper elevation={3} sx={{ padding: '30px 20px', width: '400px', margin: '20px auto', marginTop: '85px' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: '#03265B',
                fontWeight: '700',
                fontFamily: 'Gordita, sans-serif',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              Login
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ width: '100%' }}>
            <TextField 
              fullWidth 
              label="Email" 
              variant="outlined"
              {...register('email', { 
                required: 'Email is required', 
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                }
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
              sx={{ marginBottom: '16px' }}
            />
          </Grid>
          <Grid item xs={12} sx={{ width: '100%' }}>
            <TextField 
              fullWidth 
              label="Password" 
              variant="outlined" 
              type="password"
              {...register('password', { 
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters long',
                }
              })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
              sx={{ marginBottom: '16px' }}
            />
          </Grid>
          <Grid item xs={12} sx={{ minWidth: '100%', marginTop: '5px' }}>
            <Button variant="contained" type="submit" sx={{ minWidth: '80%', bgcolor: '#03265B', marginLeft: "33px" }}>
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '5px', textAlign: 'center' }}>
            <Typography variant="body2">
              Don't have an account?{' '}
              <MuiLink component={Link} to="/signup">
                Sign up
              </MuiLink>
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '5px' }}>
            <Button
              // Add onClick handler when Google Sign-In functionality is ready
              // onClick={onGoogleSignIn}
              sx={{ width: '100%', color: '#03265B' }}
            >
              Continue with Google
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default Login;
