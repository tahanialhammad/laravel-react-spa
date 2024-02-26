import React from "react";
import { useForm } from "@inertiajs/react";
import TrashIcon from "@/Components/Icons/TrashIcon";

export default function DeletePost({ post }) {
    const {
        data,
        setData,
        delete: destroy,
    } = useForm({
        id: post.id,
    });

    const deletePost = (e) => {
        e.preventDefault();

        destroy(route("post.destroy"));
    };

    return (
        <div>
            <form onSubmit={deletePost}>
                {/* <Link href={route('post.destroy')}>delete</Link> */}
                <button type="submit">
                    <TrashIcon />
                </button>
            </form>
        </div>
    );
}
