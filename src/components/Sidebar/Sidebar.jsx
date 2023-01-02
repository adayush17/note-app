import React from "react";
import "./Sidebar.scss";
import plusIcon from "../../assets/plus.png";
import { useState } from "react";

const Sidebar = (props) => {
  const color = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={()=>setListOpen(!listOpen)}/>
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {color.map((item, index) => (
          <li 
            key={index} 
            className="item" 
            style={{ backgroundColor: item }} 
            onClick={()=>props.addNotes(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
