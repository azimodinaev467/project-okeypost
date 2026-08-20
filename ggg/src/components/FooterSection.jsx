import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const aboutLinks = ['Услуги', 'Цены', 'Отзывы', 'Контакты', 'Вакансии', 'Соглашение о персональных данных', 'Условия использования'];
const helpfulLinks = ['Как работает наш сервис', 'Как покупать с оператором', 'Ответы на частые вопросы', 'Популярные магазины', 'Черный список магазинов', 'Актуальные распродажи'];
const specialLinks = ['50% на первую доставку', 'Скидки для постоянных клиентов', 'Реферальная программа', 'Кэшбек Mr. Rebates и Rakuten', 'Stop Fraud'];

const paragraphSx = {
  color: '#707174',
  fontSize: { xs: 13, sm: 14, md: 14 },
  fontWeight: 400,
  lineHeight: { xs: 1.6, md: 1.8 },
  letterSpacing: '-0.01em',
};

function BrandMark() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.1 }}>
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
        <Box sx={{ position: 'absolute', zIndex: 1, top: 9, left: 10, width: 16, height: 10, bgcolor: '#fff', transform: 'rotate(38deg)' }} />
      </Box>
      <Typography sx={{ color: '#292d30', fontSize: 20, fontWeight: 800, letterSpacing: '-0.04em' }}>OkeyPost</Typography>
    </Box>
  );
}

function SocialLinks() {
  const socialButtonSx = {
    width: 36,
    height: 36,
    border: '1px solid',
    bgcolor: '#fff',
    '& svg': { fontSize: 20 },
  };

  return (
    <Box component="nav" aria-label="Социальные сети" sx={{ display: 'flex', gap: 1, mt: 3 }}>
      <IconButton aria-label="WhatsApp" sx={{ ...socialButtonSx, borderColor: '#25d366', color: '#25d366' }}>
        <WhatsAppIcon />
      </IconButton>
      <IconButton aria-label="Instagram" sx={{ ...socialButtonSx, borderColor: '#7871bc', color: '#7871bc' }}>
        <InstagramIcon />
      </IconButton>
      <IconButton aria-label="Telegram" sx={{ ...socialButtonSx, borderColor: '#43b9eb', color: '#43b9eb' }}>
        <SendRoundedIcon />
      </IconButton>
    </Box>
  );
}

function FooterColumn({ title, links }) {
  return (
    <Box component="nav" aria-label={title}>
      <Typography sx={{ mb: 2, color: '#292d30', fontSize: 16, fontWeight: 800 }}>{title}</Typography>
      <Box component="ul" sx={{ display: 'grid', gap: 1.2, m: 0, p: 0, listStyle: 'none' }}>
        {links.map((link) => (
          <Box component="li" key={link}>
            <Box
              component="a"
              href="#"
              sx={{
                display: 'inline-block',
                color: '#858789',
                fontSize: 13,
                lineHeight: 1.35,
                textDecoration: 'none',
                transition: 'color 160ms ease',
                '&:hover': { color: '#4e5fb0' },
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

export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        fontFamily: 'Inter, Arial, sans-serif',
        color: '#292d30',
        pt: { xs: 6, md: 10 },
      }}
    >
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
              color: '#292d30',
              fontSize: { xs: 26, sm: 30, md: 32 },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Ваш личный адрес в Великобритании для покупок
          </Typography>
          <Box sx={{ maxWidth: '100%' }}>
            <Typography sx={paragraphSx}>
              С нами вы получаете целых два адреса в UK! У нас есть два склада для приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из них, отправка на который обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь, а в Манчестер идут гаджеты и всё остальное. С OkeyPost вы всегда получаете максимальную выгоду!
            </Typography>
            <Typography sx={{ ...paragraphSx, mt: { xs: 2, md: 2 } }}>
              При доставке из UK в Россию все ваши товары обязательно страхуются. Прием посылок на наш склад, их обработка, удаление лишних коробок, хранение сроком до 70 дней – у нас полностью бесплатно. Мы также бесплатно проводим объединение посылок из разных магазинов в одну. Это необходимо для снижения стоимости доставки посылок из UK в Россию.
            </Typography>
            <Typography sx={{ ...paragraphSx, mt: { xs: 2, md: 2 } }}>
              У нас самая выгодная доставка! От $11.99 за посылку! А если у вас есть какие-то особенные требования, вроде проверки техники или дополнительной пленки для самых хрупких товаров, – операторы нашего склада с радостью выполнят их по спецзапросу.
            </Typography>
            <Typography sx={{ ...paragraphSx, mt: { xs: 2, md: 2 } }}>
              Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях вы всегда найдете информацию о лучших скидках магазинов. Не обязательно заходить в Черную пятницу или Prime Day, крутые акции происходят каждый день!
            </Typography>
          </Box>
        </Box>

        <Box
          component="section"
          aria-labelledby="newsletter-title"
          sx={{
            minHeight: { xs: 250, md: 160 },
            display: 'flex',
            alignItems: 'center',
            borderRadius: { xs: 4, md: 4.5 },
            background: 'linear-gradient(111deg, #5b55ad 0%, #516ebd 42%, #39ace0 100%)',
            color: '#fff',
            mb: { xs: 6, md: 10 },
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubscribe}
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.2fr 1.5fr auto' },
              alignItems: 'center',
              gap: { xs: 3, md: 4 },
              px: { xs: 3, sm: 5, md: 8 },
              py: { xs: 4, sm: 5, md: 0 },
            }}
          >
            <Typography
              id="newsletter-title"
              component="h3"
              sx={{
                fontSize: { xs: 20, sm: 22, md: 24 },
                fontWeight: 800,
                lineHeight: 1.3,
              }}
            >
              Подпишитесь и будьте в курсе всех скидок и акций магазинов Великобритании!
            </Typography>
            <TextField
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubscribed(false);
              }}
              placeholder="Введите ваш email"
              required
              fullWidth
              variant="standard"
              aria-label="Ваш email"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon sx={{ color: 'rgba(255,255,255,0.8)', fontSize: 22 }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                '& .MuiInputBase-root': { color: '#fff', fontSize: 16, pb: 1 },
                '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.8)', opacity: 1 },
                '& .MuiInput-underline:before': { borderBottomColor: 'rgba(255,255,255,0.7)' },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#fff' },
                '& .MuiInput-underline:after': { borderBottomColor: '#fff' },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                minHeight: 46,
                px: 5,
                borderRadius: 999,
                bgcolor: '#00d28f',
                color: '#fff',
                boxShadow: 'none',
                fontSize: 14,
                fontWeight: 800,
                textTransform: 'none',
                '&:hover': { bgcolor: '#00bc80', boxShadow: 'none' },
              }}
            >
              Подписаться
            </Button>
            {subscribed && (
              <Typography role="status" sx={{ gridColumn: { xs: '1', md: '2 / -1' }, mt: { xs: -1.5, md: -2 }, color: '#dfffee', fontSize: 13 }}>
                Спасибо! Вы подписались на новости.
              </Typography>
            )}
          </Box>
        </Box>

        <Box
          component="footer"
          sx={{
            pb: { xs: 4, md: 5 },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1.2fr 1fr 1fr 1fr' },
              gap: { xs: 5, sm: 4, md: 4 },
            }}
          >
            <Box>
              <BrandMark />
              <SocialLinks />
            </Box>
            <FooterColumn title="О компании" links={aboutLinks} />
            <FooterColumn title="Полезное" links={helpfulLinks} />
            <FooterColumn title="Спецпроекты" links={specialLinks} />
          </Box>
          <Box sx={{ mt: { xs: 6, md: 8 }, pt: 3, borderTop: '1px solid #eaeaea', textAlign: 'center' }}>
            <Typography sx={{ color: '#a1a3a5', fontSize: 12 }}>© 2021 Okeypost. Все права защищены.</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
