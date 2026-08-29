import { Header } from './components/Header/Header';
import { Footer } from "./components/Footer/Footer";
import { Main } from "./pages/MainPage/Main";
import { MyEvent } from "./pages/MyEventPage/MyEvent";
import { CreateEvent } from "./pages/CreateEventPage/CreateEvent";
import { Statistic } from "./pages/StatisticPage/Statistic";

function App() {
  return (
    <div className="main">
      <Header/>
       {/* <Main/> */}
       {/* <MyEvent/> */}
       {/* <CreateEvent/> */}
       <Statistic/>
      <Footer/>
    </div>
  );
}

export default App;