import React from "react";

function SummaryCards({
  totalCalls,
  appointments,
  frontDeskCalls,
  silentCalls,
}) {
  const cards = [
  ["Total Calls", totalCalls, "linear-gradient(135deg,#2563EB,#3B82F6)"],
  ["Appointments", appointments, "linear-gradient(135deg,#10B981,#34D399)"],
  ["Front Desk Calls", frontDeskCalls, "linear-gradient(135deg,#F59E0B,#FBBF24)"],
  ["Silent Calls", silentCalls, "linear-gradient(135deg,#8B5CF6,#A78BFA)"],
];

  return (
    <div className="summary-grid">
      {cards.map(([title, value, color]) => (
        <div
          key={title}
          className="summary-card"
          style={{
  background: color,
  borderRadius: "18px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  color: "#fff",
  padding: "20px",
}}
        >
          <h4>{title}</h4>
          <h2>{value}</h2>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;