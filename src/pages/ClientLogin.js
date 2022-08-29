import React from 'react';
import Login from '../components/Login';

export default function ClientLogin() {
    return (
        <div className="loginContainer">
            <Login formContainerClass='studentLogin' formHeading='Student' />
        </div>
    );
}