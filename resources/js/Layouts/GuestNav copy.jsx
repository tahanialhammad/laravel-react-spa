import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

export default function GuestNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
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
        <nav className="bg-gray-800tt p-4">
            <div className="max-w-7xl mx-auto md:flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                    </Link>
                    <div className="md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6 text-red-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className={`md:flex flex-grow justify-between items-center ${
                        isOpen ? "block" : "hidden"
                    }`}
                >
                    <ul className="md:flex items-center">
                        {guestNavLinks.map((guestNavLink) => (
                            <li key={guestNavLink.id}>
                                <NavLink
                                    href={route(guestNavLink.route)}
                                    active={route().current(guestNavLink.route)}
                                >
                                    {guestNavLink.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div>
                        <div className="md:flex items-center">
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
