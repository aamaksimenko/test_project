import React, { memo, useState } from 'react';
import { string, number } from 'prop-types';

import { Typography, Button, Box } from '@mui/material';

import { DocumentModalMemo } from '../DocumentModal';
import pdfIcon from '../../icons/pdfIcon.png';

const Document = ({ name, url, id }) => {
  const [isOpenDocumentWindow, setOpenDocumentWindow] = useState(false);

  const urlDocument = process.env.REACT_APP_AXIOS + url;

  const handlerOpenDocument = () => setOpenDocumentWindow(true);

  return (
    <>
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
      {isOpenDocumentWindow && (
        <DocumentModalMemo
          setOpenDocumentWindow={setOpenDocumentWindow}
          urlDocument={urlDocument}
          id={id}
          name={name}
        />
      )}
    </>
  );
};

Document.propTypes = {
  name: string.isRequired,
  url: string.isRequired,
  id: number.isRequired,
};

export const DocumentMemo = memo(Document);
