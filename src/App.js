import { Header } from './components/Header/Header';
import { Footer } from "./components/Footer/Footer";
import { Main } from "./pages/MainPage/Main";
import { MyEvent } from "./pages/MyEventPage/MyEvent";
import { CreateEvent } from "./pages/CreateEventPage/CreateEvent";

function App() {
  return (
    <div className="test">
      <Header/>
       {/* <Main/> */}
       <MyEvent/>
       {/* <CreateEvent/> */}
      <Footer/>
    </div>
  );
}

export default App;