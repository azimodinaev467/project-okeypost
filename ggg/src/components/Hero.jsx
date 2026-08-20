import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import heroImg from '../assets/Иллюстрация.png';

export default function Hero() {
  const [addressRequested, setAddressRequested] = useState(false);

  return (
    <>
      <Box
        component="section"
        aria-labelledby="hero-title"
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          minHeight: { xs: 610, sm: 560, md: 370 },
          px: { xs: 3, sm: 5, md: 7 },
          py: { xs: 4, sm: 5, md: 3 },
          borderRadius: { xs: 4, md: 5 },
          overflow: 'hidden',
          background: 'linear-gradient(111deg, #5b55ad 0%, #516ebd 42%, #39ace0 100%)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: { xs: 240, md: 390 },
            height: { xs: 240, md: 390 },
            right: { xs: -105, md: -95 },
            top: { xs: -118, md: -205 },
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.045)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: { xs: 300, md: 470 },
            height: { xs: 300, md: 470 },
            left: { xs: -200, md: -320 },
            bottom: { xs: -225, md: -350 },
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            width: { xs: '100%', md: '53%' },
            maxWidth: 540,
            mt: { xs: 0, md: -1 },
          }}
        >
          <Typography
            id="hero-title"
            component="h1"
            sx={{
              maxWidth: 510,
              color: '#fff',
              fontSize: { xs: 34, sm: 42, md: 40 },
              lineHeight: { xs: 1.1, md: 1.08 },
              letterSpacing: '-0.035em',
              fontWeight: 800,
            }}
          >
            Доставка товаров
            <br />
            из Великобритании
            <br />
            в Россию
          </Typography>
          <Typography
            sx={{
              maxWidth: 420,
              mt: { xs: 2.2, md: 1.5 },
              color: 'rgba(255,255,255,0.72)',
              fontSize: { xs: 13, md: 11 },
              lineHeight: 2.1,
              fontWeight: 400,
            }}
          >
            Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost,
            чтобы покупать со скидками на одежду, обувь, гаджеты известных
            брендов и безопасно отправлять вещи в Россию.
          </Typography>
          <Button
            onClick={() => setAddressRequested(true)}
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: '16px !important' }} />}
            sx={{
              mt: { xs: 3, md: 2.2 },
              minHeight: 43,
              px: 2.8,
              borderRadius: 999,
              bgcolor: '#00d28f',
              boxShadow: '0 9px 20px rgba(0, 166, 112, 0.2)',
              color: '#fff',
              fontSize: 10,
              fontWeight: 700,
              textTransform: 'none',
              '&:hover': { bgcolor: '#00bc80', boxShadow: '0 9px 20px rgba(0, 166, 112, 0.3)' },
            }}
          >
            Получить адрес в UK
          </Button>
          {addressRequested && (
            <Typography
              role="status"
              sx={{ mt: 1.2, color: 'rgba(255,255,255,0.9)', fontSize: 11, fontWeight: 600 }}
            >
              Отлично! Форма регистрации уже готовится.
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            width: { xs: '116%', sm: '96%', md: '52%' },
            maxWidth: 500,
            right: { xs: '-8%', sm: '2%', md: '-1%' },
            bottom: { xs: 0, sm: 0, md: -11 },
            ml: { md: -2 },
            pointerEvents: 'none',
          }}
        >
          <Box
            component="img"
            src={heroImg}
            alt="Курьер OkeyPost с посылкой и самолётом"
            sx={{
              display: 'block',
              width: '100%',
              maxWidth: 500,
              height: 'auto',
            }}
          />
        </Box>
      </Box>

    </>
  );
}
