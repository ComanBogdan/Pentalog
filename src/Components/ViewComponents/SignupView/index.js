import { Alert, Avatar, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';


import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Box } from '@mui/system';

const SignupView = ({ handleSubmit}) => {

    const state = useSelector((store) => store.signup)
    const {isLoading, error, success} = state;

    const initialState = {
        username: "",
        password: "",
        passwordConfirm: "",
    }

    const [formValues, setFormValues] = useState(initialState)
    const [isValid, setIsValid] = useState(false)


    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
        ...formValues,
        [name]: value,
    })
    formValidation()
    }

    const formValidation = () => {
        if( formValues.password === formValues.passwordConfirm)
            setIsValid(true)
        else   
            setIsValid(false)
    }


    

  return (
    <Container sx={{ paddingBottom: '50px', minHeight: '52vh'}}>

        <Paper variant="elevation" elevation={10} sx={{padding: 20, height: '50vh', width: 200, margin: "20px auto"}}>
            <Box component="form" >

            </Box>
        <form onSubmit={(e) => {e.preventDefault(); handleSubmit(formValues)}}>
            <Grid container spacing={2} alignItems="center" justify="center" direction="column" >
                <Grid align="center">
                    <Avatar style={{backgroundColor: "#1bbd7e"}}><PersonAddAltOutlinedIcon /></Avatar>
                    <h2>Create your account</h2>                
                    <Typography variant="caption">Create an account to view and manage your portofolio.</Typography>
                </Grid>
                <Grid item >
                    <TextField variant="standard" placeholder='Enter username' id="username-input" label="Username" name="username" type="text" value={formValues.username} onChange={handleInputChange}/>
                </Grid>
                <Grid item>
                    <TextField variant="standard" placeholder='Enter password' id="password-input" label="Password" name="password" error={formValues.password !== formValues.passwordConfirm} type="password" value={formValues.password} onChange={handleInputChange}/>
                </Grid>
                <Grid item>
                    <TextField variant="standard" placeholder='Confirm password' id="password-confirm-input" label="Password confirm" name="passwordConfirm" error={formValues.password !== formValues.passwordConfirm} helperText="password should match" type="password" value={formValues.passwordConfirm} onChange={handleInputChange}/>
                </Grid>
                <Grid item>
                    <Button disabled={isValid} variant="contained" color="primary" type="submit" >CREATE</Button>
                    
                </Grid>
                <Grid item>
                {
                isLoading &&
                <Box sx={{ display: 'flex' }}>
                     <CircularProgress />
                </Box>
                }

                </Grid>
                <Grid item>
                {
                error &&
                <Box sx={{ display: 'flex' }}>
                    <Alert severity="error">{error}</Alert>
                </Box>
                }

                </Grid>
                <Grid item>
                {
                success &&
                <Box sx={{ display: 'flex' }}>
                    <Alert severity="success">Account created successfully</Alert>
                </Box>
                }

                </Grid>
                
        
                
            </Grid>
            
            
            
        </form>
        </Paper>
        
        
    </Container>
  )
}

export default SignupView