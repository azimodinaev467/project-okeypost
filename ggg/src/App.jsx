import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfitSection from './components/ProfitSection';
import CtaSection from './components/CtaSection';
import CalculatorSection from './components/CalculatorSection';
import StepsSection from './components/StepsSection';
import ReviewsSection from './components/ReviewsSection';
import FooterSection from './components/FooterSection';

import HowToBuy from './components/pages/HowToBuy';
import Sales from './components/pages/Sales';
import Prices from './components/pages/Prices';
import Help from './components/pages/Help';
import Bonuses from './components/pages/Bonuses';
import Blog from './components/pages/Blog';
import Stores from './components/pages/Stores';

function App() {
  return (
    <BrowserRouter>
      <Box
        id="top"
        sx={{
          minHeight: '100vh',
          bgcolor: '#fafafa',
          color: '#242424',
          fontFamily: 'Inter, Arial, sans-serif',
          overflow: 'hidden',
        }}
      >
        <Header />
        <Box component="main">
          <Container
            maxWidth={false}
            sx={{
              maxWidth: 1254,
              px: { xs: 1.5, sm: 3, md: 4, lg: 0 },
              pt: { xs: 1.5, sm: 2.5, md: 0 },
            }}
          >
            <Routes>
              <Route path="/" element={<><Hero /><ProfitSection /><CtaSection /><CalculatorSection /><StepsSection /><ReviewsSection /><FooterSection /></>} />
              <Route path="/how-to-buy" element={<HowToBuy />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/prices" element={<Prices />} />
              <Route path="/help" element={<Help />} />
              <Route path="/bonuses" element={<Bonuses />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/stores" element={<Stores />} />
            </Routes>
          </Container>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
