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
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { LogInMemo } from '../Login';
import { RegistrationMemo } from '../Registration';
import { logoutUser } from '../../redux/slices/loginSlice';

import { headerButton } from '../../style/style';
import { listsItemMenu, menuId } from '../constants';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isOpenRegistration, setOpenRegistration] = useState(false);
  const [isOpenLogin, setOpenLogin] = useState(false);
  const [menuElement, setMenuElement] = React.useState(null);
  const isMenuOpen = Boolean(menuElement);
  const isAccess = useSelector((state) => state.login.isAccess);

  const handleProfileMenuOpen = (event) => {
    setMenuElement(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuElement(null);
  };

  const renderMenu = (
    <Menu
      menuElement={menuElement}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {listsItemMenu.map((list) => (
        <MenuItem
          key={list.item_menu}
          onClick={() => {
            handleMenuClose();
            navigate(list.location);
          }}
        >
          {list.item_menu}
        </MenuItem>
      ))}
    </Menu>
  );

  const logOut = useCallback(() => {
    dispatch(logoutUser());
    navigate('/');
  }, [dispatch]);

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
                  <Button style={headerButton} id="sign-in" type="button" onClick={() => setOpenLogin(true)}>Sign in</Button>
                  <Button style={headerButton} id="out" type="button" onClick={() => setOpenRegistration(true)}>Registration</Button>
                </nav>
              )}
            </Toolbar>
          </Container>
        </AppBar>
        {renderMenu}
      </Box>
      {isOpenLogin && <LogInMemo setOpenLogin={setOpenLogin} />}
      {isOpenRegistration && <RegistrationMemo setOpenRegistration={setOpenRegistration} />}
    </>
  );
};
