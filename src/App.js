import { lazy, Suspense, useEffect } from 'react';

import { Routes, Route, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Toaster } from 'sonner';

import { setSession } from './redux/slices/authSlice/authSlice.js';
import { getProfileThunk } from './redux/slices/authSlice/authThunks.js';

import { subscribeToAuthService, SignInService } from './api/services/authService.js';

import { Layout } from "./components/Layout/Layout.jsx";
import { LoadingPage } from './pages/LoadingPage/LoadingPage.jsx';


const CreateEvent = lazy(() => import("./pages/CreateEventPage/CreateEventPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const MyEventPage = lazy(() => import("./pages/MyEventPage/MyEventPage.jsx"));
const SingleMyEventPage = lazy(() => import("./pages/SingleMyEventPage/SingleMyEventPage.jsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/Profile.jsx"));
const LoginPage = lazy(() => import("./pages/Authentication/pages/LoginPage/LoginPage.jsx"));
const RegisterPage = lazy(() => import("./pages/Authentication/pages/RegisterPage/RegisterPage.jsx"));
const Statistic = lazy(() => import("./pages/StatisticPage/Statistic.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));

// function test() {
//   SignInService({ email: "fgtucv947@gamil.com", password: "SuperSigma977"})
// }

// test()

function App() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.session?.user?.id);

  useEffect(() => {
    return subscribeToAuthService(dispatch, setSession)
  }, [dispatch]);

  useEffect(() => {
    if (userId) dispatch(getProfileThunk(userId));
  }, [userId, dispatch])

  return (
    <Suspense fallback={<LoadingPage />}>
      <Toaster position='top-right' richColors closeButton/>
      <Routes>
        <Route path="/loading" element={<LoadingPage/>}/>

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

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;