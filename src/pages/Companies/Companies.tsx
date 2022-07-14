import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Box, Typography, CircularProgress } from '@mui/material';

import { CompanyMemo } from '../../components/Company';

import { getCompanies } from '../../redux/slices/getCompaniesSlice';

export const Companies = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => (state as any).getCompanies.isLoading);
  const { companies } = useSelector((state) => (state as any).getCompanies);

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  if (isLoading) {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <CircularProgress color="secondary" />;
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container maxWidth="xl" sx={{ margin: '20px 0 0 0' }}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Box sx={{ bgcolor: '#cfe8fc' }}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Typography variant="h2" component="div" gutterBottom>
          Companies
        </Typography>
      </Box>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Box>
        {companies.length ? (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          companies.map((company: any) => <CompanyMemo key={company.id} title={company.title} id={company.id} />)
        ) : (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography component="div" variant="h1">
            No Companies
          </Typography>
        )}
      </Box>
    </Container>
  );
};
