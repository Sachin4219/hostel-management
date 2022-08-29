import StudentTable from "../components/UI/Table/StudentTable";
import Navbar from '../components/Navbar';
const StudentComplaints = () => {
    return (
        <>
            <Navbar tab1='Profile' tab2='File Complaint' tab3='Logout' link1='/student/profile' link2='/student/complaints/new' link3='/' /> 
            <StudentTable></StudentTable>
        </>
    );
}
 
export default StudentComplaints;