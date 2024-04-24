import React from "react";
import "./TAbNavitem.css";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };
  return (
    
      <li  className={`Nav-list ${activeTab === id ? "active" : ""}`} onClick={handleClick}>
        {title}
      </li>
    
  );
};

export default TabNavItem;
