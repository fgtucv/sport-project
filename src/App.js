import { Routes, Route, useLocation, } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// import { IsMobileProvider } from './contexts/useIsMobile.jsx';

import { Layout } from "./components/Layout/Layout.jsx";
import { LoadingPage } from './pages/LoadingPage/LoadingPage.jsx';
const CreateEvent = lazy(() => import("./pages/CreateEventPage/CreateEvent"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const MyEventPage = lazy(() => import("./pages/MyEventPage/MyEventPage.jsx"));
const SingleMyEventPage = lazy(() => import("./pages/SingleMyEventPage/SingleMyEventPage.jsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/Profile.jsx"));
const LoginPage = lazy(() => import("./pages/Authentication/pages/LoginPage/LoginPage.jsx"));
const RegisterPage = lazy(() => import("./pages/Authentication/pages/RegisterPage/RegisterPage.jsx"));
const Statistic = lazy(() => import("./pages/StatisticPage/Statistic.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>

        <Route path="*" element={<NotFoundPage />} />

        <Route element={<Layout />}>

          <Route path="/" element={<HomePage />} />

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
    </Suspense>
  );
};

export default App;