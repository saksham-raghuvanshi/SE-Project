import React from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../services/auth';
import { useState } from 'react';
import './CSS/Login.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRollNoChange = (e) => {
    setRollNo(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

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

  const handleRegister = async (event) => {
    event.preventDefault();
  
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    // Check if email ends with @thapar.edu
    if (!email.endsWith('@thapar.edu')) {
      setError('Only @thapar.edu email addresses are allowed.');
      return;
    }
  
    if (email === '' || password === '' || confirmPassword === '') {
      setError('Please enter all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      const result = await signUp(name, email, rollNo, phoneNumber, password, confirmPassword);
      if (result.success) {
        setSuccessMessage('Registration successful');
        setName('');
        setEmail('');
        setRollNo('');
        setPhoneNumber('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setError(result.message);
      }
    }
  };
  
  return (
    <form className='login-form' onSubmit={handleRegister}>
      <h3>Register</h3>
      <input type='text' placeholder='Name' value={name} onChange={handleNameChange} />
      <input type='email' placeholder='Email...' value={email} onChange={handleEmailChange} />
      <input
        type='number'
        placeholder='Phone Number'
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      <input type='number' placeholder='TIET Roll No' value={rollNo} onChange={handleRollNoChange} />
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder='Password...'
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder='Confirm password...'
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <div>
        <input type='checkbox' id='show-password' onChange={handleShowPassword} />
        <label htmlFor='show-password'>Show password</label>
      </div>
      <button type='submit'>Register</button>
      {error && <p className="error">{error}</p>}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}


export default Register;