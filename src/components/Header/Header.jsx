import React, {
  useState,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { LogInMemo } from '../Login';
import { RegistrationMemo } from '../Registration';
import { logoutUser } from '../../redux/slices/loginSlice';

import { headerButton } from '../../style/style';
import { menuId } from '../constants';
import { HeaderMenuMemo } from '../HeaderMenu';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpenRegistration, setOpenRegistration] = useState(false);
  const [isOpenLogin, setOpenLogin] = useState(false);
  const [menuElement, setMenuElement] = useState(null);
  const isAccess = useSelector((state) => state.login.isAccess);

  const handleProfileMenuOpen = (event) => {
    setMenuElement(event.currentTarget);
  };

  const logOut = useCallback(() => {
    dispatch(logoutUser());
    navigate('/');
  }, [dispatch]);

  const handlerOpenRegistration = () => setOpenRegistration(true);
  const handlerOpenLogin = () => setOpenLogin(true);

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
                  <Button style={headerButton} id="library" type="button">
                    <Link to="/library">Library</Link>
                  </Button>
                  <Button style={headerButton} id="sign-out" type="button" onClick={logOut}>Log Out</Button>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </nav>
              ) : (
                <nav className="header__menu">
                  <Button style={headerButton} id="sign-in" type="button" onClick={handlerOpenLogin}>Sign in</Button>
                  <Button style={headerButton} id="out" type="button" onClick={handlerOpenRegistration}>Registration</Button>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </nav>
              )}
            </Toolbar>
          </Container>
        </AppBar>
        <HeaderMenuMemo menuElement={menuElement} setMenuElement={setMenuElement} />
      </Box>
      {isOpenLogin && <LogInMemo setOpenLogin={setOpenLogin} />}
      {isOpenRegistration && <RegistrationMemo setOpenRegistration={setOpenRegistration} />}
    </>
  );
};
