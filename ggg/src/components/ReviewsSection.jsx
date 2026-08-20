import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

// Images
import img1 from '../assets/2a6e9750cb514a7729f67b15c829f243353bb419.png';
import img2 from '../assets/5b8d313688d7fc24fe0c18d930351c131a2452f0.png';
import img3 from '../assets/9bdf3f957843fb3039e9fba2204ad6ca019334c4.png';
import img4 from '../assets/фон.png';

// Icons for advantages
import icon1 from '../assets/Иконка (6).png';
import icon2 from '../assets/Иконка (7).png';
import icon3 from '../assets/Иконка (8).png';

const stats = [
  {
    icon: icon1,
    title: 'Больше не значит дороже',
    desc: 'С ростом веса посылки цена за каждые 0.5 кг уменьшается в прогрессии.',
  },
  {
    icon: icon2,
    title: 'Быстрая обработка посылок',
    desc: 'Посылка обрабатывается не дольше 48 часов после поступления на склад.',
  },
  {
    icon: icon3,
    title: 'SMS-уведомления',
    desc: 'Отслеживайте весь процесс с помощью sms-уведомлений.',
  },
];

const reviews = [
  {
    name: 'NIKOLAY S',
    text: 'Ваша доставка самая быстрая и дешёвая!!!',
    date: '16 Ноября 2021',
    city: 'Санкт-Петербург',
    img: img1,
  },
  {
    name: 'DMITRIY D',
    text: "Пуховик Levi's с eBay. Всё приехало быстро и целым.",
    date: '16 Ноября 2021',
    city: 'Москва',
    img: img2,
  },
  {
    name: 'VLADIMIR E',
    text: 'Огонь, как всегда! Отдельное спасибо за доп.упаковку, часики от Apple пришли в простом бумажном пакете )',
    date: '16 Ноября 2021',
    city: 'Санкт-Петербург',
    img: img3,
  },
  {
    name: 'Оксана',
    text: 'Очень быстро, надёжно! Как всегда большое спасибо за работу!',
    date: '16 Ноября 2021',
    city: 'Odintsovo',
    img: img4,
  },
];

function RatingStars() {
  return (
    <Box sx={{ display: 'flex', gap: 0.2, color: '#fba525', my: 1 }}>
      {[...Array(5)].map((_, i) => (
        <StarRoundedIcon key={i} sx={{ fontSize: 16 }} />
      ))}
    </Box>
  );
}

export default function ReviewsSection() {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#fafafa' }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1254,
          px: { xs: 2.5, sm: 4, lg: 0 },
        }}
      >
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 26, md: 32 },
              fontWeight: 800,
              color: '#262626',
              lineHeight: 1.2,
              mb: 2,
              maxWidth: 550,
            }}
          >
            120 000 довольных клиентов в России уже сделали свой выбор
          </Typography>
          <Typography sx={{ fontSize: 13, color: '#777', maxWidth: 400, lineHeight: 1.6 }}>
            За последний год десятки тысяч наших клиентов заказали товары из Англии и оставили 19 633 отзыва
          </Typography>
        </Box>

        {/* Advantages Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
            mb: { xs: 8, md: 10 },
          }}
        >
          {stats.map((stat) => (
            <Box
              key={stat.title}
              sx={{
                bgcolor: '#fff',
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
              }}
            >
              <Box component="img" src={stat.icon} sx={{ width: 48, height: 48, mb: 2, objectFit: 'contain' }} />
              <Typography sx={{ fontSize: 14, fontWeight: 800, color: '#262626', mb: 1.5 }}>
                {stat.title}
              </Typography>
              <Typography sx={{ fontSize: 12, color: '#777', lineHeight: 1.5 }}>
                {stat.desc}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Reviews Section */}
        <Box>
          <Typography
            component="h3"
            sx={{
              fontSize: { xs: 22, md: 26 },
              fontWeight: 800,
              color: '#262626',
              mb: { xs: 4, md: 5 },
            }}
          >
            Отзывы и цитаты блогеров:
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
              mb: 5,
            }}
          >
            {reviews.map((review, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  bgcolor: '#fff',
                  borderRadius: 4,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    width: { xs: '100%', sm: 200 },
                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={review.img}
                    alt={review.name}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 200 }}
                  />
                </Box>
                <Box sx={{ p: { xs: 3, md: 4 }, display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 800, color: '#262626' }}>
                    {review.name}
                  </Typography>
                  <RatingStars />
                  <Typography sx={{ fontSize: 12, color: '#777', lineHeight: 1.5, mb: 3, flexGrow: 1 }}>
                    {review.text}
                  </Typography>
                  <Box>
                    <Typography sx={{ fontSize: 10, color: '#999', mb: 0.5 }}>
                      <Box component="span" sx={{ color: '#333', fontWeight: 600 }}>Дата:</Box> {review.date}
                    </Typography>
                    <Typography sx={{ fontSize: 10, color: '#999' }}>
                      <Box component="span" sx={{ color: '#333', fontWeight: 600 }}>Город:</Box> {review.city}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              minHeight: 46,
              px: 5,
              borderRadius: 999,
              bgcolor: '#00d28f',
              boxShadow: 'none',
              color: '#fff',
              fontSize: 13,
              fontWeight: 700,
              textTransform: 'none',
              '&:hover': { bgcolor: '#00bc80', boxShadow: 'none' },
            }}
          >
            Все отзывы
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
