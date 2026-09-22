import { lazy, Suspense, useState } from 'react';
import { Header } from './components/Header/Header.jsx';
import { Footer } from "./components/Footer/Footer.jsx";
import { CreateEvent } from "./pages/CreateEventPage/CreateEvent";
// import { AuthModal } from "./components/AuthModal/AuthModal.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx"

// const AuthModal = lazy(() => import("./components/AuthModal/AuthModal.jsx"));

// if (!JSON.parse(localStorage.getItem("isLogin"))) {

// } else {
//   localStorage.setItem("userId", JSON.stringify("usr-bosla-097"))
// }

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(JSON.parse(localStorage.getItem("isAuthenticated")));

  return (
    <div className="main">
      <Header />
      {/* {!isAuthenticated && (<Suspense fallback={null}><AuthModal/></Suspense>)} */}
      <CreateEvent/>
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;