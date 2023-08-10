import React from 'react'
import profile from '../images/profile.jfif'
import './Navbar.css'
import {Box,Button,Grid,Paper,Stack, Typography} from '@mui/material'
import { LinkOffOutlined, LoyaltyOutlined, MoodOutlined, PhotoCamera, QuestionAnswerOutlined, ReplyAllOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import story1 from '../images/story1.jfif'
import story2 from '../images/story2.jpg'
import story3 from '../images/story3.jfif'
import story4 from '../images/story4.jfif'
import waterfall from '../images/waterfall.gif'
import horse from '../images/horse.gif'

const MiddleArea = () => {
  return (
    <>
        <Grid container>
            <Grid item lg={2}></Grid>
            <Grid item={8}>
            <Paper sx={{width:'550px',height:'30vh',marginTop:'30px'}} >
                <Stack direction={'column'}>
                    <Typography variant='body1' padding={1}>Create Post</Typography>
                </Stack>
                <hr/>
                <Stack direction={'row'}>
                    <img className='profile' src={profile}/>
                    <Typography variant='body1' padding={1}>Write Something Here....</Typography>
                </Stack>
                <hr style={{marginTop:'35px'}}/>
                <Stack direction={'row'} paddingLeft={2}>
                    <PhotoCamera color='primary'/>
                    <Typography variant='body1' >Take Photo</Typography>
                    <Stack direction={'row'} paddingLeft={2}>
                    <LoyaltyOutlined color='primary'/>
                    <Typography variant='body1' >Tag People</Typography>
                    </Stack>
                    <Stack direction={'row'} paddingLeft={2}>
                    <MoodOutlined color='primary'/>
                    <Typography variant='body1' >Feelings</Typography>
                    </Stack>
                    <Stack direction={'row'} paddingLeft={14}>
                    <Typography variant='body1' color={'error'}>More....</Typography>
                    </Stack>
                </Stack>     
            </Paper>
            <Paper sx={{width:'550px',height:'40vh',marginTop:'30px'}}>
                <Stack direction={'row'} justifyContent={'space-between'} padding={1} color={'blue'}>
                    <Typography>Stories</Typography>
                    <Typography>See All</Typography>
                </Stack>
                <hr style={{marginTop:'-8px'}}/>
                <Stack direction={'row'}>
                    <img className='stories' src={story1}/>
                    <img className='stories' src={story2}/>
                    <img className='stories' src={story3}/>
                    <img className='stories' src={story4}/>
                </Stack>
            </Paper>
            <Paper sx={{width:'550px',height:'80vh',marginTop:'15px'}}>
            <Stack direction={'row'}>
            <img className='postPic' src={profile}/>
            <Typography variant='body1' paddingTop={2} color={'primary'}>Person Name</Typography>
            </Stack>
            <Typography>This is a Beautiful WaterFall</Typography>
            <img style={{width:'100%'}} src={waterfall}/>
            <Stack direction={'row'} justifyContent={'space-evenly'}>
                <Button><ThumbUpAltOutlined/>Like</Button>
                <Button><QuestionAnswerOutlined/>Comments</Button>
                <Button><ReplyAllOutlined/>Share</Button>
            </Stack>
            </Paper>
            <Paper sx={{width:'550px',height:'80vh',marginTop:'15px'}}>
            <Stack direction={'row'}>
            <img className='postPic' src={profile}/>
            <Typography variant='body1' paddingTop={2} color={'primary'}>Person Name</Typography>
            </Stack>
            <Typography>This is a Beautiful Horse</Typography>
            <img style={{width:'100%'}} src={horse}/>
            <Stack direction={'row'} justifyContent={'space-evenly'}>
                <Button><ThumbUpAltOutlined/>Like</Button>
                <Button><QuestionAnswerOutlined/>Comments</Button>
                <Button><ReplyAllOutlined/>Share</Button>
            </Stack>
            </Paper>
            </Grid>
        </Grid>
    </>
  )
}

export default MiddleArea
