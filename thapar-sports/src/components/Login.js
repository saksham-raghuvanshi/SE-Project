import { useState } from "react";
import "./CSS/Login.css"
import { Link } from "react-router-dom";
import { signIn } from "../services/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [rollNo,setRollNo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRollNoChange = (event) => {
    setRollNo(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    // Your login logic here
    if (email === "" || password === "" || rollNo === "") {
      setError("Please enter email, roll number and password");
    } else {
      setError("");
      const result = await signIn(email, rollNo, password);
      console.log(result);
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <h3>Login</h3>
      <input
        type="email"
        placeholder="Email..."
        value={email}
        onChange={handleEmailChange}
      />
      <br />
      <h5>OR sign in with your Roll No</h5>
      <br />
      <input
        type="number"
        placeholder="TIET Roll No"
        value={rollNo}
        onChange={handleRollNoChange}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password..."
        value={password}
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
      <button type="submit">Login</button>
      {error && <p className="error">{error}</p>}
      <p>
        Create a new account <Link to="/register">Register</Link>
      </p>
    </form>
  );
}

export default Login;
