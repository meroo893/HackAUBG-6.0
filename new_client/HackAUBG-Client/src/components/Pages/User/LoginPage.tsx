import React, { useState, FormEvent } from 'react';
import { users } from '../../../lib/mockdatabase';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState<string | null>(null);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if the user exists in the mock database
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setLoginStatus('Login Successful');
      // Proceed with login success flow
    } else {
      setLoginStatus('Invalid username or password');
      // Handle login failure
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      {loginStatus && <p>{loginStatus}</p>}
    </form>
  );
};

export default Login;
