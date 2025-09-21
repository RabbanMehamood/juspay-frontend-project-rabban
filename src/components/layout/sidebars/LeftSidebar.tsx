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

import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BusinessIcon from "@mui/icons-material/Business";
import ArticleIcon from "@mui/icons-material/Article";
import ShareIcon from "@mui/icons-material/Share";

interface LeftSidebarProps {
  isOpen: boolean;
  width: number;
}

const sidebarItems = [
  {
    title: "Favorites",
    children: [
      { text: "Overview", path: "/overview", icon: <DashboardIcon /> },
      { text: "Projects", path: "/projects", icon: <ListAltIcon /> },
    ],
  },
  {
    title: "Dashboards",
    children: [
      { text: "eCommerce", path: "/", icon: <DashboardIcon /> },
      {
        text: "Order List",
        path: "/orders",
        icon: <DashboardIcon />,
      },
      {
        text: "Projects",
        path: "/dashboards/u-projects",
        icon: <DashboardIcon />,
      },
      {
        text: "Online Courses",
        path: "/dashboards/online-courses",
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    title: "Pages",
    children: [
      {
        text: "User Profile",
        path: "/pages/user-profile",
        icon: <AccountCircleIcon />,
      },
      { text: "Overview", path: "/pages/overview", icon: <DashboardIcon /> },
      { text: "Projects", path: "/pages/projects", icon: <ListAltIcon /> },
      { text: "Campaigns", path: "/pages/campaigns", icon: <DashboardIcon /> },
      { text: "Documents", path: "/pages/documents", icon: <DashboardIcon /> },
      { text: "Followers", path: "/pages/followers", icon: <DashboardIcon /> },
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

export default function LeftSidebar({ isOpen, width }: LeftSidebarProps) {
  // Initialize all sections as open by default
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    // Method 1: Using Object.fromEntries (Clean and dynamic)
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
      <div className="flex items-center justify-left p-4">
        <Avatar
          alt="User Name"
          src="https://i.pravatar.cc/40?img=10"
          sx={{ width: 40, height: 40, marginBottom: 1 }}
        />
        {isOpen && (
          <span className="text-sm ml-4 mb-1 font-semibold">John Doe</span>
        )}
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
                  <ArrowForwardIosSharpIcon sx={{ fontSize: 14 }} />
                </div>
                {isOpen && <ListItemText primary={section.title} />}
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
