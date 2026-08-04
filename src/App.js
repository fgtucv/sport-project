import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from "./components/Footer/Footer";
import { Main } from "./pages/MainPage/Main";

function App() {
  return (
    <div className="test">
      <Header/>
       <Main/>
      <Footer/>
    </div>
  );
}

export default App;