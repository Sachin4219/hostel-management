import Table from "../components/UI/Table/Table";
import Navbar from "../components/Navbar";

function Complaints() {
    return (
        <>
            <Navbar tab1='Profile' tab2='View Complaints' tab3='Logout' link1='/admin/profile' link2='/admin/complaints' link3='/' />
            <Table />
        </>
    );
}

export default Complaints;