import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/my-city" element={<MyCity />} />
          <Route path="/my-future" element={<MyFuture />} />
          <Route path="*" element={<h2>Сторінка не знайдена</h2>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
