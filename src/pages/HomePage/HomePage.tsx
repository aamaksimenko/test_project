import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { styleHomePage } from '../../style/style';

export const HomePage = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className="content-page" style={styleHomePage}>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Container maxWidth="xl">
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Box sx={{ bgcolor: '#cfe8fc' }}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Typography variant="h1" component="div" gutterBottom>
          PDF
        </Typography>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Typography variant="h2" component="div" gutterBottom>
          Convenient work with search by tags
        </Typography>
      </Box>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Box sx={{ bgcolor: '#cfe8fc', display: 'flex' }}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            flex: '0 1 400px',
            margin: '15px',
            bgcolor: 'green',
            fontFamily: 'Titan one',
          }}
        >
          We provide a convenient tool for working with documents with search by
          key information
        </Typography>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{ flex: '0 1 400px', margin: '15px', bgcolor: 'green' }}
        >
          Upload and edit your documents or view existing ones
        </Typography>
      </Box>
    </Container>
  </div>
);
