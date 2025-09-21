// src/App.tsx
import { useState, useEffect } from "react";
import LeftSidebar from "./components/layout/sidebars/LeftSidebar";
import RightSidebar from "./components/layout/sidebars/RightSidebar";
import Topbar from "./components/layout/Topbar";
import AppRouter from "./router";

interface AppProps {
  mode: "light" | "dark";
  toggleTheme: () => void;
}

export default function App({ mode, toggleTheme }: AppProps) {
  const [isLeftOpen, setLeftOpen] = useState(true);
  const [isRightOpen, setRightOpen] = useState(true);

  // Sync Tailwind dark mode with MUI theme
  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const leftSidebarWidth = isLeftOpen ? 240 : 0;
  const rightSidebarWidth = isRightOpen ? 300 : 0;

  return (
    <div className="flex h-screen">
      <LeftSidebar isOpen={isLeftOpen} width={leftSidebarWidth} />

      <div
        className="flex flex-col transition-all duration-300 overflow-hidden"
        style={{
          width: `calc(100% - ${leftSidebarWidth + rightSidebarWidth}px)`,
          marginLeft: "0px",
          marginRight: "0px",
        }}
      >
        <Topbar
          onToggleLeft={() => setLeftOpen(!isLeftOpen)}
          onToggleRight={() => setRightOpen(!isRightOpen)}
          toggleTheme={toggleTheme}
          mode={mode}
        />

        <main className="flex-1 overflow-y-auto mr-3 mt-4">
          <AppRouter />
        </main>
      </div>

      <RightSidebar isOpen={isRightOpen} width={rightSidebarWidth} />
    </div>
  );
}
