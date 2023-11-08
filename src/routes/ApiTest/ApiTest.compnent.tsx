import React, { useEffect, useState } from "react";
import TestContainer from "./api-test.styles";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  alternateName: string;
  email: string;
};

const ApiTest = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then(setUsers);
  }, []);

  return (
    <TestContainer>
      <div></div>
      <form className="form">
        <h2>Api Test Form: Users</h2>
        <label style={{ margin: 10 }}>First Name</label>
        <input type="text" />
        <br />
        <label style={{ margin: 10 }}>Last Name</label>
        <input type="text" />
        <br />
        <label style={{ margin: 10 }}>Alternate Name</label>
        <input type="text" />
        <br />
        <label style={{ margin: 10 }}>Email</label>
        <input type="text" />
        <br />
        <button style={{ margin: 10, float: "right", cursor: "pointer" }}>
          Submit
        </button>
      </form>
      <div style={{ borderWidth: 5, borderColor: "white", padding: 10 }}>
        {users?.map((user: User) => (
          <div key={user.id}>
            <label>
              First Name:
              <div>{user.firstName}</div>
            </label>
            <br />
            <label>
              Last Name:
              <div>{user.lastName}</div>
            </label>
            <br />
            <label>
              Alternate Name:
              <div>{user.alternateName}</div>
            </label>
            <br />
            <label>
              Email:
              <div>{user.email}</div>
            </label>
            <br />
          </div>
        ))}
      </div>
    </TestContainer>
  );
};

export default ApiTest;
