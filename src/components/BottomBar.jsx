import React from "react";
import { NAV } from "../constants/navigation";

export default function BottomBar({ page, setPage }) {
  return (
    <div className="bottom-bar">
      {NAV.map((item) => (
        <button
          key={item.id}
          onClick={() => setPage(item.id)}
          style={{
            border: "none",
            background: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: page === item.id ? "#2563eb" : "#94a3b8",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: "18px" }}>{item.icon}</span>
          {item.label}
        </button>
      ))}
    </div>
  );
}