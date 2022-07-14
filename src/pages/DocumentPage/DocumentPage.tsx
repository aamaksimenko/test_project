import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Container } from '@mui/material';

import { getOneDocument } from '../../redux/slices/getOneDocumentSlice';

const DocumentPage = () => {
  const { partsOfDocument } = useSelector((state) => (state as any).getOneDocument);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(partsOfDocument.images);
  console.log(partsOfDocument.document);

  useEffect(() => {
    // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
    dispatch(getOneDocument(id));
  }, [dispatch]);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container maxWidth="xl" sx={{ margin: '20px 0 0 0' }}>
      Document
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <img src="http://192.168.1.234:3000/static/documents/60/images/qweqweqwe_1.jpg" alt="..." />
    </Container>
  );
};

export const DocumentPageMemo = memo(DocumentPage);
