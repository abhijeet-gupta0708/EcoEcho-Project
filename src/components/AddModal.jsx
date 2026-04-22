import React, { useState } from "react";

export default function AddModal({
  onClose,
  onAdd,
}) {
  const [form, setForm] = useState({
    title: "",
    location: "",
    type: "Fire",
    urgency: "medium",
  });

  const submit = () => {
    if (!form.title || !form.location)
      return;

    onAdd({
      id: Date.now(),
      title: form.title,
      location: form.location,
      type: form.type,
      urgency: form.urgency,
      status: "active",
      volunteers: 0,
      lat: 28.55 + Math.random() * 0.2,
      lng: 77.2 + Math.random() * 0.2,
      time: "just now",
    });

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3
          style={{
            marginBottom: "14px",
          }}
        >
          Add New Report
        </h3>

        <input
          className="input"
          placeholder="Report Title"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
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
          style={{
            marginTop: "10px",
          }}
        />

        <select
          className="input"
          value={form.type}
          onChange={(e) =>
            setForm({
              ...form,
              type: e.target.value,
            })
          }
          style={{
            marginTop: "10px",
          }}
        >
          <option>Fire</option>
          <option>Flood</option>
          <option>Animal</option>
          <option>Water</option>
        </select>

        <select
          className="input"
          value={form.urgency}
          onChange={(e) =>
            setForm({
              ...form,
              urgency:
                e.target.value,
            })
          }
          style={{
            marginTop: "10px",
          }}
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
            display: "flex",
            gap: "10px",
            marginTop: "14px",
          }}
        >
          <button
            className="btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="btn btn-primary"
            onClick={submit}
          >
            Add Report
          </button>
        </div>
      </div>
    </div>
  );
}