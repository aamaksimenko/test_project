import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Typography } from '@mui/material';

import { DocumentMemo } from '../../components/Document';

import { getAllDocuments } from '../../redux/slices/getAllDocumentsSlice';

import { styleLibraryPage } from '../../style/style';

export const LibraryPage = () => {
  const dispatch = useDispatch();

  const { documents } = useSelector((state) => state.getAllDocuments);

  useEffect(() => {
    dispatch(getAllDocuments());
  }, [dispatch]);

  return (
    <div className="content-page" style={styleLibraryPage}>
      library
      {documents.length ? (
        documents.map((document) => (
          <DocumentMemo
            key={document.id}
            name={document.name}
            url={document.attachment.url}
            id={document.id}
          />
        ))
      ) : (
        <Typography component="div" variant="h1">
          No Documents
        </Typography>
      )}
    </div>
  );
};
