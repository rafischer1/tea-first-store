import React from "react";
import TestContainer from "./api-test.styles";
const ApiTest = () => {
  return (
    <TestContainer>
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
    </TestContainer>
  );
};

export default ApiTest;
