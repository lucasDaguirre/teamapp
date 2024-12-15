import React from 'react';
import './TeamList.scss';

import Table from '../../../../components/Table/Table';

// HARDCODE START
import TeamData from './TeamData.json';
// HARDCODE END

const TeamList = () => {
  console.log(TeamData)
  return (
    <div className="team-list">
      <Table data={TeamData}></Table>
    </div>
  )
}

export default TeamList;