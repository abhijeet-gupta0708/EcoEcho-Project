import React from "react";
import { NAV } from "../constants/navigation";

export default function Sidebar({ page, setPage }) {
  return (
    <div className="sidebar">
      <div
        style={{
          padding: "20px 6px 16px",
          borderBottom: "1px solid #f1f5f9",
          marginBottom: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "10px",
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            🌿
          </div>

          <div>
            <p style={{ fontWeight: 700 }}>EcoEcho AI</p>
            <p style={{ fontSize: "12px", color: "#94a3b8" }}>
              NGO Command Center
            </p>
          </div>
        </div>
      </div>

      {NAV.map((item) => (
        <button
          key={item.id}
          className={`nav-btn ${page === item.id ? "active" : ""}`}
          onClick={() => setPage(item.id)}
        >
          <span>{item.icon}</span>
          {item.label}
        </button>
      ))}

      <div style={{ marginTop: "auto", padding: "12px" }}>
        <div style={{ fontSize: "12px", color: "#94a3b8" }}>
          Logged in as Admin
        </div>
      </div>
    </div>
  );
}