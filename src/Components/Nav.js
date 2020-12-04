import React, { useState } from 'react'
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { logoutUser, getUser } from "../redux/userReducer"
import axios from "axios"



function Nav(props) {

    const [pic, setPic] = useState('https://urbaned.tcnj.edu/wp-content/uploads/sites/85/2019/10/placeholder-profile-1.png')
    const [username, setUsername] = useState()
    const [bio, setBio] = useState()
    const [genre, setGenre] = useState()
    const [author, setAuthor] = useState()
    const [book, setBook] = useState()

    function logout() {
      axios.delete("/api/logout").then(() => {
        props.logoutUser();
        props.history.push("/");
      });
    }

    if (props.location.pathname === "/Dashboard" || props.location.pathname === "/") {
    return (<div></div>)
    }
    else
    return (
      <div className="navbar">
        <Link to="/Dashboard">
          <button className="dashboard-button">Return to Dashboard</button>
        </Link>
        <button className="logout-button" onClick={() => logout()}>Logout</button>
      </div>
    );
}

const MapStateToProps = reduxState => reduxState

export default withRouter(connect(MapStateToProps, {logoutUser, getUser})(Nav))