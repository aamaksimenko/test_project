import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { LibraryPage } from './pages/LibraryPage';

export const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/library" element={<LibraryPage />} />
    </Routes>

  </BrowserRouter>
);
