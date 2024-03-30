import React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { DarkModeOutlined, NotificationsOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@inertiajs/react";

export default function TopbarRightCorner({ setMode, user }) {
    const theme = useTheme();

    // Dropdwen
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack direction="row" spacing={1}>
            {/* https://mui.com/material-ui/customization/default-theme/ */}
            {/* https://mui.com/material-ui/customization/dark-mode/ */}
            {theme.palette.mode === "light" ? (
                <IconButton
                    onClick={() => {
                        // save cureent mode in storge , inspect -> alpplication -> local storge
                        localStorage.setItem(
                            "currentMode",
                            theme.palette.mode === "dark" ? "light" : "dark"
                        );
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
                        localStorage.setItem(
                            "currentMode",
                            theme.palette.mode === "dark" ? "light" : "dark"
                        );
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

            <div>
                <IconButton
                    color="inherit"
                    aria-label="Person2OutlinedIcon"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                >
                    <Person2OutlinedIcon />
                </IconButton>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    <MenuItem>
                        <Link href={route("profile.edit")}>{user.name} </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={route("logout")} method="post">
                            Logout
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        </Stack>
    );
}
