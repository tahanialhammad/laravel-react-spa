import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

export default function GuestNav() {
    const guestNavLinks = [
        {
            id: 1,
            name: "About",
            route: "about",
        },
        {
            id: 2,
            name: "Conract",
            route: "contact",
        },
        {
            id: 3,
            name: "Blog",
            route: "posts",
        },
    ];

    return (
        <nav className="bg-white border-b border-gray-100">
            {/* navbar :  https://tailwindcomponents.com/component/responsive-navbar-12  */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                        </div>

                        <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                            <NavLink
                                href={route("welcome")}
                                active={route().current("welcome")}
                            >
                                Home
                            </NavLink>

                            {guestNavLinks.map((guestNavLink) => (
                                <NavLink key={guestNavLink.id}
                                    href={route(guestNavLink.route)}
                                    active={route().current(guestNavLink.route)}
                                >
                                    {guestNavLink.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    <div className="hidden sm:flex sm:items-center sm:ms-6">
                        <div className="ms-3 relative">login btn</div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
