import React, { memo, useState } from 'react';
import { string, number } from 'prop-types';

import { Box, Typography, Button } from '@mui/material';

import { DocumentModalMemo } from '../DocumentModal';

const Document = ({ name, url, id }) => {
  const [isOpenDocumentWindow, setOpenDocumentWindow] = useState(false);

  const urlDocument = process.env.REACT_APP_AXIOS + url;

  const handlerOpenDocument = () => setOpenDocumentWindow(true);

  return (
    <>
      <Box sx={{ bgcolor: '#98FB98' }}>
        <Typography variant="h6" component="div" gutterBottom>
          Document name: {name}
        </Typography>
        <Button id="openDocument" type="button" onClick={handlerOpenDocument}>
          Open Document
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
