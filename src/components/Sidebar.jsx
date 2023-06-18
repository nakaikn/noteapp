import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Note</h1>
        <button>Add Note</button>
      </div>
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>Title</strong>
            <button>Delete</button>
          </div>
          <p>Contents</p>
          <small>latest edit date:mm/dd</small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
