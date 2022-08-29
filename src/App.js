import './App.css';
import Home from './pages/Home';
import Complaints from './pages/Complaints';

import Client from './pages/Client';
import Login from './pages/Login.js';
import ComplaintForm from './pages/ComplaintForm';
import Register from './pages/Register';
import Otp from './pages/Otp';
import ForgotPassword from './pages/ForgotPassword';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChangePassword from './pages/change_password';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='client' element={<Client />}> </Route>
        <Route exact path='student/profile' element={<h1>Profile</h1>}> </Route>
        <Route exact path='/login' element={<Login />}> </Route>
        <Route exact path='student/register' element={<Register />}> </Route>
        <Route exact path='student/complaint' element={<ComplaintForm />}> </Route>
        <Route exact path='otp' element={<Otp />}> </Route>
        <Route exact path='forgot' element={<ForgotPassword />}> </Route>
        <Route exact path='dashboard' element={<h1>Dashboard</h1>}> </Route>
        <Route exact path='admin/complaints' element={<Complaints />}> </Route>
        <Route exact path='/' element={<Home />}> </Route>
        <Route exact path='/change' element={<ChangePassword />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
