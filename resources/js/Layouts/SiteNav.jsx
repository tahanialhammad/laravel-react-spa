import { useState } from "react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Dialog } from "@headlessui/react";

const navigation = [
    { name: "Home", href: "welcome" },
    { name: "About", href: "about" },
    { name: "Blog", href: "posts" },
    { name: "Contact", href: "contact" },
    { name: "FramerMotion", href: "FramerMotion" },
];

export default function SiteNav({ user }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav
                    className="flex items-center justify-between p-6 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6 text-red-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                href={route(item.href)}
                                active={route().current(item.href)}
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {user ? (
                            <Link
                                href={route("dashboard")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Log in{" "}
                                    <span aria-hidden="true">&rarr;</span>
                                </Link>

                                <Link
                                    href={route("register")}
                                    className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <svg
                                    className="h-6 w-6 text-red-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={route(item.href)}
                                            active={route().current(item.href)}
                                            className="block -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href={route("login")}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Log in
                                    </Link>
                                </div>
                                <div className="py-6">
                                    <Link
                                        href={route("register")}
                                        className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    );
}
