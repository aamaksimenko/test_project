import React, { memo } from 'react';

import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

type Props = {
    name: string;
    email: string;
    id: number;
};

const User = ({ name, email, id }: Props) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Box sx={{ bgcolor: '#98FB98' }}>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Typography variant="h5" component="div" gutterBottom>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Link to={`/user_page/${id}`} color="inherit">
        {name}
      </Link>
    </Typography>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Typography variant="h6" component="div" gutterBottom>
      {email}
    </Typography>
  </Box>
);

export const UserMemo = memo(User);
