import React, { useState } from 'react'

export default function Auth(props) {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [newUsername, setNewusername] = useState()
    const [newPassword, setNewPassword] = useState()

    function login() {

    }

    function register() {

    }

    return (
        <div>
            <div classname='flex'>
                <h1>CSS Tutorials</h1>
            </div>
            <div style={{width: '100%'}}>
                <h2>Login</h2>
                <div>
                    <label style={{marginRight: '10px'}}>Username:</label>
                    <input
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Enter username here"
                    />
                </div>
                <div>
                    <label style={{marginRight: '10px'}}>Password:</label>
                    <input
                    onChange={e => setPassword(e.target.value)}
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
                    <label style={{marginRight: '10px'}}>Username:</label>
                    <input
                    onChange={e => setNewusername(e.target.value)}
                    placeholder='Enter username here'
                    />
                </div>
                <div>
                    <label style={{marginRight: '10px'}}>Password:</label>
                    <input
                    onChange={e => setNewPassword(e.target.value)}
                    placeholder='Enter password here'
                    />
                </div>
            </div>
            <div>
                <button>Register</button>
            </div>
        </div>
    )
}