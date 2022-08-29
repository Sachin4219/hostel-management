import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PasswordInput from './PasswordInput';
import Checkbox from './Checkbox';
import { Link } from 'react-router-dom';
import '../pages/css/form.css';
import TextInput from './TextInput';
import axios from 'axios';

function Form(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login_submit = (e) => {
        e.preventDefault();
        const login_data = {
            username: username,
            password: password,
        }
        const url = props.formHeading === "Admin Login" ? "https://still-refuge-61452.herokuapp.com/admin/login" : "https://still-refuge-61452.herokuapp.com/student/login";

        try {

            axios.post(url, login_data)
                .then(response => {
                    console.log(response)
                    localStorage.setItem("token", response.data.data.token);
                    localStorage.setItem("username", response.data.data.username);
                    window.location = props.formHeading === "Admin Login" ? "admin-dashboard" : "client-dashboard";
                })
        }
        catch (error) {
            console.log("error in : ", error.response.data)
        }
    }


    return (
        <form action="/" className={props.formClass} onSubmit={(e) => login_submit(e)}>
            <h1>{props.formHeading}</h1>
            {/* <select className={props.selectClass} defaultValue='none'>
                <option value="none" disabled hidden>Choose Officer Type</option>
                <option value="Officer-1">Officer 1</option>
                <option value="Officer-2">Officer 2</option>
                <option value="Officer-3">Officer 3</option>
            </select> */}
            <TextInput id='user_name' label='Username' name='user_name' placeholder='Enter you Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <PasswordInput id='password' label='Password' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className="forgetRemem">
                <Checkbox checkboxClass='remember' name='remember' id='remember' label='Remember Me' />
                <Link to={props.forgotLink} className="forgot" id="forgot">Forgot password ?</Link>
            </div>
            <button type='submit'>Log In</button>
            <div className={props.newUserClass}>
                <p>New here? <Link to="/student/register">Create New Account</Link></p>
            </div>
        </form>
    );
}


Form.propTypes = {
    // onSubmit: PropTypes.any,
    formClass: PropTypes.string,
    formHeading: PropTypes.string.isRequired,
    // selectClass: PropTypes.string.isRequired,
    forgotLink: PropTypes.string,
    newUserClass: PropTypes.string,
    // textValue: PropTypes.any,
    // passwordValue: PropTypes.any,
    // onTextChange: PropTypes.any,
    // onPasswordChange: PropTypes.any
}

export default Form;