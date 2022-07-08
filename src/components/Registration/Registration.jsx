import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { func } from 'prop-types';
import { useFormik } from 'formik';
import {
  TextField,
  Button,
  Typography,
} from '@mui/material';

import { initialValuesRegistration, validationSchemaRegistration } from '../constants';
import { userRegistration } from '../../redux/slices/registrationSlice';
import { ModalWindow } from '../Modal';

import { styleModalButton } from '../../style/style';

const Registration = ({ setOpenRegistration }) => {
  const dispatch = useDispatch();
  const submitRegistration = (values, { resetForm }) => {
    dispatch(userRegistration(values));
    resetForm(initialValuesRegistration);
    setOpenRegistration(false);
  };

  const formik = useFormik({
    initialValues: initialValuesRegistration,
    validationSchema: validationSchemaRegistration,
    onSubmit: submitRegistration,
  });

  const handleCloseRegistrationWindow = () => {
    setOpenRegistration(false);
    formik.resetForm();
  };

  return (
    <ModalWindow>
      <Typography variant="h4" component="div" gutterBottom>
        Registration form
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            sx={{
              margin: '20px 0 10px 0',
            }}
            fullWidth
            id="username"
            name="username"
            label="Name"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            sx={{
              margin: '10px 0 10px 0',
            }}
            fullWidth
            id="emailRegistration"
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
            id="passwordRegistration"
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
            onClick={() => handleCloseRegistrationWindow()}
          >
            Close
          </Button>
        </div>
      </form>
    </ModalWindow>
  );
};

Registration.defaultProps = {
  setOpenRegistration: () => {},

};
Registration.propTypes = {
  setOpenRegistration: func,
};

export const RegistrationMemo = memo(Registration);
