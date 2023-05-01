import React from "react";
import { useSelector } from "react-redux"
// add any needed imports here

function Users() {
  const users = useSelector((state) => state.users)

  return (
    <div>
      <ul>
        Users!
        {users ? users.map((user) => <li key={user.username}>{user.username}</li>): ""}
        {users.length > 0 ? <li>Total Users: {users.length}</li> : ""}
      </ul>
      
    </div>
  );
}

export default Users;
