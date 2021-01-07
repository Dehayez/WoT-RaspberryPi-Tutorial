import { default as React } from 'react';

import './layouts.scss';

const TutorialLayout = ({children}) => {
  return (
    <div className="tutorial">
  		<div className="tutorial__main">
  			{children}
  		</div>
    </div>
  );
};

export default TutorialLayout;
