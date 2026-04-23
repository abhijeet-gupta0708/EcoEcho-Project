import React, { useState } from "react";

export default function AddVolunteerModal({
  onClose,
  onAdd,
}) {
  const [form, setForm] = useState({
    name: "",
    location: "",
    skills: "",
    status: "available",
  });

  const submit = () => {
    if (
      !form.name.trim() ||
      !form.location.trim()
    )
      return;

    onAdd({
      id: Date.now(),
      name: form.name,
      location: form.location,
      skills: form.skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      status: form.status,
      tasks: 0,
      currentTask: "",
    });

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              fontSize:
                "16px",
              fontWeight:
                "700",
            }}
          >
            👥 Add Volunteer
          </h2>

          <button
            className="btn btn-sm"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Inputs */}
        <div
          style={{
            display: "flex",
            flexDirection:
              "column",
            gap: "12px",
          }}
        >
          <input
            className="input"
            placeholder="Volunteer name..."
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
            placeholder="Location..."
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
            placeholder="Skills (First Aid, Rescue)"
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
            <option value="on-task">
              On Task
            </option>
          </select>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "4px",
            }}
          >
            <button
              className="btn"
              style={{
                flex: 1,
              }}
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              className="btn btn-primary"
              style={{
                flex: 1,
              }}
              onClick={submit}
            >
              Add Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}