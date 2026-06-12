import React from "react";
import theme from "../theme";

function SummaryCards({
  totalCalls,
  appointments,
  frontDeskCalls,
  silentCalls,
}) {
  const cards = [
    [
      "Total Calls",
      totalCalls,
      theme.gradients.primary,
    ],
    [
      "Appointments",
      appointments,
      theme.gradients.success,
    ],
    [
      "Front Desk Calls",
      frontDeskCalls,
      theme.gradients.warning,
    ],
    [
      "Silent Calls",
      silentCalls,
      theme.gradients.accent,
    ],
  ];

  return (
    <div className="summary-grid">
      {cards.map(([title, value, color]) => (
        <div
          key={title}
          className="summary-card"
          style={{
            background: theme.colors.surface,
            borderRadius: theme.radius.md,
            boxShadow: theme.shadows.soft,
            color: theme.colors.text,
            padding: "18px 18px 16px",
            border: `1px solid ${theme.colors.border}`,
            minHeight: "116px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "0 auto auto 0",
              width: "100%",
              height: "4px",
              background: color,
            }}
          />
          <h4
            style={{
              margin: 0,
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: theme.colors.textMuted,
              paddingTop: "8px",
            }}
          >
            {title}
          </h4>
          <h2
            style={{
              margin: 0,
              fontSize: "38px",
              lineHeight: 1,
              fontWeight: 800,
              color: theme.colors.text,
            }}
          >
            {value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
