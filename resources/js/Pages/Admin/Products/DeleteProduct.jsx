import DangerButton from "@/Components/DangerButton";
import React from "react";
import { useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function DeleteProduct({product}) {

    const {   delete: destroy } = useForm();
    // const deleteProduct = (e) => {
    //     e.preventDefault();
    //     destroy(`/products/${product.id}`);
    //    // destroy(route("product.destroy"));
    // }

    const deleteProduct = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to delete this product!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                 destroy(`/products/${product.id}`);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your post has been deleted.",
                    icon: "success",
                });
            }
        });
    };

    return (
        <div>
            <h3>Delete Product </h3>
            <form onSubmit={deleteProduct}>
                <DangerButton>Delete</DangerButton>
            </form>
        </div>
    );
}
