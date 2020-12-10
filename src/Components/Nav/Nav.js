import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../redux/userReducer";
import axios from "axios";
import "./Nav.scss";

function Nav(props) {
  function logout() {
    axios.delete("/api/logout").then(() => {
      props.logoutUser();
      props.history.push("/");
    });
  }

  if (
    props.location.pathname === "/Dashboard" ||
    props.location.pathname === "/"
  ) {
    return <div></div>;
  } else
    return (
      <div className="navbar">
        <Link to="/Dashboard">
          <button className="nav-button">Return to Dashboard</button>
        </Link>
        <button className="nav-button" onClick={() => logout()}>
          Logout
        </button>
      </div>
    );
}

const MapStateToProps = (reduxState) => reduxState;

export default withRouter(
  connect(MapStateToProps, { logoutUser, getUser })(Nav)
);
