import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "@mui/material";

export default function Show({ auth, product }) {
    return (
        <MiniDrawerAuthLayout user={auth.user}>
                <h1>{product.name}</h1>
              
        </MiniDrawerAuthLayout>
    );
}
