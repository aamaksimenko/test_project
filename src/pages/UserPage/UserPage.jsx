import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Container, Box, Typography, Button } from '@mui/material';

import { AddCompanyMemo } from '../../components/AddCompany';

export const UserPage = () => {
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const [isOpenAddCompany, setOpenAddCompany] = useState(false);

  const handlerOpenAddCompany = () => setOpenAddCompany(true);

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#cfe8fc' }}>
          <Typography variant="h2" component="div" gutterBottom>
            UserPage
          </Typography>

          {((+location.pathname.slice(11) === currentUser.id) || (+location.pathname.slice(11) === 0)) && (
            <Button
              id="add_company"
              type="button"
              onClick={handlerOpenAddCompany}
            >
              Add Company
            </Button>
          )}
        </Box>
      </Container>
      {isOpenAddCompany && (
        <AddCompanyMemo setOpenAddCompany={setOpenAddCompany} />
      )}
    </>
  );
};
