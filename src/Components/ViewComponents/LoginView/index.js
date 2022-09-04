import { Alert, Avatar, Button, Grid, Link, Paper, Snackbar, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const LoginView = ({ handleSubmit }) => {
    let navigate = useNavigate();

    const state = useSelector((store) => store.login)
    const {success} = state;

    

    const defaultValues = {
        username: "",
        password: "",
    }

    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }


    
    const handleClick = () => {
        navigate("/signup")
    }

    // const [open, setOpen] = useState(false);

    // if(success === true){
    //     setOpen(true);
    // }

    // const handleClickSnackbar = () => {
    //     setOpen(true);
    // }

    const handleCloseSnackbar = (event, reason) => {
        if(reason ==='clickaway'){
            return;
        }
    }

  return (
    <Container sx={{ paddingBottom: '50px', minHeight: '52vh'}}>

        <Paper variant="elevation" elevation={10} sx={{padding: 20, height: '50vh', width: 200, margin: "20px auto"}}>
        <form onSubmit={(e) => {e.preventDefault(); handleSubmit(formValues)}}>
            <Grid container spacing={2} alignItems="center" justify="center" direction="column" >
                <Grid align="center">
                    <Avatar style={{backgroundColor: "#1bbd7e"}}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Grid item >
                    <TextField variant="standard" placeholder='Enter username' id="username-input" label="Username" name="username" type="text" value={formValues.username} onChange={handleInputChange}/>
                </Grid>
                <Grid item>
                    <TextField variant="standard" placeholder='Enter password' id="password-input" label="Password" name="password" type="password" value={formValues.password} onChange={handleInputChange}/>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" type="submit" >LOG IN</Button>
                    
                </Grid>
                <Grid item>
                <Typography>
                        Don't have an account? <Link onClick={handleClick}>Sign Up</Link>
                    </Typography>
                </Grid>
                
            </Grid>
            
            
            
        </form>

        <Snackbar open={success} autoHideDuration={5000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{width:'100%'}}>
                Successfully logged in. You will be redirected in 5 seconds
            </Alert>
        </Snackbar>
        </Paper>
        
        
    </Container>
  )
}

export default LoginView