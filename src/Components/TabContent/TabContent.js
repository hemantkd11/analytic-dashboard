import React from "react";
import "./tabcontent.css";
const TabContent = ({ id, activeTab, children }) => {
  return (
    <div activeTab={activeTab} className="Tabcontent">
      {children}
    </div>
  );
};

export default TabContent;
