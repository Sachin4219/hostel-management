import { createRoot } from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

const root = document.getElementById('root');
createRoot(root).render(
  <>
    <Navbar />
    <Content />
    <Footer />
  </>
);