import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Feature(props) {

    //     const [bg, setBg] = useState('featureBox');
    const [bgheader, setBgheader] = useState('bi bi-gem');
    //     const [title, setTitle] = useState('featureTitle header');

    const onMouseEnter = () => {
        //         setBg('featureBox hoverBox');
        setBgheader('bi bi-gem hoverSvg');
        //         setTitle('featureTitle hoverHeader');
    }

    const onMouseLeave = () => {
        //         setBg('featureBox');
        setBgheader('bi bi-gem');
        //         setTitle('featureTitle header');
    }

    return (
        <div className="featureBox" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <span className='featureSvg header'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={bgheader} viewBox="0 0 16 16">
                    <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z" />
                </svg>
            </span>
            <span className="featureTitle header">{props.title}</span>
            <span className='featureDescription'>{props.description}</span>
        </div>
    );
}

Feature.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

Feature.defaultProps = {
    title: 'Enter title here',
    description: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah'
}

export default Feature;