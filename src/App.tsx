import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { LibraryPage } from './pages/LibraryPage';
import { Companies } from './pages/Companies';
import { UserPage } from './pages/UserPage';
import { CompanyPageMemo } from './pages/CompanyPage';
import { DocumentPageMemo } from './pages/DocumentPage';
import { PrivateRoute } from './HOC/PrivateRoute';

export const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/library" element={PrivateRoute(LibraryPage)} />
      <Route path="/companies" element={PrivateRoute(Companies)} />
      <Route path="/company_page/:id" element={PrivateRoute(CompanyPageMemo)} />
      <Route path="/user_page/:id" element={PrivateRoute(UserPage)} />
      <Route path="/user_page/" element={PrivateRoute(UserPage)} />
      <Route path="/documents/:id" element={PrivateRoute(DocumentPageMemo)} />
    </Routes>
  </BrowserRouter>
);
