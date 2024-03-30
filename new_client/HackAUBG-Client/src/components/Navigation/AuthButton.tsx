import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthButton: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage.getItem('loginStatus') || '{}');
    setIsLoggedIn(loginStatus.isLoggedIn);
  }, []);

  const handleAuthAction = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      localStorage.setItem(
        'loginStatus',
        JSON.stringify({ isLoggedIn: false })
      );
    } else {
      navigate('/login');
    }
  };

  return (
    <button onClick={handleAuthAction}>
      {isLoggedIn ? 'Sign Out' : 'Login'}
    </button>
  );
};

export default AuthButton;
