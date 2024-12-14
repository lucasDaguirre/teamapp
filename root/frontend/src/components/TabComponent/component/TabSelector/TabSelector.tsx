import React from 'react';
import './TabSelector.scss';

type TabSelectorProps = {
  tabs: {
    label: string; 
    onClick: React.MouseEventHandler<HTMLButtonElement>
  }[];
}

const TabSelector = ({
  tabs,

}: TabSelectorProps) => {
  return (
    <div className="tab-selector">
      {tabs.map((e, index) => (
        <button 
          key={index} 
          onClick={e.onClick}
          >{e.label}
        </button>
      ))}
    </div>
  )
}

export default TabSelector;