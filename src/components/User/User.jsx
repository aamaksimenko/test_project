import React, { memo } from 'react';
import { string, number } from 'prop-types';

import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

const User = ({ name, email, id }) => (
  <Box sx={{ bgcolor: '#98FB98' }}>
    <Typography variant="h5" component="div" gutterBottom>
      <Link to={`/user_page/${id}`} color="inherit">
        {name}
      </Link>
    </Typography>
    <Typography variant="h6" component="div" gutterBottom>
      {email}
    </Typography>
  </Box>
);

User.propTypes = {
  name: string.isRequired,
  email: string.isRequired,
  id: number.isRequired,
};

export const UserMemo = memo(User);
