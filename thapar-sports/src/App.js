//import logo from './logo.svg';
// import './App.css';
import { useContext } from "react";
import Login from "./firebase_setup/Login";
import Dashboard from "./firebase_setup/Dashboard";
import Nav from "./components/Nav";
import Home from './components/Home';
import Aboutus from "./components/Aboutus";
import Facilities from './components/Facilities';
import Faculty from './components/Faculty';
import Achievements from './components/Achieve';
import Profile from "./components/Profile";
import Dashboard1 from "./components/dashboard";
import Register from "./firebase_setup/Register.js";
import { useAuth } from "./firebase_setup/auth.js";
import Invoices from "./firebase_setup/Dashboard.js";
import Invoice from "./firebase_setup/Invoice.js";
import Data from "./firebase_setup/Data.js";
import UserContextProvider from "./firebase_setup/UserContext.js";
import { signOut } from "firebase/auth";





import Footer from "./components/Footer";






import {
  BrowserRouter as Router,Navigate,
  Routes,
  Route,
} from "react-router-dom";



import { AuthProvider } from "./firebase_setup/auth";

export default function App(UserContextProvider) {
  const user = useContext(UserContextProvider);
  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };




 


  return (

    

    
  
    <div className="App">

<Router>
  <Routes>
  <Route exact path="/dashboard2" element={<Dashboard1/>} >
        </Route>
  </Routes>
</Router>

<Router>
{/* <Routes>
          
</Router>
<Router> */}


<Routes>

{/* <Container
className="d-flex align-items-center justify-content-center"
style={{ minHeight: "100vh" }}
>
<div className="w-100" style={{ maxWidth: "400px" }}> 
    
    <Route exact path="/dashboard" element={Dashboard} />
       <Route path="/update-profile" element={UpdateProfile} />
       <Route path="/signup" element={Signup} />
       <Route path="/login" element={Login} />
       <Route path="/forgot-password" element={ForgotPassword} />

       </div>
</Container> */}


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
    


        
      

        
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/signOut" element={<signOut/>} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="invoices" element={<Invoices />}>
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          /> 


       
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