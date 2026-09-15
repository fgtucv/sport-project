import { Header } from './components/Header/Header.jsx';
import { Footer } from "./components/Footer/Footer.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { MyEvent } from "./pages/MyEventPage/MyEvent";
import { CreateEvent } from "./pages/CreateEventPage/CreateEvent";
import { Statistic } from "./pages/StatisticPage/Statistic";

if (JSON.parse(localStorage.getItem("userId"))) {

} else {
  localStorage.setItem("userId", JSON.stringify( "usr-bosla-097"))
}

function App() {
  return (
    <div className="main">
      <Header/>
       {/* <HomePage/> */}
       <MyEvent/>
       {/* <CreateEvent/> */}
       {/* <Statistic/> */}
      <Footer/>
    </div>
  );
}

export default App;