import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../components/Image';
import ClientContent from '../components/ClientContent';
import './css/client.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Client() {
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
                window.location = "student-login"
            }
        }
        verifyToken()
    }, [])

    return (
        <>
            {isLoading ? <h1 className='load-center'>Loading...</h1> :
                <div>
                    <Navbar tab1='Profile' tab2='File Complaint' tab3='Logout' link1='/student/profile' link2='/student/complaints/new' link3='/' />
                    <Image />
                    <ClientContent />
                    <Footer />
                </div>
            }
        </>
    );
}

export default Client;