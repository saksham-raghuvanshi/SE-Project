import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");


  const [user, setUser] = useState({});
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });


  const handleEmailChange = (event) => {
    setLoginEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setLoginPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      if (!loginEmail.endsWith("@thapar.edu")) {
        setError("Only @thapar.edu emails are allowed!");
        return;
      }
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else if (error.code === "auth/user-not-found") {
        setError("User not found.");
      } else if (error.code === "auth/wrong-password") {
        setError("Wrong password.");
      } else {
        setError(error.message);
      }
    }
  };

//   const handleLogout = async () => {
//     await signOut(auth);
//   };

  const logout = async () => {
    await signOut(auth);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    }
  });

  return (
    <div>
        <form className="login-form">
      <h3>Login</h3>
      <input
        type="email"
        placeholder="Email..."
        value={loginEmail}
        onChange={handleEmailChange}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password..."
        value={loginPassword}
        onChange={handlePasswordChange}
      />
      <div>
        <input
          type="checkbox"
          id="show-password"
          onChange={handleShowPassword}
        />
        <label htmlFor="show-password">Show password</label>
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
      <p>
        Create a new account <Link to="/register">Register</Link>
      </p>
      {/* {auth.currentUser && (
        <>
          <h4>User Logged In:</h4>
          <p>{auth.currentUser.email}</p>
          <button onClick={handleLogout}>Sign Out</button>
        </>
      )} */}

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
      </form>
    </div>
    
  );
}
