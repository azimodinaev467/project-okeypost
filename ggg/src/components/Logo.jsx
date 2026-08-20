import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logoImg from '../assets/Vector (15).png';

export default function Logo() {
  return (
    <Box
      component={Link}
      to="/"
      aria-label="OkeyPost — на главную"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.7,
        color: '#262626',
        textDecoration: 'none',
        flexShrink: 0,
      }}
    >
      <Box
        component="img"
        src={logoImg}
        alt="OkeyPost Logo"
        sx={{ width: 'auto', height: 29 }}
      />
      <Typography
        component="span"
        sx={{ fontSize: { xs: 18, sm: 19 }, fontWeight: 800, letterSpacing: '-0.055em' }}
      >
        OkeyPost
      </Typography>
    </Box>
  );
}
