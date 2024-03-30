import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import UserList from './UserList';

export default function Users() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <h1>Users</h1>
        <p>Users page content</p>
        <UserList />
      </div>
      <Footer />
    </>
  );
}
