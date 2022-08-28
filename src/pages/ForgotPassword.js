import React from 'react';
import { Link } from 'react-router-dom';
import './css/forgot_pass.css';

export default function Forgot_Pass() {
    return (
        <div className="container">
            <div className="reset_password">
                <h2 className="reset_title">Forgot Password</h2>
                <p className="detail">Please Enter the email address that you used to register, and we will send you and OTP to reset your Password</p>
                <input type="text" className="reset_field" id="reset_field" placeholder='Enter Email' />
                <input type="submit" value="Reset My Password" className='reset_btn' />
                <p className="sign_in">Return to <Link to="/student/login">Sign in</Link></p>
            </div>
        </div>
    );
}
