import { complaints } from "../../../utils/constants";
import Card from "../ComplaintCard/Card";
import Filter from "../Filter/Filter";
import axios from "axios";
import { useState } from "react";
import classes from "./Table.module.css"
const optionHostels = [
    {name: "Aryabhatta"},
    {name: "Ramanujam"}
]
const optionCategory = [
    {name: "cleanliness"},
    {name: "water"},
    {name: "electricity"},
]

const optionAvailiability = [
    {name:"10 AM to 12 PM"},
    {name:"12 PM to 2 PM"},
    {name:"2 PM to 4 PM"},
    {name:"4 PM to 6 PM"}
]

const Table = (props) => {

    const [filteredHostel, setFilteredHostel] = useState("");
    const [filteredAvailiability, setFilteredAvailiability] = useState('');
    const [filteredIssueCategory, setFilteredIssueCategory] = useState('');

    const [filteredComplaints, setFilteredComplaints] = useState(complaints)

    function filterHostelHandler(selectedHostel){
        setFilteredHostel(selectedHostel);
        setFilteredComplaints(
            complaints.filter(complaint => {
                let a = filteredAvailiability? complaint.availiability === filteredAvailiability : true
                let b = filteredIssueCategory? complaint.issueCategory === filteredIssueCategory : true
                let c = selectedHostel? complaint.hostelName === selectedHostel: true
                // console.log("[Boolean]",a,b,c)
                return (
                    a && b && c
                )
            }
        ))
    }


function filterAvailiabilityHandler(selectedAvailiability){
        setFilteredAvailiability(selectedAvailiability);

        setFilteredComplaints(
        complaints.filter(complaint => {
            let a = filteredIssueCategory? complaint.issueCategory === filteredIssueCategory : true
            let b = filteredHostel? complaint.hostelName === filteredHostel : true
            let c = selectedAvailiability? complaint.availiability === selectedAvailiability: true
            return (
                a && b && c
            )
        }))
    }

console.log(filteredHostel?filteredHostel:".", filteredIssueCategory?filteredIssueCategory:".", filteredAvailiability?filteredAvailiability:".")    

function filterIssueCategoryHandler(selectedIssueCategory){
    setFilteredIssueCategory(selectedIssueCategory);
    setFilteredComplaints(
    complaints.filter(complaint => {
         let a = filteredAvailiability? complaint.availiability === filteredAvailiability : true
                let b = filteredHostel? complaint.hostelName === filteredHostel : true
                let c = selectedIssueCategory? complaint.issueCategory === selectedIssueCategory: true
        return (
            a && b && c
        )
    }))
}



    function onAccept(id){
        axios.post("http://localhost:5000/complaints", {id:id, status:"pending", escalated:false})
    }
    function onReject(id){
        axios.post("http://localhost:5000/complaints", {id:id, status:"rejected", escalated:false})
    }
    function onEscalate(id){
        axios.post("http://localhost:5000/complaints", {id:id, status:"pending", escalated:true})
    }

    return ( 
        <div>
            <div className={classes.filterContainer}>
                <Filter filterHandler={filterHostelHandler} options={optionHostels} type={"Hostel"}></Filter>
                <Filter filterHandler={filterIssueCategoryHandler} options={optionCategory} type={"Category"}></Filter>
                <Filter filterHandler={filterAvailiabilityHandler} options={optionAvailiability} type={"Availiability"}></Filter>
            </div>
            {filteredComplaints.map((elem => {
                return (
                    <Card data={elem} key={elem._id} onAccept = {onAccept} onReject = {onReject} onEscalate = {onEscalate}/>
                )
            }))}
        </div>
     );
}

export default Table;