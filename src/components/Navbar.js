import React, { useState } from 'react';
import PropTypes from 'prop-types';

const src = 'https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Indian_Institute_of_Technology_Bhubaneswar_Logo.svg/1200px-Indian_Institute_of_Technology_Bhubaneswar_Logo.svg.png';

function HomeNavbar(props) {

    const [menu, setMenu] = useState('menu hidden');
    const onClick = () => {

        if (menu === 'menu visible') {
            setMenu('menu hidden');
        }
        else {
            setMenu('menu visible');
        }
    }
    function onLogout() {
        window.localStorage.clear()
        window.location = "/"
        return "";
    }

    return (
        <nav>
            <div className="left">
                <img src={src} alt="logo" height="40" width="40" />
                <span className='name'>IIT Bhubaneshwar</span>
            </div>
            <div className="right">
                <div className="hamburger" onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
                <ul className='large-tabs'>
                    <a href={props.link1}><li>{props.tab1}</li></a>
                    <a href={props.link2}><li>{props.tab2}</li></a>
                    {props.tab3 === "Logout"
                        ? <a href="/" onClick={onLogout}><li>{props.tab3}</li></a>
                        : <a href={props.link3}><li>{props.tab3}</li></a>
                    }
                </ul>
            </div>
            <div className={menu}>
                <ul className='visible'>
                    <a href={props.link1}><li>{props.tab1}</li></a>
                    <a href={props.link2}><li>{props.tab2}</li></a>
                    {props.tab3 === "Logout"
                        ? <a href="/" onClick={onLogout}><li>{props.tab3}</li></a>
                        : <a href={props.link3}><li>{props.tab3}</li></a>
                    }
                </ul>
            </div>
        </nav>
    );
}

HomeNavbar.propTypes = {
    tab1: PropTypes.string.isRequired,
    tab2: PropTypes.string.isRequired,
    tab3: PropTypes.string.isRequired,
    link1: PropTypes.string.isRequired,
    link2: PropTypes.string.isRequired,
    link3: PropTypes.string.isRequired
}

HomeNavbar.defaultProp = {
    tab1: 'Tab 1',
    tab2: 'Tab 2',
    tab3: 'Tab 3'
}

export default HomeNavbar;
export { src };