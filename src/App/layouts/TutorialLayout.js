import { default as React } from 'react';

import { MainNavigation, Problem } from '../components'

import './TutorialLayout.scss';

const TutorialLayout = ({children}) => {
  return (
    <div className="tutorial">
      <MainNavigation />
      <Problem />
  		<div className="tutorial__main">
  			{children}
  		</div>
    </div>
  );
};

export default TutorialLayout;
