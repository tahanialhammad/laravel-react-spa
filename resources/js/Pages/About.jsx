import GuestLayout from '@/Layouts/GuestLayout';
import { Link, Head } from "@inertiajs/react";


export default function About({ name}) {
    return (
        <GuestLayout>
            <Head title="About" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                {/* Guset Page Content */}
                <h1>about { name} page</h1>
            </div>
        </GuestLayout>
    );
}
