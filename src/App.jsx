import { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Inicio from './page/Inicio';
import Nosotros from './page/Nosotros';
import Footer from './components/Footer';
import Loadding from './loadding/Loadding';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Verificar si ya se ha mostrado la carga
    const hasShownLoading = localStorage.getItem('hasShownLoading');

    if (hasShownLoading) {
      setShowLoading(false);
    } else {
      // Mostrar la carga por 2 segundos
      const timer = setTimeout(() => {
        setShowLoading(false);
        localStorage.setItem('hasShownLoading', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="">
      <HashRouter>
        <NavBar />
        {showLoading && <Loadding />}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
