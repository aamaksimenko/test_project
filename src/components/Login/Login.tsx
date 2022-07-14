import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import {
  TextField,
  Button,
  Typography,
} from '@mui/material';

import { initialValuesLogIn, validationSchemaLogIn } from '../constants';
import { userLogIn } from '../../redux/slices/loginSlice';
import { ModalWindow } from '../Modal';

import { styleModalButton } from '../../style/style';

type Props = {
    setOpenLogin: (...args: any[]) => any;
};

const LogIn = ({ setOpenLogin }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const submitLogIn = (values: any, {
    resetForm
  }: any) => {
    // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
    dispatch(userLogIn(values));
    resetForm(initialValuesLogIn);
    setOpenLogin(false);
    navigate('/companies');
  };

  const formik = useFormik({
    initialValues: initialValuesLogIn,
    validationSchema: validationSchemaLogIn,
    onSubmit: submitLogIn,
  });

  const handleCloseLoginWindow = () => {
    setOpenLogin(false);
    formik.resetForm();
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ModalWindow>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Typography variant="h4" component="div" gutterBottom>
        Sign in
      </Typography>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <form onSubmit={formik.handleSubmit}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TextField
            sx={{
              margin: '20px 0 10px 0',
            }}
            fullWidth
            id="emailLogin"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TextField
            sx={{
              margin: '10px 0 20px 0',
            }}
            fullWidth
            id="passwordLogin"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </div>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div style={styleModalButton}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Button
            color="primary"
            variant="contained"
            type="button"
            onClick={handleCloseLoginWindow}
          >
            Close
          </Button>
        </div>
      </form>
    </ModalWindow>
  );
};

export const LogInMemo = memo(LogIn);
