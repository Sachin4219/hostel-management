import React from 'react';
import PropTypes from 'prop-types';

function QuickAction(props) {
    return (
        <div className="quickActionBox">
            <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className={props.iconClass} viewBox="0 0 16 16">
                    <path d={props.path2} />
                    <path d={props.path} fillRule={props.fillRule} />
                </svg>
                {props.number}
            </span>
            <span className="title">
                {props.title}
            </span>
        </div>
    );
}

QuickAction.propTypes = {
    iconClass: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    path2: PropTypes.string,
    fillRule: PropTypes.string,
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

QuickAction.defaultProp = {
    iconClass: 'bi bi-person',
    path: 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z',
    number: 0,
    title: 'Title here'
}

export default QuickAction;