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
    // {
    //     field: "discountedPrice",
    //     headerName: "New price",
    //     flex: 1,
    //     renderCell: (params) => <span>€{params.value.toFixed(2)}</span>,
    // },

    {
        field: "price",
        headerName: "Price test",
        flex: 1,
        renderCell: (params) => {
            const price = params.row.price;
            const discountedPrice = params.row.discounted_price;
            if (!discountedPrice) {
                return <span> €{price}</span>;
            }
            return (
                <div>
                   
                    <span>€ {discountedPrice}</span>
                    <span className="ms-1 line-through text-gray-400">
                        €{price}
                    </span>
                </div>
            );
        },
    },

    //  { field: "price", headerName: "Product price", flex: 1 },
    { field: "discount", headerName: "Discount", flex: 1 },
    {
        field: "discount_type",
        headerName: "Discount type",
        flex: 1,
        renderCell: (params) => {
            const discountType = params.row.discount_type;
            const discountedPrice = params.row.discounted_price;
            return discountedPrice ? discountType : "--";
        },
    },
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
