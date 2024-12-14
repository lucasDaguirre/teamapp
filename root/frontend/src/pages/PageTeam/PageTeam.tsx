import React from 'react';
import './PageTeam.scss';

import TeamList from './components/TeamList/TeamList';

const PageTeam = () => {
  return (
    <div className="page-team">
      <TeamList/>
    </div>
  )
}

export default PageTeam;