import * as React from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  IconButton,
  InputBase,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Avatar,
  Pagination,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import SwapVertRoundedIcon from "@mui/icons-material/SwapVertRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

const rows = [
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "https://i.pravatar.cc/40?img=1" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: { label: "In Progress", color: "#5b9bff" },
    checked: false,
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "https://i.pravatar.cc/40?img=5" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: { label: "Complete", color: "#34d399" },
    checked: false,
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "https://i.pravatar.cc/40?img=12" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: { label: "Pending", color: "#60a5fa" },
    checked: false,
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "https://i.pravatar.cc/40?img=15" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: { label: "Approved", color: "#fbbf24" },
    checked: true,
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "https://i.pravatar.cc/40?img=7" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: { label: "Rejected", color: "#a3a3a3" },
    checked: false,
  },
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "https://i.pravatar.cc/40?img=1" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: { label: "In Progress", color: "#5b9bff" },
    checked: false,
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "https://i.pravatar.cc/40?img=5" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: { label: "Complete", color: "#34d399" },
    checked: false,
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "https://i.pravatar.cc/40?img=12" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: { label: "Pending", color: "#60a5fa" },
    checked: false,
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "https://i.pravatar.cc/40?img=15" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: { label: "Approved", color: "#fbbf24" },
    checked: true,
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "https://i.pravatar.cc/40?img=7" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: { label: "Rejected", color: "#a3a3a3" },
    checked: false,
  },
];

export default function Orders() {
  const [page, setPage] = React.useState(1);

  return (
    <Paper sx={{ marginLeft: "10px", overflow: "hidden" }} elevation={0}>
      <Box sx={{ px: 2.25, pt: 2.25 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          Order List
        </Typography>
      </Box>

      <Box>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 1 }}>
          <Stack direction="row" spacing={0.5}>
            <IconButton size="small">
              <AddRoundedIcon />
            </IconButton>
            <IconButton size="small">
              <FilterListRoundedIcon />
            </IconButton>
            <IconButton size="small">
              <SwapVertRoundedIcon />
            </IconButton>
          </Stack>

          <Box sx={{ flex: 1, marginBottom: "10px" }} />

          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 1.25,
              py: 0.5,
              width: 260,
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              bgcolor:
                theme.palette.mode === "dark"
                  ? "background.default"
                  : "background.paper",
            })}
          >
            <SearchRoundedIcon sx={{ color: "text.disabled", fontSize: 18 }} />
            <InputBase
              placeholder="Search"
              sx={{
                fontSize: 14,
                width: "100%",
                color: "text.secondary",
              }}
            />
          </Box>
        </Stack>
      </Box>

      <Divider />

      <TableContainer>
        <Table
          size="medium"
          sx={{
            tableLayout: "fixed",
            "& th, & td": { borderBottom: "1px solid", borderColor: "divider" },
            "& thead th": {
              fontSize: 12,
              color: "text.secondary",
              fontWeight: 600,
            },
            "& tbody td": { fontSize: 14 },
            "& tbody tr:hover": { backgroundColor: "action.hover" },
            "& tbody tr.Mui-selected": { backgroundColor: "action.selected" },
          }}
        >
          <colgroup>
            <col style={{ width: 38 }} />
            <col style={{ width: 120 }} />
            <col style={{ width: 200 }} />
            <col style={{ width: 200 }} />
            <col style={{ width: 200 }} />
            <col style={{ width: 140 }} />
            <col style={{ width: 150, alignItems: "start" }} />
          </colgroup>

          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox size="small" />
              </TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Date</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id} selected={r.checked} hover>
                <TableCell padding="checkbox">
                  <Checkbox size="small" checked={r.checked} />
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    {r.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1.25}>
                    <Avatar
                      src={r.user.avatar}
                      alt={r.user.name}
                      sx={{ width: 28, height: 28 }}
                    />
                    <Typography variant="body2">{r.user.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    {r.project}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    noWrap
                    title={r.address}
                  >
                    {r.address}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CalendarMonthRoundedIcon
                      sx={{ color: "text.disabled" }}
                      fontSize="small"
                    />
                    <Typography variant="body2" color="text.secondary">
                      {r.date}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell align="right">
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-end"
                    spacing={1.25}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "999px",
                        bgcolor: r.status.color,
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {r.status.label}
                    </Typography>
                    <IconButton size="small">
                      <MoreHorizRoundedIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ py: 1.5, display: "flex", justifyContent: "end" }}>
        <Pagination
          count={5}
          page={page}
          onChange={(_, v) => setPage(v)}
          color="standard"
          size="small"
          siblingCount={1}
          boundaryCount={1}
          sx={{
            "& .MuiPaginationItem-root": {
              borderRadius: 1,
            },
            "& .Mui-selected": {
              bgcolor: "action.selected",
            },
          }}
        />
      </Box>
    </Paper>
  );
}
