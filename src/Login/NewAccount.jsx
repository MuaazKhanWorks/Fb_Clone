import React, { useState } from 'react'
import {Box,Button,Paper} from '@mui/material'
import './LogPage.css'

const NewAccount = () => {
    // const [email,setEmail] = useState()
    // const [password,setPassword] = useState()

    // const Register = (e) =>{
    //     setEmail(e.target.value)
    //     setPassword(e.target.value)
    // }
  return (
    <div>
      <Box className='move'>
      <Paper elevation={12} sx={{width: '35%', height:'50vh'}} style={{padding:'25px'}}>
      <input className='text1' type='text' placeholder='Enter Your Email!'/><br/><br/>
      <input className='text1' type='text' placeholder='Enter Your Password!'/><br/><br/>
      <hr/>
      <Button variant='contained' color='success'>Register User</Button>
      </Paper>
      </Box>
    </div>
  )
}

export default NewAccount
