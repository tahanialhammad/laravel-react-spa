import SiteLayout from "@/Layouts/SiteLayout";
import React from "react";

export default function Show({ product }) {
    return (
        <SiteLayout>
            <h1>{product.name}</h1>
        </SiteLayout>
    );
}
