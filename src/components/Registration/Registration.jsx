import React, { memo, useCallback } from 'react';

import { func } from 'prop-types';
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';

import { initialValuesRegistration, validationSchemaRegistration } from '../constants';

import { styleModalButton } from '../../style/style';

function Registration({ setOpenR }) {
  const submitRegistration = useCallback((values, { resetForm }) => {
    resetForm(initialValuesRegistration);
    setOpenR(false);
  });

  const formik = useFormik({
    initialValues: initialValuesRegistration,
    validationSchema: validationSchemaRegistration,
    onSubmit: submitRegistration,
  });
  return (
    <>
      <h2>Registration form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            sx={{
              margin: '20px 0 10px 0',
            }}
            fullWidth
            id="emailR"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            sx={{
              margin: '10px 0 10px 0',
            }}
            fullWidth
            id="passwordR"
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
            onClick={() => { setOpenR(false); formik.resetForm(); }}
          >
            Close
          </Button>
        </div>
      </form>
    </>
  );
}

Registration.defaultProps = {
  setOpenR: null,

};
Registration.propTypes = {
  setOpenR: func,
};

export default memo(Registration);
