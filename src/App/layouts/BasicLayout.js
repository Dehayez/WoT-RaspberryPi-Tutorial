import { default as React } from 'react';

import { MainNavigation } from '../components'

import './layouts.scss';

const BasicLayout = ({children}) => {
  return (
    <div className="basic">
      <MainNavigation />
		  {children}
    </div>
  );
};

export default BasicLayout;
