import React from 'react';
import './TeamList.scss';

import List from '../../../../components/List/List';

// DATA HANDLE
import TeamData from './TeamData.json'; // 
import TabComponent from '../../../../components/TabComponent/TabComponent';


const TeamList = () => {
  console.log(TeamData)
  return (
    <div className="team-list">
      <TabComponent></TabComponent>
      <List data={TeamData}></List>
    </div>
  )
}

export default TeamList;