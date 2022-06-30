import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

import './Header.css';

function Header() {
  const [openR, setOpenR] = useState(false);
  const [openL, setOpenL] = useState(false);
  const inputL = (
    <Login setOpenL={setOpenL} />
  );
  const inputR = (
    <Registration setOpenR={setOpenR} />
  );

  return (
    <header className="header">
      <div
        className="header"
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>

        <nav className="header__menu">
          <button id="sign-in" type="button" onClick={() => setOpenL(true)}>Sign in</button>
          <button id="out" type="button" onClick={() => setOpenR(true)}>Registration</button>
        </nav>
        <Modal isOpen={openL} message={inputL} />
        <Modal isOpen={openR} message={inputR} />

      </div>
    </header>
  );
}

export default memo(Header);
