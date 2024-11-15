import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "@mui/material";
import DeleteProduct from "./DeleteProduct";

export default function Show({ auth, product }) {
    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <div className="flex w-full">
                <div className="w-3/4">
                    <h1>{product.name}</h1>
                </div>
                <div className="w-1/4">
                    <DeleteProduct product={product} />
                </div>
            </div>
        </MiniDrawerAuthLayout>
    );
}
