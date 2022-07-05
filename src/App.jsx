import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LibraryPage from './pages/LibraryPage/LibraryPage';
import UserPage from './pages/UserPage/UserPage';
import CompanyPage from './pages/CompanyPage/CompanyPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/user_page" element={<UserPage />} />
        <Route path="/company_page" element={<CompanyPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
