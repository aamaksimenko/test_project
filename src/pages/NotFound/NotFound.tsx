import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Container, Button } from '@mui/material';

export const NotFound = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Container>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Typography
      variant="h2"
      component="div"
      gutterBottom
      style={{ color: '#FF0000' }}
    >
      404 - Not Found!
    </Typography>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Button
      sx={{
        bgcolor: '#66CDAA',
        height: '100px',
        width: '300px',
        fontSize: '50px',
        ':hover': { bgcolor: '#7FFF00' },
      }}
    >
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Link to="/">Go Home</Link>
    </Button>
  </Container>
);
