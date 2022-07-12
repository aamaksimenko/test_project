import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { func } from 'prop-types';

import { useFormik } from 'formik';
import { TextField, Button, Typography } from '@mui/material';

import {
  initialValuesAddCompany,
  validationSchemaAddCompany,
} from '../constants';
import { addCompany } from '../../redux/slices/addCompanySlice';
import { ModalWindow } from '../Modal';

import { styleModalButton } from '../../style/style';

const AddCompany = ({ setOpenAddCompany }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitAddCompany = (values, { resetForm }) => {
    dispatch(addCompany(values));
    resetForm(initialValuesAddCompany);
    setOpenAddCompany(false);
    navigate('/companies');
  };

  const formik = useFormik({
    initialValues: initialValuesAddCompany,
    validationSchema: validationSchemaAddCompany,
    onSubmit: submitAddCompany,
  });

  const handleCloseAddCompanyWindow = () => {
    setOpenAddCompany(false);
    formik.resetForm();
  };

  return (
    <ModalWindow>
      <Typography variant="h5" component="div" gutterBottom>
        Add Company
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            sx={{
              margin: '20px 0 20px 0',
            }}
            fullWidth
            id="titleCompany"
            name="title"
            label="Company name"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </div>
        <div style={styleModalButton}>
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
          <Button
            color="primary"
            variant="contained"
            type="button"
            onClick={handleCloseAddCompanyWindow}
          >
            Close
          </Button>
        </div>
      </form>
    </ModalWindow>
  );
};

AddCompany.propTypes = {
  setOpenAddCompany: func.isRequired,
};

export const AddCompanyMemo = memo(AddCompany);
