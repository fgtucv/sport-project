import { Routes, Route, useLocation, } from 'react-router-dom';

// import { IsMobileProvider } from './contexts/useIsMobile.jsx';

import { Layout } from './components/Layout/Layout.jsx';
import { CreateEvent } from "./pages/CreateEventPage/CreateEvent";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { MyEventPage } from "./pages/MyEventPage/MyEventPage.jsx";
import { SingleMyEventPage } from "./pages/SingleMyEventPage/SingleMyEventPage.jsx";
import { ProfilePage } from "./pages/ProfilePage/Profile.jsx";
import { LoginPage } from "./pages/Authentication/pages/LoginPage/LoginPage.jsx";
import { RegisterPage } from "./pages/Authentication/pages/RegisterPage/RegisterPage.jsx";
import { Statistic } from "./pages/StatisticPage/Statistic.jsx";
import { lazy } from 'react';
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));

const isAuth = false;

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<NotFoundPage/>}/>

        <Route path="/sport-project" element={<HomePage />} />

        <Route path="/create-event" element={<CreateEvent />} />

        <Route path="/my-events" element={<MyEventPage />} />

        <Route path="/statistic" element={<Statistic />} />

        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}

        <Route path="/my-events/:eventId" element={<SingleMyEventPage />} />

        <Route path="/profile" element={<ProfilePage />} />

      </Route>

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default App;