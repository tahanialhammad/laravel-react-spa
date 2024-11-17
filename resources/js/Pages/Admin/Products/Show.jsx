import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "@mui/material";
import DeleteProduct from "./DeleteProduct";
import { Head } from "@inertiajs/react";
import UpdateProduct from "./Edit";
import PrimaryButton from "@/Components/PrimaryButton";
import PrimaryLinkButton from "@/Components/PrimaryLinkButton";

export default function Show({ auth, product }) {
    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <Head title="OrdersChart" />
            <div className="flex w-full">
                <div className="w-3/4">
                    <h1>{product.name}</h1>
                </div>
                <div className="w-1/4">
                    <DeleteProduct product={product} />
                    {/* <PrimaryLinkButton href={`/products/${product.id}/edit`} className="">
                        Update
                    </PrimaryLinkButton> */}
                      <PrimaryLinkButton href={route('products.edit' , product)} className="">
                        Update
                    </PrimaryLinkButton>
                </div>
            </div>
        </MiniDrawerAuthLayout>
    );
}
