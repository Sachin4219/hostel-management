import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TextInput from '../components/TextInput';
import Dropdown from '../components/UI/Dropdown/Dropdown';
import Navbar from '../components/Navbar';
import './css/form.css';
import './css/login.css';

const optionsHostel = [
    {name: "Aryabhatta"},
    {name: "Ramanujam"},
    {name: "Kalam" }
]
const optionCategory = [
    { name: "cleanliness" },
    { name: "water" },
    { name: "electricity" },
]

const optionAvailiability = [
    { name: "10 AM to 12 PM" },
    { name: "12 PM to 2 PM" },
    { name: "2 PM to 4 PM" },
    { name: "4 PM to 6 PM" }
]

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
                window.location = "/student-login"
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
        <div>
            <Navbar tab1='Profile' tab2='File Complaint' tab3='Logout' link1='/student/profile' link2='/student/complaints/new' link3='/' />
            <div className="complaintContainer">
                {isLoading ? <h1 className='load-center'>Loading...</h1> :

                    <div className="complaint_box">

                        <form className="form_input_fields" onSubmit={submit_func}>
                            <h1>Student Complaint Form</h1>
                            <TextInput id="name" name='name' label='Full Name' placeholder='Enter your name' value={name} onChange={(e) => {
                                setName(e.target.value);
                            }} />

                            {/* <TextInput name="hostel_name" id="hostel_name" label='Hostel Name' placeholder='Enter your hostel name' value={hostel} onChange={(e) => {
                                setHostel(e.target.value);
                            }} /> */}

                            <TextInput name="room_no" id="room_no" label='Room Number' placeholder='Enter your room number' value={room} onChange={(e) => {
                                setRoom(e.target.value);
                            }} />

                            <TextInput name="phone_no" id="phone_no" label='Phone Number' placeholder='Enter your phone number' value={phone} onChange={(e) => {
                                setPhone(e.target.value);
                            }} />
                            <div className='dropdown_file'>
                                <p>Hostel Name</p>
                                <Dropdown onChange={setHostel} options={optionsHostel} type="Hostel"></Dropdown>
                            </div>
                            <div className='dropdown_file'>
                                <p>Category of Issue</p>
                                <Dropdown onChange={setCategory} options={optionCategory} type="Category"></Dropdown>
                            </div>

                            <div className='dropdown_file'>
                                <p>Availability Timings</p>
                                <Dropdown onChange={setTime}  options={optionAvailiability} type="Timing"></Dropdown>
                            </div>

                            <textarea name="desc" id="description" className="description" placeholder='Description' value={description} onChange={(e) => {
                                setDescription(e.target.value)
                            }} />
                            <input type='submit' className="form_submit" id="form_submit" value="Submit" />
                        </form>
                    </div>
                }
            </div>
        </div >
    )
}
