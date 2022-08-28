import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/changepass.css'

export default function ChangePassword() {
    const [user, setUser] = useState('');
    const [newPass, setNewPass] = useState('');
    const [newcnfPass, setNewCnfPass] = useState('');
    const change_submit = (e) => {
        e.preventDefault();
        const change_data = {
            "username": user,
            "password": newPass
        };
        console.log(change_data);
    }
    return (
        <div className="container">
            <div className="change_box">
                <form className="change_model" onSubmit={change_submit}>
                    <div className="header">Change Password</div>
                    <div className="change_input_fields">
                        <input type="text" className="change_user" id="change_user" placeholder='Username' required value={user} onChange={(e) => {
                            setUser(e.target.value)
                        }} />
                        <input type="password" className="new_password" id="new_password" placeholder='New Password' required value={newPass} onChange={(e) => {
                            setNewPass(e.target.value)
                        }} />
                        <input type="password" className="cnf_new_password" id="cnf_new_password" placeholder='Confirm New Password' required value={newcnfPass} onChange={(e) => {
                            setNewCnfPass(e.target.value)
                        }} />
                    </div>
                    <button type="submit" className='change_submit'>Submit</button>
                    <p>Back to <Link to="/student/login">login</Link></p>
                </form>
            </div>
        </div>
    )
}
