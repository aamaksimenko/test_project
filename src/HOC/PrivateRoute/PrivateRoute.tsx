import React from "react";
import { useSelector } from "react-redux"; 

import { CircularProgress } from '@mui/material';

import { NotFound } from '../../pages/NotFound';

export const PrivateRoute = (Component: any) => {
      const isAccess = useSelector(state => (state as any).login.isAccess);
      const isLogIn = useSelector(state => (state as any).login.isLogIn);
      if (isAccess) {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <Component /> ;
      }
      if (isLogIn) {
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return <CircularProgress color="secondary" />;
      }
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      return <NotFound />;
    }