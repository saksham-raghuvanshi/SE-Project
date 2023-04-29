import { useState } from "react";
import "./CSS/Login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Your login logic here
    if (email === "" || password === "") {
      setError("Please enter email and password");
    } else {
      setError("");
      // Login logic goes here...
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
        Create a new account <a href="/register">Register</a>
      </p>
    </form>
  );
}

export default Login;
