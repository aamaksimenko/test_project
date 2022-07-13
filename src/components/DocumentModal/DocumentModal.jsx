import React, { memo } from 'react';
import { func, string, number } from 'prop-types';
import { Button, Typography } from '@mui/material';

import { ModalWindow } from '../Modal';

const DocumentModal = ({ setOpenDocumentWindow, urlDocument, id, name }) => {
  const handleCloseDocumentWindow = () => setOpenDocumentWindow(false);

  return (
    <ModalWindow>
      <Typography variant="h4" component="div" gutterBottom>
        {name}
      </Typography>
      <div>
        <iframe
          title={id}
          src={urlDocument}
          width="1500"
          height="650"
          align="left"
        >
          Ваш браузер не поддерживает плавающие фреймы!
        </iframe>
      </div>

      <Button
        color="primary"
        variant="contained"
        type="button"
        onClick={handleCloseDocumentWindow}
      >
        Close
      </Button>
    </ModalWindow>
  );
};

DocumentModal.propTypes = {
  setOpenDocumentWindow: func.isRequired,
  urlDocument: string.isRequired,
  id: number.isRequired,
  name: string.isRequired,
};

export const DocumentModalMemo = memo(DocumentModal);
