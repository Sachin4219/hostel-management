import './App.css';
import Complaints from './pages/Complaints';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes> 
          <Route exact path='/' element={<h1>Welcome Home</h1>}> </Route>
          <Route exact path='profile' element={<h1>Profile</h1>}> </Route>
          <Route exact path='dashboard' element={<h1>Dashboard</h1>}> </Route>
          <Route exact path='complaints' element={<Complaints/>}> </Route>
      </Routes> 
    </Router>
  );
}

export default App;
