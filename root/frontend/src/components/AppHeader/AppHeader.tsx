import React from 'react';
import './AppHeader.scss';
import Navigation from '../Navigation/Navigation';

const NavData = {
  links: [
  {
    label: "Home",
    to: "/home",
  },
  {
    label: "Shifts",
    to: "/shifts",
  },
  {
    label: "Team",
    to: "/team",
  },
  {
    label: "Settings",
    to: "/settings",
  },
  ]
}


const AppHeader = () => {
  return (
    <div className="app-header">
      <Navigation {...NavData}/>
    </div>
  )
}

export default AppHeader;



