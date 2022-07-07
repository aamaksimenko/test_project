import React, {
  memo,
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

import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import { logoutUser } from '../../redux/slices/loginSlice';

import { headerButton } from '../../style/style';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openR, setOpenR] = useState(false);
  const [openL, setOpenL] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isAccess = useSelector((state) => state.login.isAccess);
  const listMenu = [
    ['User Page', '/user_page'],
    ['Company page', '/company_page'],
    ['Companies', '/companies'],
  ];

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
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
      {listMenu.map((item) => (
        <MenuItem
          key={item[0]}
          onClick={() => {
            handleMenuClose();
            navigate(item[1]);
          }}
        >
          {item[0]}
        </MenuItem>
      ))}
    </Menu>
  );

  const inputL = (
    <Login setOpenL={setOpenL} />
  );
  const inputR = (
    <Registration setOpenR={setOpenR} />
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
                  <Button style={headerButton} id="sign-in" type="button" onClick={() => setOpenL(true)}>Sign in</Button>
                  <Button style={headerButton} id="out" type="button" onClick={() => setOpenR(true)}>Registration</Button>

                </nav>
              )}
            </Toolbar>
          </Container>
        </AppBar>
        {renderMenu}
      </Box>
      <Modal isOpen={openL} message={inputL} />
      <Modal isOpen={openR} message={inputR} />
    </>
  );
}

export default memo(Header);
