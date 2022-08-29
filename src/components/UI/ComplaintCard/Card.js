import { HiClock, HiLibrary, HiPhone } from "react-icons/hi"
import classes from "./Card.module.css"
import PropTypes from 'prop-types';

function Card(props) {
    const { onAccept, onReject, onEscalate } = props;
    const officerType = localStorage.getItem("username");

    //selectively showing the description
    const description = 
                props.data.description ?
                <div>
                    <div className={classes.desc}>Description</div>
                    <p className={classes.description}>
                        {props.data.description}
                    </p>
                </div> :
                <></>
            
    return (
        <div className={classes.card}>
            <div className={classes.issueCategoryContainer}>
                <span className={classes.issueTag + " " + classes[props.data.issueCategory]}>
                    {props.data.issueCategory}
                </span>
                <div className={classes.date}>
                    {props.data.date ? props.data.date.slice(0,10).split("-").join("  / "): ""}
                </div>
            </div>
            <div className={classes.flexRow1}>
                <div>
                    <div className={classes.username}>{props.data.name}</div>
                    <div className={classes.iconTag} style={{ fontSize: "14px", gap: "4px" }}>
                        <HiPhone></HiPhone>
                        {props.data.phoneNumber}
                    </div>
                </div>
                <div className={classes.borderIcon}>
                    <div className={classes.iconTag}><HiLibrary></HiLibrary> {props.data.hostelName}</div>
                    <div className={classes.iconTag}><HiClock></HiClock> {props.data.availiability}</div>
                </div>
            </div>
            {description}
            
            {
                onAccept ?
                <div className={classes.btnContainer}>
                    <div onClick={() => onAccept(props.data._id)}
                        className={classes.btn}
                        style={{ backgroundColor: "#22c55e", color: "white" }} >
                        Accept
                    </div>
                    <div onClick={() => onReject(props.data._id)}
                        className={classes.btn}
                        style={{ backgroundColor: "#ef4444", color: "white" }}  >
                        Reject
                    </div>
                    { officerType==="Officer3"?<></>:
                        <div onClick={() => onEscalate(props.data._id)}
                            className={classes.btn}
                            style={{ backgroundColor: "#3b82f6", color: "white" }}>
                            Escalate
                        </div>
                    }       
                </div>
                :
                <div className={classes.btnContainer}>
                    <div
                        className={classes.btn}
                        style={{ backgroundColor: "#0c4a6e", color: "white" }} >
                        {props.data.status}
                    </div>
                </div>
            }

        </div>
    );
}

Card.propTypes = {
    issueCategory: PropTypes.string,
    date: PropTypes.string,
    name: PropTypes.string,
    phoneNumber: PropTypes.number,
    hostelName: PropTypes.string,
    availiability: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string
}

Card.defaultProps = {
    issueCategory: "issue category",
    date: "Date",
    name: "Name",
    phoneNumber: 911,
    hostelName: "Hostel",
    availiability: "Avail",
    description: "Desc",
    _id: "id"
}


export default Card;