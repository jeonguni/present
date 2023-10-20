import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import About from './pages/About';
import Program from './pages/Program';
import Service from './pages/Service';
import './assets/style/style.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Index />} />
        <Route path="/About" element={<About />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
