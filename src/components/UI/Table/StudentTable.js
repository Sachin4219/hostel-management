import Card from "../ComplaintCard/Card";
// import Filter from "../Filter/Filter";
import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./Table.module.css"
import { BsEmojiSmileUpsideDown} from "react-icons/bs"

const StudentTable = () => {
    const [complaints,setComplaints] = useState([]) 
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
                const resp = await axios.get("https://still-refuge-61452.herokuapp.com/student/check_login", config)
                if(resp.data.verified){
                    setLoading(false)
                    setVerified(true)
                }
            } catch (error) {
                console.log(error)
                window.location="/student-login"
            }
        }
        verifyToken()
    })

    useEffect(() => {
        const fetchData = async() => {
            const username = localStorage.getItem("username")
            const token = localStorage.getItem("token")
            const config={
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }  
            try {
            setLoading(true)
            const resp= await axios.get(`https://still-refuge-61452.herokuapp.com/student/complaints/${username}`,config) 
            setComplaints(resp.data.complaints);
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

    
    return (

        <div>
            {isLoading? <h1>Loading</h1> : 
                <div>
                    <div className={classes.filterContainer}>
                    </div>
                    {complaints.length>0 ? complaints.map(elem => {
                        return (
                            <Card data={elem} key={elem._id} />
                            )
                    }) : <div className={classes.noComplaints}><BsEmojiSmileUpsideDown className={classes.smile}></BsEmojiSmileUpsideDown> No Complaints</div>}
                </div>
            }
        </div>
    );
}

export default StudentTable;