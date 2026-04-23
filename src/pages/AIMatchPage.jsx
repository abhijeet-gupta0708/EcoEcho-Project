import React, { useState } from "react";
import toast from "react-hot-toast";

export default function AIMatchPage({
  reports,
  volunteers,
  setVolunteers,
}) {
  const [running, setRunning] =
    useState(false);

  const [results, setResults] =
    useState([]);

  const runMatch = () => {
    setRunning(true);
    setResults([]);

    setTimeout(() => {
      const activeReports =
        reports.filter(
          (r) =>
            r.status ===
            "active"
        );

      const availableVols =
        volunteers.filter(
          (v) =>
            v.status ===
            "available"
        );

      const pairs =
        activeReports.map(
          (r, i) => ({
            report: r,
            volunteer:
              availableVols[
                i %
                  availableVols.length
              ],
            score:
              Math.round(
                85 +
                  Math.random() *
                    12
              ),
          })
        );

      setResults(pairs);
      setRunning(false);
    }, 2200);
  };

  const assignVolunteer = (
    volunteer,
    report
  ) => {
    setVolunteers((prev) =>
      prev.map((v) =>
        v.id === volunteer.id
          ? {
              ...v,
              status: "on-task",
              tasks:
                v.tasks + 1,
              currentTask:
                report.title,
            }
          : v
      )
    );

    toast.success(
      `${volunteer.name} assigned to ${report.title}`
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection:
          "column",
        gap: "16px",
      }}
    >
      {/* Hero */}
      <div
        style={{
          background:
            "#2563eb",
          borderRadius:
            "14px",
          padding: "22px",
          color: "#fff",
        }}
      >
        <p
          style={{
            fontSize:
              "16px",
            fontWeight:
              "700",
            marginBottom:
              "4px",
          }}
        >
          🤖 AI Volunteer Matcher
        </p>

        <p
          style={{
            fontSize:
              "13px",
            opacity: 0.85,
            marginBottom:
              "16px",
          }}
        >
          Automatically
          match active
          reports with
          available
          volunteers.
        </p>

        <button
          className="btn"
          onClick={
            runMatch
          }
          disabled={
            running
          }
          style={{
            background:
              "#fff",
            color:
              "#2563eb",
            fontWeight:
              "700",
          }}
        >
          {running
            ? "Processing..."
            : "Start Auto Match Report"}
        </button>
      </div>

      {/* Loading */}
      {running && (
        <div className="card">
          <div className="spinner" />
          <p
            style={{
              marginTop:
                "12px",
            }}
          >
            AI analyzing
            reports...
          </p>
        </div>
      )}

      {/* Results */}
      {results.map(
        (item, i) => (
          <div
            key={i}
            className="card"
            style={{
              display:
                "flex",
              justifyContent:
                "space-between",
              alignItems:
                "center",
              flexWrap:
                "wrap",
              gap: "14px",
            }}
          >
            <div>
              <small>
                REPORT
              </small>
              <h4>
                {
                  item
                    .report
                    .title
                }
              </h4>
            </div>

            <div>
              <small>
                BEST MATCH
              </small>
              <h4>
                {
                  item
                    .volunteer
                    ?.name
                }
              </h4>
            </div>

            <div>
              <h3
                style={{
                  color:
                    "#16a34a",
                }}
              >
                {
                  item
                    .score
                }
                %
              </h3>
            </div>

            <button
              className="btn btn-primary"
              onClick={() =>
                assignVolunteer(
                  item.volunteer,
                  item.report
                )
              }
            >
              Assign
            </button>
          </div>
        )
      )}
    </div>
  );
}