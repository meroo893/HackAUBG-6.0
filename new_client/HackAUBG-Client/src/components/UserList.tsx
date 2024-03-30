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
    <div className="flex flex-col gap-4">
      {users.map((user) => (
        <div key={user.id} className="bg-white shadow-md p-4 rounded-md">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <h3 className="text-gray-600">{user.email}</h3>
          <h3 className="text-gray-600">{user.id}</h3>
        </div>
      ))}
    </div>
  );
}
