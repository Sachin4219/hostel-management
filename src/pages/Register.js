import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import TextInput from '../components/TextInput';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import Navbar from '../components/Navbar';

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

        try {
            axios.post("https://still-refuge-61452.herokuapp.com/student/register", register_data)
                .then(response => {
                    console.log(response)
                    window.location = "/student-login"
                })

        }
        catch (error) {
            console.log("error in : ", error.response.data)
        }
    }
    return (
        <div>
            <Navbar tab1='Admin Login' tab2='Student Login' tab3='Register' link1='/admin-login' link2='/student-login' link3='student/register' />
            <div className="registerContainer">
                <div className="register_box">
                    <div className="register left">
                        <h1>Welcome to Student Register</h1>
                    </div>
                    <div className="register right">
                        <form onSubmit={register_submit}>
                            <h1>Register Here</h1>
                            <div className="register_input_fields">
                                <TextInput name='user_reg_input' id='user_reg_input' placeholder='Enter Your Username' label='Username' value={user} onChange={(e) => {
                                    setUser(e.target.value)
                                }} required />
                                <EmailInput name='mail_input' id='mail_input' label='Email' placeholder='Email' value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} required />
                                <PasswordInput name='pass_reg_input' id='pass_reg_input' placeholder='Password' label='Password' value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }} required />
                                <PasswordInput name='cnf_pass_input' id='cnf_pass_input' placeholder='Confirm Password' label='Confirm Password' value={cnfPassword} onChange={(e) => {
                                    setCnfPassword(e.target.value)
                                }} required />
                            </div>
                            <div className="back_login">
                                <FaArrowLeft />
                                <Link to="/student-login">Back to login</Link>
                            </div>
                            <button type='submit' className="register_btn" id="register_btn">Register</button>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
}
