import React, { memo } from 'react';

import './HomePage.css';
import { styleHomePage, styleHomePageText } from '../../style/style';

function HomePage() {
  return (
    <header style={styleHomePage}>
      <div style={styleHomePageText}>
        Home
      </div>
    </header>
  );
}

export default memo(HomePage);
