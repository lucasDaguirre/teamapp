import React from 'react';
import './TabComponent.scss';

import TabSelector from './component/TabSelector/TabSelector';


// HARDCODE START

const test = (input:string) => {
  console.log(input);
};

const tabs = [
  {
    label: "Tab 1",
    onClick: () => test("Tab 1 Clicked!"),
  },
  {
    label: "Tab 2",
    onClick: () => test("Tab 2 Clicked!"),
  },
];

// HARDCODE END

const TabComponent = () => {
  return (
    <div className="tab-component">
      <TabSelector 
      tabs={tabs}/>
    </div>
  )
}

export default TabComponent;
