import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props) {
    return (
        <div className="textInput">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" name={props.name} id={props.id} placeholder={props.placeholder} value={props.value} onChange={props.onChange} required />
        </div>
    );
}


TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.any
}

export default TextInput;