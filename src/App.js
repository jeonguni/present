import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import About from './pages/About';
import Program from './pages/Program';
import Service from './pages/Service';
import './assets/style/style.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Index />} />
        <Route path="/About" element={<About />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
