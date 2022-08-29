import './css/home.css';

import SimpleContainer from '../components/Layouts/SimpleContainer';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Image from '../components/Image';
import Navbar from '../components/UI/Navbar/Navbar';
function Home() {
  return (
    // <SimpleContainer>
    <>
    <Navbar/>
      <Image />
      <Content />
      <Footer />
    </>
    // </SimpleContainer>

  );
}

export default Home;