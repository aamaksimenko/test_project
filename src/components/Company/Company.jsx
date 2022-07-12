import React, { memo } from 'react';
import { string, number } from 'prop-types';

import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

const Company = ({ title, id }) => (
  <Box sx={{ bgcolor: '#98FB98' }}>
    <Typography variant="h5" component="div" gutterBottom>
      <Link to={`/company_page/${id}`} color="inherit">
        {title}
      </Link>
    </Typography>
  </Box>
);

Company.propTypes = {
  title: string.isRequired,
  id: number.isRequired,
};

export const CompanyMemo = memo(Company);
