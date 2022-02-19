import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{background:'transparent'}}>
        <Toolbar sx={{justifyContent:'space-between'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0, color:'black' }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Box>
          <Typography variant="h1" component="div" display="block" sx={{ flexGrow: 1, color:'black', textAlign:'center' }}>
            Rocket
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'black', textAlign:'center' }}>rocket.in.th/crm</Typography>
          </Box>
          
          <IconButton
            size="large"
            edge="start"
            
            aria-label="menu"
            sx={{ mr: 0, color:'black' }}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}