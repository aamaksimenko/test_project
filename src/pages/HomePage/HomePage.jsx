import React, { memo } from 'react';

import { styleHomePage } from '../../style/style';

function HomePage() {
  return (
    <div className="content-page" style={styleHomePage}>
      Home
    </div>
  );
}

export default memo(HomePage);
