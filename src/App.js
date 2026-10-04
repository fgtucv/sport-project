import { Routes, Route, Navigate } from 'react-router-dom';

import { IsMobileProvider } from './contexts/useIsMobile.jsx';

import { Header } from './components/Header/Header.jsx';
import { Footer } from "./components/Footer/Footer.jsx";

import { CreateEvent } from "./pages/CreateEventPage/CreateEvent";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { MyEvent } from "./pages/MyEventPage/MyEvent.jsx";
// import { userObject } from "./contexts/userStore/userStore.jsx";
import { Statistic } from "./pages/StatisticPage/Statistic.jsx";
import { useEffect } from 'react';
import { useUserStore } from './contexts/useUserStore.jsx';

function App() {
  const fetchUser = useUserStore((state) => state.fetchUser);

  useEffect(() => { fetchUser() }, [fetchUser]);

  return (
    <main className="main">
      <IsMobileProvider>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/create-event" element={<CreateEvent />} />

          <Route path="/my-events" element={<MyEvent />} />

          <Route path="/statistic" element={<Statistic />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </IsMobileProvider>
    </main>
  );
};

export default App;