import Card from "../ComplaintCard/Card";
// import Filter from "../Filter/Filter";
import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./Table.module.css"
import { BsEmojiSmileUpsideDown} from "react-icons/bs"
import Dropdown from "../Dropdown/Dropdown";

const optionHostels = [
    { name: "Aryabhatta" },
    { name: "Ramanujam" },
    { name: "Kalam"}
]
const optionCategory = [
    { name: "cleanliness" },
    { name: "water" },
    { name: "electricity" },
]

const optionAvailiability = [
    { name: "10 AM to 12 PM" },
    { name: "12 PM to 2 PM" },
    { name: "2 PM to 4 PM" },
    { name: "4 PM to 6 PM" }
]

const Table = () => {
    const [complaints,setComplaints] = useState([]) 
    const [filteredHostel, setFilteredHostel] = useState("");
    const [filteredAvailiability, setFilteredAvailiability] = useState('');
    const [filteredIssueCategory, setFilteredIssueCategory] = useState('');

    const [filteredComplaints, setFilteredComplaints] = useState([])
    const [isLoading,setLoading] = useState(true)
    const [verified, setVerified]= useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        async function verifyToken(){
            const config={
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }  
            try {
                const resp = await axios.get("https://still-refuge-61452.herokuapp.com/admin/check_login", config)
                if(resp.data.verified){
                    setLoading(false)
                    setVerified(true)
                }
            } catch (error) {
                window.location="/admin-login"
            }
        }
        verifyToken()
    })

    useEffect(() => {
        const fetchData = async() => {
            const officerType = localStorage.getItem("username")
            const token = localStorage.getItem("token")
            const config={
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }  
            try {
            setLoading(true)
            const resp= await axios.get(`https://still-refuge-61452.herokuapp.com/admin/complaints/${officerType}`,config) 
            setComplaints(resp.data.complaints);
            setFilteredComplaints(resp.data.complaints)
            setLoading(false)
            console.log(resp.data.complaints)
        } catch (error) {
            setLoading(false)
            console.log("[Get Complaints]",error)
        }
        }
        if(verified)
            fetchData()
    },[verified])

    function filterHostelHandler(selectedHostel) {
        setFilteredHostel(selectedHostel);
        setFilteredComplaints(
            complaints.filter(complaint => {
                let a = filteredAvailiability ? complaint.availiability === filteredAvailiability : true
                let b = filteredIssueCategory ? complaint.issueCategory === filteredIssueCategory : true
                let c = selectedHostel ? complaint.hostelName === selectedHostel : true
                // console.log("[Boolean]",a,b,c)
                return (
                    a && b && c
                )
            }
            ))
    }


    function filterAvailiabilityHandler(selectedAvailiability) {
        setFilteredAvailiability(selectedAvailiability);

        setFilteredComplaints(
            complaints.filter(complaint => {
                let a = filteredIssueCategory ? complaint.issueCategory === filteredIssueCategory : true
                let b = filteredHostel ? complaint.hostelName === filteredHostel : true
                let c = selectedAvailiability ? complaint.availiability === selectedAvailiability : true
                return (
                    a && b && c
                )
            }))
    }


    function filterIssueCategoryHandler(selectedIssueCategory) {
        setFilteredIssueCategory(selectedIssueCategory);
        setFilteredComplaints(
            complaints.filter(complaint => {
                let a = filteredAvailiability ? complaint.availiability === filteredAvailiability : true
                let b = filteredHostel ? complaint.hostelName === filteredHostel : true
                let c = selectedIssueCategory ? complaint.issueCategory === selectedIssueCategory : true
                return (
                    a && b && c
                )
            }))
    }



    function onAccept(id) {
        const officerType = localStorage.getItem("username")
        axios.put(`https://still-refuge-61452.herokuapp.com/admin/complaints/${officerType}`, { _id: id, status: "pending", escalated: false })
    }
    function onReject(id) {
        const officerType = localStorage.getItem("username")
        axios.put(`https://still-refuge-61452.herokuapp.com/admin/complaints/${officerType}`, { _id: id, status: "rejected", escalated: false })
    }
    function onEscalate(id) {
        const officerType = localStorage.getItem("username")
        axios.put(`https://still-refuge-61452.herokuapp.com/admin/complaints/${officerType}`, { _id: id, status: "pending", escalated: true }).then(resp => {
            setFilteredComplaints(filteredComplaints.filter(compl => compl._id!==id))
            setComplaints(complaints.filter(compl => compl._id!==id))
        })
    }

    

    
    return (

        <div>
            {isLoading? <h1>Loading</h1> : 
                <div>
                    <div className={classes.filterContainer}>
                        <Dropdown onChange={filterHostelHandler} options={optionHostels} type={"Hostel"}></Dropdown>
                        <Dropdown onChange={filterIssueCategoryHandler} options={optionCategory} type={"Category"}></Dropdown>
                        <Dropdown onChange={filterAvailiabilityHandler} options={optionAvailiability} type={"Availability"}></Dropdown>
                        {/* <Filter filterHandler={filterHostelHandler} options={optionHostels} type={"Hostel"}></Filter>
                        <Filter filterHandler={filterIssueCategoryHandler} options={optionCategory} type={"Category"}></Filter>
                        <Filter filterHandler={filterAvailiabilityHandler} options={optionAvailiability} type={"Availiability"}></Filter> */}
                    </div>
                    {filteredComplaints.length>0 ? filteredComplaints.map(elem => {
                        return (
                            <Card data={elem} key={elem._id} onAccept={onAccept} onReject={onReject} onEscalate={onEscalate} />
                            )
                    }) : <div className={classes.noComplaints}><BsEmojiSmileUpsideDown className={classes.smile}></BsEmojiSmileUpsideDown> No Complaints</div>}
                </div>
            }
        </div>
    );
}

export default Table;