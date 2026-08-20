import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

// We'll use the downloaded icons from assets for the delivery options.
import iconRussianPost from '../assets/Иконка.png';
import iconEms from '../assets/Иконка (1).png';
import iconSmallParcels from '../assets/Иконка (2).png';

const deliveryOptions = [
  {
    id: 'russian-post',
    name: 'ПОЧТА РОССИИ',
    iconImg: iconRussianPost,
    iconColor: '#40b9d2',
    timing: '10–14 дней',
    deliveryPrice: 'от £27.00',
    total: '£41.99',
  },
  {
    id: 'ems',
    name: 'EMS ПОЧТА РОССИЯ',
    iconImg: iconEms,
    iconColor: '#36b9d7',
    timing: '9–12 дней',
    deliveryPrice: 'от £40.00',
    total: '£54.55',
  },
  {
    id: 'small-parcels',
    name: 'ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ',
    iconImg: iconSmallParcels,
    iconColor: '#4cbfda',
    timing: '10–14 дней',
    deliveryPrice: 'от £13.00',
    total: '£90.50',
  },
];

function FieldShell({ label, icon, children }) {
  return (
    <Box component="label" sx={{ display: 'block', minWidth: 0, cursor: 'pointer' }}>
      <Typography
        component="span"
        sx={{ display: 'block', mb: 0.55, color: '#25282b', fontSize: 11, fontWeight: 700, lineHeight: 1.2 }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          position: 'relative',
          minHeight: 38,
          display: 'flex',
          alignItems: 'center',
          borderBottom: '2px solid #c9cacc',
          transition: 'border-color 160ms ease',
          '&:focus-within': { borderColor: '#00c98b' },
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            left: 0,
            top: '50%',
            display: 'flex',
            color: '#51565a',
            transform: 'translateY(-50%)',
            '& svg': { fontSize: 18 },
          }}
        >
          {icon}
        </Box>
        {children}
      </Box>
    </Box>
  );
}

function SelectField({ label, icon, value, name, onChange, children }) {
  return (
    <FieldShell label={label} icon={icon}>
      <Box
        component="select"
        name={name}
        aria-label={label}
        value={value}
        onChange={onChange}
        sx={{
          width: '100%',
          minWidth: 0,
          height: 38,
          appearance: 'none',
          border: 0,
          outline: 0,
          bgcolor: 'transparent',
          color: value ? '#25282b' : '#9b9da0',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 13,
          pl: 3.5,
          pr: 2.5,
          '& option': { color: '#25282b' },
        }}
      >
        {children}
      </Box>
      <KeyboardArrowDownRoundedIcon
        aria-hidden="true"
        sx={{ position: 'absolute', right: 0, color: '#45494c', fontSize: 18, pointerEvents: 'none' }}
      />
    </FieldShell>
  );
}

function InputField({ label, icon, value, name, placeholder, type = 'text', onChange }) {
  return (
    <FieldShell label={label} icon={icon}>
      <Box
        component="input"
        name={name}
        aria-label={label}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        sx={{
          width: '100%',
          minWidth: 0,
          height: 38,
          border: 0,
          outline: 0,
          bgcolor: 'transparent',
          color: '#25282b',
          fontFamily: 'inherit',
          fontSize: 13,
          pl: 3.5,
          pr: 0,
          '&::placeholder': { color: '#9b9da0', opacity: 1 },
        }}
      />
    </FieldShell>
  );
}

function ServiceMark({ img, color }) {
  return (
    <Box
      aria-hidden="true"
      sx={{
        width: 45,
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        borderRadius: 2,
        bgcolor: '#fff',
      }}
    >
      <Box component="img" src={img} alt="" sx={{ width: 32, height: 32, objectFit: 'contain' }} />
    </Box>
  );
}

function DeliveryOption({ option }) {
  return (
    <Box
      component="article"
      sx={{
        minHeight: { xs: 'auto', md: 65 },
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'minmax(270px, 1fr) 114px 124px 100px 28px' },
        alignItems: 'center',
        borderRadius: 3,
        bgcolor: '#fff',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
        border: '1px solid #f0f0f0',
        overflow: 'hidden',
        mb: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: { xs: 2.5, md: 3 }, py: { xs: 2, md: 0 } }}>
        <ServiceMark img={option.iconImg} color={option.iconColor} />
        <Typography sx={{ color: '#272a2d', fontSize: { xs: 12, md: 13 }, fontWeight: 800, lineHeight: 1.35 }}>
          {option.name}
        </Typography>
      </Box>

      <Box
        sx={{
          display: { xs: 'grid', md: 'contents' },
          gridColumn: { xs: '1 / -1', md: 'auto' },
          gridTemplateColumns: { xs: 'repeat(3, minmax(0, 1fr))', sm: 'repeat(3, minmax(0, 1fr))' },
          borderTop: { xs: '1px solid #f0f0f0', md: 'none' },
        }}
      >
        <DeliveryDetail label="Сроки:" value={option.timing} />
        <DeliveryDetail label="Стоимость доставки:" value={option.deliveryPrice} showInfo />
        <DeliveryDetail label="Итого:" value={option.total} />
      </Box>
      <Box
        sx={{
          height: { xs: 40, md: '100%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00c98b',
          borderLeft: { xs: 0, md: '1px solid #f0f0f0' },
          borderTop: { xs: '1px solid #f0f0f0', md: 'none' },
          cursor: 'pointer',
          '&:hover': { bgcolor: '#f0fbf8' },
        }}
      >
        <KeyboardArrowDownRoundedIcon sx={{ fontSize: 22 }} />
      </Box>
    </Box>
  );
}

function DeliveryDetail({ label, value, showInfo = false }) {
  return (
    <Box
      sx={{
        minWidth: 0,
        height: { xs: 60, md: '100%' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        px: { xs: 2, md: 2 },
        borderLeft: { xs: '1px solid #f0f0f0', md: '1px solid #f0f0f0' },
        '&:first-of-type': { borderLeft: { xs: 'none', md: '1px solid #f0f0f0' } },
      }}
    >
      <Typography sx={{ color: '#73777a', fontSize: 10, mb: 0.5, lineHeight: 1.2, whiteSpace: 'nowrap' }}>{label}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <Typography sx={{ color: '#25282b', fontSize: 14, fontWeight: 800, lineHeight: 1.2, whiteSpace: 'nowrap' }}>{value}</Typography>
        {showInfo && <InfoOutlinedIcon sx={{ color: '#b5c2c7', fontSize: 14 }} />}
      </Box>
    </Box>
  );
}

export default function CalculatorSection() {
  const [country, setCountry] = useState('russia');
  const [city, setCity] = useState('moscow');
  const [postalCode, setPostalCode] = useState('');
  const [weight, setWeight] = useState('0,5');
  const [service, setService] = useState('');
  const [calculated, setCalculated] = useState(false);

  const handleCalculate = () => {
    setCalculated(true);
  };

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#fff' }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1254,
          px: { xs: 2.5, sm: 4, lg: 0 },
        }}
      >
        <Box sx={{ maxWidth: 600, mb: { xs: 4, md: 5 } }}>
          <Typography
            component="h2"
            sx={{
              color: '#292d30',
              fontSize: { xs: 28, sm: 32, md: 36 },
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              mb: 2,
            }}
          >
            OkeyPost удобная и быстрая доставка
            <br />
            посылок из Великобритании
          </Typography>
          <Typography
            sx={{
              color: '#73777a',
              fontSize: { xs: 13, md: 14 },
              lineHeight: 1.6,
            }}
          >
            Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши
            посылки на складе, при необходимости объединим несколько доставок в одну
            и отправим их к вам надежно упакованными.
          </Typography>
        </Box>

        {/* Calculator Form */}
        <Box
          component="form"
          onSubmit={(event) => {
            event.preventDefault();
            handleCalculate();
          }}
          sx={{
            p: { xs: 3, sm: 4 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1.5fr' },
            gap: { xs: 3, md: 2.5 },
            alignItems: 'end',
            borderRadius: 4,
            bgcolor: '#fff',
            boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
            border: '1px solid #f5f5f5',
          }}
        >
          <SelectField
            label="Страна:"
            icon={<PublicOutlinedIcon />}
            name="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
          >
            <option value="russia">Россия</option>
            <option value="belarus">Беларусь</option>
            <option value="kazakhstan">Казахстан</option>
          </SelectField>
          <SelectField
            label="Город:"
            icon={<AccountBalanceWalletOutlinedIcon />}
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          >
            <option value="moscow">Москва</option>
            <option value="saint-petersburg">Санкт-Петербург</option>
            <option value="kazan">Казань</option>
          </SelectField>
          <InputField
            label="Индекс:"
            icon={<ArticleOutlinedIcon />}
            name="postalCode"
            value={postalCode}
            placeholder="Введите индекс"
            onChange={(event) => setPostalCode(event.target.value)}
          />
          <InputField
            label="Вес посылки:"
            icon={<AccountBalanceWalletOutlinedIcon />}
            name="weight"
            value={weight}
            type="text"
            onChange={(event) => setWeight(event.target.value)}
          />
          <SelectField
            label="Дополнительные услуги:"
            icon={<ArticleOutlinedIcon />}
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
          >
            <option value="">Выберите услуги</option>
            <option value="insurance">Страхование посылки</option>
            <option value="repackaging">Дополнительная упаковка</option>
          </SelectField>
          
          <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1', md: '1 / 2' }, mt: { xs: 1, md: 0 } }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                minHeight: 48,
                borderRadius: 999,
                bgcolor: '#00cc8b',
                boxShadow: 'none',
                fontSize: 14,
                fontWeight: 700,
                textTransform: 'none',
                '&:hover': { bgcolor: '#00b97c', boxShadow: 'none' },
              }}
            >
              Рассчитать
            </Button>
          </Box>
          
          {calculated && (
            <Typography
              role="status"
              sx={{
                gridColumn: { xs: '1', sm: '1 / -1', md: '2 / -1' },
                alignSelf: 'center',
                color: '#00a875',
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              Расчёт обновлён — выберите подходящий вариант доставки ниже.
            </Typography>
          )}
        </Box>

        {/* Delivery Options */}
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Typography
            component="h3"
            sx={{ color: '#292d30', fontSize: { xs: 20, md: 24 }, fontWeight: 800, mb: 3 }}
          >
            Варианты доставки:
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {deliveryOptions.map((option) => (
              <DeliveryOption key={option.id} option={option} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
