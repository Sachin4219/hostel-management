import React from 'react';
import PropTypes from 'prop-types';

function PasswordInput(props) {
    return (
        <div className="passwordInput">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="password" name={props.name} id={props.id} placeholder={props.placeholder} required />
        </div>
    );
}


PasswordInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default PasswordInput;