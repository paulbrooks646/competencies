import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser, registerUser } from "../redux/userReducer";

function Auth(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [newUsername, setNewusername] = useState();
  const [newPassword, setNewPassword] = useState();

  function login() {
    axios
      .post("/api/login", { username, password })
      .then((res) => {
        props.loginUser(res.data);
        props.history.push("/Dashboard");
      })
      .catch((err) => {
        alert("Username or password incorrect");
      });
  }

  function register() {
    axios
      .post("/api/register", { newUsername, newPassword })
      .then((res) => {
        props.registerUser(res.data);
        props.history.push("/Dashboard");
      })
      .catch((err) => {
        alert("Could not register");
      });
  }

  return (
    <div>
      <div classname="flex">
        <h1>CSS Tutorials</h1>
      </div>
      <div style={{ width: "100%" }}>
        <h2>Login</h2>
        <div>
          <label style={{ marginRight: "10px" }}>Username:</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username here"
          />
        </div>
        <div>
          <label style={{ marginRight: "10px" }}>Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password here"
          />
        </div>
        <div>
          <button onClick={() => login()}>Login</button>
        </div>
      </div>
      <div>
        <h3>New to CSS Tutorials?</h3>
      </div>
      <div>
        <h2>Register</h2>
        <div>
          <label style={{ marginRight: "10px" }}>Username:</label>
          <input
            onChange={(e) => setNewusername(e.target.value)}
            placeholder="Enter username here"
          />
        </div>
        <div>
          <label style={{ marginRight: "10px" }}>Password:</label>
          <input
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter password here"
          />
        </div>
      </div>
      <div>
        <button onClick={() => register()}>Register</button>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState;

const mapDispatchToProps = { loginUser, registerUser };

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
