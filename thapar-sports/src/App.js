//import logo from './logo.svg';
// import './App.css';
//import { useSatate, useEffect } from "react";

import Nav from "./components/Nav";
import Home from './components/Home';
import Aboutus from "./components/Aboutus";
import Facilities from './components/Facilities';
import Faculty from './components/Faculty';
import Achievements from './components/Achieve';
import Profile from "./components/Profile";
import Dashboard from "./components/dashboard";

import Footer from "./components/Footer";
// import { useState } from "react";
// import { signOut } from "firebase/auth";
// import { auth } from "./Firebase/firebase-config";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Events from "./components/Events";
import Contactus from "./components/Contactus";

// import {db} from './Firebase/firebase-config'
// import {collection, getDocs} from "firebase/firestore";



 
 function App(){

//   const [users, setUsers]= useSatate([]);
//   const userCollectionRef = collection(db,"users")
//   useEffect(() =>{
    
//     const getUsers = async() => {
//       const data = await getDocs(userCollectionRef);
//       console.log(data);

//     }

//     getUsers()
//   },[])

  
  return (

    

    
  
    <div className="App">

<Router>
  <Routes>
  <Route exact path="/dashboard" element={<Dashboard/>} >
        </Route>
  </Routes>
</Router>

<Router>
{/* <Routes>
          
</Router>
<Router> */}


<Routes>




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
        <Route exact path="/events" element={<Events/>} >
        </Route>
        <Route exact path="/profile" element={<Profile/>} >
        </Route>
        <Route exact path="/login" element={<Login/>} >
        </Route>
        <Route exact path="/register" element={<Register/>} >
        </Route>
        <Route exact path="/contact-us" element={<Contactus/>} >
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