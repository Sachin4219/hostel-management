import './App.css';
import Home from './pages/Home';
import Complaints from './pages/Complaints';
import Client from './pages/Client';
import Form from './pages/Form';
import Register from './pages/Register';
import Otp from './pages/Otp';
import ForgotPassword from './pages/ForgotPassword';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientLogin from './pages/ClientLogin';
import AdminLogin from './pages/AdminLogin';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='client-dashboard' element={<Client />}> </Route>
        <Route exact path='profile' element={<h1>Profile</h1>}> </Route>
        <Route exact path='client-login' element={<ClientLogin />}> </Route>
        <Route exact path='admin-login' element={<AdminLogin />}> </Route>
        <Route exact path='register' element={<Register />}> </Route>
        <Route exact path='form' element={<Form />}> </Route>
        <Route exact path='otp' element={<Otp />}> </Route>
        <Route exact path='forgot' element={<ForgotPassword />}> </Route>
        <Route exact path='admin-dashboard' element={<Admin />}> </Route>
        <Route exact path='complaints' element={<Complaints />}> </Route>
        <Route exact path='/' element={<Home />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
