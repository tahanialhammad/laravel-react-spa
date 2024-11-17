import React from "react";
import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";

export default function Update({ auth , product}) {
    const { data, setData, put, errors, processing } = useForm({
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
    });

    function createProduct(e) {
        e.preventDefault();
        // put(`/products/${product.id}`);
        put(route('products.update' , product));
    }

    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <Head title="Update product" />

            <div>Update product</div>
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
                    <PrimaryButton disabled={processing}>Update</PrimaryButton>
                </div>
            </form>
        </MiniDrawerAuthLayout>
    );
}
