import * as React from "react";
import {
    ThemeProvider,
    createTheme,
    styled,
    useTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import TopBar from "./partials/TopBar";
import SideBar from "./partials/SideBar";
import { getDesignTokens } from "@/Theme";
import { usePage } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";
import { useState, useEffect } from 'react';

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function MiniDrawerAuthLayout({ user, children }) {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // https://mui.com/material-ui/customization/dark-mode/
    // const [mode, setMode] = React.useState("light");
    // fromm local storge
    const [mode, setMode] = React.useState(
        localStorage.getItem("currentMode")
            ? localStorage.getItem("currentMode")
            : "light"
    );

    const theme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );

    const { flash } = usePage().props;
    //to set timer to flashMs
    const [flashMsg, setFlashMsg] = useState(flash.message);
    useEffect(() => {
        if (flash.message) {
            // Set a timeout to clear the flash message
            const timer = setTimeout(() => {
                setFlashMsg(null);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [flash.message]);


    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />

                <TopBar
                    open={open}
                    handleDrawerOpen={handleDrawerOpen}
                    setMode={setMode}
                    user={user}
                />

                <SideBar open={open} handleDrawerClose={handleDrawerClose} />

                <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
                    <DrawerHeader />
                    {/* <div>{ localStorage.getItem("currentMode") } </div> */}
                    <div
                        className={
                            localStorage.getItem("currentMode")
                                ? localStorage.getItem("currentMode")
                                : "light"
                        }
                    >
                        <div>
                            {/* Flash message */}
                            {flashMsg && (
                                <FlashMessage level={flash.messageType ? flash.messageType : 'info' }>
                                    {flashMsg}
                                </FlashMessage>
                            )}
                        </div>
                        <div className="p-4"> {children}</div>
                    </div>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
