import React, { useState } from "react";
import { FaSearch, FaCog, FaBell, FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Other.css";
import FileUpload from "../Modals/FileUpload.jsx";

const UserHeader = () => {
    const [isShow, setIsShow] = useState(false);
  return (
    <div>
    <header
      className="d-flex justify-content-between align-items-center p-1 bg-white position-fixed"
      style={{ top: 0, width: "75.5%" }}
    >
      <div
        className="d-flex align-items-center gap-3"
        style={{ paddingLeft: "6rem" }}
      >
        <span className="fw-bold">Review</span>
        <select
          className="form-select form-select-sm"
          style={{ border: "2px solid purple" }}
        >
          <option value="option1">Google</option>
          <option value="option2">Facebook</option>
          <option value="option3">Instagram</option>
        </select>
      </div>

      <div className="d-flex p-3">
        <button className="links-btn">
          <FaSearch />
        </button>
        <button className="links-btn">Export to excel</button>
        <button className="links-btn" onClick={() => setIsShow(!isShow)}>Add Document</button>
        <button className="links-btn">Connect</button>
        <button className="links-btn">
          <FaBell />
        </button>
        <button className="links-btn">
          {" "}
          <FaCog />
        </button>
        <button className="links-btn">
          {" "}
          <FaUser />
        </button>
      </div>
    </header>
    <FileUpload show={isShow} handleClose={() => setIsShow(false)} />
    </div>
  );
};

export default UserHeader;
