import React from "react";
import Userbar from "./Components/Userbar.jsx";
import UserHeader from "./Components/UserHeader.jsx";
import DetailBox from "./Components/DetailBox.jsx";
import "./index.css";
import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import Account from "./Pages/Account.jsx";
import Banking from "./Pages/Banking";
import Reports from "./Pages/Reports";
import Contacts from "./Pages/Contacts";
import Invoicing from "./Pages/Invoicing";
import Queires from "./Pages/Queires";
import Help from "./Pages/Help";

function App() {
  const MenuItems = () => useRoutes([
      { path: "/", element: <Dashboard /> },
      { path: "/accounting", element: <Account /> },
      { path: "/banking", element: <Banking /> },
      { path: "/reports", element: <Reports /> },
      { path: "/contacts", element: <Contacts /> },
      { path: "/invoicing", element: <Invoicing /> },
      { path: "/queries", element: <Queires /> },
      { path: "/help", element: <Help /> },
      { path: "*", element: <Navigate to="/" replace />}
    ]);

  return (
    <div className="d-flex h-screen bg-gray-100">
      <Userbar />

      <div className="d-flex flex-grow-1 flex-column ms-3">
        <div className="d-flex gap-1 align-items-center justify-content-between">
          <UserHeader />
          <div className="detail-box p-3 bg-white shadow rounded">
            <DetailBox />
          </div>
        </div>

        {/* Main Content Area */}
        <div
          className="d-flex flex-grow-1 content-bg"
          style={{ height: "100vh" }}
        >
          <main className="flex-grow-1 p-5 ms-5">
            <MenuItems />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
