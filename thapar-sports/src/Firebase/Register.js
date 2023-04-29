import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-config";
import "../components/CSS/Login.css";

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async () => {
    try {
        if (!registerEmail.endsWith('@thapar.edu')) {
            setError('Only @thapar.edu emails are allowed!');
            return;
          }

      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setError("An account with this email already exists");
        } else {
          setError(error.message);
        }
      }
  };

  return (
    <div>
        <form className="login-form">
      <h3>Register User</h3>
      <input
        type="email"
        placeholder="Email..."
        value={registerEmail}
        onChange={handleEmailChange}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password..."
        value={registerPassword}
        onChange={handlePasswordChange}
      />
      <button onClick={handleRegister}>Create User</button>
      <div>
        <input type="checkbox" id="show-password" onChange={handleShowPassword} />
        <label htmlFor="show-password">Show password</label>
      </div>
      {error && <p className="error">{error}</p>}

      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
      </form>

    </div>
  );
}


