import React from 'react';
import { Typography, Paper, Avatar,  Grid } from '@mui/material';
// import { useAuth } from '../../contexts/authContext' 


const Profiles = () => {
//   const { currentUser } = useAuth()
  return (
    <Paper elevation={3} sx={{ padding: '30px', maxWidth: '600px', margin: '20px auto',marginTop:"150px" }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Profile
      </Typography>
      {/* {currentUser && (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>
            <Avatar alt={currentUser.displayName} src={currentUser.photoURL} />
          </Grid>
          <Grid item sx={{marginBottom:"20px"}}>
            <Typography variant="h6">{currentUser.displayName}</Typography>
            <Typography variant="body1">{currentUser.email}</Typography>
          </Grid>
        </Grid>
      )}
     */}
    </Paper>
  )
}

export default Profiles
