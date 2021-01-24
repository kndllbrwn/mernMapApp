import React from "react";

import "./UsersList.css";
import UserItem from "./UserItem";

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <h2>No Users found.</h2>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {items.map((user) => (
        <UserItem key={user.id} {...user} placeCount={user.places.length} />
      ))}
    </ul>
  );
};

export default UsersList;
