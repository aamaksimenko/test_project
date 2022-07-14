import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, Button, Box } from '@mui/material';


// @ts-expect-error TS(2307): Cannot find module '../../icons/pdfIcon.png' or it... Remove this comment to see the full error message
import pdfIcon from '../../icons/pdfIcon.png';

type Props = {
    name: string;
    id: number;
};

const Document = ({ name, id }: Props) => {
  const navigate = useNavigate();

  const handlerOpenDocument = () => navigate(`/documents/${id}`);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Typography variant="h6" component="div" gutterBottom>
          {name}
        </Typography>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button
          id="openDocument"
          type="button"
          onClick={handlerOpenDocument}
          sx={{ ':hover': {bgcolor: '#7FFFD4'} }}
        >
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <img src={pdfIcon} alt="Icon" width={50} />
        </Button>
      </Box>
  );
};

export const DocumentMemo = memo(Document);
