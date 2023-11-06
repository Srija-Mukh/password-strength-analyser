import './App.css';
import { useState } from 'react';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Password from './Password.js';
import NavBar from './NavBar.js';
import LearnMore from './LearnMore.js';

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BB86FC',
    },
    secondary: {
      main: '#03DAC5',
    },
    background: {
      default: '#282828',
      paper: '#FEC260',
    },
  },
});
darkTheme = responsiveFontSizes(darkTheme);

const AppStyles = {
  padding: '20px',
};

function App() {
  const [clickedAnalyser, setClickedAnalyser] = useState(true);
  const [clickedLearn, setClickedLearn] = useState(false);

  const toggleAnalyserClicked = () => {
    setClickedAnalyser(true);
    setClickedLearn(false);
  };
  const toggleLearnClicked = () => {
    setClickedLearn(true);
    setClickedAnalyser(false);
  };

  const content = {
    margin: '40px'
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <div className='App' style={AppStyles}>
          <NavBar
            clickedAnalyser={clickedAnalyser}
            clickedLearn={clickedLearn}
            toggleAnalyserClicked={toggleAnalyserClicked}
            toggleLearnClicked={toggleLearnClicked}
          />
          <div style={content}>
            {clickedAnalyser && <Password />}
            {clickedLearn && <LearnMore />}
          </div>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
