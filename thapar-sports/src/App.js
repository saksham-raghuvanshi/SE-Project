//import logo from './logo.svg';
// import './App.css';
import Nav from "./components/Nav";
import Home from './components/Home';
import Aboutus from "./components/Aboutus";
import Facilities from './components/Facilities';
import Faculty from './components/Faculty';
import Achievements from './components/Achieve';
import Footer from "./components/Footer";
// import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

 


  return (

    

    
  
    <div className="App">


    <Router>
    <Nav/>
       
       <Routes>
       <Route exact path="/" element={<Home/>} >
        </Route>
        <Route exact path="/about-us" element={<Aboutus/>} >
        </Route>
        <Route exact path="/facilities" element={<Facilities/>} >
        </Route>
        <Route exact path="/faculty" element={<Faculty/>} >
        </Route>
        <Route exact path="/achievements" element={<Achievements/>} >
        </Route>
        {/* <Route exact path="/login" element={<Login/>} >
        </Route> */}

       </Routes>

    </Router>
   
  
    <div>
      <p>
        
      </p>
    </div>
    <Footer/>
    
    

    </div>
  );
}

export default App;
