import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Sistema from './Pages/Sistema.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sistema" element={<Sistema />} />
      </Routes>
    </Router>
  );
}

export default App;
