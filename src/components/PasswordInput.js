import React from 'react';
import PropTypes from 'prop-types';

function PasswordInput(props) {
    return (
        <div className="passwordInput">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="password" name={props.name} id={props.id} placeholder={props.placeholder} value={props.value} onChange={props.onChange} required />
        </div>
    );
}


PasswordInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.any
}

export default PasswordInput;