import React, { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  Container,
  Box,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';

import { AddUserMemo } from '../../components/AddUser';
import { UserMemo } from '../../components/User';
import { getUser } from '../../redux/slices/getUsersInCompanySlice';

const CompanyPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const getCompanyInfo = useSelector((state) => state.getUsersCompany);
  const isLoading = getCompanyInfo?.isLoading;
  const companyName = getCompanyInfo?.company.title;
  const companyUsers = getCompanyInfo?.company.users;

  useEffect(() => {
    dispatch(getUser(location.pathname.slice(14)));
  }, [dispatch, location]);

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
            companyUsers.map((item) => (
              <UserMemo
                key={item.id}
                name={item.username}
                email={item.email}
                id={item.id}
              />
            ))}
        </Box>
      </Container>
      {isOpenAddUser && <AddUserMemo setOpenAddUser={setOpenAddUser} />}
    </>
  );
};

export const CompanyPageMemo = memo(CompanyPage);
