import Home from './pages/Home';
import Complaints from './pages/Complaints';
import Client from './pages/Client';
import ComplaintForm from './pages/ComplaintForm';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientLogin from './pages/ClientLogin';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import StudentComplaints from './pages/StudentComplaints';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='client-dashboard' element={<Client />}> </Route>
        <Route exact path='student/profile' element={<Client />}> </Route>
        <Route exact path='student-login' element={<ClientLogin />}> </Route>
        <Route exact path='admin-login' element={<AdminLogin />}> </Route>
        <Route exact path='student/register' element={<Register />}> </Route>
        <Route exact path='student/complaints/new' element={<ComplaintForm />}> </Route>
        <Route exact path='student/complaints' element={<StudentComplaints></StudentComplaints>}> </Route>
        <Route exact path='admin-login/forgot' element={<ForgotPassword />}> </Route>
        <Route exact path='student-login/forgot' element={<ForgotPassword />}> </Route>
        <Route exact path='admin-dashboard' element={<Admin />}> </Route>
        <Route exact path='admin/profile' element={<Admin />}> </Route>
        <Route exact path='admin/complaints' element={<Complaints />}> </Route>
        <Route exact path='/' element={<Home />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
