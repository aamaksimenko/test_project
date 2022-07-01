import React, {
  memo,
  useState,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import { logoutUser } from '../../redux/slices/loginSlice';

import {
  header,
  headerDiv,
  headerButton,
} from '../../style/style';

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
    <header style={header}>
      <div
        style={headerDiv}
      >
        <Link to="/">Home</Link>

        {(isAccess) ? (
          <nav className="header__menu">
            <Link to="/library">Library</Link>
            <button style={headerButton} id="sign-out" type="button" onClick={logOut}>Log Out</button>
          </nav>
        ) : (
          <nav className="header__menu">
            <button style={headerButton} id="sign-in" type="button" onClick={() => setOpenL(true)}>Sign in</button>
            <button style={headerButton} id="out" type="button" onClick={() => setOpenR(true)}>Registration</button>
          </nav>
        )}

      </div>
      <Modal isOpen={openL} message={inputL} />
      <Modal isOpen={openR} message={inputR} />
    </header>
  );
}

export default memo(Header);
