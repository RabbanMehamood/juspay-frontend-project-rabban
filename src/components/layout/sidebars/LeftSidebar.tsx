import { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";
import ArticleIcon from "@mui/icons-material/Article";
import ShareIcon from "@mui/icons-material/Share";
import PieChartIcon from "@mui/icons-material/PieChart";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import AutoStoriesTwoToneIcon from "@mui/icons-material/AutoStoriesTwoTone";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CampaignIcon from "@mui/icons-material/Campaign";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";

interface LeftSidebarProps {
  isOpen: boolean;
  width: number;
  onClose: () => void;
}

const sidebarItems = [
  {
    title: "Favorites",
    children: [
      {
        text: "Overview",
        path: "/overview",
        icon: <Brightness1Icon sx={{ fontSize: 8 }} color="disabled" />,
      },
      {
        text: "Projects",
        path: "/projects",
        icon: <Brightness1Icon sx={{ fontSize: 8 }} color="disabled" />,
      },
    ],
  },
  {
    title: "Dashboards",
    children: [
      { text: "eCommerce", path: "/", icon: <PieChartIcon /> },
      {
        text: "Order List",
        path: "/orders",
        icon: <LocalMallOutlinedIcon />,
      },
      {
        text: "Projects",
        path: "/dashboards/u-projects",
        icon: <FolderOpenOutlinedIcon />,
      },
      {
        text: "Online Courses",
        path: "/dashboards/online-courses",
        icon: <AutoStoriesTwoToneIcon />,
      },
    ],
  },
  {
    title: "Pages",
    children: [
      {
        text: "User Profile",
        path: "/pages/user-profile",
        icon: <AssignmentIndOutlinedIcon />,
      },
      {
        text: "Overview",
        path: "/pages/overview",
        icon: <ReviewsOutlinedIcon />,
      },
      { text: "Projects", path: "/pages/projects", icon: <AccountTreeIcon /> },
      {
        text: "Campaigns",
        path: "/pages/campaigns",
        icon: <CampaignIcon />,
      },
      {
        text: "Documents",
        path: "/pages/documents",
        icon: <DocumentScannerIcon />,
      },
      {
        text: "Followers",
        path: "/pages/followers",
        icon: <PeopleOutlineIcon />,
      },
    ],
  },
  {
    title: "Account",
    icon: <AccountCircleIcon />,
    children: [],
  },
  {
    title: "Corporate",
    icon: <BusinessIcon />,
    children: [],
  },
  {
    title: "Blog",
    icon: <ArticleIcon />,
    children: [],
  },
  {
    title: "Social",
    icon: <ShareIcon />,
    children: [],
  },
];

export default function LeftSidebar({
  isOpen,
  width,
  onClose,
}: LeftSidebarProps) {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    Object.fromEntries(sidebarItems.map((section) => [section.title, true]))
  );

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width,
          boxSizing: "border-box",
          transition: "width 0.3s",
        },
      }}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <Avatar
            alt="User Name"
            src="https://i.pravatar.cc/40?img=10"
            sx={{ width: 40, height: 40, marginBottom: 1 }}
          />
          {isOpen && (
            <span className="text-sm ml-4 mb-1 font-semibold">John Doe</span>
          )}
        </div>
        <CloseOutlinedIcon onClick={onClose} style={{ cursor: "pointer" }} />
      </div>

      <List>
        {sidebarItems.map((section) => {
          const isExpanded = openSections[section.title];

          return (
            <div key={section.title}>
              <ListItemButton onClick={() => toggleSection(section.title)}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    transition: "transform 0.3s ease",
                    transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  <ArrowForwardIosSharpIcon
                    sx={{ fontSize: 14, color: "grey" }}
                  />
                </div>
                {isOpen && (
                  <ListItemText
                    primary={section.title}
                    sx={{ color: "grey" }}
                  />
                )}
              </ListItemButton>
              {section.children.length > 0 && (
                <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {section.children.map((child) => (
                      <NavLink
                        key={child.text}
                        to={child.path}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {({ isActive }) => (
                          <ListItemButton
                            sx={{
                              pl: isOpen ? 8 : 5,
                              "&.Mui-selected": {
                                backgroundColor: "rgba(82, 82, 82, 0.12)",
                                color: "#1976d2",
                                margin: "8px",
                                borderRadius: "6px",
                                borderLeft: "6px solid black",
                              },
                              "&.Mui-selected:hover": {
                                backgroundColor: "rgba(172, 173, 173, 0.16)",
                              },
                            }}
                            selected={isActive}
                          >
                            <ListItemIcon
                              sx={{
                                color: isActive ? "#848485ff" : "inherit",
                                minWidth: 30,
                              }}
                            >
                              {child.icon}
                            </ListItemIcon>
                            {isOpen && <ListItemText primary={child.text} />}
                          </ListItemButton>
                        )}
                      </NavLink>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          );
        })}
      </List>
    </Drawer>
  );
}
