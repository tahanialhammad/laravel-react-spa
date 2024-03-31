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

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function MiniDrawerAuthLayout({ user, children }) {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // https://mui.com/material-ui/customization/dark-mode/
    // const [mode, setMode] = React.useState("light");
    // fromm local storge
    const [mode, setMode] = React.useState(localStorage.getItem("currentMode") ? localStorage.getItem("currentMode") : "light" );

    const theme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />

                <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode}  user={user} />

                <SideBar open={open} handleDrawerClose={handleDrawerClose} />

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    {/* <div>{ localStorage.getItem("currentMode") } </div> */}
                    <div className={localStorage.getItem("currentMode") ? localStorage.getItem("currentMode") : "light"}>{children}</div>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
