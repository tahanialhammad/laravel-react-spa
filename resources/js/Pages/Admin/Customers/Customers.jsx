import DataGridTable from "@/Components/MUI/DataGridTable";
import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "User name", flex: 1 },
    { field: "email", headerName: "User email", flex: 1 },
    {
        field: "is_admin",
        headerName: "Role",
        flex: 1,
        align: "center",
        headerAlign: "center",
        renderCell: ({ row: { is_admin } }) => {
            return (
                <Box
                    sx={{
                        p: "5px",
                        borderRadius: "5px",
                        display: "flex",
                        backgroundColor: is_admin ? "green" : "red",
                    }}
                >
                    <Typography variant="body1">
                        {" "}
                        {is_admin ? "Admin" : "User"}
                    </Typography>
                </Box>
            );
        },
    },
];

export default function Customers({ auth, users }) {
    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <div>Customers</div>

            <DataGrid
                checkboxSelection
                // filters
                slots={{
                    toolbar: GridToolbar,
                }}
                rows={users}
                columns={columns}
            />
        </MiniDrawerAuthLayout>
    );
}
