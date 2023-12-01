import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Advertiser from './components/Advertiser';
import Subscriber from "./components/Subscriber"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/advertiser"element={<Advertiser/>} />
      <Route path="/subscriber"element={<Subscriber/>} />
      </Routes>
    </div>
  );
}

export default App;
