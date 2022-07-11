import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Box, Typography, CircularProgress } from '@mui/material';

import { CompanyMemo } from '../../components/Company';

import { getUserCompany } from '../../redux/slices/getCompaniesSlice';

export const Companies = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.getCompanies.isLoading);
  const { company } = useSelector((state) => state.getCompanies);

  useEffect(() => {
    dispatch(getUserCompany());
  }, [dispatch]);

  if (isLoading) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <Container maxWidth="xl" sx={{ margin: '20px 0 0 0' }}>
      <Box sx={{ bgcolor: '#cfe8fc' }}>
        <Typography variant="h2" component="div" gutterBottom>
          Companies
        </Typography>
      </Box>
      <Box>
        {company.length ? (
          company.map((item) => (
            <CompanyMemo key={item.id} title={item.title} id={item.id} />
          ))
        ) : (
          <Typography component="div" variant="h1">
            No Companies
          </Typography>
        )}
      </Box>
    </Container>
  );
};
