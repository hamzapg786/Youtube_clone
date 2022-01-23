import React from "react";
import "./SidebarList.css";
const SidebarList = ({ icon, title, selected }) => {
  return (
    <div
      className="list_container"
      style={{ background: selected ? "rgba(204, 204, 204, 0.411)" : "white" }}
    >
      <div className="list">
        {icon}
        <p style={{ fontSize: "13pt" }}>{title}</p>
      </div>
    </div>
  );
};

export default SidebarList;
