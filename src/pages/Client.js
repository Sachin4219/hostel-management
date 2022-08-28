import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from '../components/Image';
import ClientContent from '../components/ClientContent';
import './css/client.css';

function Client() {
    return (
        <>
            <Navbar tab1='Profile' tab2='File Complaint' tab3='Logout' link1='/client/profile' link2='/' link3='/' />
            <Image />
            <ClientContent />
            <Footer />
        </>
    );
}

export default Client;