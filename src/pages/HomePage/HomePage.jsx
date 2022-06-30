import React, { memo } from 'react';

import './HomePage.css';

function HomePage() {
  return (
    <header className="home">
      <div style={{
        fontSize: '50px',
      }}
      >
        Home
      </div>
    </header>
  );
}

export default memo(HomePage);
