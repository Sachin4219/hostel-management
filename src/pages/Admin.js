import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../components/Image';
import './css/client.css';
import AdminContent from '../components/AdminContent';

function Admin() {
    return (
        <>
            <Navbar tab1='Profile' tab2='View Complaints' tab3='Logout' link1='/admin/profile' link2='/admin/complaints' link3='/' />
            <Image />
            <AdminContent />
            <Footer />
        </>
    );
}

export default Admin;