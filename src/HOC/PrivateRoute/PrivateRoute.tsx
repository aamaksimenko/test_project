import React from "react";
import { useSelector } from "react-redux"; 

import { CircularProgress } from '@mui/material';

import { NotFound } from '../../pages/NotFound';

export const PrivateRoute = (Component) => {
      const isAccess = useSelector(state => state.login.isAccess);
      const isLogIn = useSelector(state => state.login.isLogIn);
      if (isAccess) {
        return <Component /> ;
      }
      if (isLogIn) {
        return <CircularProgress color="secondary" />;
      }
      return <NotFound />;
    }