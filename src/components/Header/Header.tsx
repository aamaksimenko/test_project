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
  const isAccess = useSelector((state) => (state as any).login.isAccess);

  const handleProfileMenuOpen = (event: any) => {
    setMenuElement(event.currentTarget);
  };

  const logOut = useCallback(() => {
    dispatch(logoutUser());
    navigate('/');
  }, [dispatch]);

  const handlerOpenRegistration = () => setOpenRegistration(true);
  const handlerOpenLogin = () => setOpenLogin(true);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Box>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <AppBar position="static" sx={{ backgroundColor: 'blueviolet' }}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Container maxWidth="xl">
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Toolbar>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Typography color="black" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Link to="/">HOME</Link>
              </Typography>
              {(isAccess) ? (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <nav className="header__menu">
                  {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <Button style={headerButton} id="sign-out" type="button" onClick={logOut}>Log Out</Button>
                  {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <AccountCircle />
                  </IconButton>
                </nav>
              ) : (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <nav className="header__menu">
                  {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <Button style={headerButton} id="sign-in" type="button" onClick={handlerOpenLogin}>Sign in</Button>
                  {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                  <Button style={headerButton} id="out" type="button" onClick={handlerOpenRegistration}>Registration</Button>
                </nav>
              )}
            </Toolbar>
          </Container>
        </AppBar>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <HeaderMenuMemo menuElement={menuElement} setMenuElement={setMenuElement} />
      </Box>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      {isOpenLogin && <LogInMemo setOpenLogin={setOpenLogin} />}
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      {isOpenRegistration && <RegistrationMemo setOpenRegistration={setOpenRegistration} />}
    </>
  );
};
