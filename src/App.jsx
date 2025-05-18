import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import AdicionarProduto from './components/AdicionarProduto';
import ProgressSection from './components/ProgressSection';
import Blocos from './components/Blocos';
import FraseEfeito from './components/Depoimentos.jsx';
import Footer from './components/Footer';
import './styles/css.css';

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <AdicionarProduto />
      <ProgressSection />
      <Blocos />
      <FraseEfeito />
      <Footer />
    </>
  );
}

export default App;
