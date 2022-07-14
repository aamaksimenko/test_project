import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useFormik } from 'formik';
import { TextField, Button, Typography } from '@mui/material';

import { initialValuesAddUser, validationSchemaAddUser } from '../constants';
import { addUserInCompany } from '../../redux/slices/addUserInCompanySlice';
import { ModalWindow } from '../Modal';
import { getUsers } from '../../redux/slices/getUsersInCompanySlice';

import { styleModalButton } from '../../style/style';

type Props = {
    setOpenAddUser: (...args: any[]) => any;
};

const AddUser = ({ setOpenAddUser }: Props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const submitAddUser = (values: any, {
    resetForm
  }: any) => {
    // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
    dispatch(addUserInCompany({ ...values, id }));
    resetForm(initialValuesAddUser);
    // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
    dispatch(getUsers(id));
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ModalWindow>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Typography variant="h5" component="div" gutterBottom>
        Add user in company
      </Typography>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <form onSubmit={formik.handleSubmit}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TextField
            fullWidth
            key="user_email"
            sx={{
              margin: '10px 0 20px 0',
            }}
            id="userEmail"
            name="email"
            label="User email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
            onClick={handleCloseAddUserWindow}
          >
            Close
          </Button>
        </div>
      </form>
    </ModalWindow>
  );
};

export const AddUserMemo = memo(AddUser);
