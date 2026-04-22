import React, { useState } from "react";
import { UBadge, SBadge } from "../components/badges";
import AddModal from "../components/AddModal";

export default function ReportsPage({
  reports,
  setReports,
}) {
  const [showModal, setShowModal] =
    useState(false);

  const addReport = (newReport) => {
    setReports((prev) => [
      newReport,
      ...prev,
    ]);
  };

  return (
    <>
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <h3>
            Environmental Reports
          </h3>

          <button
            className="btn btn-primary"
            onClick={() =>
              setShowModal(true)
            }
          >
            + Add Report
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection:
              "column",
            gap: "12px",
          }}
        >
          {reports.map((report) => (
            <div
              key={report.id}
              style={{
                padding: "12px",
                border:
                  "1px solid #e2e8f0",
                borderRadius:
                  "10px",
              }}
            >
              <h4>
                {report.title}
              </h4>

              <p
                style={{
                  color:
                    "#64748b",
                  margin:
                    "6px 0",
                }}
              >
                {report.location}
              </p>

              <div
                style={{
                  display:
                    "flex",
                  gap: "10px",
                }}
              >
                <UBadge
                  v={
                    report.urgency
                  }
                />
                <SBadge
                  v={
                    report.status
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <AddModal
          onClose={() =>
            setShowModal(false)
          }
          onAdd={addReport}
        />
      )}
    </>
  );
}