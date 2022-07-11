import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Container, Button } from '@mui/material';

export const NotFound = () => (
  <Container>
    <Typography
      variant="h2"
      component="div"
      gutterBottom
      style={{ color: '#FF0000' }}
    >
      404 - Not Found!
    </Typography>
    <Button
      sx={{
        bgcolor: '#66CDAA',
        height: '100px',
        width: '300px',
        fontSize: '50px',
        ':hover': { bgcolor: '#7FFF00' },
      }}
    >
      <Link to="/">Go Home</Link>
    </Button>
  </Container>
);
