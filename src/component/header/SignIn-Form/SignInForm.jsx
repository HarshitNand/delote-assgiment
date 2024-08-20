import React from 'react';
import { useForm } from 'react-hook-form';
// import { toast } from "react-toastify";
import { TextField, Button, Typography, Paper, Link as MuiLink, Grid } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
// import { handleSuccess } from '../../../utils';

const SignIntForm = () => {
  const navegate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  // Function to handle signup form submission
  const onSubmit = async (data) => {
    try {

      
      const response = await fetch('http://localhost:8000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      const {success,message} =result;
      if (success) {
        alert("Signup successful")
        setTimeout(( )=>{
          navegate('/profile')
        },1000)
      }
      // console.log(result)

      // if (response.ok) {
      //   // Handle successful signup
      //   console.log("Signup successful:", result);
      //   // Redirect the user, display a success message, etc.
      // } else {
      //   // Handle signup failure
      //   console.error("Signup failed:", result.message);
      //   // Display error message, etc.
      // }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle network or other errors
    }
  };

  // Watch the password field to validate the confirm password field
  const password = watch('password');

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
              Sign up
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
          <Grid item xs={12} sx={{ width: '100%' }}>
            <TextField 
              fullWidth 
              label="Confirm Password" 
              variant="outlined" 
              type="password"
              {...register('confirmPassword', { 
                required: 'Please confirm your password',
                validate: value => value === password || 'Passwords do not match'
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
              sx={{ marginBottom: '16px' }}
            />
          </Grid>
          <Grid item xs={12} sx={{ minWidth: '100%', marginTop: '5px' }}>
            <Button variant="contained" type="submit" sx={{ minWidth: '80%', bgcolor: '#03265B', marginLeft: "33px" }}>
              Sign up
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: '5px', textAlign: 'center' }}>
            <Typography variant="body2">
              Already have an account?{' '}
              <MuiLink component={Link} to="/">
                Login
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
      {/* <ToastContainer/> */}
    </Paper>
  );
}

export default SignIntForm;
