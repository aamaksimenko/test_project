import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { LibraryPage } from './pages/LibraryPage';
import { Companies } from './pages/Companies';
// import { UserPage } from './pages/UserPage';
// import { CompanyPage } from './pages/CompanyPage';

export const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/companies" element={<Companies />} />
      {/* <Route path="/company_page/:id" element={<CompanyPage />} />
      <Route path="/user_page/:id" element={<UserPage />} />
      <Route path="/user_page/" element={<UserPage />} /> */}
    </Routes>
  </BrowserRouter>
);
