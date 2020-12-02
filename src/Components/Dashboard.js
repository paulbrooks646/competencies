import React from "react"
import { connect } from "react-redux"
import {getUser} from '../redux/userReducer'

function Dashboard(props) {

    return (
        <div><h1>Welcome {props.user.user.username}</h1></div>
    )
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {getUser})(Dashboard)