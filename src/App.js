import { Header } from './components/Header/Header.jsx';
import { Footer } from "./components/Footer/Footer.jsx";
// import { CreateEvent } from "./pages/CreateEventPage/CreateEvent";
import { HomePage } from "./pages/HomePage/HomePage.jsx"
if (JSON.parse(localStorage.getItem("userId"))) {

} else {
  localStorage.setItem("userId", JSON.stringify( "usr-bosla-097"))
}

function App() {
  return (
    <div className="main">
      <Header/>
       <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;