import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// coordinates for topojson  map
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function WorldMap() {
  return (
    <div style={{ width: "100%", height: "200px" }}>
      <ComposableMap
        projectionConfig={{ scale: 220 }}
        style={{ width: "100%", height: "100%",  }} 
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#cfdfea", 
                    stroke: "#333", 
                    strokeWidth: 0.5,
                    outline: "none",
                  },
                  hover: {
                    fill: "#457b9d",
                    stroke: "#000",
                    strokeWidth: 0.7,
                    outline: "none",
                  },
                  pressed: {
                    fill: "#1d3557",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
