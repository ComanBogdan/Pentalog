import { AppBar, Avatar, Button, FormControl, InputLabel, MenuItem, Select, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { SET_ACCOUNT_GUEST } from '../../../Containers/App/reducer';
import { INITIAL_STATE } from '../../../Containers/Login/reducer';

const Navigation = () => {

  let navigate = useNavigate();

  const state = useSelector((store) => store.app)
  const {username} = state;

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({type: SET_ACCOUNT_GUEST})
  }



  return (
    <AppBar position='static'>
        <Toolbar>
        <Typography component='div' sx={{flexGrow:1}}>Logo</Typography>

        
        
        <Stack direction='row' spacing={2}>
            <Button color='inherit' onClick={() => {navigate("/")}}>Home</Button>
            <Button color='inherit' onClick={() => {navigate("/dashboard")}}>Dashboard</Button>
            

            {username === 'guest'?  <Button color='inherit' onClick={() => {navigate("/signup")}}>Signup </Button> : <></>}
            {username === 'guest'?  <Button color='inherit' onClick={() => {navigate("/login")}}>Login</Button> : <></>}
            
            {username !== 'guest' &&  <Button color='inherit' onClick={() => {
              dispatch({type: SET_ACCOUNT_GUEST})
             // dispatch({type: INITIAL_STATE})
              }} >
              <Avatar>{username.charAt()}</Avatar>
              </Button>}
            
            
            
        
          
          
           

        </Stack>  
        
        </Toolbar>
        
    </AppBar>
  )   
}

export default Navigation