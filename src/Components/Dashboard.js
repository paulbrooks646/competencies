import React from "react"
import { connect } from "react-redux"
import { getUser } from '../redux/userReducer'
import { Link } from "react-router-dom"

function Dashboard(props) {

    return (
      <div>
        <div>
          <h1>Welcome {props.user.user.username}</h1>
            </div>
            <div>
                <div>
                    <Link to="/Animation">Animation</Link>
                    <Link to="/Background">Background</Link>
                    <Link to="/BoxModel">Box Model</Link>
                </div>
                <div>
                    <Link to="/Color">Color</Link>
                    <Link to="/Flexbox">Flexbox</Link>
                    <Link to="/FloatDisplay">Float and Display</Link>
                </div>
                <div>
                    <Link to="/Font">Font</Link>
                    <Link to="/Grid">Grid</Link>
                    <Link to="/Position">Postion</Link>
                </div>
                <div>
                    <Link to="/Pseudo">Pseudo</Link>
                    <Link to="/TextEffects">Text Effects</Link>
                    <Link to="/Transform">Transform</Link>
                </div>
                <div>
                    <Link to="Transition">Transition</Link>
                </div>
            </div>
      </div>
    );
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {getUser})(Dashboard)