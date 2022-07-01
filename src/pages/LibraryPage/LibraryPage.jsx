import React, { memo } from 'react';

import { styleLibraryPage } from '../../style/style';

function LibraryPage() {
  return (
    <div className="content-page" style={styleLibraryPage}>
      library
    </div>
  );
}

export default memo(LibraryPage);
