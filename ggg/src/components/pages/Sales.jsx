import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SalesGridSection from '../SalesGridSection';
import HowToBuyFooter from '../HowToBuyFooter';
export default function Sales() {
  return (
    <Box sx={{ pb: { xs: 6, md: 10 } }}>
      <Box
        sx={{
          background: 'linear-gradient(111deg, #5b55ad 0%, #516ebd 42%, #39ace0 100%)',
          borderRadius: { xs: 3, md: 4 },
          px: { xs: 3, sm: 5, md: 8 },
          py: { xs: 5, md: 7 },
          color: '#fff',
          minHeight: { md: 280 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          mb: { xs: 6, md: 8 },
        }}
      >
        <Typography sx={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', mb: 3 }}>
          Главная / Распродажи
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: 32, sm: 38, md: 46 },
            fontWeight: 800,
            lineHeight: 1.2,
            mb: 1.5,
          }}
        >
          Распродажи
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 16, md: 20 },
            fontWeight: 400,
            color: 'rgba(255,255,255,0.9)',
            mb: 5,
          }}
        >
          ранний доступ к распродажам в магазинах
        </Typography>
        <Button
          variant="contained"
          sx={{
            alignSelf: 'flex-start',
            minHeight: 46,
            px: 5,
            borderRadius: 999,
            bgcolor: '#00d28f',
            boxShadow: 'none',
            color: '#fff',
            fontSize: 14,
            fontWeight: 700,
            textTransform: 'none',
            '&:hover': { bgcolor: '#00bc80', boxShadow: 'none' },
          }}
        >
          Получить адрес в UK
        </Button>
      </Box>
      
      <SalesGridSection />
      <HowToBuyFooter />
    </Box>
  );
}
