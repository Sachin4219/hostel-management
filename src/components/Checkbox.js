import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
    return (
        <div className={props.checkboxClass}>
            <input type="checkbox" name={props.name} id={props.id} />
            <label htmlFor={props.id}>{props.label}</label>
        </div>
    );
}

Checkbox.propTypes = {
    checkboxClass: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default Checkbox;

