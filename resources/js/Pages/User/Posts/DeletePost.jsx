import React from "react";
import { useForm } from "@inertiajs/react";
import TrashIcon from "@/Components/Icons/TrashIcon";
import Swal from "sweetalert2";

export default function DeletePost({ post }) {
    const {
        delete: destroy,
    } = useForm({
        id: post.id,
    });

    const deletePost = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route("myposts.destroy"));
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
            <form onSubmit={deletePost}>
                <button type="submit">
                    <TrashIcon />
                </button>
            </form>
        </div>
    );
}
