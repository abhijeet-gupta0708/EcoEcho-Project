import React from "react";

export function UBadge({ v }) {
  const map = {
    high: ["badge-red", "High"],
    medium: ["badge-amber", "Medium"],
    low: ["badge-green", "Low"],
  };

  const [cls, label] = map[v] || ["badge-gray", v];

  return <span className={`badge ${cls}`}>{label}</span>;
}

export function SBadge({ v }) {
  const map = {
    active: ["badge-red", "Active"],
    "in-progress": ["badge-blue", "In Progress"],
    resolved: ["badge-green", "Resolved"],
  };

  const [cls, label] = map[v] || ["badge-gray", v];

  return <span className={`badge ${cls}`}>{label}</span>;
}

export function VBadge({ v }) {
  const map = {
    available: ["badge-green", "Available"],
    "on-task": ["badge-blue", "On Task"],
    offline: ["badge-gray", "Offline"],
  };

  const [cls, label] = map[v] || ["badge-gray", v];

  return <span className={`badge ${cls}`}>{label}</span>;
}