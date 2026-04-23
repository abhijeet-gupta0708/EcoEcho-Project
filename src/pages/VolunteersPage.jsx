import React, { useState } from "react";
import { VBadge } from "../components/badges";
import { REPORTS } from "../data/mockData";
import AddVolunteerModal from "../components/AddVolunteerModal";

export default function VolunteersPage({
  volunteers,
  setVolunteers,
}) {
  const [openId, setOpenId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const changeStatus = (id, status) => {
    setVolunteers((prev) =>
      prev.map((v) =>
        v.id === id ? { ...v, status } : v
      )
    );
  };

  const assignTask = (volunteerId, report) => {
    setVolunteers((prev) =>
      prev.map((v) =>
        v.id === volunteerId
          ? {
              ...v,
              status: "on-task",
              tasks: v.tasks + 1,
              currentTask: report.title,
            }
          : v
      )
    );

    setOpenId(null);
  };

  const addVolunteer = (newVolunteer) => {
    setVolunteers((prev) => [
      ...prev,
      newVolunteer,
    ]);
  };

  return (
    <>
      <div className="card">
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "16px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <h3>Volunteer Network</h3>

          <button
            className="btn btn-primary"
            onClick={() =>
              setShowForm(true)
            }
          >
            + Add Volunteer
          </button>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(260px,1fr))",
            gap: "14px",
          }}
        >
          {volunteers.map((v) => (
            <div
              key={v.id}
              style={{
                padding: "14px",
                border:
                  "1px solid #e2e8f0",
                borderRadius: "12px",
                position: "relative",
                background: "#fff",
              }}
            >
              <h4>{v.name}</h4>

              <p
                style={{
                  color:
                    "#64748b",
                  marginTop: "4px",
                }}
              >
                {v.location}
              </p>

              <div
                style={{
                  margin:
                    "10px 0",
                }}
              >
                <VBadge v={v.status} />
              </div>

              <p
                style={{
                  fontSize:
                    "14px",
                  lineHeight:
                    1.5,
                }}
              >
                Skills:{" "}
                {v.skills.join(
                  ", "
                )}
              </p>

              <p
                style={{
                  marginTop:
                    "8px",
                  fontSize:
                    "14px",
                }}
              >
                Tasks Done:{" "}
                {v.tasks}
              </p>

              {v.currentTask && (
                <p
                  style={{
                    color:
                      "#2563eb",
                    marginTop:
                      "8px",
                    fontSize:
                      "14px",
                  }}
                >
                  Current:{" "}
                  {
                    v.currentTask
                  }
                </p>
              )}

              {/* Buttons */}
              <div
                style={{
                  display:
                    "flex",
                  gap: "8px",
                  flexWrap:
                    "wrap",
                  marginTop:
                    "14px",
                }}
              >
                <button
                  className="btn"
                  onClick={() =>
                    changeStatus(
                      v.id,
                      "available"
                    )
                  }
                >
                  Available
                </button>

                <button
                  className="btn"
                  onClick={() =>
                    changeStatus(
                      v.id,
                      "offline"
                    )
                  }
                >
                  Offline
                </button>

                <button
                  className="btn btn-primary"
                  onClick={() =>
                    setOpenId(
                      openId ===
                        v.id
                        ? null
                        : v.id
                    )
                  }
                >
                  Assign Work
                </button>
              </div>

              {/* Report Dropdown */}
              {openId === v.id && (
                <div
                  style={{
                    position:
                      "absolute",
                    top: "120px",
                    right: "0",
                    width:
                      "240px",
                    background:
                      "#fff",
                    border:
                      "1px solid #e2e8f0",
                    borderRadius:
                      "12px",
                    boxShadow:
                      "0 12px 25px rgba(0,0,0,0.08)",
                    padding:
                      "10px",
                    zIndex: 50,
                  }}
                >
                  {REPORTS.map(
                    (r) => (
                      <div
                        key={
                          r.id
                        }
                        onClick={() =>
                          assignTask(
                            v.id,
                            r
                          )
                        }
                        style={{
                          padding:
                            "10px",
                          borderRadius:
                            "10px",
                          cursor:
                            "pointer",
                          marginBottom:
                            "6px",
                          border:
                            "1px solid #f1f5f9",
                        }}
                      >
                        <strong>
                          {
                            r.title
                          }
                        </strong>

                        <p
                          style={{
                            fontSize:
                              "12px",
                            color:
                              "#64748b",
                            marginTop:
                              "4px",
                          }}
                        >
                          {
                            r.location
                          }{" "}
                          |{" "}
                          {
                            r.type
                          }
                        </p>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add Volunteer Modal */}
      {showForm && (
        <AddVolunteerModal
          onClose={() =>
            setShowForm(false)
          }
          onAdd={
            addVolunteer
          }
        />
      )}
    </>
  );
}