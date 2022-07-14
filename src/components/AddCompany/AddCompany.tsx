import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import { TextField, Button, Typography } from '@mui/material';

import {
  initialValuesAddCompany,
  validationSchemaAddCompany,
} from '../constants';
import { addCompany } from '../../redux/slices/addCompanySlice';
import { ModalWindow } from '../Modal';

import { styleModalButton } from '../../style/style';

type Props = {
    setOpenAddCompany: (...args: any[]) => any;
};

const AddCompany = ({ setOpenAddCompany }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitAddCompany = (values: any, {
    resetForm
  }: any) => {
    // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ModalWindow>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Typography variant="h5" component="div" gutterBottom>
        Add Company
      </Typography>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <form onSubmit={formik.handleSubmit}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div style={styleModalButton}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

export const AddCompanyMemo = memo(AddCompany);
