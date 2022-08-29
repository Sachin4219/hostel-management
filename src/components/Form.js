import React from 'react';
import PropTypes from 'prop-types';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import Checkbox from './Checkbox';
import { Link } from 'react-router-dom';
import '../pages/css/form.css';

function Form(props) {
    return (
        <form action="/" className={props.formClass}>
            <h1>{props.formHeading}</h1>
            <select className={props.selectClass} defaultValue='none'>
                <option value="none" disabled hidden>Choose Officer Type</option>
                <option value="Officer-1">Officer 1</option>
                <option value="Officer-2">Officer 2</option>
                <option value="Officer-3">Officer 3</option>
            </select>
            <EmailInput id='user_email' label='Email' name='user_email' placeholder='Enter you email address' />
            <PasswordInput id='password' label='Password' name='password' placeholder='Password' />
            <div className="forgetRemem">
                <Checkbox checkboxClass='remember' name='remember' id='remember' label='Remember Me' />
                <Link to="/forgot" className="forgot" id="forgot">Forgot password ?</Link>
            </div>
            <button type='submit'>Log In</button>
            <div className={props.newUserClass}>
                <p>New here? <Link to="/">Create New Account</Link></p>
            </div>
        </form>
    );
}


Form.propTypes = {
    formClass: PropTypes.string,
    formHeading: PropTypes.string.isRequired,
    selectClass: PropTypes.string.isRequired,
    newUserClass: PropTypes.string.isRequired
}

export default Form;