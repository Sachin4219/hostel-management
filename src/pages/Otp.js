import React, { useState } from 'react';
import './css/otp.css';

export default function OTP() {
    const [otp, setOtp] = useState('');
    const otp_submit = (e) => {
        e.preventDefault();
        const otp_data = {
            'otp': otp
        }
        console.log(otp_data);
    }
    return (
        <div className="container">
            <form className="otp_box" onSubmit={otp_submit}>
                <p className="otp_title">Enter OTP</p>
                <p className="detail">Enter OTP sent on Email to reset your password</p>
                <input type="text" className="otp_field" id="otp_field" maxLength='6' required value={otp} onChange={(e) => {
                    setOtp(e.target.value)
                }} />
                <input type="submit" value="Submit" className='otp_btn' id='otp_btn' />
            </form>
        </div>
    );
}
