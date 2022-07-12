import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Container, Box, Typography, Button } from '@mui/material';

import { AddCompanyMemo } from '../../components/AddCompany';

export const UserPage = () => {
  const location = useLocation();
  const { id } = useParams();
  
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const [isOpenAddCompany, setOpenAddCompany] = useState(false);

  const handlerOpenAddCompany = () => setOpenAddCompany(true);

  const isShowButtonAddCompany =
    Number(id) === currentUser.id || location.pathname === '/user_page';

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#cfe8fc' }}>
          <Typography variant="h2" component="div" gutterBottom>
            UserPage
          </Typography>

          {isShowButtonAddCompany && (
            <Button
              id="addCompany"
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
