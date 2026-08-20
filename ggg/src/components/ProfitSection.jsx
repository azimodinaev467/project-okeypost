import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import jacketImg from '../assets/Layer 1 1.png';
import tshirtImg from '../assets/Футболка.png';
import jeansImg from '../assets/Джинсы.png';

import cat1 from '../assets/Иконка.png';
import cat2 from '../assets/Иконка (1).png';
import cat3 from '../assets/Иконка (2).png';
import cat4 from '../assets/Иконка (3).png';
import cat5 from '../assets/Иконка (4).png';
import cat6 from '../assets/Иконка (5).png';

import adv1 from '../assets/Иконка (6).png';
import adv2 from '../assets/Иконка (7).png';
import adv3 from '../assets/Иконка (8).png';
import adv4 from '../assets/Group 3.png'; 

const categories = [
  { label: 'Одежда', icon: cat1 },
  { label: 'Электроника', icon: cat2 },
  { label: 'Аксессуары', icon: cat3 },
  { label: 'Для детей', icon: cat4 },
  { label: 'Для спорта', icon: cat5 },
  { label: 'Косметика', icon: cat6 },
];

const advantages = [
  { title: 'Экономия до 70%', icon: adv1 },
  { title: 'Только подлинная продукция', icon: adv2 },
  { title: 'Оперативная доставка', icon: adv3 },
  { title: 'Огромный выбор товаров', icon: adv4 },
];

export default function ProfitSection() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#fafafa' }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1254,
          px: { xs: 2.5, sm: 4, lg: 0 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 28, md: 36 },
            fontWeight: 800,
            color: '#262626',
            lineHeight: 1.2,
            mb: 4,
            maxWidth: 400,
          }}
        >
          Насколько выгодно покупать?
        </Typography>

        {/* Categories Bar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#fff',
            borderRadius: 3,
            p: 1,
            mb: 8,
            overflowX: 'auto',
            gap: 2,
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          <Box sx={{ color: '#00c98b', px: 2, cursor: 'pointer' }}>←</Box>
          {categories.map((cat, idx) => (
            <Stack
              key={cat.label}
              direction="row"
              alignItems="center"
              gap={1.5}
              sx={{
                px: 2,
                py: 1.5,
                borderRadius: 2,
                cursor: 'pointer',
                flexShrink: 0,
                bgcolor: idx === 0 ? '#f0f5ff' : 'transparent',
                transition: 'background-color 0.2s',
                '&:hover': { bgcolor: '#f0f5ff' },
              }}
            >
              <Box component="img" src={cat.icon} alt="" sx={{ height: 32, objectFit: 'contain' }} />
              <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#333' }}>
                {cat.label}
              </Typography>
            </Stack>
          ))}
          <Box sx={{ color: '#00c98b', px: 2, cursor: 'pointer', ml: 'auto' }}>→</Box>
        </Box>

        {/* Product Display Area */}
        <Box sx={{ position: 'relative', minHeight: 400, mb: 10, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Main Circle Background */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: 280, md: 380 },
              height: { xs: 280, md: 380 },
              bgcolor: '#f5f7fc',
              borderRadius: '50%',
              zIndex: 0,
            }}
          />

          {/* Left Block: Russia Price */}
          <Box sx={{ zIndex: 1, position: { md: 'absolute' }, left: 0, top: '20%', mb: { xs: 4, md: 0 }, width: '100%', maxWidth: 300 }}>
            <Typography sx={{ fontSize: 16, fontWeight: 700, color: '#262626', mb: 2, lineHeight: 1.3 }}>
              Columbia Barlow Pass 550 Turbodown Jacket
            </Typography>
            <Box sx={{ bgcolor: '#f4f6fa', borderRadius: 2, p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 32, height: 24, bgcolor: '#fff', borderRadius: '4px', overflow: 'hidden', border: '1px solid #eee' }}>
                <Box sx={{ width: '100%', height: '33.3%', bgcolor: '#fff' }} />
                <Box sx={{ width: '100%', height: '33.3%', bgcolor: '#0033a0' }} />
                <Box sx={{ width: '100%', height: '33.3%', bgcolor: '#da291c' }} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 11, color: '#777', mb: 0.5 }}>Цена в России</Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 800, color: '#262626' }}>7891,46₽</Typography>
              </Box>
            </Box>
          </Box>

          {/* Center Product Image & Savings Text */}
          <Box sx={{ zIndex: 2, textAlign: 'center', position: 'relative' }}>
            <Box component="img" src={jacketImg} alt="Jacket" sx={{ width: '100%', maxWidth: 320, height: 'auto', display: 'block', margin: '0 auto', filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.15))' }} />
            
            <Box sx={{ mt: 3 }}>
              <Typography sx={{ fontSize: 11, color: '#777', mb: 0.5 }}>
                Срок доставки примерно 10 дней
              </Typography>
              <Typography sx={{ fontSize: 18, fontWeight: 800, color: '#262626' }}>
                Вы экономите до <Box component="span" sx={{ color: '#00c98b' }}>$119.56</Box>
              </Typography>
            </Box>
          </Box>

          {/* Right Block: UK Price */}
          <Box sx={{ zIndex: 1, position: { md: 'absolute' }, right: 0, top: '20%', mt: { xs: 4, md: 0 }, width: '100%', maxWidth: 300 }}>
             <Typography sx={{ fontSize: 16, fontWeight: 700, color: '#262626', mb: 2, lineHeight: 1.3 }}>
              Доставка одежды из Великобритании от <Box component="span" sx={{ color: '#00c98b' }}>£7.79</Box>
            </Typography>
            <Box sx={{ bgcolor: '#f4f6fa', borderRadius: 2, p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ width: 32, height: 24, bgcolor: '#00247d', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                 {/* Simplified UK flag with CSS for quick styling */}
                <Box sx={{ position: 'absolute', width: '100%', height: '20%', bgcolor: '#fff', top: '40%' }} />
                <Box sx={{ position: 'absolute', height: '100%', width: '15%', bgcolor: '#fff', left: '42.5%' }} />
                <Box sx={{ position: 'absolute', width: '100%', height: '10%', bgcolor: '#cf142b', top: '45%' }} />
                <Box sx={{ position: 'absolute', height: '100%', width: '8%', bgcolor: '#cf142b', left: '46%' }} />
              </Box>
              <Box>
                <Typography sx={{ fontSize: 11, color: '#777', mb: 0.5 }}>Цена в UK</Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 800, color: '#00c98b' }}>£80.62</Typography>
              </Box>
            </Box>
          </Box>

          {/* Side Items (T-shirt & Jeans) */}
          <Box sx={{ position: 'absolute', left: { xs: 10, md: 50 }, bottom: { xs: 20, md: 50 }, display: 'flex', alignItems: 'center', gap: 2, zIndex: 2 }}>
             <Box sx={{ width: { xs: 60, md: 80 }, height: { xs: 60, md: 80 }, bgcolor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}>
                <Box component="img" src={tshirtImg} sx={{ width: '70%' }} />
             </Box>
             <Box sx={{ color: '#00c98b', display: { xs: 'none', md: 'block' } }}>←</Box>
          </Box>

          <Box sx={{ position: 'absolute', right: { xs: 10, md: 50 }, bottom: { xs: 20, md: 50 }, display: 'flex', alignItems: 'center', gap: 2, zIndex: 2 }}>
             <Box sx={{ color: '#00c98b', display: { xs: 'none', md: 'block' } }}>→</Box>
             <Box sx={{ width: { xs: 60, md: 80 }, height: { xs: 60, md: 80 }, bgcolor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}>
                <Box component="img" src={jeansImg} sx={{ width: '70%' }} />
             </Box>
          </Box>
        </Box>

        {/* Advantages Bar */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            bgcolor: '#fff',
            borderRadius: 4,
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
            overflow: 'hidden',
          }}
        >
          {advantages.map((adv, idx) => (
            <Box
              key={adv.title}
              sx={{
                p: { xs: 3, md: 4 },
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                borderRight: { md: idx < 3 ? '1px solid #f0f0f0' : 'none' },
                borderBottom: { xs: idx < 3 ? '1px solid #f0f0f0' : 'none', md: 'none' },
              }}
            >
              <Box component="img" src={adv.icon} alt="" sx={{ width: 40, height: 40, objectFit: 'contain' }} />
              <Typography sx={{ fontSize: 13, fontWeight: 700, color: '#333', lineHeight: 1.2 }}>
                {adv.title.split(' ').map((word, i) => (
                  <span key={i}>{word} {i === 0 && <br />}</span>
                ))}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
