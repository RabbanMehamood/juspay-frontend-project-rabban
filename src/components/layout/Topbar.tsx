import {
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  InputBase,
  Box,
  alpha,
} from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ViewCompactRoundedIcon from "@mui/icons-material/ViewCompactRounded";

interface TopbarProps {
  onToggleLeft: () => void;
  onToggleRight: () => void;
  toggleTheme: () => void;
  mode: "light" | "dark";
}

export default function Topbar({
  onToggleLeft,
  onToggleRight,
  toggleTheme,
  mode,
}: TopbarProps) {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderBottom: "1px solid",
        borderColor: "divider",
      })}
    >
      <Toolbar
        sx={{
          minHeight: 48,
          px: 1.5,
          gap: 1,
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Tooltip title="Menu">
            <IconButton
              size="small"
              onClick={onToggleLeft}
              sx={{ color: "text.secondary" }}
            >
              <DashboardOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Star dashboard">
            <IconButton size="small" sx={{ color: "text.secondary" }}>
              <StarBorderRoundedIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              typography: "body2",
              color: "text.secondary",
            }}
          >
            <span>Dashboards</span>
            <span aria-hidden="true" style={{ color: "text.disabled" }}>
              /
            </span>
            <span style={{ color: "text.primary" as any }}>Default</span>
          </Box>
        </Box>

        <Box
          sx={(theme) => ({
            justifySelf: "center",
            width: 280,
            maxWidth: "42vw",
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 1.25,
            py: 0.5,
            borderRadius: 999,
            backgroundColor:
              theme.palette.mode === "dark"
                ? alpha(theme.palette.common.white, 0.06)
                : alpha(theme.palette.common.black, 0.04),
            border: "1px solid",
            borderColor: "divider",
          })}
        >
          <SearchRoundedIcon
            sx={{ fontSize: 18, color: "text.disabled", mr: 0.5 }}
          />
          <InputBase
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
            sx={{
              fontSize: 13,
              color: "text.secondary",
              width: "100%",
              "& input::placeholder": { opacity: 1, color: "text.secondary" },
            }}
          />
          <Box
            sx={(theme) => ({
              ml: 0.5,
              px: 0.75,
              py: 0.25,
              borderRadius: 0.75,
              fontSize: 11,
              lineHeight: 1,
              color: "text.disabled",
              border: "1px solid",
              borderColor: "divider",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? alpha(theme.palette.common.white, 0.04)
                  : alpha(theme.palette.common.black, 0.03),
            })}
          >
            ⌘/
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Tooltip title="Toggle theme">
            <IconButton
              size="small"
              onClick={toggleTheme}
              sx={{ color: "text.secondary" }}
            >
              {mode === "dark" ? (
                <WbSunnyRoundedIcon fontSize="small" />
              ) : (
                <DarkModeRoundedIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>

          <Tooltip title="History">
            <IconButton size="small" sx={{ color: "text.secondary" }}>
              <HistoryRoundedIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Notifications">
            <IconButton size="small" sx={{ color: "text.secondary" }}>
              <NotificationsNoneRoundedIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Right panel">
            <IconButton
              size="small"
              onClick={onToggleRight}
              sx={{ color: "text.secondary" }}
            >
              <ViewCompactRoundedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
