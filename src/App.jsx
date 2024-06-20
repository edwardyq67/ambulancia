import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Inicio from './page/Inicio';
import Nosotros from './page/Nosotros';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer/>
    </HashRouter>
    </div>

    
  );
}

export default App;
