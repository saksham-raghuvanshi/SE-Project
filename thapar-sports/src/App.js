//import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/header";
import Jumbotron from "./components/Jumbotron";
import News from "./components/News";
import Achievements from './components/Achievements';
//import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
function App() {
  return (
  
    <div className="App">

    <Nav/>
    <Header/>
    <Jumbotron/>
    <News/>
    <Achievements/>
    <div>
      <p>
        
      </p>
    </div>
    <Footer/>
    
    

    </div>
  );
}

export default App;
