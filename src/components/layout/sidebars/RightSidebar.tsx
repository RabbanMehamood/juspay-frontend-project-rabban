import React from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";

interface RightSidebarProps {
  isOpen: boolean;
  width: number;
}

const notifications = [
  {
    id: "n1",
    title: "You have a bug that needs...",
    time: "Just now",
    initials: "BG",
  },
  {
    id: "n2",
    title: "New user registered",
    time: "59 minutes ago",
    initials: "NR",
  },
  {
    id: "n3",
    title: "You have a bug that needs...",
    time: "12 hours ago",
    initials: "BG",
  },
  {
    id: "n4",
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
    initials: "AL",
  },
];

const activities = [
  {
    id: "a1",
    title: "You have a bug that needs...",
    time: "Just now",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
  {
    id: "a2",
    title: "Released a new version",
    time: "59 minutes ago",
    avatar: "https://i.pravatar.cc/40?img=31",
  },
  {
    id: "a3",
    title: "Submitted a bug",
    time: "12 hours ago",
    avatar: "https://i.pravatar.cc/40?img=23",
  },
  {
    id: "a4",
    title: "Modified A data in Page X",
    time: "Today, 11:59 AM",
    avatar: "https://i.pravatar.cc/40?img=32",
  },
  {
    id: "a5",
    title: "Deleted a page in Project X",
    time: "Feb 2, 2023",
    avatar: "https://i.pravatar.cc/40?img=41",
  },
];

const contacts = [
  {
    id: "c1",
    title: "Natali Craig",
    avatar: "https://i.pravatar.cc/40?img=11",
  },
  { id: "c2", title: "Drew Cano", avatar: "https://i.pravatar.cc/40?img=1" },
  {
    id: "c3",
    title: "Orlando Diggs",
    avatar: "https://i.pravatar.cc/40?img=15",
  },
  { id: "c4", title: "Andi Lane", avatar: "https://i.pravatar.cc/40?img=12" },
  {
    id: "c5",
    title: "Kate Morrison",
    avatar: "https://i.pravatar.cc/40?img=13",
  },
  {
    id: "c6",
    title: "Koray Okumus",
    avatar: "https://i.pravatar.cc/40?img=14",
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        p: 1.5,
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ px: 0.5, pb: 1, color: "text.primary", fontWeight: 600 }}
      >
        {title}
      </Typography>
      <Box>{children}</Box>
    </Box>
  );
}

export default function RightSidebar({ isOpen, width }: RightSidebarProps) {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      open={isOpen}
      sx={{
        width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width,
          boxSizing: "border-box",
          transition: "width 0.3s",
          bgcolor: "background.paper",
        },
      }}
    >
      <Box
        role="presentation"
        sx={{
          height: "100%",
          overflowY: "auto",
          px: 1.5,
          py: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Section title="Notifications">
          <List dense disablePadding>
            {notifications.map((n, idx) => (
              <React.Fragment key={n.id}>
                <ListItem
                  sx={{
                    borderRadius: 1,
                    px: 1,
                    "&:hover": { bgcolor: "action.hover" },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ width: 28, height: 28 }}>{n.initials}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{ variant: "body2", noWrap: true }}
                    secondaryTypographyProps={{
                      variant: "caption",
                      color: "text.secondary",
                    }}
                    primary={n.title}
                    secondary={n.time}
                  />
                </ListItem>
                {idx < notifications.length - 1 && (
                  <Divider variant="inset" component="li" sx={{ ml: 6 }} />
                )}
              </React.Fragment>
            ))}
          </List>
        </Section>

        <Section title="Activities">
          <List dense disablePadding>
            {activities.map((a, idx) => (
              <React.Fragment key={a.id}>
                <ListItem
                  sx={{
                    borderRadius: 1,
                    px: 1,
                    "&:hover": { bgcolor: "action.hover" },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ width: 28, height: 28 }} src={a.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{ variant: "body2", noWrap: true }}
                    secondaryTypographyProps={{
                      variant: "caption",
                      color: "text.secondary",
                    }}
                    primary={a.title}
                    secondary={a.time}
                  />
                </ListItem>
                {idx < activities.length - 1 && (
                  <Divider variant="inset" component="li" sx={{ ml: 6 }} />
                )}
              </React.Fragment>
            ))}
          </List>
        </Section>

        <Section title="Contacts">
          <List dense disablePadding>
            {contacts.map((c, idx) => (
              <React.Fragment key={c.id}>
                <ListItem
                  sx={{
                    borderRadius: 1,
                    px: 1,
                    "&:hover": { bgcolor: "action.hover" },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ width: 28, height: 28 }} src={c.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{ variant: "body2", noWrap: true }}
                    primary={c.title}
                  />
                </ListItem>
                {idx < contacts.length - 1 && (
                  <Divider variant="inset" component="li" sx={{ ml: 6 }} />
                )}
              </React.Fragment>
            ))}
          </List>
        </Section>
      </Box>
    </Drawer>
  );
}
