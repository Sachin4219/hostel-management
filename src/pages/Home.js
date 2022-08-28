import './css/home.css';
import SimpleContainer from '../components/Layouts/SimpleContainer';
import Content from '../components/Content';
import Footer from '../components/Footer';

function Home() {
  return (
    <SimpleContainer>
      <Content />
      <Footer />
    </SimpleContainer>
  );
}

export default Home;