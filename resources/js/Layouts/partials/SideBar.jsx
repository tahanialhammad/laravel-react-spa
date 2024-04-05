import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FlutterDashOutlinedIcon from "@mui/icons-material/FlutterDashOutlined";
import { Avatar } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { amber, grey } from "@mui/material/colors";
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Array1 = [
    { text: "Dashboard", icon: <DashboardOutlinedIcon />, path: "dashboard" },
    { text: "Blog", icon: <FlutterDashOutlinedIcon />, path: "admin.posts" },
    {
        text: "Customers",
        icon: <PeopleAltOutlinedIcon />,
        path: "admin.customers",
    },
    {
        text: "Add customer",
        icon: <PersonAddAltOutlinedIcon />,
        path: "admin.addUser",
    },
    {
        text: "My Calendar",
        icon: <CalendarMonthOutlinedIcon />,
        path: "admin.mycalendar",
    },
];

const Array2 = [
    {
        text: "FAQ",
        icon: <HelpOutlineOutlinedIcon />,
        path: "admin.faqs",
    },
];

export default function SideBar({ open, handleDrawerClose }) {
    const theme = useTheme();

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "rtl" ? (
                        <ChevronRightIcon />
                    ) : (
                        <ChevronLeftIcon />
                    )}
                </IconButton>
            </DrawerHeader>

            <Divider />

            <Avatar
                sx={{
                    mx: "auto",
                    my: 2,
                    border: "2px solid gray",
                    width: open ? 88 : 44,
                    height: open ? 88 : 44,
                    transition: "0.5s",
                }}
                alt="Cindy Baker"
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Typography align="center" sx={{ fontSize: open ? "10px" : 0 }}>
                Nawara
            </Typography>

            {/* <Typography className={open ? 'text-red-300' : 'text-gray-500'} align="center" sx={{ fontSize: "10px" }}> */}
            {/* Or */}
            <Typography
                className={`text-sm ${open ? "" : "hidden"}`}
                align="center"
                sx={{ fontSize: "10px" }}
            >
                Admin
            </Typography>
            <Divider />

            <List>
                {Array1.map((item) => (
                    <ListItem
                        key={item.text}
                        disablePadding
                        sx={{ display: "block" }}
                    >
                        <ListItemButton
                            href={route(item.path)}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                                background: route().current(item.path)
                                    ? theme.palette.mode === "dark"
                                        ? grey[800]
                                        : amber[300]
                                    : null,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider />

            <List>
                {Array2.map((item) => (
                    <ListItem
                        key={item.text}
                        disablePadding
                        sx={{ display: "block" }}
                    >
                        <ListItemButton
                            href={route(item.path)}
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                                background: route().current(item.path)
                                    ? theme.palette.mode === "dark"
                                        ? grey[800]
                                        : amber[300]
                                    : null,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                sx={{ opacity: open ? 1 : 0 }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
