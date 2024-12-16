import {Routes, Route, Navigate} from 'react-router';
import './App.scss';

/* Layouts */
import AuthLayout from './pages/layouts/AuthLayout/AuthLayout';
import StdLayout from './pages/layouts/StdLayout/StdLayout';

/* Pages */
import PageHome from './pages/PageHome/PageHome';
import Page404 from './pages/Page404/Page404';
import PageTeam from './pages/PageTeam/PageTeam';
import PageProfile from './pages/PageProfile/PageProfile';
import PageLogin from './pages/PageLogin/PageLogin';
import PageCreateAccount from './pages/PageCreateAccount/PageCreateAccount';

function App() {

  return (
    <div className="app-root">

        <Routes>

          {/* AUTH LAYOUTS */}
          
          <Route path="/" element={<AuthLayout />}>

            <Route path="login" element={<PageLogin />} />
            <Route path="create-account" element={<PageCreateAccount />} />
          
          </Route>

          {/* STANDARD LAYOUTS */}
          
          <Route path="/" element={<StdLayout />}>

            {/* ROUTES */}

            <Route path="home" element={<PageHome />} />
            <Route path="team" element={<PageTeam />} />
            <Route path="profile" element={<PageProfile />} />

            {/* RE ROUTES */}
            
            <Route path="*" element={<Page404 />} />
            <Route path="/" element={<Navigate to="/home" replace />} />
            
          </Route>

        </Routes>
        
    </div>
  )
}

export default App
