import React, { useState } from 'react';
import './css/register.css';
import { FaArrowLeft, FaKey, FaMailBulk, FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPassword, setCnfPassword] = useState('');
    const [email, setEmail] = useState('');
    const register_submit = (e) => {
        e.preventDefault();
        const register_data = {
            "username": user,
            "password": password,
            "email": email
        }
        // console.log(register_data);
        try{
        axios.post("http://localhost:4000/student/register", register_data)
        .then(response => {
            console.log(response)
            window.location = "/student-login"
        })

        }
        catch(error) {
            console.log("error in : ",error.response.data)
        }
    }
    return (
        <div className="container">
            <div className="register_box">
                <div className="register_left">
                    <h2>Welcome</h2>
                    <p>Register Here</p>
                </div>
                <div className="register_right">
                    <form className="register_model" onSubmit={register_submit}>
                        <div className="register_header">Register Here</div>
                        <div className="register_input_fields">
                            <div className="register_input_box">
                                <FaUserAlt/>
                                <input type="text" className='user_reg_input' id='user_reg_input' placeholder='Username' required value={user} onChange={(e) => {
                                    setUser(e.target.value)
                                }} />
                            </div>
                            <div className="register_input_box">
                                <FaKey/>
                                <input type="password" className='pass_reg_input' id='pass_reg_input' placeholder='Password' required value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />
                            </div>
                            <div className="register_input_box">
                                <FaKey/>
                                <input type="password" className='cnf_pass_input' id='cnf_pass_input' placeholder='Confirm Password' required value={cnfPassword} onChange={(e) => {
                                    setCnfPassword(e.target.value)
                                }} />
                            </div>
                            <div className="register_input_box">
                                <FaMailBulk/>
                                <input type="email" className='mail_input' id='mail_input' placeholder='Email' required value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                            </div>
                        </div>
                        <div className="back_login">
                            <FaArrowLeft/>
                            <Link to="/student/login">Back to login</Link>
                        </div>
                        <div className='reg_sub_btn'>
                            <button type='submit' className="register_btn" id="register_btn">Register</button>
                        </div>
                    </form>

                </div>
            </div>
        </div >
    )
}
