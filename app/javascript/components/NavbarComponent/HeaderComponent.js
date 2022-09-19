import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function HeaderComponent() {
  const navigate = useNavigate()
  const handleRootLink = () => {
    navigate("/sign_in")
  }
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{cursor:"pointer"}} edge="start" onClick={handleRootLink}>
           React-Rails Demo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}