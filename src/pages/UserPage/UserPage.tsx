import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Container, Box, Typography, Button } from '@mui/material';

import { AddCompanyMemo } from '../../components/AddCompany';

export const UserPage = () => {
  const location = useLocation();
  const { id } = useParams();
  
  // @ts-expect-error TS(2345): Argument of type 'string | null' is not assignable... Remove this comment to see the full error message
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const [isOpenAddCompany, setOpenAddCompany] = useState(false);

  const handlerOpenAddCompany = () => setOpenAddCompany(true);

  const isShowButtonAddCompany =
    Number(id) === currentUser.id || location.pathname === '/user_page';

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Container maxWidth="xl">
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Box sx={{ bgcolor: '#cfe8fc' }}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Typography variant="h2" component="div" gutterBottom>
            UserPage
          </Typography>

          {isShowButtonAddCompany && (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <AddCompanyMemo setOpenAddCompany={setOpenAddCompany} />
      )}
    </>
  );
};
