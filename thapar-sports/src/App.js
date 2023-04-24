//import logo from './logo.svg';
// import './App.css';
import Nav from "./components/Nav";
import Home from './components/Home';
import Aboutus from "./components/Aboutus";
import Facilities from './components/Facilities';
import Faculty from './components/Faculty';
import Achievements from './components/Achieve';
import Profile from "./components/Profile";
import Dashboard from "./components/dashboard";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

 


  return (

    

    
  
    <div className="App">

<Router>
  <Routes>
  <Route exact path="/dashboard" element={<Dashboard/>} >
        </Route>
  </Routes>
</Router>

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
        <Route exact path="/profile" element={<Profile/>} >
        </Route>
  


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
