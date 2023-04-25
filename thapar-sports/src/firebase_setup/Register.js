import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "./auth";

const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // we need this to keep track if user has submitted the form or not
  const [signUpStarted, setSignupStarted] = useState(false);
  const { signUp, user, error, setError } = useAuth();
  const startSignup = async (e) => {
    e.preventDefault();
    setError(null);
    // once startSignup has been called set signUpStarted to be true
    setSignupStarted(true);
    await signUp(userEmail, userPassword);

    setSignupStarted(false);
  };
  console.log(user);
  return (
    <form className="login" onSubmit={startSignup}>
      <label>Email Address</label>
      <input
        type="email"
        placeholder="abc@thapar.edu"
        onChange={(e) => {
          setUserEmail(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setUserPassword(e.target.value);
        }}
      />
      <button
        // disable this button once signup hAS started so users dont submit the form twice
        disabled={signUpStarted}
        className="register-btn"

        // wont do anything, buttons in a form would always||automaticaLLY SUBMIT A FORM
        // onClick={UserContextProvider.signUp}
      >
        {!signUpStarted ? "REGISTER ACCOUNT" : "Creating Account"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>
        Have an account? <Link to="/login">Sign In</Link>
      </p>
      {/* <p>
        Jump to dash <Link to="/dashboard">Dashboard</Link>
      </p> */}
    </form>
  );
};

export default Register;
