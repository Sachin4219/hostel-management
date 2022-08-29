import React from 'react';
import PropTypes from 'prop-types';

function EmailInput(props) {
    return (
        <div className="emailInput">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="email" name={props.name} id={props.id} placeholder={props.placeholder} required />
        </div>
    );
}


EmailInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default EmailInput;