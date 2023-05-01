import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import Login from "./components/Login";
import Register from "./components/Register";
import Events from "./components/Events";
import Contactus from "./components/Contactus";
import Details from "./components/Details";
import Topbar from "./components/Topbar";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  return (  
    <div className="App">
      
{/* 
<Router>
<Routes>
<Route exact path="/dashboard" element={<Dashboard/>} >
</Route>            
</Routes>
</Router>
<Router>
<Routes>       
</Router>
<Router>
<Routes>
</Routes>
</Router>

    <Router>
    <Topbar/>
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
<Details/>
    <Footer/>
    </Router>
     */}



<Router>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact
          path="/"
          element={
            <>
            <Topbar/>
            <Nav/>
              <main>
                <Routes>
                <Route exact path="/" element={<Home/>} />
                </Routes>
              </main>
              <Details/>
              <Footer />
            </>
          }
        />

<Route
          exact path="/about-us"
          element={
            <>
            <Topbar/>
            <Nav/>
              <main>
                <Routes>
                <Route exact path="/" element={<Aboutus/>} />
                </Routes>
              </main>
              <Details/>
              <Footer />
            </>
          }
        />


<Route
          exact path="/facilities"
          element={
            <>
            <Topbar/>
            <Nav/>
              <main>
                <Routes>
                <Route exact path="/" element={<Facilities/>} />
                </Routes>
              </main>
              <Details/>
              <Footer />
            </>
          }
        />   

<Route
          exact path="/faculty"
          element={
            <>
            <Topbar/>
            <Nav/>
              <main>
                <Routes>
                <Route exact path="/" element={<Faculty/>} />
                </Routes>
              </main>
              <Details/>
              <Footer />
            </>
          }
        />   


<Route
          exact path="/achievements"
          element={
            <>
            <Topbar/>
            <Nav/>
              <main>
                <Routes>
                <Route exact path="/" element={<Achievements/>} />
                </Routes>
              </main>
              <Details/>
              <Footer />
            </>
          }
        />                       

<Route
          exact path="/events"
          element={
            <>
            <Topbar/>
            <Nav/>
              <main>
                <Routes>
                <Route exact path="/" element={<Events/>} />
                </Routes>
              </main>
              <Details/>
              <Footer />
            </>
          }
        /> 



<Route
          exact path="/profile"
          element={
            <>
            <Topbar/>
            <Nav/>
              <main>
                <Routes>
                <Route exact path="/" element={<Profile/>} />
                </Routes>
              </main>
              <Details/>
              <Footer />
            </>
          }
        /> 
      

      <Route
          exact path="/login"
          element={
            <>
            <Topbar/>
            <Nav/>
              <main>
                <Routes>
                <Route exact path="/" element={<Login/>} />
                </Routes>
              </main>
              <Details/>
              <Footer />
            </>
          }
        /> 
    
    <Route
          exact path="/register"
          element={
            <>
            <Topbar/>
            <Nav/>
              <main>
                <Routes>
                <Route exact path="/" element={<Register/>} />
                </Routes>
              </main>
              <Details/>
              <Footer />
            </>
          }
        /> 

       <Route
          exact path="/contact-us"
          element={
            <>
            <Topbar/>
            <Nav/>
              <main>
                <Routes>
                <Route exact path="/" element={<Contactus/>} />
                </Routes>
              </main>
              <Details/>
              <Footer />
            </>
          }
        />           
        
      </Routes>
    </Router>
    
    

    </div>
  );
        
        }
        export default App;