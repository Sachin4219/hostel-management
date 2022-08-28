import React from 'react';
import './css/otp.css';

export default function OTP() {
    return (
        <div className="container">
            <div className="otp_box">
                <p className="otp_title">Enter OTP</p>
                <p className="detail">Enter OTP sent on Email to reset your password</p>
                <input type="text" className="otp_field" id="otp_field" maxLength='6' />
                <input type="submit" value="Submit" className='otp_btn' id='otp_btn' />
            </div>
        </div>
    );
}
