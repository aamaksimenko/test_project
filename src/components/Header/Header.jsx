import React, {
  memo,
  useState,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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

  const logOut = useCallback(() => {
    localStorage.clear();
    dispatch(logoutUser());
  }, [dispatch]);

  return (
    <>
      <Box>
        <AppBar position="static" sx={{ backgroundColor: 'blueviolet' }}>
          <Toolbar>
            <Typography color="black" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">HOME</Link>
            </Typography>
            {(isAccess) ? (
              <nav className="header__menu">
                <Link to="/library">Library</Link>
                <Button style={headerButton} id="sign-out" type="button" onClick={logOut}>Log Out</Button>
              </nav>
            ) : (
              <nav className="header__menu">
                <Button style={headerButton} id="sign-in" type="button" onClick={() => setOpenL(true)}>Sign in</Button>
                <Button style={headerButton} id="out" type="button" onClick={() => setOpenR(true)}>Registration</Button>
              </nav>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Modal isOpen={openL} message={inputL} />
      <Modal isOpen={openR} message={inputR} />
    </>

  );
}

export default memo(Header);
