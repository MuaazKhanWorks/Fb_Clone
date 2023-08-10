import { Box, Button, ButtonGroup, Grid, MenuItem, Paper, Select, Stack, Typography } from '@mui/material'
import './Navbar.css'
import { AccountCircleSharp, Coronavirus, DeveloperBoardOffTwoTone, DeveloperModeOutlined, Facebook, HelpOutline, LiveTv, MailOutlineOutlined, NewspaperOutlined, NotificationsActive, QuestionMark, QuestionMarkRounded, SportsEsportsOutlined, Storefront, TvOffOutlined, TvOffSharp, WrongLocationRounded } from '@mui/icons-material'
import profile from '../images/profile.jfif'
import Groups2Icon from '@mui/icons-material/Groups2';
import messanger from '../images/messanger.jfif'
import MiddleArea from './MiddleArea';
import RightArea from './RightArea';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigat = useNavigate()
  const GoToProfile = () =>{
    navigat('/Profile')
  }
  return (
    <>
    
     <Box>
        <Grid container>
            <Paper className='nav' elevation={10} square sx={{width:'100%',height:'8vh',bgcolor:'#2F539B',color:'white',gap:'7px'}}>
                <Facebook fontSize='large'/>
                <input className='srh' type='search'/>
                <Stack >
                <ButtonGroup variant="plain" aria-label="plain button group">
                  <img className='profile' src={profile}/>
                  <Button onClick={GoToProfile}>Profile</Button>
                  <Button>Home</Button>
                  <Button>Create</Button>
                 </ButtonGroup>
                </Stack>
                <Groups2Icon fontSize='large' sx={{marginLeft:"20px"}}/>
                <img className='messanger'src={messanger}/>
                <NotificationsActive sx={{marginLeft:"15px"}}/>
                <AccountCircleSharp sx={{marginLeft:"15px"}}/>
                <HelpOutline fontSize='large' sx={{marginLeft:"70px"}}/>
                <Button variant='contained' color='error'>Log Out</Button>
            </Paper>
        </Grid>
        <Box>
          <Grid container>
            <Grid item lg={2}>
              <Stack direction={'row'} marginTop={3}>
              <img className='profile' src={profile}/>
              <Typography variant='h6'>Muaaz Khan</Typography>
              </Stack>
              <Stack direction={'row'} sx={{marginTop:'30px'}}>
                <NewspaperOutlined color='primary'/>
                <Typography variant='body1'>News Feed</Typography>
              </Stack>
              <Stack direction={'row'} sx={{marginTop:'10px'}}>
                <MailOutlineOutlined color='primary'/>
                <Typography variant='body1'>Messanger</Typography>
              </Stack>
              <Stack direction={'row'} sx={{marginTop:'10px'}}>
                <LiveTv/>
                <Typography variant='body1'>Watch</Typography>
              </Stack>
              <Stack direction={'row'} sx={{marginTop:'10px'}}>
                <Storefront color='primary'/>
                <Typography variant='body1'>Market Place</Typography>
              </Stack>
              <hr/>
              <Typography variant='h6'>ShortCuts</Typography>
              <Stack direction={'row'} sx={{marginTop:'30px'}}>
                <DeveloperModeOutlined color='error'/>
                <Typography variant='body1'>Android Developers</Typography>
              </Stack>
              <Stack direction={'row'} sx={{marginTop:'20px'}}>
                <SportsEsportsOutlined color='primary'/>
                <Typography variant='body1'>Play Games</Typography>
              </Stack>
              <Stack direction={'row'} sx={{marginTop:'20px'}}>
                <DeveloperBoardOffTwoTone color='primary'/>
                <Typography variant='body1'>Un-Read Bizzels</Typography>
              </Stack>
              <hr/>
              <Typography variant='h6'>Explore World</Typography>
              <Stack direction={'row'} sx={{marginTop:'20px'}}>
                <Coronavirus color='error'/>
                <Typography variant='body1'>Covid-19</Typography>
              </Stack>
              <Stack direction={'row'} sx={{marginTop:'20px'}}>
                <WrongLocationRounded color='error'/>
                <Typography variant='body1'>Missing Persons</Typography>
              </Stack>
            </Grid>

            <Grid item lg={7}>
              <MiddleArea/>
            </Grid>
            
            <Grid item lg={3}>
              <RightArea/>
            </Grid>
          </Grid>
    </Box>
    </Box> 
    
    </>
  )
}

export default Navbar
