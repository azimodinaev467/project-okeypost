import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const companyLinks = [
  'Услуги',
  'Цены',
  'Отзывы',
  'Контакты',
  'Вакансии',
  'Соглашение о персональных данных',
  'Условия использования',
];

const usefulLinks = [
  'Как работает наш сервис',
  'Как покупать с его помощью',
  'Ответы на частые вопросы',
  'Популярные магазины',
  'Черный список магазинов',
  'Актуальные распродажи',
];

const specialProjectLinks = [
  '50% на первую доставку',
  'Скидки для постоянных клиентов',
  'Реферальная программа',
  'Кэшбэк Mr Rebates и Rakuten',
  'Stop Fraud',
];

function BrandMark() {
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.05 }}>
      <Box
        aria-hidden="true"
        sx={{
          position: 'relative',
          width: 32,
          height: 32,
          flexShrink: 0,
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: 28,
            height: 28,
            borderRadius: '50%',
          },
          '&::before': {
            top: 0,
            left: 0,
            border: '6px solid #5b55ad',
            borderRightColor: 'transparent',
            transform: 'rotate(-38deg)',
          },
          '&::after': {
            right: 0,
            bottom: 0,
            border: '6px solid #00c98b',
            borderLeftColor: 'transparent',
            transform: 'rotate(-38deg)',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: 9,
            left: 10,
            width: 16,
            height: 10,
            bgcolor: '#fff',
            transform: 'rotate(38deg)',
          }}
        />
      </Box>
      <Typography
        component="span"
        sx={{
          color: '#292d30',
          fontSize: { xs: 20, md: 20 },
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}
      >
        OkeyPost
      </Typography>
    </Box>
  );
}

function SocialLinks({ inverted = false }) {
  const buttonSx = {
    width: { xs: 40, md: 36 },
    height: { xs: 40, md: 36 },
    border: '1px solid',
    borderColor: inverted ? 'rgba(255,255,255,0.72)' : '#d7e1e5',
    color: inverted ? '#fff' : '#5969b7',
    bgcolor: inverted ? 'transparent' : '#fff',
    '& svg': { fontSize: { xs: 20, md: 18 } },
    '&:hover': {
      bgcolor: inverted ? 'rgba(255,255,255,0.14)' : '#f1f6f8',
      borderColor: inverted ? '#fff' : '#5969b7',
    },
  };

  return (
    <Box component="nav" aria-label="Социальные сети" sx={{ display: 'flex', gap: { xs: 1, md: 1 } }}>
      <IconButton component="a" href="#" aria-label="WhatsApp" sx={{ ...buttonSx, color: inverted ? '#fff' : '#25d366' }}>
        <WhatsAppIcon />
      </IconButton>
      <IconButton component="a" href="#" aria-label="Instagram" sx={{ ...buttonSx, color: inverted ? '#fff' : '#7871bc' }}>
        <InstagramIcon />
      </IconButton>
      <IconButton component="a" href="#" aria-label="Telegram" sx={{ ...buttonSx, color: inverted ? '#fff' : '#43b9eb' }}>
        <TelegramIcon />
      </IconButton>
    </Box>
  );
}

function FooterColumn({ title, links }) {
  return (
    <Box component="nav" aria-label={title}>
      <Typography
        component="h2"
        sx={{
          mb: { xs: 1.5, md: 2 },
          color: '#292d30',
          fontSize: { xs: 14, md: 16 },
          fontWeight: 800,
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>
      <Box component="ul" sx={{ display: 'grid', gap: { xs: 1, md: 1.2 }, m: 0, p: 0, listStyle: 'none' }}>
        {links.map((link) => (
          <Box component="li" key={link}>
            <Box
              component="a"
              href="#"
              sx={{
                display: 'inline-block',
                maxWidth: '100%',
                color: '#858789',
                fontSize: { xs: 13, md: 13 },
                lineHeight: 1.35,
                overflowWrap: 'anywhere',
                textDecoration: 'none',
                transition: 'color 160ms ease',
                '&:hover': { color: '#5264b3' },
              }}
            >
              {link}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function HowToBuyFooter() {
  return (
    <Box
      sx={{
        bgcolor: '#fff',
        fontFamily: 'Inter, Arial, sans-serif',
        color: '#292d30',
        px: { xs: 2.5, sm: 4, lg: 0 },
        maxWidth: 1254,
        mx: 'auto',
      }}
    >
      <Box
        component="section"
        aria-labelledby="questions-title"
        sx={{
          minHeight: { xs: 205, md: 160 },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: { xs: 'center', sm: 'space-between' },
          gap: { xs: 3, md: 5 },
          px: { xs: 3, sm: 5, md: 8 },
          py: { xs: 4, sm: 4, md: 0 },
          borderRadius: { xs: 3.5, md: 4.5 },
          background: 'linear-gradient(111deg, #5b55ad 0%, #516ebd 42%, #39ace0 100%)',
          color: '#fff',
        }}
      >
        <Typography
          id="questions-title"
          component="h2"
          sx={{
            color: 'inherit',
            fontSize: { xs: 22, sm: 26, md: 32 },
            fontWeight: 800,
            lineHeight: 1.25,
            letterSpacing: '-0.025em',
          }}
        >
          Остались вопросы? Спросите нас в соцсетях!
        </Typography>
        <SocialLinks inverted />
      </Box>

      <Box
        component="footer"
        sx={{
          mt: { xs: 6, sm: 8, md: 10 },
          pb: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              sm: '1fr 1fr 1fr',
              md: '1.2fr 1fr 1fr 1fr',
            },
            columnGap: { xs: 3, sm: 4, md: 4 },
            rowGap: { xs: 5, sm: 5 },
          }}
        >
          <Box sx={{ gridColumn: { xs: '1 / -1', sm: 'auto' } }}>
            <BrandMark />
            <Box sx={{ mt: { xs: 2, md: 3 } }}>
              <SocialLinks />
            </Box>
          </Box>
          <FooterColumn title="О компании" links={companyLinks} />
          <FooterColumn title="Полезное" links={usefulLinks} />
          <FooterColumn title="Спецпроекты" links={specialProjectLinks} />
        </Box>

        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            pt: { xs: 3, md: 3 },
            borderTop: '1px solid #eaeaea',
            textAlign: 'center',
          }}
        >
          <Typography sx={{ color: '#a1a3a5', fontSize: { xs: 11, md: 12 }, lineHeight: 1.3 }}>
            © 2021 OkeyPost. Все права защищены.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
