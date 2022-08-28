import './App.css';
import Home from './pages/Home';
import Complaints from './pages/Complaints';

import Client from './pages/Client';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>

        <Route exact path='client' element={<Client />}> </Route>
        <Route exact path='profile' element={<h1>Profile</h1>}> </Route>
        <Route exact path='dashboard' element={<h1>Dashboard</h1>}> </Route>
        <Route exact path='complaints' element={<Complaints />}> </Route>
        <Route exact path='/' element={<Home/>}> </Route>
        {/* <Route exact path='/' element={<Login/>}> </Route> */}
        {/* <Route exact path='/signup' element={<Register/>}> </Route> */}

        <Route exact path='client' element={<Client />}> </Route>
        <Route exact path='profile' element={<h1>Profile</h1>}> </Route>
        <Route exact path='dashboard' element={<h1>Dashboard</h1>}> </Route>
        <Route exact path='complaints' element={<Complaints />}> </Route>
        <Route exact path='/' element={<Home />}> </Route>

      </Routes>
    </Router>
  );
}

export default App;
