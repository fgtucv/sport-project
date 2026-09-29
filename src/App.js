import { Routes, Route, Navigate } from 'react-router-dom';

import { IsMobileProvider } from './contexts/IsMobileContext/IsMobileContext.jsx';
import { LoginedUserProvider } from "./contexts/UserContext/UserContext.jsx";

import { Header } from './components/Header/Header.jsx';
import { Footer } from "./components/Footer/Footer.jsx";

import { CreateEvent } from "./pages/CreateEventPage/CreateEvent";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { MyEvent } from "./pages/MyEventPage/MyEvent.jsx";
import { Statistic } from "./pages/StatisticPage/Statistic.jsx";

function App() {
  return (
    <div className="main">
      <IsMobileProvider>
        <LoginedUserProvider>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/create-event" element={<CreateEvent />} />

            <Route path="/my-events" element={<MyEvent />} />

            <Route path="/statistic" element={<Statistic />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <Footer />
        </LoginedUserProvider>
      </IsMobileProvider>
    </div>
  );
}

export default App;