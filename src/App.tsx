import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Produtos from './pages/Produtos';
import Noticias from './pages/Noticias';
import Contato from './pages/Contato';

// Scroll restoration helper
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-primary">
      {/* Scroll Restoration */}
      <ScrollToTop />
      
      {/* Navigation Header */}
      <Navbar />

      {/* Pages Container */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
