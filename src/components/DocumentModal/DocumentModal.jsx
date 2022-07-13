import React, { memo, useEffect } from 'react';
import { func, string, number } from 'prop-types';
import { Button, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { ModalWindow } from '../Modal';
import { getPagesInDocument } from '../../redux/slices/getPagesInDocumentSlice';

const DocumentModal = ({ setOpenDocumentWindow, urlDocument, id, name }) => {
  const dispatch = useDispatch();

  const { pages } = useSelector((state) => state.getPagesInDocument);

  console.log(pages);
  console.log(urlDocument);

  useEffect(() => {
    dispatch(getPagesInDocument(id));
  }, [dispatch]);

  const handleCloseDocumentWindow = () => setOpenDocumentWindow(false);

  return (
    <ModalWindow>
      <Typography variant="h4" component="div" gutterBottom>
        {name}
        {/* {pages.length ? (
          pages.map((document) => <div key={document}>{document}</div>)
        ) : null} */}
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
