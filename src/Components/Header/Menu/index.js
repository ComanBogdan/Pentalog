import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navigation = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
        <Typography component='div' sx={{flexGrow:1}}>Logo</Typography>
        
        <Stack direction='row' spacing={2}>
            <Button color='inherit'>Portofolio</Button>
            <Button color='inherit'>Login</Button>
            <Button color='inherit'>Signup </Button>
        </Stack>  
        
        </Toolbar>
        
    </AppBar>
  ) 
}

export default Navigation