import React, { useState  } from 'react';
import { Button, TextField, FormLabel, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [loginValid, setLoginValid] = useState(false);

  const login = () => {
    let userEmail = document.querySelector('#email').value;
    window.sessionStorage.setItem('userEmail', userEmail);
    setLoginValid(true);
  }

    return(
    <div className='login'>
        <Typography variant="title" color="inherit" >
            Movie Gallery Login
        </Typography>
        <form noValidate autoComplete="off">
            <TextField type='email' id='email' label="Email"/>
            <TextField type='password' id='password' label="Pasword"/>
            <Button size="small" onClick={() => login()} variant="contained" color={'primary'}>
                Login
            </Button>
            <div>
                <FormLabel>Note: Login service is just a mock, you can input any value to enter.</FormLabel>
            </div>
            {
                loginValid &&
                <Redirect to={'/gallery'}>
                </Redirect>
            }
        </form>
    </div>
    )
 }

 export default Login;