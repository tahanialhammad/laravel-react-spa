import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows } from "./Data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";

export default function Customers({ auth, users }) {
    const theme = useTheme();
    const columns = [
        { field: "id", headerName: "Id", width: 33 },
        { field: "name", headerName: "User name", flex: 1 },
        { field: "email", headerName: "User email", flex: 1 },
        { field: "adress", headerName: "Adress", flex: 1 },
        { field: "post", headerName: "Post", flex: 1 },

        {
            field: "role",
            headerName: "role",
            flex: 1,
            align: "center",
            headerAlign: "center",
            renderCell: ({ row: { role } }) => {
                return (
                    <Box
                        sx={{
                            p: "5px",
                            borderRadius: "5px",
                            display: "flex",
                            backgroundColor:
                                role === "admin"
                                    ? theme.palette.primary.dark
                                    : "red",
                        }}
                    >
                        <Typography variant="body1"> {role}</Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <div>Customers</div>

            <Box sx={{ height: 300, width: "100%" }}>
                <DataGrid
                checkboxSelection
                // filters
                    slots={{
                        toolbar: GridToolbar,
                    }}
                    rows={rows}
                    columns={columns}
                />
            </Box>

            <ul>
                {users.map((user) => (
                    <li>{user.name}</li>
                ))}
            </ul>
        </MiniDrawerAuthLayout>
    );
}
