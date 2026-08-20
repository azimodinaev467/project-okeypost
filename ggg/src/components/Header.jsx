import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import Logo from './Logo';

const navigation = [
  { label: 'Как покупать', href: '/how-to-buy' },
  { label: 'Распродажи', href: '/sales' },
  { label: 'Цены', href: '/prices' },
  { label: 'Помощь', href: '/help' },
  { label: 'Бонусы', href: '/bonuses' },
  { label: 'Блог', href: '/blog' },
  { label: 'Магазины', href: '/stores' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box component="header" sx={{ position: 'relative', zIndex: 10, bgcolor: '#fff' }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1254,
          minHeight: { xs: 68, md: 76 },
          px: { xs: 2.5, sm: 4, lg: 0 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 3,
        }}
      >
        <Logo />

        <Box
          component="nav"
          aria-label="Основная навигация"
          sx={{
            display: { xs: menuOpen ? 'flex' : 'none', md: 'flex' },
            position: { xs: 'absolute', md: 'static' },
            top: { xs: 68, md: 'auto' },
            left: { xs: 16, md: 'auto' },
            right: { xs: 16, md: 'auto' },
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'stretch', md: 'center' },
            gap: { xs: 0.5, md: 2.8 },
            p: { xs: 2, md: 0 },
            borderRadius: { xs: 3, md: 0 },
            bgcolor: { xs: '#fff', md: 'transparent' },
            boxShadow: { xs: '0 14px 34px rgba(33, 47, 91, 0.15)', md: 'none' },
          }}
        >
          {navigation.map((item) => (
            <Box
              key={item.label}
              component={NavLink}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              sx={{
                px: { xs: 1.5, md: 0 },
                py: { xs: 1.2, md: 0.5 },
                color: '#2e2e2e',
                fontSize: 11,
                fontWeight: 500,
                textDecoration: 'none',
                borderRadius: 1.5,
                transition: 'color 180ms ease, background-color 180ms ease',
                '&:hover': { color: '#00b97c', bgcolor: { xs: '#f1fbf8', md: 'transparent' } },
                '&.active': { color: '#00b97c' },
              }}
            >
              {item.label}
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 2 } }}>
          <Button
            component="a"
            href="#login"
            startIcon={<PersonOutlineRoundedIcon sx={{ fontSize: '18px !important' }} />}
            sx={{
              display: { xs: 'none', sm: 'inline-flex' },
              minWidth: 55,
              p: 0,
              color: '#272727',
              fontSize: 11,
              fontWeight: 500,
              textTransform: 'none',
              '&:hover': { bgcolor: 'transparent', color: '#00b97c' },
            }}
          >
            Вход
          </Button>
          <Button
            component="a"
            href="#contact"
            variant="contained"
            sx={{
              display: { xs: 'none', sm: 'inline-flex' },
              minWidth: 93,
              minHeight: 35,
              px: 1.8,
              borderRadius: 999,
              bgcolor: '#00c98b',
              boxShadow: 'none',
              fontSize: 10,
              fontWeight: 700,
              textTransform: 'none',
              '&:hover': { bgcolor: '#00b87c', boxShadow: 'none' },
            }}
          >
            Связаться с нами
          </Button>
          <IconButton
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            sx={{ display: { xs: 'inline-flex', md: 'none' }, color: '#303030' }}
          >
            {menuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
