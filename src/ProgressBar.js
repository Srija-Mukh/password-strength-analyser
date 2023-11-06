import react from 'react';
import { Box } from '@mui/material';

const barParentStyles = {
  height: '10px',
  width: '70%',
  border: '1px solid grey',
  margin: '20px auto',
  borderRadius: '5px',
  overflow: 'hidden',
};

export default function ProgressBar({ score }) {
  const width = score === 0 ? 25 : (score * 100) / 4;

  const progressColor = () => {
    if (score < 2) {
      return '#F44336';
    } else if (score === 2) {
      return '#FF980';
    } else if (score === 3) {
      return '#2196F3';
    } else if (score === 4) {
      return '#4CAF50';
    }
  };

  const barStyles = {
    width: `${width}%`,
    height: '10px',
    backgroundColor: progressColor(),
  };

  return (
    <Box style={barParentStyles}>
      <Box style={barStyles}></Box>
    </Box>
  );
}
