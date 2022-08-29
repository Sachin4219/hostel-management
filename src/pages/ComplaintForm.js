import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TextInput from '../components/TextInput';
import './css/form.css';
import './css/login.css';

export default function ComplaintForm() {
    const [name, setName] = useState('');
    const [hostel, setHostel] = useState('');
    const [room, setRoom] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem("token")
        async function verifyToken() {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const resp = await axios.get("https://still-refuge-61452.herokuapp.com/student/check_login", config)
                if (resp.data.verified)
                    setLoading(false)
            } catch (error) {
                window.location = "/login"
            }
        }
        verifyToken()
    }, [])


    const submit_func = (e) => {
        e.preventDefault();
        const form_data = {
            "name": localStorage.getItem("username"),
            "hostelName": hostel,
            "roomNumber": room,
            "phoneNumber": phone,
            "issueCategory": category,
            "availiability": time,
            "description": description
        }
        const token = localStorage.getItem("token")
        console.log(form_data);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.post("https://still-refuge-61452.herokuapp.com/student/complaints", form_data, config)
            .then(res => {
                console.log(res.data)
                window.location = "/client-dashboard"
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (

        <div className="complaintContainer">
            {isLoading ? <h1>Loading...</h1> :
                <div className="complaint_box">

                    <form className="form_input_fields" onSubmit={submit_func}>
                        <h1>Student Complaint Form</h1>
                        <TextInput id="name" name='name' label='Full Name' placeholder='Enter your name' value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />

                        <TextInput name="hostel_name" id="hostel_name" label='Hostel Name' placeholder='Enter your hostel name' value={hostel} onChange={(e) => {
                            setHostel(e.target.value);
                        }} />

                        <TextInput name="room_no" id="room_no" label='Room Number' placeholder='Enter your room number' value={room} onChange={(e) => {
                            setRoom(e.target.value);
                        }} />

                        <TextInput name="phone_no" id="phone_no" label='Phone Number' placeholder='Enter your phone number' value={phone} onChange={(e) => {
                            setPhone(e.target.value);
                        }} />

                        <div className="category_box">
                            <label htmlFor='category'>Category of Issue</label>
                            <select name="category" id="category" className="category" onChange={(e) => {
                                setCategory(e.target.value);
                            }}
                                value={category} >
                                <option>Category</option>
                                <option>cleanliness</option>
                                <option>water</option>
                                <option>electricity</option>
                            </select>
                        </div>
                        <div className="availability_box">
                            <label htmlFor="aval_time">Avalability Timings</label>
                            <select name="aval_time" id="aval_time" className="aval_time" value={time} onChange={(e) => {
                                setTime(e.target.value);
                            }} >
                                <option>Timing</option>
                                <option>10AM to 12PM</option>
                                <option>12PM to 2PM</option>
                                <option>2PM to 4PM</option>
                                <option >2PM to 6PM</option>
                            </select>
                        </div>
                        <textarea name="desc" id="description" className="description" placeholder='Description' value={description} onChange={(e) => {
                            setDescription(e.target.value)
                        }} />
                        <input type='submit' className="form_submit" id="form_submit" value="Submit" />
                    </form>
                </div>
            }
        </div >
    )
}
