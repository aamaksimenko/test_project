import React, { memo } from 'react';

import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

type Props = {
    title: string;
    id: number;
};

const Company = ({ title, id }: Props) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Box sx={{ bgcolor: '#98FB98' }}>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Typography variant="h5" component="div" gutterBottom>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Link to={`/company_page/${id}`} color="inherit">
        {title}
      </Link>
    </Typography>
  </Box>
);

export const CompanyMemo = memo(Company);
