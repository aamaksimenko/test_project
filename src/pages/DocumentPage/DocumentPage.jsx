import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Container } from '@mui/material';

import { getOneDocument } from '../../redux/slices/getOneDocumentSlice';

const DocumentPage = () => {
  const { partsOfDocument } = useSelector((state) => state.getOneDocument);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(partsOfDocument.images);
  console.log(partsOfDocument.document);

  useEffect(() => {
    dispatch(getOneDocument(id));
  }, [dispatch]);

  return (
    <Container maxWidth="xl" sx={{ margin: '20px 0 0 0' }}>
      Document
      <img src="http://192.168.1.234:3000/static/documents/60/images/qweqweqwe_1.jpg" alt="..." />
    </Container>
  );
};

export const DocumentPageMemo = memo(DocumentPage);
