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
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <BrowserRouter>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Header />
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Routes>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Route path="/" element={<HomePage />} />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Route path="/library" element={PrivateRoute(LibraryPage)} />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Route path="/companies" element={PrivateRoute(Companies)} />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Route path="/company_page/:id" element={PrivateRoute(CompanyPageMemo)} />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Route path="/user_page/:id" element={PrivateRoute(UserPage)} />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Route path="/user_page/" element={PrivateRoute(UserPage)} />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Route path="/documents/:id" element={PrivateRoute(DocumentPageMemo)} />
    </Routes>
  </BrowserRouter>
);
