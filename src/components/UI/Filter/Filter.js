import React, { useState } from 'react';
import classes from './Filter.module.css';

const Filter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.filterHandler(event.target.value);
  };
  const [selectedOption, setSelectedOption] = useState("")
  return (
    <div className={classes.Filter}>
      <div className={classes.Filter__control}>
        <select
          value={props.selected}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            dropdownChangeHandler(e);
          }}>
          <option value="" hidden={selectedOption ? false : true} className={classes.cancel}>
            {selectedOption ? "Cancel Selection" : `Select ${props.type}`}
          </option>
          {props.options.map(option =>
            <option key={option.name} value={option.name} style={{ textTransform: "capitalize" }}>{option.name}</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default Filter;