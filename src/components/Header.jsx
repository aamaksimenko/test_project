import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
      </div>
    </header>
  );
}

export default memo(Header);
