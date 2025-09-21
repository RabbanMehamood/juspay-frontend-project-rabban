import React from "react";
import { useTheme } from "@mui/material/styles";
import Bargraph from "../components/charts/bargraphchart";
import Linegraph from "../components/charts/linchart";
import WorldMap from "../components/charts/mapchart";
import DonutChart from "../components/charts/donutchart";
export default function Dashboard() {
  const theme = useTheme();

  const cardStyle = {
    backgroundColor: theme.palette.mode === "light" ? "#f7f9fb" : "#282828",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "16px",
  };

  const textStyle = {
    color: theme.palette.mode === "light" ? "#000000" : "#ffffff",
  };

  const secondaryTextStyle = {
    color: theme.palette.mode === "light" ? "#000000ff" : "#cccccc",
    fontWeight: "bold",
  };

  const greenTextStyle = {
    color: theme.palette.mode === "light" ? "#15803d" : "#34d399",
  };

  const redTextStyle = {
    color: theme.palette.mode === "light" ? "#dc2626" : "#f87171",
  };

  const tableBorderStyle = {
    borderTop: `1px solid ${theme.palette.mode === "light" ? "#e5e7eb" : "#4b5563"}`,
  };

  return (
    <div
      style={{
        padding: "16px",
        width: "100%",
        minHeight: "90vh",
        ...textStyle,
      }}
    >
      <div
        style={{ marginBottom: "16px", fontSize: "20px", fontWeight: "bold" }}
      >
        eCommerce
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div style={cardStyle} className="flex flex-col justify-around">
            <p style={secondaryTextStyle}>Customers</p>
            <div className="flex hover:flex-row-reverse hover:bg-gray-200 justify-between p-3 rounded-full">
              <h2
                style={{ fontSize: "24px", fontWeight: "bold", ...textStyle }}
              >
                3,781
              </h2>
              <p style={greenTextStyle}>+11.01% ↑</p>
            </div>
          </div>
          <div style={cardStyle} className="flex flex-col justify-around">
            <p style={secondaryTextStyle}>Orders</p>
            <div className="flex hover:flex-row-reverse hover:bg-gray-200 justify-between p-3 rounded-full">
              <h2
                style={{ fontSize: "24px", fontWeight: "bold", ...textStyle }}
              >
                1,219
              </h2>
              <p style={redTextStyle}>-0.03% ↓</p>
            </div>
          </div>
          <div style={cardStyle} className="flex flex-col justify-around">
            <p style={secondaryTextStyle}>Revenue</p>
            <div className="flex hover:flex-row-reverse hover:bg-gray-200 justify-between p-3 rounded-full">
              <h2
                style={{ fontSize: "24px", fontWeight: "bold", ...textStyle }}
              >
                $695
              </h2>
              <p style={greenTextStyle}>+15.03% ↑</p>
            </div>
          </div>
          <div style={cardStyle} className="flex flex-col justify-around">
            <p style={secondaryTextStyle}>Growth</p>
            <div className="flex hover:flex-row-reverse hover:bg-gray-200 justify-between p-3 rounded-full">
              <h2
                style={{ fontSize: "24px", fontWeight: "bold", ...textStyle }}
              >
                30.1%
              </h2>
              <p style={greenTextStyle}>+6.08% ↑</p>
            </div>
          </div>
        </div>
        <div style={cardStyle} className="flex flex-col  justify-around">
          <p style={{ fontWeight: "bold", marginBottom: "8px", ...textStyle }}>
            Projections vs Actuals
          </p>
          <div>
            <Bargraph />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[80%_20%] gap-4 mb-4">
        <div style={cardStyle}>
          <p
            style={{ fontWeight: "bold", marginBottom: "35px", ...textStyle }}
          >
            Revenue
          </p>
          <Linegraph />
        </div>
        <div style={cardStyle}>
          <p style={{ fontWeight: "bold", marginBottom: "16px", ...textStyle }}>
            Revenue by Location
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <WorldMap />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={textStyle}>New York</span>
              <span style={textStyle}>72K</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={textStyle}>San Francisco</span>
              <span style={textStyle}>39K</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={textStyle}>Sydney</span>
              <span style={textStyle}>25K</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={textStyle}>Singapore</span>
              <span style={textStyle}>61K</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[80%_20%] gap-4">
        <div style={cardStyle}>
          <p style={{ fontWeight: "bold", marginBottom: "16px", ...textStyle }}>
            Top Selling Products
          </p>
          <table style={{ width: "100%", fontSize: "14px" }}>
            <thead>
              <tr style={{ ...secondaryTextStyle }}>
                <th style={{ textAlign: "left", padding: "8px" }}>Name</th>
                <th style={{ textAlign: "left", padding: "8px" }}>Price</th>
                <th style={{ textAlign: "left", padding: "8px" }}>Quantity</th>
                <th style={{ textAlign: "left", padding: "8px" }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tableBorderStyle}>
                <td style={{ padding: "8px", ...textStyle }}>
                  ASOS Ridley High Waist
                </td>
                <td style={{ padding: "8px", ...textStyle }}>$79.49</td>
                <td style={{ padding: "8px", ...textStyle }}>82</td>
                <td style={{ padding: "8px", ...textStyle }}>$6,518.18</td>
              </tr>
              <tr style={tableBorderStyle}>
                <td style={{ padding: "8px", ...textStyle }}>
                  Marco Lightweight Shirt
                </td>
                <td style={{ padding: "8px", ...textStyle }}>$128.50</td>
                <td style={{ padding: "8px", ...textStyle }}>37</td>
                <td style={{ padding: "8px", ...textStyle }}>$4,754.50</td>
              </tr>
              <tr style={tableBorderStyle}>
                <td style={{ padding: "8px", ...textStyle }}>
                  Half Sleeve Shirt
                </td>
                <td style={{ padding: "8px", ...textStyle }}>$39.99</td>
                <td style={{ padding: "8px", ...textStyle }}>64</td>
                <td style={{ padding: "8px", ...textStyle }}>$2,559.36</td>
              </tr>
              <tr style={tableBorderStyle}>
                <td style={{ padding: "8px", ...textStyle }}>
                  Lightweight Jacket
                </td>
                <td style={{ padding: "8px", ...textStyle }}>$20.00</td>
                <td style={{ padding: "8px", ...textStyle }}>184</td>
                <td style={{ padding: "8px", ...textStyle }}>$3,680.00</td>
              </tr>
              <tr style={tableBorderStyle}>
                <td style={{ padding: "8px", ...textStyle }}>Marco Shoes</td>
                <td style={{ padding: "8px", ...textStyle }}>$79.49</td>
                <td style={{ padding: "8px", ...textStyle }}>64</td>
                <td style={{ padding: "8px", ...textStyle }}>$1,965.81</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={cardStyle}>
          <p style={{ fontWeight: "bold", marginBottom: "16px", ...textStyle }}>
            Total Sales
          </p>
          <div
            style={{
              height: "256px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              ...secondaryTextStyle,
            }}
          >
            <DonutChart />
          </div>
        </div>
      </div>
    </div>
  );
}
