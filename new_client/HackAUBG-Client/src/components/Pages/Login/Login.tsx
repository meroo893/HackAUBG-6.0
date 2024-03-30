import React, { useState, FormEvent } from 'react';
import { users } from '../../../lib/mockdatabase';
import { Navigate } from 'react-router';

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
    } else {
      setLoginStatus('Invalid username or password');
      // Handle login failure
    }
  };

  if (loginStatus === 'Login Successful') {
    return <Navigate to="/home" />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="p-10 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-xl font-bold mb-4">User Login</h1>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username:
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          {loginStatus && (
            <p
              className={`${
                loginStatus === 'Login Successful'
                  ? 'text-green-500'
                  : 'text-red-500'
              } text-sm italic`}
            >
              {loginStatus}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
export default Login;
