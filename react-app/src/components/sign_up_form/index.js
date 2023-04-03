import React, { useState } from 'react';

import axios from 'axios';
import style from "./sign-up.module.scss"

function User() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/api/signup/new-user', { username, password, email })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <form id="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
  <label htmlFor="username">Username:</label>
  <input type="text" id="username" name="username" required value={username} onChange={(event) => setUsername(event.target.value)} />

  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" required value={email} onChange={(event) => setEmail(event.target.value)} />

<label htmlFor="password">Password:</label>
<input type="password" id="password" name="password" required value={password} onChange={(event) => setPassword(event.target.value)} />
  <button type="submit">Sign Up</button>
    </form>
    
  );
}

export default User;
