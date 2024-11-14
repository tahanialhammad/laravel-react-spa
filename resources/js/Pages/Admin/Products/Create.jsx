import React from "react";
import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        description: "",
        price: 0,
        stock: 0,
    });

    function createProduct(e) {
        e.preventDefault();
        post("/products");
    }

    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <div>Add new product</div>
            <form onSubmit={createProduct}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && <div>{errors.name}</div>}
                </div>

                <div>
                    <label>Description:</label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                    />
                    {errors.description && <div>{errors.description}</div>}
                </div>

                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                    />
                    {errors.price && <div>{errors.price}</div>}
                </div>

                <div>
                    <label>Stock:</label>
                    <input
                        type="number"
                        value={data.stock}
                        onChange={(e) => setData("stock", e.target.value)}
                    />
                    {errors.stock && <div>{errors.stock}</div>}
                </div>

                <div>
                    <PrimaryButton disabled={processing}>Add</PrimaryButton>
                </div>
            </form>
        </MiniDrawerAuthLayout>
    );
}
