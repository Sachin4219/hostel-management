import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './css/form.css';

export default function ComplaintForm() {
    const [name, setName] = useState('');
    const [hostel, setHostel] = useState('');
    const [room, setRoom] = useState('');
    const [phone, setPhone] = useState('');
    const [category, setCategory] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        const token = localStorage.getItem("token")
        async function verifyToken(){
            const config={
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }  
            try {
                const resp = await axios.get("http://localhost:4000/student/check_login", config)
                if(resp.data.verified)
                    setLoading(false)
            } catch (error) {
                window.location="/login"
            }
        }
        verifyToken()
    },[])


    const submit_func = (e) => {
        e.preventDefault();
        const form_data = {
            "name": localStorage.getItem("username"),
            "hostelName": hostel,
            "roomNumber": room,
            "phoneNumber":phone,
            "issueCategory": category,
            "availiability": time,
            "description": description
        }
        const token = localStorage.getItem("token")
        console.log(form_data);
        const config={
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        axios.post("http://localhost:4000/student/complaints", form_data, config)
        .then(res => {
            console.log(res.data)
            window.location = "/client-dashboard"
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (

        <div className="container">
            {isLoading ? <h1>Loading...</h1> :

            <div className="form">
                <div className="form_model">
                    <div className="form_header">Customer complaint form</div>

                    <form className="form_input_fields" onSubmit={submit_func}>
                        <input type="text" className="name" id="name" placeholder='FullName' value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        <input type="text" className="hostel_name" id="hostel_name" placeholder='Hostel Name' value={hostel} onChange={(e) => {
                            setHostel(e.target.value);
                        }} />
                        <input type="text" className="room_no" id="room_no" placeholder='Room Number' value={room} onChange={(e) => {
                            setRoom(e.target.value);
                        }} />
                        <input type="text" className="room_no" id="phone_no" placeholder='Phone Number' value={phone} onChange={(e) => {
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
                        }}></textarea>
                        <input type='submit' className="form_submit" id="form_submit" value="submit" />
                    </form>
                </div>
            </div>
            }       
        </div >
    )
}
