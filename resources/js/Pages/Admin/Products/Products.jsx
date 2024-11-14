import DataGridTable from "@/Components/MUI/DataGridTable";
import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Link, Typography } from "@mui/material";
import PrimaryButton from "@/Components/PrimaryButton";

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Product name", flex: 1 },
    { field: "price", headerName: "Product price", flex: 1 },
    { field: "stock", headerName: "Stock", flex: 1 },
];

export default function Products({ auth, products }) {
    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <div className="flex justify-between w-full">
                <h1>My Shop</h1>
                <div>
                    <Link href="/products/create" >Add Product</Link>
                </div>
            </div>

            <DataGrid
                checkboxSelection
                // filters
                slots={{
                    toolbar: GridToolbar,
                }}
                rows={products}
                columns={columns}
            />
        </MiniDrawerAuthLayout>
    );
}
