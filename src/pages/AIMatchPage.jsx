import React, { useState } from "react";

export default function AIMatchPage({
  reports,
  volunteers,
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

      const available =
        volunteers.filter(
          (v) =>
            v.status ===
            "available"
        );

      const pairs =
        activeReports.map(
          (report, i) => ({
            report,
            volunteer:
              available[
                i %
                  available.length
              ],
            score:
              Math.round(
                88 +
                  Math.random() *
                    10
              ),
          })
        );

      setResults(pairs);
      setRunning(false);
    }, 2200);
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
            "16px",
          padding: "24px",
          color: "#fff",
        }}
      >
        <h2
          style={{
            fontSize:
              "20px",
            fontWeight:
              "700",
            marginBottom:
              "8px",
          }}
        >
          🤖 AI Volunteer Matcher
        </h2>

        <p
          style={{
            opacity: 0.9,
            marginBottom:
              "18px",
            lineHeight:
              1.5,
          }}
        >
          Automatically
          analyze active
          reports and
          assign the best
          available
          volunteers based
          on urgency,
          skills and
          availability.
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
        <div
          className="card"
          style={{
            textAlign:
              "center",
            padding:
              "30px",
          }}
        >
          <div
            style={{
              width: "52px",
              height:
                "52px",
              border:
                "5px solid #dbeafe",
              borderTop:
                "5px solid #2563eb",
              borderRadius:
                "50%",
              margin:
                "0 auto 14px",
              animation:
                "spin 1s linear infinite",
            }}
          />

          <p
            style={{
              color:
                "#64748b",
            }}
          >
            AI is analyzing
            reports and
            matching best
            volunteers...
          </p>
        </div>
      )}

      {/* Results */}
      {results.map(
        (
          item,
          index
        ) => (
          <div
            key={
              index
            }
            className="card"
            style={{
              display:
                "flex",
              alignItems:
                "center",
              justifyContent:
                "space-between",
              flexWrap:
                "wrap",
              gap: "16px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize:
                    "12px",
                  color:
                    "#94a3b8",
                  marginBottom:
                    "4px",
                }}
              >
                REPORT
              </p>

              <h4>
                {
                  item
                    .report
                    .title
                }
              </h4>
            </div>

            <div
              style={{
                fontSize:
                  "26px",
                color:
                  "#cbd5e1",
              }}
            >
              →
            </div>

            <div>
              <p
                style={{
                  fontSize:
                    "12px",
                  color:
                    "#94a3b8",
                  marginBottom:
                    "4px",
                }}
              >
                BEST MATCH
              </p>

              <h4>
                {
                  item
                    .volunteer
                    ?.name
                }
              </h4>
            </div>

            <div
              style={{
                textAlign:
                  "center",
              }}
            >
              <p
                style={{
                  fontSize:
                    "28px",
                  fontWeight:
                    "700",
                  color:
                    "#16a34a",
                }}
              >
                {
                  item
                    .score
                }
                %
              </p>

              <small>
                match
              </small>
            </div>
          </div>
        )
      )}
    </div>
  );
}