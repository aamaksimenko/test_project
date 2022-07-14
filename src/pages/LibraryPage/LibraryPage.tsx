import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Typography, Box, Container } from '@mui/material';

import { DocumentMemo } from '../../components/Document';

import { getAllDocuments } from '../../redux/slices/getAllDocumentsSlice';

export const LibraryPage = () => {
  const dispatch = useDispatch();

  const { documents } = useSelector((state) => (state as any).getAllDocuments);

  useEffect(() => {
    dispatch(getAllDocuments());
  }, [dispatch]);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container maxWidth="xl" sx={{ margin: '20px 0 0 0' }}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Box sx={{ bgcolor: '#cfe8fc' }}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Typography variant="h2" component="div" gutterBottom>
          Library
        </Typography>
      </Box>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
        {documents.length ? (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          documents.map((document: any) => <DocumentMemo
            key={document.id}
            name={document.name}
            id={document.id}
          />)
        ) : (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typography component="div" variant="h1">
            No Documents
          </Typography>
        )}
      </Box>
    </Container>
  );
};
