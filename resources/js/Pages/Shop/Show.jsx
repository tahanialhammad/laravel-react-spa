import SiteLayout from "@/Layouts/SiteLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Show({ product }) {
    return (
        <SiteLayout>
            <Head title="show product" />

            <h1>{product.name}</h1>
        </SiteLayout>
    );
}
