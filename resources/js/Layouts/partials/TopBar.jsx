import React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import Stack from "@mui/material/Stack";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { DarkModeOutlined, NotificationsOutlined } from "@mui/icons-material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

// Search
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

export default function TopBar({ open, handleDrawerOpen, setMode }) {
    const theme = useTheme();
    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                        marginRight: 5,
                        ...(open && { display: "none" }),
                    }}
                >
                    <MenuIcon />
                </IconButton>

                {/* <Typography variant="h6" noWrap component="div">
                    Mini variant drawer
                </Typography> */}

                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Search>

                <Box sx={{ flexGrow: 1 }} />

                <Stack direction="row" spacing={1}>
                    <IconButton
                        color="inherit"
                        aria-label="Person2OutlinedIcon"
                    >
                        <Person2OutlinedIcon />
                    </IconButton>

                    {/* https://mui.com/material-ui/customization/default-theme/ */}
                    {/* https://mui.com/material-ui/customization/dark-mode/ */}
                    {theme.palette.mode === "light" ? (
                        <IconButton
                            onClick={() => {
                                // save cureent mode in storge , inspect -> alpplication -> local storge
                                localStorage.setItem("currentMode" , theme.palette.mode === "dark" ? "light" : "dark");
                                setMode((prevMode) =>
                                    prevMode === "light" ? "dark" : "light"
                                );
                            }}
                            color="inherit"
                        >
                            <LightModeOutlinedIcon />
                        </IconButton>
                    ) : (
                        <IconButton
                            onClick={() => {
                                localStorage.setItem("currentMode" , theme.palette.mode === "dark" ? "light" : "dark");
                                setMode((prevMode) =>
                                    prevMode === "light" ? "dark" : "light"
                                );
                            }}
                            color="inherit"
                        >
                            <DarkModeOutlined />
                        </IconButton>
                    )}

                    <IconButton color="inherit">
                        <NotificationsOutlined />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
