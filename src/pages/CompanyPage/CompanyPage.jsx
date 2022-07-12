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

  const companyInfo = useSelector((state) => state.getCompanyUsers);
  const isLoading = companyInfo?.isLoading;
  const companyName = companyInfo?.company.title;
  const companyUsers = companyInfo?.company.users;

  useEffect(() => {
    dispatch(getUsers(id));
  }, [dispatch, id]);

  const [isOpenAddUser, setOpenAddUser] = useState(false);

  const handlerOpenAddUser = () => setOpenAddUser(true);

  if (isLoading) {
    return <CircularProgress color="secondary" />;
  }

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#cfe8fc' }}>
          <Typography variant="h2" component="div" gutterBottom>
            Company: {companyName}
          </Typography>
          <Button id="add_user" type="button" onClick={handlerOpenAddUser}>
            Add User
          </Button>
        </Box>
        <Box>
          <Typography variant="h4" component="div" gutterBottom>
            Users
          </Typography>
          {companyUsers?.length &&
            companyUsers.map((user) => (
              <UserMemo
                key={user.id}
                name={user.username}
                email={user.email}
                id={user.id}
              />
            ))}
        </Box>
      </Container>
      {isOpenAddUser && <AddUserMemo setOpenAddUser={setOpenAddUser} />}
    </>
  );
};

export const CompanyPageMemo = memo(CompanyPage);
