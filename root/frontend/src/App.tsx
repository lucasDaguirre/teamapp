import {Routes, Route, Navigate} from 'react-router';
import './App.scss';

/* Components */

import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import ContentContainer from './components/ContentContainer/ContentContainer';

/* Pages */
import PageHome from './pages/PageHome/PageHome';
import Page404 from './pages/Page404/Page404';

function App() {

  return (
    <>
      <div className="app-root">
        <div className="app-container">
          <AppHeader/>
          <div className="app-content">
            <ContentContainer>
              <Routes>

                {/* ROUTES */}
                <Route path="/home/*" element={<PageHome />} />
                <Route path="*" element={<Page404 />} />

                {/* RE ROUTES */}
                <Route path="/" element={<Navigate to="/home/"/>} />

              </Routes>
            </ContentContainer>
          </div>         
          <AppFooter/>
        </div>  
      </div>
    </>
  )
}

export default App
