import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { func } from 'prop-types';
import { useLocation } from 'react-router-dom';

import { useFormik } from 'formik';
import { TextField, Button, Typography } from '@mui/material';

import { initialValuesAddUser, validationSchemaAddUser } from '../constants';
import { addUserInCompany } from '../../redux/slices/addUserInCompanySlice';
import { ModalWindow } from '../Modal';
import { getUser } from '../../redux/slices/getUsersInCompanySlice';

import { styleModalButton } from '../../style/style';

const AddUser = ({ setOpenAddUser }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  const submitAddUser = (values, { resetForm }) => {
    const id = location.pathname.slice(14);
    dispatch(addUserInCompany({ ...values, id }));
    resetForm(initialValuesAddUser);
    dispatch(getUser(id));
    setOpenAddUser(false);
  };

  const formik = useFormik({
    initialValues: initialValuesAddUser,
    validationSchema: validationSchemaAddUser,
    onSubmit: submitAddUser,
  });

  const handleCloseAddUserWindow = () => {
    setOpenAddUser(false);
    formik.resetForm();
  };

  return (
    <ModalWindow>
      <Typography variant="h5" component="div" gutterBottom>
        Add user in company
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            fullWidth
            key="user_email"
            sx={{
              margin: '10px 0 20px 0',
            }}
            id="user_email"
            name="email"
            label="User email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
            onClick={handleCloseAddUserWindow}
          >
            Close
          </Button>
        </div>
      </form>
    </ModalWindow>
  );
};

AddUser.propTypes = {
  setOpenAddUser: func.isRequired,
};

export const AddUserMemo = memo(AddUser);
