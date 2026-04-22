import React, { useState } from "react";
import { VBadge } from "../components/badges";
import { REPORTS } from "../data/mockData";

export default function VolunteersPage({
  volunteers,
  setVolunteers,
}) {
  const [openId, setOpenId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    location: "",
    skills: "",
    status: "available",
  });

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

  const addVolunteer = () => {
    if (!form.name || !form.location) return;

    const newVolunteer = {
      id: Date.now(),
      name: form.name,
      location: form.location,
      skills: form.skills
        .split(",")
        .map((s) => s.trim()),
      status: form.status,
      tasks: 0,
    };

    setVolunteers((prev) => [
      ...prev,
      newVolunteer,
    ]);

    setForm({
      name: "",
      location: "",
      skills: "",
      status: "available",
    });

    setShowForm(false);
  };

  return (
    <div className="card">
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <h3>Volunteer Network</h3>

        <button
          className="btn btn-primary"
          onClick={() =>
            setShowForm(!showForm)
          }
        >
          + Add Volunteer
        </button>
      </div>

      {/* Add Form */}
      {showForm && (
        <div
          style={{
            padding: "14px",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            marginBottom: "16px",
            display: "grid",
            gap: "10px",
          }}
        >
          <input
            className="input"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />

          <input
            className="input"
            placeholder="Location"
            value={form.location}
            onChange={(e) =>
              setForm({
                ...form,
                location:
                  e.target.value,
              })
            }
          />

          <input
            className="input"
            placeholder="Skills (comma separated)"
            value={form.skills}
            onChange={(e) =>
              setForm({
                ...form,
                skills:
                  e.target.value,
              })
            }
          />

          <select
            className="input"
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status:
                  e.target.value,
              })
            }
          >
            <option value="available">
              Available
            </option>
            <option value="offline">
              Offline
            </option>
          </select>

          <button
            className="btn btn-primary"
            onClick={addVolunteer}
          >
            Save Volunteer
          </button>
        </div>
      )}

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
            }}
          >
            <h4>{v.name}</h4>
            <p style={{ color: "#64748b" }}>
              {v.location}
            </p>

            <div
              style={{
                margin: "10px 0",
              }}
            >
              <VBadge v={v.status} />
            </div>

            <p>
              Skills:{" "}
              {v.skills.join(", ")}
            </p>

            {v.currentTask && (
              <p
                style={{
                  color:
                    "#2563eb",
                  marginTop: "8px",
                }}
              >
                Current:{" "}
                {v.currentTask}
              </p>
            )}

            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                marginTop: "12px",
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
                    openId === v.id
                      ? null
                      : v.id
                  )
                }
              >
                Assign Work
              </button>
            </div>

            {/* Dropdown */}
            {openId === v.id && (
              <div
                style={{
                  position:
                    "absolute",
                  top: "120px",
                  right: "-10px",
                  width: "230px",
                  background:
                    "#fff",
                  border:
                    "1px solid #e2e8f0",
                  borderRadius:
                    "12px",
                  boxShadow:
                    "0 10px 25px rgba(0,0,0,0.08)",
                  padding: "10px",
                  zIndex: 50,
                }}
              >
                {REPORTS.map((r) => (
                  <div
                    key={r.id}
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
                      {r.title}
                    </strong>

                    <p
                      style={{
                        fontSize:
                          "12px",
                        color:
                          "#64748b",
                      }}
                    >
                      {r.location} |{" "}
                      {r.type}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}