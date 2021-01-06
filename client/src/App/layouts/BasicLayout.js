import { default as React } from 'react';

import './layouts.scss';

const BasicLayout = ({children}) => {
  return (
    <div className="basic">
		{children}
    </div>
  );
};

export default BasicLayout;
