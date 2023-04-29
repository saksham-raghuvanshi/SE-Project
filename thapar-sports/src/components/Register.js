import React from 'react'
import { Link } from "react-router-dom";

import { useState } from "react";
import "./CSS/Login.css"

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // Your registration logic here
    if (email === "" || password === "" || confirmPassword === "") {
      setError("Please enter all fields");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      // Registration logic goes here...
    }
  };

  return (
    <form className="login-form" onSubmit={handleRegister}>
      <h3>Register</h3>
      <input
        type="email"
        placeholder="Email..."
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password..."
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Confirm password..."
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <div>
        <input
          type="checkbox"
          id="show-password"
          onChange={handleShowPassword}
        />
        <label htmlFor="show-password">Show password</label>
      </div>
      <button type="submit">Register</button>
      {error && <p className="error">{error}</p>}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}

export default Register;
