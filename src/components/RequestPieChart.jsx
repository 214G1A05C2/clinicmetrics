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
import theme from "../theme";

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
        background: theme.colors.surface,
        borderRadius: theme.radius.lg,
        padding: "20px",
        boxShadow: theme.shadows.card,
        height: "100%",
        border: `1px solid ${theme.colors.border}`,
      }}
    >
      <h2
        style={{
          textAlign: "left",
          marginBottom: "18px",
          color: theme.colors.text,
          fontWeight: 700,
          fontSize: "18px",
        }}
      >
        Calls by Request Type
      </h2>

      <ResponsiveContainer
        width="100%"
        height={540}
      >
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{
            top: 10,
            right: 30,
            left: 156,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E6EDF5" />

          <XAxis
            type="number"
            tick={{ fontSize: 12, fill: "#64748B" }}
            axisLine={{ stroke: "#CBD5E1" }}
            tickLine={{ stroke: "#CBD5E1" }}
          />

          <YAxis
            type="category"
            dataKey="name"
            width={154}
            tick={{
              fontSize: 11,
              fill: "#475569",
            }}
            axisLine={{ stroke: "#CBD5E1" }}
            tickLine={false}
          />

          <Tooltip
            formatter={(value) => [
              `${value} Calls`,
              "Count",
            ]}
            contentStyle={{
              borderRadius: "12px",
              border: `1px solid ${theme.colors.border}`,
              boxShadow: theme.shadows.card,
              background: "rgba(255,255,255,0.98)",
            }}
          />

          <Bar
            dataKey="value"
            radius={[0, 10, 10, 0]}
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
                    theme.chartColors[
                      index %
                        theme.chartColors.length
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
          textAlign: "right",
          marginTop: "12px",
          fontSize: "14px",
          fontWeight: 700,
          color: theme.colors.text,
        }}
      >
        Total Requests: {totalRequests}
      </div>
    </div>
  );
}

export default RequestPieChart;
