import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "@mui/material";
import { Head } from "@inertiajs/react";

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    // { field: "name", headerName: "Product name", flex: 1 },
    {
        field: "name",
        headerName: "Product name",
        flex: 1,
        renderCell: (params) => (
            <Link
                href={`/products/${params.row.id}`}
                style={{
                    color: "inherit",
                    textDecoration: "none",
                }}
            >
                {params.value}
            </Link>
        ),
    },
    { field: "price", headerName: "Product price", flex: 1 },
    { field: "stock", headerName: "Stock", flex: 1 },
];

export default function Products({ auth, products }) {
    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <Head title="Products" />

            <div className="flex justify-between w-full">
                <h1>My Shop</h1>
                <div>
                    <Link href={route("products.create")}>Add Product</Link>
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
