"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const decarbonationData = [
  { year: 2020, emissions: 1200, target: 1000 },
  { year: 2021, emissions: 1150, target: 950 },
  { year: 2022, emissions: 1100, target: 900 },
  { year: 2023, emissions: 1050, target: 850 },
  { year: 2024, emissions: 1000, target: 800 },
  { year: 2025, emissions: 950, target: 750 },
  { year: 2026, emissions: 900, target: 700 },
  { year: 2027, emissions: 850, target: 650 },
  { year: 2028, emissions: 800, target: 600 },
  { year: 2029, emissions: 750, target: 550 },
  { year: 2030, emissions: 700, target: 500 },
];

const DecarbonationTrajectory = () => {
  return (
    <div className="bg-white p-3 md:p-6 rounded-2xl border mt-6">
      <h3 className="font-medium text-lg mb-6">Trajectoire de décarbonation</h3>

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={decarbonationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            label={{
              value: "Année",
              position: "insideBottom",
              offset: -5,
              style: { fill: "#555" },
            }}
          />
          <YAxis
            label={{
              value: "Émissions (tCO₂)",
              angle: -90,
              position: "insideLeft",
              style: { fill: "#555" },
            }}
          />
          <Tooltip formatter={(value: number) => `${value} tCO₂`} />
          <Area
            type="monotone"
            dataKey="emissions"
            stroke="#FF5722"
            fill="rgba(255, 87, 34, 0.3)"
            name="Émissions actuelles"
          />
          <Area
            type="monotone"
            dataKey="target"
            stroke="#4CAF50"
            fill="rgba(76, 175, 80, 0.3)"
            name="Objectifs"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DecarbonationTrajectory;
