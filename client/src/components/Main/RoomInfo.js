import React from "react";

import { StyledDashBoard } from "../Main/Styles/styles";

const Dashboard = ({ directions, history }) => {
  return (
    <StyledDashBoard>
      <button
        onClick={() => {
          localStorage.clear();
          history.push("/login");
        }}
      >
        Logout
      </button>
      {/* <div>
        <h3>Current Room</h3>
        <h4>{directions ? directions.title : null}</h4>
      </div>
      <div>
        <h3>Description</h3>
        <h4>{directions ? directions.description : null}</h4>
      </div>
      {directions.error_msg && <span>{directions.error_msg}</span>} */}
    </StyledDashBoard>
  );
};

export default Dashboard;
