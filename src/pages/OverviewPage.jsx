import React from "react";
import MetricCard from "../components/MetricCard";
import MapView from "../components/MapView";

export default function OverviewPage({ reports, activities }) {
  const high = reports.filter((r) => r.urgency === "high").length;
  const resolved = reports.filter((r) => r.status === "resolved").length;

  return (
    <>
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "14px" }}>
        <MetricCard label="Total Reports" value={reports.length} icon="📋" />
        <MetricCard label="High Urgency" value={high} icon="🚨" accent="#dc2626" />
        <MetricCard label="Resolved" value={resolved} icon="✅" accent="#16a34a" />
        <MetricCard label="Live Alerts" value={activities.length} icon="⚡" accent="#2563eb" />
      </div>

      <div className="card">
        <h3 style={{ marginBottom: "14px" }}>Recent Activity</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {activities.map((item) => (
            <div
              key={item.id}
              style={{
                padding: "10px",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
              }}
            >
              <p>{item.text}</p>
              <small style={{ color: "#94a3b8" }}>{item.time}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="card">
  <h3 style={{ marginBottom: "14px" }}>
    Help Needed Locations
  </h3>

  <MapView reports={reports} />
</div>
<div className="card">
  <h3
    style={{
      marginBottom:"14px"
    }}
  >
    Live Activity
  </h3>

  <div
    style={{
      display:"grid",
      gap:"12px"
    }}
  >
    <div>🟢 Report added - 2 min ago</div>
    <div>👤 Volunteer assigned - 5 min ago</div>
    <div>✅ Flood case resolved - 9 min ago</div>
    <div>🤖 AI matched 3 volunteers</div>
  </div>
</div>
    </>
  );
}