import React from 'react';
import './TabComponent.scss';

import TabSelector from './component/TabSelector/TabSelector';

const test = (input:string) => {
  console.log(input);
};

const TabSelectorProps = [
  {
    label: "Tab 1",
    onClick: () => test("Tab 1 Clicked!"),
  },
  {
    label: "Tab 2",
    onClick: () => test("Tab 2 Clicked!"),
  },
];
const TabComponent = () => {
  return (
    <div className="tab-component">
      <TabSelector 
      tabs={TabSelectorProps}/>
    </div>
  )
}

export default TabComponent;
