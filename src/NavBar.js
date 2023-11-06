import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const buttonStyles = {
  margin: '0 10px',
};
export default function NavBar({
  clickedAnalyser,
  clickedLearn,
  toggleAnalyserClicked,
  toggleLearnClicked,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        style={{ background: '#4d4d4d', boxShadow: 'none' }}
      >
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button
            color='secondary'
            variant={clickedAnalyser ? 'contained' : 'outlined'}
            style={buttonStyles}
            onClick={toggleAnalyserClicked}
          >
            Analyser
          </Button>
          <Button
            color='secondary'
            variant={clickedLearn ? 'contained' : 'outlined'}
            style={buttonStyles}
            onClick={toggleLearnClicked}
          >
            Learn More
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
