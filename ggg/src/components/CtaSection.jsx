import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import illustrationImg from '../assets/Иллюстрация (1).png';
export default function CtaSection() {
  return (
    <Box component="section" sx={{ pb: { xs: 6, md: 10 }, bgcolor: '#fafafa' }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1254,
          px: { xs: 2.5, sm: 4, lg: 0 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            borderRadius: { xs: 4, md: 5 },
            overflow: 'hidden',
            background: 'linear-gradient(111deg, #5b55ad 0%, #516ebd 42%, #39ace0 100%)',
            px: { xs: 3, sm: 5, md: 8 },
            py: { xs: 4, sm: 5, md: 0 },
            minHeight: { md: 280 },
          }}
        >
          {/* Illustration */}
          <Box
            sx={{
              width: { xs: '100%', md: '40%' },
              maxWidth: 350,
              mt: { xs: 4, md: 0 },
              mr: { md: 6 },
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <Box
              component="img"
              src={illustrationImg}
              alt="Мастера шопинга"
              sx={{ width: '100%', height: 'auto', display: 'block', transform: { md: 'scale(1.1) translateY(-10px)' } }}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', md: '60%' }, color: '#fff', py: { md: 5 } }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: 20, md: 24 },
                fontWeight: 700,
                lineHeight: 1.4,
                mb: 2,
              }}
            >
              Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 12, md: 13 },
                fontWeight: 400,
                color: 'rgba(255,255,255,0.85)',
                mb: 4,
                lineHeight: 1.5,
              }}
            >
              Такой способ покупки также подойдёт, если магазин принимает только английские карты.
            </Typography>
            <Button
              variant="contained"
              sx={{
                minHeight: 42,
                px: 4,
                borderRadius: 999,
                bgcolor: '#00d28f',
                boxShadow: '0 9px 20px rgba(0, 166, 112, 0.2)',
                color: '#fff',
                fontSize: 12,
                fontWeight: 700,
                textTransform: 'none',
                '&:hover': { bgcolor: '#00bc80', boxShadow: '0 9px 20px rgba(0, 166, 112, 0.3)' },
              }}
            >
              Попробовать
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
