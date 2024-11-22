import React from "react";
import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        description: "",
        price: 0,
        stock: 0,
        discount: 0,
        discount_type: "fixed", // Set default value to avoid empty submission
    });

    function createProduct(e) {
        e.preventDefault();
        post("/products");
    }

    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <Head title="Create product" />

            <div className="mb-4 text-lg font-bold">Add new product</div>
            <form onSubmit={createProduct}>
                {/* Name Field */}
                <div className="mb-4">
                    <label className="block mb-1">Name:</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="border p-2 w-full"
                    />
                    {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                </div>

                {/* Description Field */}
                <div className="mb-4">
                    <label className="block mb-1">Description:</label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        className="border p-2 w-full"
                    />
                    {errors.description && (
                        <div className="text-red-500 text-sm">{errors.description}</div>
                    )}
                </div>

                {/* Price Field */}
                <div className="mb-4">
                    <label className="block mb-1">Price:</label>
                    <input
                        type="number"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                        className="border p-2 w-full"
                    />
                    {errors.price && <div className="text-red-500 text-sm">{errors.price}</div>}
                </div>

                {/* Discount and Discount Type */}
                <div className="mb-4 flex gap-4">
                    {/* Discount */}
                    <div className="flex-1">
                        <label className="block mb-1" htmlFor="discount">
                            Discount
                        </label>
                        <input
                            type="number"
                            name="discount"
                            id="discount"
                            step="0.01"
                            value={data.discount}
                            onChange={(e) => setData("discount", e.target.value)}
                            className="border p-2 w-full"
                        />
                        {errors.discount && (
                            <div className="text-red-500 text-sm">{errors.discount}</div>
                        )}
                    </div>

                    {/* Discount Type */}
                    <div className="flex-1">
                        <label className="block mb-1" htmlFor="discount_type">
                            Discount Type
                        </label>
                        <select
                            name="discount_type"
                            id="discount_type"
                            value={data.discount_type} // Bind value to data
                            onChange={(e) => setData("discount_type", e.target.value)}
                            className="border p-2 w-full"
                        >
                            <option value="fixed">Fixed</option>
                            <option value="percentage">Percentage</option>
                        </select>
                        {errors.discount_type && (
                            <div className="text-red-500 text-sm">{errors.discount_type}</div>
                        )}
                    </div>
                </div>

                {/* Stock Field */}
                <div className="mb-4">
                    <label className="block mb-1">Stock:</label>
                    <input
                        type="number"
                        value={data.stock}
                        onChange={(e) => setData("stock", e.target.value)}
                        className="border p-2 w-full"
                    />
                    {errors.stock && <div className="text-red-500 text-sm">{errors.stock}</div>}
                </div>

                {/* Submit Button */}
                <div>
                    <PrimaryButton disabled={processing}>Add</PrimaryButton>
                </div>
            </form>
        </MiniDrawerAuthLayout>
    );
}
