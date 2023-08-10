import { CakeOutlined, EditNoteOutlined, Inventory2Outlined, MailLockOutlined, Publish } from '@mui/icons-material'
import { Button, ButtonGroup, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import M from '../images/M.jfif'
import gif1 from '../images/gif1.gif'

const RightArea = () => {
    return (
        <>
            <Paper sx={{ width: '300px', height: '8vh', marginTop: '30px' }} >
                <Stack direction={'row'} padding={1}>
                    <CakeOutlined color='error' />
                    <Typography variant='body1'>Your Friend's BirthDay is Today</Typography>
                </Stack>
            </Paper>
            <Paper sx={{ width: '300px', height: '80vh', marginTop: '20px' }} >
                <Stack direction={'row'} padding={1}>
                    <Typography variant='h6'>Your Page...</Typography>
                </Stack>
                <hr style={{ marginTop: '-8px' }} />
                <Stack direction={'row'} padding={1}>
                    <img style={{ width: '80px', height: '14vh' }} src={M} />
                    <Stack direction={'row'} padding={1}>
                        <Typography variant='h6'>Muaaz Khan</Typography>
                    </Stack>
                </Stack>
                <hr style={{ marginTop: '-8px' }} />
                <Stack direction={'row'} padding={2}>
                    <Stack direction={'column'}>
                        < Publish color='primary' />
                        <Typography>Upload</Typography>
                    </Stack>
                    <Stack direction={'column'} paddingLeft={3}>
                        < Inventory2Outlined color='primary' />
                        <Typography>Store</Typography>
                    </Stack>
                    <Stack direction={'column'} paddingLeft={3}>
                        < EditNoteOutlined color='primary' />
                        <Typography>Thoughts</Typography>
                    </Stack>
                </Stack>
                <ButtonGroup variant="outlined" aria-label="outlined button group" style={{marginLeft:"34px"}}>
                    <Button>Likes</Button>
                    <Button>Views</Button>
                    <Button>Posts</Button>
                </ButtonGroup>
                <Stack direction={'row'}>
                <img style={{ width: '120px', height: '25vh' }} src={gif1}/>
                <Typography variant='h3' marginLeft={1} marginTop={5}>0_</Typography>
                <Stack direction={'column'}>
                <Typography variant='h6' marginTop={7}> Likes ToDay</Typography>
                </Stack>
                </Stack> 
            </Paper>


        </>
    )
}

export default RightArea
