import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
  LabelList,
} from "recharts";

const COLORS = [
  "#2563EB",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
  "#06B6D4",
  "#14B8A6",
  "#6366F1",
  "#0EA5E9",
  "#22C55E",
  "#F97316",
  "#EF4444",
];

function RequestPieChart({ filteredCalls = [] }) {
  const requestMap = {};

  filteredCalls.forEach((item) => {
  const request =
    item.primary_intent || "Unknown";

  requestMap[request] =
    (requestMap[request] || 0) + 1;
});

  const chartData = Object.keys(requestMap)
    .map((key) => ({
      name: key,
      value: requestMap[key],
    }))
    .sort((a, b) => b.value - a.value);

  const totalRequests = chartData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        padding: "20px",
        boxShadow:
          "0 6px 16px rgba(0,0,0,0.08)",
        height: "100%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#0F172A",
          fontWeight: "bold",
        }}
      >
        Calls by Request Type
      </h2>

      <ResponsiveContainer
        width="100%"
        height={550}
      >
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{
            top: 10,
            right: 60,
            left: 200,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" />

          <YAxis
            type="category"
            dataKey="name"
            width={190}
            tick={{
              fontSize: 12,
            }}
          />

          <Tooltip
            formatter={(value) => [
              `${value} Calls`,
              "Count",
            ]}
          />

          <Bar
            dataKey="value"
            radius={[0, 8, 8, 0]}
          >
            <LabelList
              dataKey="value"
              position="right"
            />

            {chartData.map(
              (entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    COLORS[
                      index %
                        COLORS.length
                    ]
                  }
                />
              )
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div
        style={{
          textAlign: "center",
          marginTop: "15px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#0F172A",
        }}
      >
        Total Requests: {totalRequests}
      </div>
    </div>
  );
}

export default RequestPieChart;