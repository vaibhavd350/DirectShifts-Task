import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import RoutesPath from '../Router/RoutesPath';
import HeaderComponent from '../NavbarComponent/AuthHeaderComponent';
import { toast } from 'react-toastify';

const theme = createTheme();
const User = () =>{

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user ={
                  email: data.get('email'),
                }
  
    try {
      const response = await window.fetch('/api/users/refer_user', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: sessionStorage.getItem("token")
        },
      });
      const result = await response.json();
      console.log(result , "result")
      if (result.success === false) {

       toast.error(result.message)   
      }else{
          // navigate("/user")
          toast.success(result.message)
          // sessionStorage.setItem("token" ,  response.headers.get("Authorization"))
      } 
    }
    catch(err)
      {
        console.log(err.message , "error message")
      }
  }
    return (
      <>
        <HeaderComponent />
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <ForwardToInboxRoundedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Send Refferal Email
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                        >
                            Send Mail
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
      </>
    )
}
    
export default User
