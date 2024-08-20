import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button,
  //  TextField,
    Box, useMediaQuery, useTheme} from '@mui/material';
import {  useNavigate } from 'react-router-dom'
// import { useAuth } from '../../contexts/authContext'
// import { doSignOut } from '../../firebase/auth'


const Header = () => {
 
    const navigate = useNavigate()
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    // const { userLoggedIn } = useAuth()

  //   const handleSearchChange = (event) => {
  //     setSearchTerm(event.target.value);
  //     onSearch(event.target.value); // Pass search term to parent component
  // };

    return (
        // nav bar for signout and login 
<AppBar position="fixed" sx={{backgroundColor:"#03265B"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DELOTE

        
           
        </Typography>
        {/* <Box  sx={{
            flexGrow: 2,
            display: 'flex',
            justifyContent: isSmallScreen ? 'flex-start' : 'center',
            alignItems: 'center',
            marginX: isSmallScreen ? '1rem' : 0,
            width: isSmallScreen ? '100%' : 'auto'
          }}>
                    <TextField
                        variant="outlined"
                        placeholder="Search Products"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        sx={{
                          backgroundColor: 'white',
                          borderRadius: '4px',
                          width: isSmallScreen ? '100%' : '600px'
                        }}
                    />
                </Box> */}
                <Box
          sx={{
            display: 'flex',
            flexDirection:  'row',
            alignItems: 'center',
            marginLeft: 'auto'
          }}
        >
          <Button
            color="inherit"
            sx={{ margin: isSmallScreen ? '0.5rem 0' : '0 0.2rem' }}
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </Button>
      
        {/* {userLoggedIn ? (
          <Button
            color="inherit"
            onClick={() => { doSignOut().then(() => { navigate('/') }) }}
          >
            Logout
          </Button> */}
        {/* ) : ( */}
         
          <Button
            color="inherit"
            sx={{ margin: isSmallScreen ? '0.5rem 0' : '0 1rem' }}
            onClick={() => navigate('/')}
          >
            Login
          </Button>
          {/* )} */}
          </Box>
      
     
      </Toolbar>
    </AppBar>
        
    )
}

export default Header