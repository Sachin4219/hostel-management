import React from 'react';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
export default function AdminLogin() {
    return (
        <div>
            <Navbar tab1='Admin Login' tab2='Student Login' tab3='Register' link1='/admin-login' link2='/student-login' link3='student/register' />
            <div className="loginContainer">
                <Login formContainerClass='adminLogin' formHeading='Admin' newUser=' hidden' forgotLink='/admin-login/forgot' />
            </div>
        </div>
    );
}