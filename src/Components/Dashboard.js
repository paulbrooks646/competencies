import React from "react";
import { connect } from "react-redux";
import { getUser, logoutUser } from "../redux/userReducer";
import { Link } from "react-router-dom";

function Dashboard(props) {
  return (
    <div>
      <div>
        <h1>Welcome {props.user.user.username}</h1>
        <h2>What would you like to learn about today?</h2>
      </div>
      <div className="dashboard-links-main">
        <div className="dashboard-links-row">
          <Link to="/Animation">
            <button className="dashboard-link">Animation</button>
          </Link>
          <Link to="/Background">
            <button className="dashboard-link">Background</button>
          </Link>
          <Link to="/BoxModel">
            <button className="dashboard-link">Box Model</button>
          </Link>
        </div>
        <div className="dashboard-links-row">
          <Link to="/Color">
            <button className="dashboard-link">Color</button>
          </Link>
          <Link to="/Flexbox">
            <button className="dashboard-link">Flexbox</button>
          </Link>
          <Link to="/FloatDisplay">
            <button className="dashboard-link">Float/Display</button>
          </Link>
        </div>
        <div className="dashboard-links-row">
          <Link to="/Font">
            <button className="dashboard-link">Font</button>
          </Link>
          <Link to="/Grid">
            <button className="dashboard-link">Grid</button>
          </Link>
          <Link to="/Position">
            <button className="dashboard-link">Position</button>
          </Link>
        </div>
        <div className="dashboard-links-row">
          <Link to="/Pseudo">
            <button className="dashboard-link">Pseudo</button>
          </Link>
          <Link to="/TextEffects">
            <button className="dashboard-link">Text Effects</button>
          </Link>
          <Link to="/Transform">
            <button className="dashboard-link">Transform</button>
          </Link>
        </div>
        <div>
          <Link to="Transition">
            <button className="dashboard-link">Transition</button>
          </Link>
        </div>
      </div>
      <div className="dashboard-logout">
        <button className="dashboard-logout-button">Logout</button>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUser, logoutUser })(Dashboard);
