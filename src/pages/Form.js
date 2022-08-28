import React, { useState } from 'react';
import './css/form.css';

export default function Form() {
    const [name, setName] = useState('');
    const [hostel, setHostel] = useState('');
    const [room, setRoom] = useState('');
    const [category, setCategory] = useState('');
    const [time, setTime] = useState('');
    const submit_func = (e) => {

    }
    return (
        <div className="container">
            <div className="form">
                <div className="form_model">
                    <div className="form_header">Customer complaint form</div>

                    <form className="form_input_fields" onSubmit={submit_func}>
                        <input type="text" className="name" id="name" placeholder='FullName' value={name} />
                        <input type="text" className="hostel_name" id="hostel_name" placeholder='Hostel Name' value={hostel} />
                        <input type="text" className="room_no" id="room_no" placeholder='Room Number' value={room} />
                        <div className="category_box">
                            <label htmlFor='category'>Category of Issue</label>
                            <select name="category" id="category" className="category" value={category}>
                                <option>Cleaniness</option>
                                <option>Water</option>
                                <option>Electricity</option>
                            </select>
                        </div>
                        <div className="availability_box">
                            <label htmlFor="aval_time">Avalability Timings</label>
                            <select name="aval_time" id="aval_time" className="aval_time" value={time}>
                                <option>9AM to 12PM</option>
                                <option>12PM to 3PM</option>
                                <option>3PM to 6PM</option>
                                <option >6PM to 9PM</option>
                            </select>
                        </div>
                        <textarea name="desc" id="description" className="description" placeholder='Description'></textarea>
                    </form>
                    <button type='submit' className="form_submit" id="form_submit">Submit</button>
                </div>
            </div>
        </div >
    )
}
