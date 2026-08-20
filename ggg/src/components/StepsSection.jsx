import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Imports for step images
import step1Img from '../assets/Слой 2.png';
import step2Img from '../assets/Слой 2 (1).png';
import step3Img from '../assets/Слой 2 (2).png'; // Note: mapping these blindly, adjust if they look out of order
import step4Img from '../assets/Иллюстрация (2).png';
import bannerImg from '../assets/Иллюстрация (3).png';

const steps = [
  {
    title: 'ВЫ ВЫБИРАЕТЕ ТОВАР',
    desc: 'в английском магазине, оплачиваете и указываете',
    highlight: 'адрес склада',
    img: step1Img,
  },
  {
    title: 'ПОКУПКИ ПРИХОДЯТ НА СКЛАД',
    desc: 'и появляются в вашем личном кабинете на нашем сайте',
    highlight: '',
    img: step2Img,
  },
  {
    title: 'ОТПРАВЛЯЕМ ИХ К ВАМ ДОМОЙ',
    desc: 'в надежной упаковке, по выгодной цене и очень быстро',
    highlight: '',
    img: step3Img,
  },
  {
    title: 'ЗАБИРАЕТЕ СВОЮ ПОСЫЛКУ',
    desc: 'в пункте выдачи, на почте или с курьером',
    highlight: '',
    img: step4Img,
  },
];

export default function StepsSection() {
  return (
    <Box component="section" sx={{ pb: { xs: 6, md: 10 }, bgcolor: '#fff' }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1254,
          px: { xs: 2.5, sm: 4, lg: 0 },
        }}
      >
        {/* Steps Block */}
        <Box sx={{ mb: { xs: 8, md: 12 } }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 28, md: 36 },
              fontWeight: 800,
              color: '#262626',
              lineHeight: 1.2,
              mb: 6,
              maxWidth: 450,
            }}
          >
            4 простых шага для ваших покупок в Великобритании
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
              gap: { xs: 4, md: 3 },
              mb: 6,
            }}
          >
            {steps.map((step) => (
              <Box key={step.title} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box
                  component="img"
                  src={step.img}
                  alt={step.title}
                  sx={{
                    width: '100%',
                    maxWidth: { xs: 240, md: '100%' },
                    height: 'auto',
                    mb: 3,
                    mx: { xs: 'auto', md: 0 },
                    display: 'block',
                  }}
                />
                <Typography sx={{ fontSize: 14, fontWeight: 800, color: '#262626', lineHeight: 1.3, mb: 1.5, textTransform: 'uppercase' }}>
                  {step.title}
                </Typography>
                <Typography sx={{ fontSize: 11, color: '#777', lineHeight: 1.5 }}>
                  {step.desc} {step.highlight && <Box component="span" sx={{ color: '#00c98b' }}>{step.highlight}</Box>} OkeyPost
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ maxWidth: 500 }}>
            <Typography sx={{ fontSize: 12, color: '#777', mb: 3, lineHeight: 1.6 }}>
              Не хотите разбираться самостоятельно, наши мастера шопинга с радостью купят все товары за вас.
            </Typography>
            <Button
              variant="contained"
              sx={{
                minHeight: 44,
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
              Быстрая покупка
            </Button>
          </Box>
        </Box>

        {/* Virtual Tour Banner */}
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
              width: { xs: '100%', md: '45%' },
              maxWidth: 380,
              mt: { xs: 4, md: 0 },
              mr: { md: 6 },
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <Box
              component="step4Img"
              src={bannerImg}
              alt="Виртуальный тур по нашему складу"
              sx={{ width: '100%', height: 'auto', display: 'block', transform: { md: 'scale(1.1) translateY(-10px)' } }}
            />
          </Box>

          {/* Text Content */}
          <Box sx={{ width: { xs: '100%', md: '55%' }, color: '#fff', py: { md: 5 } }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: 22, md: 28 },
                fontWeight: 800,
                lineHeight: 1.3,
                mb: 2,
              }}
            >
              Виртуальный тур по нашему складу в реальном времени
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
              Вы можете всегда посмотреть на нашу слаженную работу на складе
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
