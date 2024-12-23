import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div>You're logged in! user interface</div>
        </AuthenticatedLayout>
    );
}
