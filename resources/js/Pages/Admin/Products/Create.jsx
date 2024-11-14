import React from "react";
import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    // console.log(useForm);
    const { data, setData, post, errors, proccessing } = useForm({
        name: "",
    });

    function createProduct(e) {
        e.preventDefault();
        post("/products");
    }


    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <div>Add new product</div>
            {/* {data.name} */}
            <form onSubmit={createProduct}>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                />
                <PrimaryButton>add</PrimaryButton>
            </form>
        </MiniDrawerAuthLayout>
    );
}
