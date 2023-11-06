import Typography from '@mui/material/Typography';

const tip = {
  marginBottom: '40px',
};

export default function Tip(props) {
  return (
    <div style={tip}>
      <Typography variant='h5' align='left' style={props.style}>
        {props.heading}
      </Typography>
      <Typography align='left'>{props.content}</Typography>
    </div>
  );
}
