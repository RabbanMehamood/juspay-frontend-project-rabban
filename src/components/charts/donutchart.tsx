import { PieChart } from "@mui/x-charts/PieChart";
import { ChartsLegend } from "@mui/x-charts";

const data = [
  { label: "Direct", value: 400, color: "#95a4fc" },
  { label: "Affiliate", value: 300, color: "#1c1c1c" },
  { label: "Sponsored", value: 300, color: "#baedbd" },
  { label: "E-mail", value: 200, color: "#b1e3ff" },
];

export default function DonutChart() {
  return (
    <PieChart
      series={[
        {
          data,
          innerRadius: 51,
          outerRadius: 72,
          paddingAngle: 3,
          cornerRadius: 66,
          cx: 160,
        },
      ]}
      slotProps={{
        legend: {
          position: { vertical: "bottom", horizontal: "center" },
          direction: "row" as any,
        },
      }}
    >
      <ChartsLegend />
    </PieChart>
  );
}
