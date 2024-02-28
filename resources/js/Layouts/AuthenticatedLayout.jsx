import FlashMessage from "@/Components/FlashMessage";
import AnimatedAuthNav from "./AnimatedAuthNav";
import AuthNav from "./AuthNav";
import { usePage } from "@inertiajs/react";

export default function Authenticated({ user, header, children }) {
    const { flash } = usePage().props;

    return (
        <div className="min-h-screen bg-gray-100">
            <AuthNav user={user}></AuthNav>
            <AnimatedAuthNav user={user}></AnimatedAuthNav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <div>
                {/* Flash message */}
                {flash.message && (
                    <FlashMessage level = "success" >
                        {flash.message}
                    </FlashMessage>
                )}
            </div>
            <main>{children}</main>
        </div>
    );
}
