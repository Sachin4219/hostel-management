import React from 'react';
import Login from '../components/Login';

export default function AdminLogin() {
    return (
        <div className="loginContainer">
            <Login formContainerClass='adminLogin' formHeading='Admin' newUser=' hidden' />
        </div>
    );
}