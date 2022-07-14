import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { func } from 'prop-types';
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

const LogIn = ({ setOpenLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const submitLogIn = (values, { resetForm }) => {
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
    <ModalWindow>
      <Typography variant="h4" component="div" gutterBottom>
        Sign in
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <div>
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
        <div style={styleModalButton}>
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
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

LogIn.propTypes = {
  setOpenLogin: func.isRequired,
};

export const LogInMemo = memo(LogIn);
