import UserList from "./UserList";

export default function Users() {
  return (
    <div className="container mx-auto">
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Users</h1>
      <UserList />
    </div>
  );
}
