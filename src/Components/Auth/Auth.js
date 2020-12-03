import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser, registerUser } from "../../redux/userReducer";
import "./Auth.scss";
import { Link } from "react-router-dom";

function Auth(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [newUsername, setNewusername] = useState();
  const [newPassword, setNewPassword] = useState();
  const [authCard, setAuthCard] = useState(true);

  function toggleCard() {
    setAuthCard(!authCard);
  }

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
    <div className="auth-main">
      <h1 className="auth-title">CSS Tutorials</h1>

      <div className={`${authCard ? "auth-card" : "auth-card-open"}`}>
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
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password here"
          />
        </div>
        <div>
          <button onClick={() => login()}>Login</button>
        </div>
        <div>
          <label className="auth-toggle">New to CSS Tutorials?</label>
          <Link onClick={() => toggleCard()}>Register</Link>
        </div>
      </div>
      <div className={`${authCard ? "auth-card-open" : "auth-card"}`}>
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
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter password here"
            />
          </div>
        </div>
        <div>
          <button onClick={() => register()}>Register</button>
        </div>
        <div>
          <label className="auth-toggle">Already have an account?</label>
          <Link onClick={() => toggleCard()}>Login</Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState;

const mapDispatchToProps = { loginUser, registerUser };

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
