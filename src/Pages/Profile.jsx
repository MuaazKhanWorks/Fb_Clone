import React from 'react'
import { Box, Button, Grid, Paper, Stack } from '@mui/material'
import DP1 from '../images/DP1.jpg'
import profile from '../images/profile.jfif'

const Profile = () => {
  return (
    <>
      <Box>
        <Grid container>
            <Grid item lg={2} sm={0} xs={0} style={{backgroundColor:'#d8d8df'}}>

            </Grid>
            <Grid item lg={8} sm={12} xs={12}>
                <Paper style={{height:'40%'}}>
                <img width={'100%'} style={{height:'100%',borderRadius:'4%'}} src={DP1}/>
                </Paper>
                <Stack direction={'row'} style={{marginTop:'-120px'}} justifyContent={'space-around'}>
                    <img style={{width:'30%',height:'30vh',borderRadius:"50%"}} src={profile}/>
                    <Button style={{backgroundColor:'white',color:'black',height:'10vh',marginTop:'50px'}} >Add New Profile</Button>
                </Stack>
            </Grid>
            <Grid item lg={2} sm={0} xs={0} style={{backgroundColor:'#d8d8df'}}>
                
            </Grid>

        </Grid>
      </Box>
    </>
  )
}

export default Profile
