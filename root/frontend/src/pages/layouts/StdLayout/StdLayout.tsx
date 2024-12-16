import React from 'react';
import { Outlet } from 'react-router';
import './StdLayout.scss';

/* Layout Imports */
import AppHeader from '../../../components/AppHeader/AppHeader';
import AppFooter from '../../../components/AppFooter/AppFooter';
import ContentContainer from '../../../components/ContentContainer/ContentContainer';

const StdLayout = () => {
  return (
    <div className="std-layout">
      <AppHeader/>
      <ContentContainer>
        <Outlet/>
      </ContentContainer>
      <AppFooter/>
    </div>
  )
}

export default StdLayout;