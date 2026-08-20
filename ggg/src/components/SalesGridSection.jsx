import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

import img1 from '../assets/фон (1).png';
import img2 from '../assets/фон (2).png';
import img3 from '../assets/фон (3).png';
import img4 from '../assets/фон (4).png';
import img5 from '../assets/фон (5).png';
import img6 from '../assets/фон (6).png';
import img7 from '../assets/фон (7).png';
import img8 from '../assets/фон (8).png';
import img9 from '../assets/фон (9).png';
import img10 from '../assets/фон (10).png';

const stores = [
  {
    name: 'Abercrombie & Fitch',
    details: [
      { text: 'цены от ', bold: '£7.99 (3365₽)', suffix: ' разделе:' },
      { text: 'мужские вещи: ', highlight: 'CLEARANCE' },
      { text: 'женские вещи: ', highlight: 'CLEARANCE' },
      { text: '\nкачественные детские вещи\nна ', highlight: 'Abercrombie kids' },
    ],
    linkText: 'Только выкуп с оператором',
    img: img1,
  },
  {
    name: 'Timberland',
    details: [
      { text: 'NEW!\nКоллаб ', highlight: 'Tommy Hilfiger x\nTimberland!' },
      { text: '\nБотинки от ', bold: '£7.99 (3365₽)' },
      { text: 'Зимние шапки за ', bold: '£7.99 (3365₽)' },
    ],
    linkText: 'Только выкуп с оператором',
    img: img2,
  },
  {
    name: 'Polo Ralph Lauren',
    details: [
      { highlight: 'Рубашка', text: ' за ', bold: '£7.99 (3365₽)' },
      { highlight: 'Худи', text: ' за ', bold: '£7.99 (3365₽)' },
      { highlight: 'Свитшот с лого', text: ' за ', bold: '£7.99 (3365₽)' },
      { text: '\nДо ', bold: '-60%', suffix: ' в разделе SALE' },
    ],
    linkText: 'Только выкуп с оператором',
    img: img3,
  },
  {
    name: 'Hollister Co.',
    details: [
      { text: 'цены от ', bold: '£7.99 (3365₽)', suffix: ' разделе:' },
      { text: 'мужские вещи: ', highlight: 'CLEARANCE' },
      { text: 'женские вещи: ', highlight: 'CLEARANCE' },
    ],
    linkText: 'Только выкуп с оператором',
    img: img4,
  },
  {
    name: 'Michael Kors',
    details: [
      { bold: 'Новая коллекция!' },
      { bold: 'Michael Kors x 007 (James Bond)' },
      { text: '\n' },
      { bold: 'HOLIDAY HEAD START' },
      { bold: '- 60%', text: ' на сумки, обувь и одежду' },
    ],
    linkText: 'В магазин',
    img: img5,
  },
  {
    name: 'Аутлет Saks OFF 5TH',
    details: [
      { bold: 'Black Friday Early Access' },
      { text: 'Брендовые шапки, шарфы и\nперчатки - ', bold: '60% OFF' },
      { text: '\nShop Pajar, Sorel, UGG, Calvin Klein\nJeans, Tommy Hilfiger' },
    ],
    linkText: 'Только выкуп с оператором',
    img: img6,
  },
  {
    name: "Victoria's Secret",
    details: [
      { text: 'Лосьоны и мисты за ', bold: '£7.99 (3365₽)' },
      { text: '7 трусиков за ', bold: '£7.99 (3365₽)' },
      { text: 'Халаты за ', bold: '£7.99 (3365₽)' },
      { text: '\nПотрать ', bold: '£7.99 (3365₽)', suffix: ' - получи\nкупон на ' },
      { bold: '$25', text: ' на следующий заказ' },
    ],
    linkText: 'В магазин',
    img: img7,
  },
  {
    name: 'levi.com',
    details: [
      { highlight: 'Джинсы', text: ' от ', bold: '£7.99 (3365₽)' },
      { text: '\n\nСкидка 30% на заказы от $100 с\nкодом TREAT30' },
    ],
    linkText: 'В магазин',
    img: img8,
  },
  {
    name: 'UGG® - вход с VPN',
    details: [
      { text: 'Угги за ', bold: '£7.99 (3365₽)' },
      { text: 'Ботинки UGG от ', bold: '£7.99 (3365₽)' },
      { text: 'в разделе ', highlight: 'SALE' },
      { text: '\n' },
      { highlight: 'Мужские угги', text: ' за ', bold: '£7.99 (3365₽)' },
      { highlight: 'Слипперы', text: ' за ', bold: '£7.99 (3365₽)' },
    ],
    linkText: 'Только выкуп с оператором',
    img: img9,
  },
  {
    name: 'New Balance',
    details: [
      { bold: 'Вход с VPN' },
      { bold: '- 30%', text: ' на некоторые модели' },
      { bold: 'Бесплатная', text: ' доставка ', bold2: '$50+' },
    ],
    linkText: 'Только выкуп с оператором',
    img: img10,
  },
];

export default function SalesGridSection() {
  return (
    <Box component="section" sx={{ pb: { xs: 8, md: 12 }, bgcolor: '#fff' }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1254,
          px: { xs: 2.5, sm: 4, lg: 0 },
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: 24, md: 36 },
            fontWeight: 800,
            color: '#262626',
            lineHeight: 1.2,
            mb: { xs: 4, md: 6 },
            maxWidth: 600,
          }}
        >
          Black Friday Early Access
          ранний доступ к распродажам
          в магазинах Великобритании!
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 3 },
            mb: 8,
          }}
        >
          {stores.map((store, idx) => (
            <Box
              key={idx}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 3,
                alignItems: 'flex-start',
              }}
            >
              {/* Left Image */}
              <Box
                sx={{
                  width: { xs: 120, sm: 160, md: 180 },
                  height: { xs: 120, sm: 160, md: 180 },
                  flexShrink: 0,
                  borderRadius: 4,
                  overflow: 'hidden',
                  bgcolor: '#f5f5f5',
                }}
              >
                <Box
                  component="img"
                  src={store.img}
                  alt={store.name}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              {/* Right Content */}
              <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Typography sx={{ fontSize: { xs: 15, md: 16 }, fontWeight: 800, color: '#262626', mb: 1.5 }}>
                  {store.name}
                </Typography>
                
                <Box sx={{ flexGrow: 1 }}>
                  {store.details.map((detail, dIdx) => (
                    <Typography key={dIdx} sx={{ fontSize: 11, color: '#777', mb: 0.5, whiteSpace: 'pre-line', lineHeight: 1.5 }}>
                      {detail.text && <span>{detail.text}</span>}
                      {detail.bold && <Box component="span" sx={{ color: '#262626', fontWeight: 800 }}>{detail.bold}</Box>}
                      {detail.highlight && <Box component="span" sx={{ color: '#00c98b', fontWeight: 800 }}>{detail.highlight}</Box>}
                      {detail.suffix && <span>{detail.suffix}</span>}
                      {detail.bold2 && <Box component="span" sx={{ color: '#262626', fontWeight: 800 }}>{detail.bold2}</Box>}
                    </Typography>
                  ))}
                </Box>

                <Box
                  component="a"
                  href="#"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: '#00c98b',
                    fontSize: 11,
                    fontWeight: 800,
                    textDecoration: 'none',
                    mt: 2,
                    '&:hover': { color: '#00b37c' },
                  }}
                >
                  {store.linkText} <ArrowForwardRoundedIcon sx={{ fontSize: 14 }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={9}
            defaultPage={1}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  color: '#999',
                  border: '1px solid #eee',
                  bgcolor: 'transparent',
                  margin: '0 4px',
                  '&.Mui-selected': {
                    color: '#00c98b',
                    borderColor: '#00c98b',
                    bgcolor: 'transparent',
                    fontWeight: 800,
                  },
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                  }
                }}
              />
            )}
          />
        </Box>
      </Container>
    </Box>
  );
}
