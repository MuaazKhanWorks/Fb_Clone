import React, { useState } from 'react'
import './LogPage.css'
import NewAccount from './NewAccount'
import { useNavigate } from "react-router-dom";
import {Box, Button, Grid, Paper, Typography} from '@mui/material'

const LogPage = () => {
    const [show,setShow] = useState(true)

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  function handleSubmit () {
    if (email === "muaaz" && password === "muaaz") {
      navigate("/Main");
    } else {
      alert("Incorrect");
    }
  };

    const modal = ()=>{
        setShow(false)
    }
    
  return (
    <>
        
      <Box className='main'>
        <Grid container >
            <Grid item lg={6}>
                <Typography variant='h2' color={'blue'}>Facebook</Typography>
                <Typography variant='h6'>Facebook helps you connect and share<br/>
                 with the people in your life.</Typography>
            </Grid>
            <Grid item lg={6}>
                
                <Paper sx={{width:'70%', borderRadius:'10px'}} elevation={12}>
                <Box className='forrm'>
                    <input className='text1' type='text' value={email} onChange={handleEmailChange}/><br/><br/>
                    <input className='text1' type='password' value={password} onChange={handlePasswordChange}/><br/><br/>
                    <Button variant='contained' className='btn1' onClick={handleSubmit}>Log in</Button><br/><br/>
                    <a href='#' style={{marginLeft:'90px'}}>Forgotten password?</a>
                    <hr/><br/>
                    <Button variant='contained' color='success' style={{marginLeft:'60px'}} 
                    onClick={modal}>Create New Account</Button>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
      </Box>
      {
            show ? null : <NewAccount/>
      }
    </>
  )
}

export default LogPage
