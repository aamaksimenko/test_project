import React, { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Container,
  Box,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';

import { AddUserMemo } from '../../components/AddUser';
import { UserMemo } from '../../components/User';
import { getUsers } from '../../redux/slices/getUsersInCompanySlice';

const CompanyPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const companyInfo = useSelector((state) => (state as any).getCompanyUsers);
  const isLoading = companyInfo?.isLoading;
  const companyName = companyInfo?.company.title;
  const companyUsers = companyInfo?.company.users;

  useEffect(() => {
    // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
    dispatch(getUsers(id));
  }, [dispatch, id]);

  const [isOpenAddUser, setOpenAddUser] = useState(false);

  const handlerOpenAddUser = () => setOpenAddUser(true);

  if (isLoading) {
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <CircularProgress color="secondary" />;
  }

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    <Container maxWidth="xl">
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Box sx={{ bgcolor: '#cfe8fc' }}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Typography variant="h2" component="div" gutterBottom>
          Company: {companyName}
        </Typography>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button id="add_user" type="button" onClick={handlerOpenAddUser}>
          Add User
        </Button>
      </Box>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Box>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Typography variant="h4" component="div" gutterBottom>
          Users
        </Typography>
        {companyUsers?.length &&
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          companyUsers.map((user: any) => <UserMemo
            key={user.id}
            name={user.username}
            email={user.email}
            id={user.id}
          />)}
      </Box>
    </Container>
    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    {isOpenAddUser && <AddUserMemo setOpenAddUser={setOpenAddUser} />}
  </>;
};

export const CompanyPageMemo = memo(CompanyPage);
