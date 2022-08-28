import React, { useState } from 'react';
import './css/login.css';
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login_submit = (e) => {
        e.preventDefault();
        const login_data = {
            "username": username,
            "password": password
        }
        console.log(login_data);
    }
    return (
        <div className="container">
            <div className="login_box">
                <div className="formLeft">
                    <h2>Welcome</h2>
                    <p>Login Here</p>
                </div>
                <div className="formRight">
                    <form className="model" onSubmit={login_submit}>
                        <div className="signin">Sign In</div>
                        <div className="input_fields">
                            <div className="input_box">
                                <FontAwesomeIcon icon={faUser} />
                                <input type="text" className='user_input' id='user_input' placeholder='Enter Username' value={username} onChange={(e) => {
                                    setUsername(e.target.value)
                                }} />
                            </div>
                            <div className="input_box">
                                <FontAwesomeIcon icon={faLock} />
                                <input type="password" className='pass_input' id='pass_input' placeholder='Enter Password' value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />
                            </div>
                        </div>
                        <div className="remember_box">
                            <div className="remember">
                                <input type="checkbox" name="remeber_chk" id="remeber_chk" />
                                <label htmlFor="remeber_chk">Remember Me</label>
                            </div>
                            <Link to="/forgot" className="forgot" id="forgot">Forget Password</Link>
                        </div>
                        <div className="button_box">
                            <button type='submit' className="submit_login" id="submit_login">Sign In</button>
                        </div>
                        <div className="new">
                            <p>New here? <Link to="/student/register">Create New Account</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
