import React, { useState } from "react";
import { UBadge, SBadge } from "../components/badges";
import AddModal from "../components/AddModal";

export default function ReportsPage({
  reports,
  setReports,
}) {
  const [showModal, setShowModal] =
    useState(false);

  const [selected, setSelected] =
    useState(null);

  const [filter, setFilter] =
    useState("all");

  const tabs = [
    "all",
    "high",
    "medium",
    "low",
    "active",
    "resolved",
  ];

  const addReport = (newReport) => {
    setReports((prev) => [
      newReport,
      ...prev,
    ]);
  };

  const updateReport = (
    id,
    updates
  ) => {
    setReports((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              ...updates,
            }
          : r
      )
    );
  };

  const filteredReports =
    reports.filter((r) => {
      if (filter === "all")
        return true;

      if (
        [
          "high",
          "medium",
          "low",
        ].includes(filter)
      ) {
        return (
          r.urgency === filter
        );
      }

      return (
        r.status === filter
      );
    });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection:
            "column",
          gap: "16px",
        }}
      >
        {/* Header */}
        <div
          className="card"
          style={{
            padding:
              "22px 24px",
          }}
        >
          <div
            style={{
              display:
                "flex",
              justifyContent:
                "space-between",
              alignItems:
                "center",
              flexWrap:
                "wrap",
              gap: "12px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize:
                    "28px",
                  fontWeight:
                    "800",
                }}
              >
                Environmental
                Reports
              </h2>

              <p
                style={{
                  color:
                    "#94a3b8",
                  marginTop:
                    "6px",
                  fontSize:
                    "14px",
                }}
              >
                Last updated
                just now
              </p>
            </div>

            <div
              style={{
                background:
                  "#dcfce7",
                color:
                  "#16a34a",
                padding:
                  "8px 14px",
                borderRadius:
                  "999px",
                fontWeight:
                  "700",
                fontSize:
                  "14px",
              }}
            >
              ● Live
            </div>
          </div>
        </div>

        {/* Main Table */}
        <div className="card">
          {/* Tabs + Button */}
          <div
            style={{
              display:
                "flex",
              justifyContent:
                "space-between",
              alignItems:
                "center",
              flexWrap:
                "wrap",
              gap: "12px",
              marginBottom:
                "18px",
            }}
          >
            <div
              style={{
                display:
                  "flex",
                gap: "10px",
                flexWrap:
                  "wrap",
              }}
            >
              {tabs.map(
                (tab) => (
                  <button
                    key={tab}
                    className="btn"
                    onClick={() =>
                      setFilter(
                        tab
                      )
                    }
                    style={{
                      background:
                        filter ===
                        tab
                          ? "#2563eb"
                          : "#f1f5f9",
                      color:
                        filter ===
                        tab
                          ? "#fff"
                          : "#475569",
                    }}
                  >
                    {tab
                      .charAt(
                        0
                      )
                      .toUpperCase() +
                      tab.slice(
                        1
                      )}
                  </button>
                )
              )}
            </div>

            <button
              className="btn btn-danger"
              onClick={() =>
                setShowModal(true)
              }
            >
              🚨 New Report
            </button>
          </div>

          {/* Table Header */}
          <div
            style={{
              display:
                "grid",
              gridTemplateColumns:
                "2fr 1fr 1fr 1fr 80px",
              gap: "14px",
              padding:
                "14px 16px",
              background:
                "#f8fafc",
              borderRadius:
                "12px",
              fontSize:
                "12px",
              fontWeight:
                "700",
              color:
                "#94a3b8",
              textTransform:
                "uppercase",
            }}
          >
            <div>Report</div>
            <div>
              Location
            </div>
            <div>
              Urgency
            </div>
            <div>Status</div>
            <div>Vols</div>
          </div>

          {/* Rows */}
          <div
            style={{
              marginTop:
                "8px",
              display:
                "flex",
              flexDirection:
                "column",
              gap: "8px",
            }}
          >
            {filteredReports.map(
              (r) => (
                <div
                  key={r.id}
                  onClick={() =>
                    setSelected(
                      r
                    )
                  }
                  style={{
                    display:
                      "grid",
                    gridTemplateColumns:
                      "2fr 1fr 1fr 1fr 80px",
                    gap: "14px",
                    padding:
                      "16px",
                    border:
                      "1px solid #f1f5f9",
                    borderRadius:
                      "14px",
                    cursor:
                      "pointer",
                    alignItems:
                      "center",
                    transition:
                      "0.2s",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        fontSize:
                          "16px",
                        fontWeight:
                          "700",
                      }}
                    >
                      {
                        r.title
                      }
                    </h4>

                    <p
                      style={{
                        fontSize:
                          "13px",
                        color:
                          "#94a3b8",
                        marginTop:
                          "4px",
                      }}
                    >
                      {
                        r.time ||
                        "just now"
                      }
                    </p>
                  </div>

                  <div
                    style={{
                      color:
                        "#64748b",
                      fontWeight:
                        "500",
                    }}
                  >
                    {
                      r.location
                    }
                  </div>

                  <div>
                    <UBadge
                      v={
                        r.urgency
                      }
                    />
                  </div>

                  <div>
                    <SBadge
                      v={
                        r.status
                      }
                    />
                  </div>

                  <div
                    style={{
                      fontWeight:
                        "700",
                      color:
                        "#64748b",
                    }}
                  >
                    {r.volunteers ||
                      0}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Add Report */}
      {showModal && (
        <AddModal
          onClose={() =>
            setShowModal(false)
          }
          onAdd={addReport}
        />
      )}

      {/* Edit Report */}
      {selected && (
        <div className="modal-overlay">
          <div className="modal">
            <div
              style={{
                display:
                  "flex",
                justifyContent:
                  "space-between",
                alignItems:
                  "center",
                marginBottom:
                  "18px",
              }}
            >
              <h3>
                Edit Report
              </h3>

              <button
                className="btn btn-sm"
                onClick={() =>
                  setSelected(
                    null
                  )
                }
              >
                ✕
              </button>
            </div>

            <input
              className="input"
              value={
                selected.title
              }
              onChange={(e) =>
                setSelected({
                  ...selected,
                  title:
                    e.target
                      .value,
                })
              }
            />

            <input
              className="input"
              style={{
                marginTop:
                  "12px",
              }}
              value={
                selected.location
              }
              onChange={(e) =>
                setSelected({
                  ...selected,
                  location:
                    e.target
                      .value,
                })
              }
            />

            <select
              className="input"
              style={{
                marginTop:
                  "12px",
              }}
              value={
                selected.urgency
              }
              onChange={(e) =>
                setSelected({
                  ...selected,
                  urgency:
                    e.target
                      .value,
                })
              }
            >
              <option value="high">
                High
              </option>
              <option value="medium">
                Medium
              </option>
              <option value="low">
                Low
              </option>
            </select>

            <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "1fr 1fr 1fr",
                    gap: "10px",
                    marginTop: "18px",
                  }}
                >
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Delete this report?"
                        )
                      ) {
                        setReports((prev) =>
                          prev.filter(
                            (r) =>
                              r.id !==
                              selected.id
                          )
                        );

                        setSelected(null);
                      }
                    }}
                  >
                    Delete
                  </button>

                  <button
                    className="btn"
                    onClick={() => {
                      updateReport(
                        selected.id,
                        {
                          status:
                            "resolved",
                        }
                      );
                      setSelected(null);
                    }}
                  >
                    Resolve
                  </button>

                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      updateReport(
                        selected.id,
                        selected
                      );
                      setSelected(null);
                    }}
                  >
                    Save
                  </button>
                </div>
              
              
            </div>
          </div>
      )}
    </>
  );
}