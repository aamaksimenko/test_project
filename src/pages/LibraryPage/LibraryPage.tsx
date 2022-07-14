import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Typography, Box, Container } from '@mui/material';

import { DocumentMemo } from '../../components/Document';

import { getAllDocuments } from '../../redux/slices/getAllDocumentsSlice';

export const LibraryPage = () => {
  const dispatch = useDispatch();

  const { documents } = useSelector((state) => state.getAllDocuments);

  useEffect(() => {
    dispatch(getAllDocuments());
  }, [dispatch]);

  return (
    <Container maxWidth="xl" sx={{ margin: '20px 0 0 0' }}>
      <Box sx={{ bgcolor: '#cfe8fc' }}>
        <Typography variant="h2" component="div" gutterBottom>
          Library
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left' }}>
        {documents.length ? (
          documents.map((document) => (
            <DocumentMemo
              key={document.id}
              name={document.name}
              id={document.id}
            />
          ))
        ) : (
          <Typography component="div" variant="h1">
            No Documents
          </Typography>
        )}
      </Box>
    </Container>
  );
};
