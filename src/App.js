import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './Login-Form/LoginF';
import Profiles from './page/profile page/Profiles';
import Header from './component/header/index.jsx';

import { CssBaseline } from '@mui/material';
import SignIntForm from './component/header/SignIn-Form/SignInForm.jsx';



const App = () => {

  return (
    <>
       <CssBaseline />
    <Header  />
 
    
    <Routes>
    
  
    <Route path="/" element={ <Login />} />
    <Route path="/signup" element={ <SignIntForm/>} />
    <Route path="/profile" element={ <Profiles/>} />
    
      
    </Routes>
    </>
    
 
   )
}

export default App

