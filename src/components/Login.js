import React from 'react';
import Form from './Form';
import '../pages/css/login.css';
import PropTypes from 'prop-types';


export default function Login(props) {
    const formContainerClass = props.formContainerClass + " login";
    const formHeading = props.formHeading + " Login";
    const newUserClass = "new" + props.formHeading;
    let selectClass = '';
    if (props.formHeading === 'Student') {
        selectClass = 'hidden';
    }
    else {
        selectClass = 'visible';
    }
    return (
        <div className={formContainerClass}>
            <div className="left">
                <h1>Welcome to {props.formHeading} Login</h1>
            </div>
            <div className="right">
                <Form formClass={props.formContainerClass} formHeading={formHeading} selectClass={selectClass} forgotLink={props.forgotLink} newUserClass={newUserClass + props.newUser} onSubmit={props.onSubmit} textValue={props.textValue} passwordValue={props.passwordValue} onTextChange={props.onTextChange} onPasswordChange={props.onPasswordChange} />
            </div>
        </div>
    );
}

Login.propTypes = {
    onSubmit: PropTypes.any,
    formContainerClass: PropTypes.string.isRequired,
    formHeading: PropTypes.string.isRequired,
    newUser: PropTypes.string,
    forgotLink: PropTypes.string,
    textValue: PropTypes.any,
    passwordValue: PropTypes.any,
    onTextChange: PropTypes.any,
    onPasswordChange: PropTypes.any
}
