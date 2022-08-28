import React from 'react';
import './css/register.css';
// import { faArrowLeft, faKey, faMailBulk, faUser, faUserAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="container">
            <div className="register_box">
                <div className="register_left">
                    <h2>Welcome</h2>
                    <p>Register Here</p>
                </div>
                <div className="register_right">
                    <form className="register_model">
                        <div className="register_header">Register Here</div>
                        <div className="register_input_fields">
                            <div className="register_input_box">
                                {/* <FontAwesomeIcon icon={faUserAlt} /> */}
                                <input type="text" className='user_reg_input' id='user_reg_input' placeholder=' Username' required />
                            </div>
                            <div className="register_input_box">
                                {/* <FontAwesomeIcon icon={faUser} /> */}
                                <input type="text" className='name_reg_input' id='name_reg_input' placeholder='Name' required />
                            </div>
                            <div className="register_input_box">
                                {/* <FontAwesomeIcon icon={faKey} /> */}
                                <input type="password" className='pass_reg_input' id='pass_reg_input' placeholder='Password' required />
                            </div>
                            <div className="register_input_box">
                                {/* <FontAwesomeIcon icon={faKey} /> */}
                                <input type="password" className='cnf_pass_input' id='cnf_pass_input' placeholder='Confirm Password' required />
                            </div>
                            <div className="register_input_box">
                                {/* <FontAwesomeIcon icon={faMailBulk} /> */}
                                <input type="email" className='mail_input' id='mail_input' placeholder='Email' required />
                            </div>
                        </div>
                        <div className="back_login">
                            {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
                            <Link to="/login">Back to login</Link>
                        </div>
                        <div className='reg_sub_btn'>
                            <button className="register_btn" id="register_btn">Register</button>
                        </div>
                    </form>

                </div>
            </div>
        </div >
    )
}
