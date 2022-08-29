import React, { useState } from 'react';
import Login from '../components/Login';
import axios from 'axios';


export default function ClientLogin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login_submit = (e) => {
        e.preventDefault();
        const login_data = {
            username: username,
            password: password
        }

        try {
            axios.post("https://still-refuge-61452.herokuapp.com/student/login", login_data)
                .then(response => {
                    console.log(response)
                    localStorage.setItem("token", response.data.data.token);
                    localStorage.setItem("username", response.data.data.username);
                    window.location = "/client-dashboard";
                })
        }
        catch (error) {
            console.log("error in : ", error.response.data)
        }
    }

    return (
        <div className="loginContainer">
            <Login formContainerClass='studentLogin' formHeading='Student' onSubmit={login_submit} textValue={username} passwordValue={password} onTextChange={(e) => {
                setUsername(e.target.value)
            }} onPasswordChange={(e) => {
                setPassword(e.target.value)
            }} forgotLink='/student-login/forgot' />
        </div>
    );
}