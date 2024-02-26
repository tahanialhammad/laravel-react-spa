import DangerButton from "@/Components/DangerButton";
import React from "react";

export default function DeletePost() {


    const deleteUser = (e) => {
     

        destroy(route('post.destroy'));
    };


    return (
        <div>
            DeletePost
            <form onSubmit={deleteUser} className="p-6">
                <DangerButton className="ms-3" disabled={processing}>
                    Delete Account
                </DangerButton>
            </form>
        </div>
    );
}
