import './css/home.css';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Image from '../components/Image';

function Home() {
  return (
    <>
      <Navbar tab1='Admin Login' tab2='Student Login' tab3='Register' link1='/admin-login' link2='/student-login' link3='student/register' />
      <Image />
      <Content />
      <Footer />
    </>
  );
}

export default Home;