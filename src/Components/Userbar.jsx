import React from "react";
import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";
import { FaHome, FaUser, FaCog, FaBars } from "react-icons/fa";
import DashboardIcon from "../assets/Icon Frame.png";
import IconImg from "../assets/Group 1984077585.png";
import AccountIcon from "../assets/Group.png";
import BankIcon from "../assets/hugeicons_bank.png";
import ReportIcon from "../assets/icon-park-outline_table-report.png";
import ContactIcon from "../assets/Group 11.png";
import InvoiceIcon from "../assets/basil_invoice-outline.png";
import QueryIcon from "../assets/ph_question.png";
import './Other.css';
import { useNavigate } from "react-router-dom";

const Userbar = () => {
  const navigate = useNavigate();
  const items = [
    { label: "Dashboard", path: "/", imagepath: DashboardIcon },
    { label: "Accounting", path: "/accounting", imagepath: AccountIcon },
    { label: "Banking", path: "/banking", imagepath: BankIcon },
    { label: "Reports", path: "/reports", imagepath: ReportIcon },
    { label: "Contacts", path: "/contacts", imagepath: ContactIcon },
    { label: "Invoicing", path: "/invoicing", imagepath: InvoiceIcon },
    { label: "Queries", path: "/queries", imagepath: QueryIcon },
  ];

  return (
    <div>
      <Sidebar
        collapsed={true}
        style={{
          height: "100vh",
          position: "fixed",
          left: "0",
          top: "0",
          margin: "0",
          padding: "0",
          width: "8%",
          zIndex: "1"
        }}
        className="pro-sidebar"
      >
        <Menu>
          <MenuItem className="ms-2" onClick={() => navigate('/')}>
            <img src={IconImg} alt="img not found" />
          </MenuItem>
          {items.map((item, index) => (
            <MenuItem key={index} className="pro-menu-item" onClick={() => navigate(`${item?.path}`)}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={item?.imagepath} alt="img not found" />
                <span style={{ fontSize: "12px", marginTop: "1px" }}>
                  {item?.label}
                </span>
              </div>
            </MenuItem>
          ))}
          <MenuItem style={{ marginTop: "8rem" }} className="pro-menu-item" onClick={() => navigate('/help')}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={QueryIcon} alt="Help" />
              <span style={{ fontSize: "12px", marginTop: "1px" }}>Help</span>
            </div>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Userbar;
