import {HiClock, HiLibrary, HiPhone} from "react-icons/hi"
import classes from "./Card.module.css"

function Card(props) {
    const {onAccept, onReject, onEscalate} = props;

    return ( 
        <div className={classes.card}>
            <div className={classes.issueCategoryContainer}>
                <span className={classes.issueTag+ " " + classes[props.data.issueCategory]}>
                    {props.data.issueCategory}
                </span>
                <div className={classes.date}>
                    {props.data.date}
                </div>
            </div>
            <div className={classes.flexRow1}>
                <div>
                    <div className={classes.username}>{props.data.name}</div>
                    <div className={classes.iconTag} style={{fontSize:"14px",gap:"4px"}}>
                        <HiPhone></HiPhone>
                        {props.data.phoneNumber}
                    </div>
                </div>
                <div className={classes.borderIcon }>
                    <div className={classes.iconTag}><HiLibrary></HiLibrary> {props.data.hostelName}</div>
                    <div className={classes.iconTag}><HiClock></HiClock> {props.data.availiability}</div>
                </div>
            </div>
            
            <div>
                <div className={classes.desc}>Description</div>
                <p  className={classes.description}>
                    {props.data.description}
                </p>
            </div>
            <div className={classes.btnContainer}>
                <div onClick={() => onAccept(props.data._id)}
                    className={classes.btn} 
                    style={{backgroundColor:"#22c55e",color:"white"}} >
                        Accept
                </div>
                <div onClick={() => onReject(props.data._id)}
                    className={classes.btn} 
                    style={{backgroundColor:"#ef4444",color:"white"}}  >
                        Reject
                </div>
                <div onClick={() => onEscalate(props.data._id)}
                    className={classes.btn} 
                    style={{backgroundColor:"#3b82f6",color:"white" }}>
                        Escalate
                </div>
            </div>
            
        </div>
     );
}

export default Card;