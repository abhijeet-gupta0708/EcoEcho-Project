import React from "react";

export default function MetricCard({
  label,
  value,
  sub,
  icon,
  accent = "#1e293b",
}) {
  return (
    <div
      className="card"
      style={{
        flex: "1 1 180px",
        minWidth: "180px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "12px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "11px",
              color: "#94a3b8",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "8px",
            }}
          >
            {label}
          </p>

          <h2
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: accent,
              lineHeight: 1,
            }}
          >
            {value}
          </h2>

          {sub && (
            <p
              style={{
                fontSize: "12px",
                color: "#94a3b8",
                marginTop: "8px",
              }}
            >
              {sub}
            </p>
          )}
        </div>

        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            background: `${accent}18`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}