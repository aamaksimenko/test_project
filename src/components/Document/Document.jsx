import React, { memo } from 'react';
import { string, number } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Typography, Button, Box } from '@mui/material';


import pdfIcon from '../../icons/pdfIcon.png';

const Document = ({ name, id }) => {
  const navigate = useNavigate();

  const handlerOpenDocument = () => navigate(`/documents/${id}`);

  return (
    <Box
        sx={{
          border: '1px solid black',
          margin: '5px',
          padding: '5px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flex: '0 0 150px',
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          {name}
        </Typography>
        <Button
          id="openDocument"
          type="button"
          onClick={handlerOpenDocument}
          sx={{ ':hover': {bgcolor: '#7FFFD4'} }}
        >
          <img src={pdfIcon} alt="Icon" width={50} />
        </Button>
      </Box>
  );
};

Document.propTypes = {
  name: string.isRequired,
  id: number.isRequired,
};

export const DocumentMemo = memo(Document);
