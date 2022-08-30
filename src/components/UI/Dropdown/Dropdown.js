import { useEffect, useState } from "react";
import classes from "./Dropdown.module.css"


const Dropdown = ({ onChange, options, type }) => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState("");
    useEffect(() => {
        if (selected !== "") {
            onChange(selected);
        }
    }, [selected])

    return (
        <div className={classes.select_wrapper} onClick={() => setOpen(!open)} onMouseLeave={() => setOpen(false)}>
            <div className={classes.select + " " + (open ? classes.open : "")}>
                <div className={classes.select__trigger}><span>{selected !== "" ? selected : `Select ${type}`}</span>
                    <div className={classes.arrow}></div>
                </div>
                <div className={classes.custom_options}>
                    {options.map(option => {
                        return (
                            <span
                                key={option.name}
                                className={classes.custom_option + " " + (option.name === selected ? classes.selected : "")}
                                onClick={() => setSelected(option.name)}
                                data-value="">
                                {option.name}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;