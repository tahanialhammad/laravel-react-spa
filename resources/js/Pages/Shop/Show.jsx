import SiteLayout from "@/Layouts/SiteLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Show({auth, product }) {
    return (
        <SiteLayout user={auth.user}>
            <Head title="show product" />

            <h1>{product.name}</h1>
        </SiteLayout>
    );
}
