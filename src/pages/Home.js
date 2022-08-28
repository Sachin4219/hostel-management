import './css/home.css';

import SimpleContainer from '../components/Layouts/SimpleContainer';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Image from '../components/Image';
function Home() {
  return (
    <SimpleContainer>
      <Image />
      <Content />
      <Footer />
    </SimpleContainer>

  );
}

export default Home;