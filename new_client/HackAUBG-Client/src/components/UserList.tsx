import { useState } from 'react';

type UserProps = {
  name: string;
  email?: string;
  age?: number;
  id: number;
};

function UserList() {
  const [users, setUsers] = useState<UserProps>({} as UserProps);

  const newUser = {
    name: 'John Doe',
    email: 'yesboss',
    id: 1,
  };

  setUsers(newUser);
  return (
    <div>
      <h1>{users.name}</h1>
      <h2>{users.age}</h2>
      <h3>{users.email}</h3>
    </div>
  );
}

export default UserList;
