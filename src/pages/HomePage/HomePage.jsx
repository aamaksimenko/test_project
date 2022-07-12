import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { styleHomePage } from '../../style/style';

export const HomePage = () => (
  <div className="content-page" style={styleHomePage}>
    <Container maxWidth="xl">
      <Box sx={{ bgcolor: '#cfe8fc' }}>
        <Typography variant="h1" component="div" gutterBottom>
          PDF
        </Typography>
        <Typography variant="h2" component="div" gutterBottom>
          Convenient work with search by tags
        </Typography>
      </Box>
      <Box sx={{ bgcolor: '#cfe8fc', display: 'flex' }}>
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
