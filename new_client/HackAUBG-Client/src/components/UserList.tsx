import React, { useState, useEffect } from 'react';

interface UserProps {
  name: string;
  email: string;
  id: number;
}

export default function UserList() {
  const [users, setUsers] = useState<UserProps[]>([]);

  const newUser = {
    name: 'John Doe',
    email: 'yesboss',
    id: 1,
  };

  useEffect(() => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
          <h3>{user.id}</h3>
        </div>
      ))}
    </div>
  );
}
