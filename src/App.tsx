import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import UnifiedLiquidity from './pages/UnifiedLiquidity';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="page">
          <Routes>
            <Route path="/bridge" element={<Home />} />
            <Route path="/" element={<UnifiedLiquidity />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
