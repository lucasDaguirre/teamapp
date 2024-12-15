import React from 'react';
import './PageHome.scss';
import Card from '../../components/Card/Card';

const PageHome = () => {
  return (
    <div className="page-home">
      <Card title={{
        text: "Title",
        size: "h3",
      }}/>
    </div>
  )
}

export default PageHome;