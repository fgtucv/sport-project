import { IsMobileProvider } from './contexts/IsMobileContext/IsMobileContext.jsx';
import { Header } from './components/Header/Header.jsx';
import { Footer } from "./components/Footer/Footer.jsx";
import { CreateEvent } from "./pages/CreateEventPage/CreateEvent";
import { HomePage } from "./pages/HomePage/HomePage.jsx"

function App() {

  return (
    <div className="main">
      <IsMobileProvider>
        <Header />
        <CreateEvent />
        <HomePage />
        <Footer />
      </IsMobileProvider>
    </div>
  );
}

export default App;