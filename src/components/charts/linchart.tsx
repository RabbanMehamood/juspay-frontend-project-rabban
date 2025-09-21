import { LineChart } from "@mui/x-charts/LineChart";
import Stack from "@mui/material/Stack";

export default function Linegraph() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 5, md: 4 }}
      sx={{ width: "100%" }}
    >
      <LineChart
        series={[
          {
            id: "series-1",
            data: [5, 10, 8, 15, 12, 20, 18],
            color: "#000000", //line color
            curve: "natural",
            showMark: false, 
          },
          {
            id: "series-2",
            data: [4, 2, 5, 9, 22, 20, 15],
            color: "#a8c5da", 
            curve: "natural", 
            showMark: false, 
          },
        ]}
        xAxis={[
          {
            data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            scaleType: "point",
            tickSize: 0,
            tickLabelStyle: { angle: 0, color: "#1C1C1C" },
            disableLine: false,
            disableTicks: false,
          },
        ]}
        yAxis={[
          {
            scaleType: "linear",
            tickSize: 0,
            disableLine: true,
            disableTicks: false,
          },
        ]}
        height={300}
        margin={{ left: 20, bottom: 10 }}
        grid={{ horizontal: true, vertical: false }} 
        sx={{
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      />
    </Stack>
  );
}
