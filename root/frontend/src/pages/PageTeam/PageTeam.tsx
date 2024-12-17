import React from 'react';
import './PageTeam.scss';

import TeamList from './components/TeamList/TeamList';
import Dropdown from '../../components/Dropdown/Dropdown';

const PageTeam = () => {
  return (
    <div className="page-team">
      <TeamList/>
      <br />
      <br />
      <Dropdown/>
    </div>
  )
}

export default PageTeam;