import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import UnifiedLiquidity from './pages/UnifiedLiquidity';
import Borrow from './pages/Borrow';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="page">
          <Routes>
            <Route path="/" element={<UnifiedLiquidity />} />
            <Route path="/borrow" element={<Borrow />} />
            <Route path="/bridge" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
