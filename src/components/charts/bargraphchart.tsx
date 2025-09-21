import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";
import type { BarItemIdentifier, ChartsAxisData } from "@mui/x-charts/models";

export default function Bargraph() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 5, md: 4 }}
      sx={{ width: "100%" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <BarChart
          series={[
            {
              id: "series-2",
              data: [20, 15, 10, 20, 15, 20, 24, 17],
              stack: "total",
              color: "#A8C5D8",
              highlightScope: {
                highlight: "item",
              },
            },
          ]}
          xAxis={[
            {
              data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              scaleType: "band",
              tickSize: 1,
              tickLabelStyle: { angle: 0, color: "#000000ff" },
              disableLine: false,
              disableTicks: false,
            },
          ]}
          yAxis={[
            {
              data: ["0M", "10M", "15M", "20M", "30M", "40M"],
              scaleType: "linear",
              tickSize: 0,
              disableLine: true,
              disableTicks: false,
              valueFormatter: (v) => `${Math.round(v)}M`,
            },
          ]}
          height={230}
          margin={{ left: 10, bottom: 5 }}
          grid={{ horizontal: true }}
       
          sx={{
            "--ChartsBar-borderRadius": "6px",
          }}
        />
      </Box>
    </Stack>
  );
}
