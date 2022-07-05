import React, {
  memo,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
} from '@mui/material';

import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import { logoutUser } from '../../redux/slices/loginSlice';

import { headerButton } from '../../style/style';

function Header() {
  const dispatch = useDispatch();
  const [openR, setOpenR] = useState(false);
  const [openL, setOpenL] = useState(false);
  const isAccess = useSelector((state) => state.login.isAccess);

  const inputL = (
    <Login setOpenL={setOpenL} />
  );
  const inputR = (
    <Registration setOpenR={setOpenR} />
  );

  return (
    <>
      <Box>
        <AppBar position="static" sx={{ backgroundColor: 'blueviolet' }}>
          <Container maxWidth="xl">
            <Toolbar>
              <Typography color="black" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">HOME</Link>
              </Typography>
              {(isAccess) ? (
                <nav className="header__menu">
                  <Link to="/library">Library</Link>
                  <Button style={headerButton} id="sign-out" type="button" onClick={() => dispatch(logoutUser())}>Log Out</Button>
                </nav>
              ) : (
                <nav className="header__menu">
                  <Button style={headerButton} id="sign-in" type="button" onClick={() => setOpenL(true)}>Sign in</Button>
                  <Button style={headerButton} id="out" type="button" onClick={() => setOpenR(true)}>Registration</Button>
                </nav>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Modal isOpen={openL} message={inputL} />
      <Modal isOpen={openR} message={inputR} />
    </>
  );
}

export default memo(Header);
