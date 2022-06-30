import React, { memo, useCallback } from 'react';
import { func } from 'prop-types';

import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';

import { initialValuesLogIn, validationSchemaLogIn } from '../constants';

function LogIn({ setOpenL }) {
  const submitLogIn = useCallback((values, { resetForm }) => {
    resetForm(initialValuesLogIn);
    setOpenL(false);
  });

  const formik = useFormik({
    initialValues: initialValuesLogIn,
    validationSchema: validationSchemaLogIn,
    onSubmit: submitLogIn,
  });

  return (
    <>
      <h2 className="modal-title">Sign in</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-div">
          <TextField
            sx={{
              margin: '20px 0 10px 0',
            }}
            fullWidth
            id="emailL"
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
            id="passwordL"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <br />
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        >
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
            onClick={() => { setOpenL(false); formik.resetForm(); }}
          >
            Close
          </Button>
        </div>

      </form>
    </>
  );
}

LogIn.defaultProps = {
  setOpenL: null,
};
LogIn.propTypes = {
  setOpenL: func,
};

export default memo(LogIn);