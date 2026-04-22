import React, { useState } from "react";

import Sidebar from "./components/Sidebar";
import BottomBar from "./components/BottomBar";

import OverviewPage from "./pages/OverviewPage";
import ReportsPage from "./pages/ReportsPage";
import VolunteersPage from "./pages/VolunteersPage";
import AIMatchPage from "./pages/AIMatchPage";

import { REPORTS, ACTIVITIES, VOLUNTEERS } from "./data/mockData";
import { PAGE_TITLES } from "./constants/navigation";

export default function App() {
  const [page, setPage] = useState("overview");

const [reports, setReports] =
  useState(REPORTS);
const activities = ACTIVITIES;
const [volunteers, setVolunteers] = useState(VOLUNTEERS);

  const renderPage = () => {
    switch (page) {
      case "reports":
        return (
                  <ReportsPage
                    reports={reports}
                    setReports={setReports}
                  />
                );

      case "volunteers":
                return (
                          <VolunteersPage
                            volunteers={volunteers}
                            setVolunteers={setVolunteers}
                          />
                        );

      case "ai-match":
                return (
                  <AIMatchPage
                    reports={reports}
                    volunteers={volunteers}
                    setVolunteers={setVolunteers}
                  />
                );

      default:
        return (
          <OverviewPage
            reports={reports}
            activities={activities}
          />
        );
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar page={page} setPage={setPage} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div
          style={{
            background: "#fff",
            padding: "18px 24px",
            borderBottom: "1px solid #e2e8f0",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <h2>{PAGE_TITLES[page]}</h2>
        </div>

        {/* Content */}
        <div style={{ padding: "24px", flex: 1 }}>
          {renderPage()}
        </div>
      </div>

      <BottomBar page={page} setPage={setPage} />
    </div>
  );
}