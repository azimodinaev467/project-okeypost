import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import step1Img from '../assets/Слой 2.png';
import step2Img from '../assets/Слой 2 (1).png';
import step3Img from '../assets/Слой 2 (2).png';
import step4Img from '../assets/Иллюстрация (2).png';
import step5Img from '../assets/Слой 2 (3).png';

const steps = [
  {
    num: '01',
    title: 'Получаем адрес для покупок\nв магазинах Великобритании',
    desc: 'OkeyPost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.',
    img: step1Img,
  },
  {
    num: '02',
    title: 'Идём за покупками в\nонлайн-магазины',
    desc: 'Выбираем нужные товары в магазинах Англии. Расплачиваемся, как обычно, в качестве адреса доставки указываем координаты одного из складов OkeyPost. Оформить покупки можно самостоятельно или с нашей помощью. Вот список того, что покупать нельзя.',
    img: step2Img,
  },
  {
    num: '03',
    title: 'Следим за перемещением\nпосылки до склада',
    desc: 'После оформления заказа магазин пришлет трек-номер посылки на ваш e-mail и отправит вещи на наш склад. Через 5-7 дней покупки придут к нам, мы поместим их в специальное хранилище, закрепленное за вашим аккаунтом.',
    img: step3Img,
  },
  {
    num: '04',
    title: 'Оплачиваем доставку и покупки\nотправляются домой',
    desc: 'Мы сообщим, когда ваши покупки поступят на склад. Вы сможете заказать что-то еще в других магазинах и отправить всё одной посылкой (так выгоднее!). До 30 дней покупки будут храниться бесплатно.\n\nКогда все товары поступили на склад, выбирайте способ доставки, мы надежно всё упакуем и отправим вам, сообщив трек-номер.',
    img: step4Img,
  },
  {
    num: '05',
    title: 'Получаем посылку и спешим\nсделать новый заказ',
    desc: 'Примерно через 2 недели посылка приедет к вам домой, в пункт выдачи заказов или на почту.\nПолучаем покупки и радуемся :)',
    img: step5Img,
  },
];

export default function HowToBuySteps() {
  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 12 }, bgcolor: '#fff' }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1035, // slightly narrower for this specific text-heavy layout
          px: { xs: 2.5, sm: 4, lg: 0 },
          mx: 'auto',
        }}
      >
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 28, md: 36 },
              fontWeight: 800,
              color: '#262626',
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Покупать в Великобритании очень просто
          </Typography>
          <Typography sx={{ fontSize: 13, color: '#777', lineHeight: 1.6, maxWidth: 650 }}>
            Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем и отправим их к вам домой.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 6, md: 8 } }}>
          {steps.map((step) => (
            <Box
              key={step.num}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'center', md: 'flex-start' },
                gap: { xs: 4, md: 8 },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  width: { xs: '100%', md: 240 },
                  flexShrink: 0,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src={step.img}
                  alt={step.title}
                  sx={{ width: '100%', maxWidth: 240, height: 'auto', objectFit: 'contain' }}
                />
              </Box>

              {/* Text Content */}
              <Box sx={{ flexGrow: 1, pt: { md: 2 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 40, md: 48 },
                      fontWeight: 800,
                      color: '#00c98b',
                      lineHeight: 1,
                      mr: 2,
                    }}
                  >
                    {step.num}
                  </Typography>
                  <Box
                    sx={{
                      width: 2,
                      height: 40,
                      bgcolor: '#eaeaea',
                      mr: 2,
                    }}
                  />
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: { xs: 16, md: 18 },
                      fontWeight: 800,
                      color: '#262626',
                      lineHeight: 1.3,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {step.title}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 13,
                    color: '#777',
                    lineHeight: 1.7,
                    whiteSpace: 'pre-line',
                    '& span': { color: '#00c98b', cursor: 'pointer', textDecoration: 'underline' } // For "что покупать нельзя"
                  }}
                  dangerouslySetInnerHTML={{ __html: step.desc.replace('что покупать нельзя', '<span>что покупать нельзя</span>') }}
                />
              </Box>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: { xs: 6, md: 8 }, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <Button
            variant="contained"
            sx={{
              minHeight: 46,
              px: 5,
              borderRadius: 999,
              bgcolor: '#00d28f',
              boxShadow: '0 9px 20px rgba(0, 166, 112, 0.2)',
              color: '#fff',
              fontSize: 14,
              fontWeight: 700,
              textTransform: 'none',
              '&:hover': { bgcolor: '#00bc80', boxShadow: '0 9px 20px rgba(0, 166, 112, 0.3)' },
            }}
          >
            Получить адрес в UK
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
