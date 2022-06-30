import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/HomePage/HomePage';
import LibraryPage from './pages/LibraryPage/LibraryPage';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<LibraryPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
