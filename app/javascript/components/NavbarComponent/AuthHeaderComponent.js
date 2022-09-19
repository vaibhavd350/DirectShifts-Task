import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function HeaderComponent() {
  const navigate = useNavigate()
  const handleLogOut = async () =>{
    const response = await window.fetch('/auth/sign_out', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token"),
      },
    });
    const result = await response.json()
      if(result.success === true){
        toast.success("User Logged out successfully.")
        sessionStorage.clear();
        navigate("/sign_in")
      }else{
        toast.error(result.errors[0])
      }   
    }
    const handleRootLink = () =>{
      navigate("/user")
    }
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"  sx={{ flexGrow: 1, cursor:"pointer" }} component="div"  edge="start" onClick={handleRootLink}>
           React-Rails Demo
          </Typography>
          <Button sx={{ flexGrow: 1 }} edge="end" color="inherit" onClick={handleLogOut}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
