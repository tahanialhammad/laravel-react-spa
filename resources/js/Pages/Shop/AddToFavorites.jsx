import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function AddToFavorites({ product, userFavorites }) {
    const { post } = useForm({
        product_id: product.id,
    });

    function toggleFavorite(e) {
        e.preventDefault();
        post(route("product.toggleFavorite", product));
    }

    return (
        <div>
            <button onClick={toggleFavorite}>
                {userFavorites.includes(product.id) ? "💖" : "🤍"}
            </button>
        </div>
    );
}
