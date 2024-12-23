import { useState } from "react";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Dialog } from "@headlessui/react";
import Dropdown from "@/Components/Dropdown";
import HoverDropDowen from "@/Components/HoverDropDowen";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const navigation = [
    { name: "Home", href: "welcome" },
    { name: "Shop", href: "products.index" },
    { name: "Services", href: "services" },
    { name: "Blog", href: "posts" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
    {
        name: "Example",
        subNav: [
            { name: "FramerMotion", href: "FramerMotion" },
            { name: "Toggle", href: "Toggle" },
            { name: "LandingPage", href: "LandingPage" },
            { name: "LayoutsExample", href: "LayoutsExample" },
            { name: "TestCode", href: "TestCode" },
        ],
    },
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
                            <ApplicationLogo className="block h-12 w-auto fill-current text-gray-800" />
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
                        {navigation.map((item, index) => (
                            <HoverDropDowen>
                                <HoverDropDowen.Trigger key={index}>
                                    <NavLink
                                        key={item.name}
                                        href={item.href && route(item.href)}
                                        active={
                                            item.href &&
                                            route().current(item.href)
                                        }
                                        className="text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        {item.name}
                                    </NavLink>
                                </HoverDropDowen.Trigger>

                                {item.subNav && (
                                    <HoverDropDowen.Content>
                                        {item.subNav.map(
                                            (subItem, subIndex) => (
                                                <HoverDropDowen.Link
                                                    href={route(subItem.href)}
                                                    key={subIndex}
                                                    className="px-2"
                                                >
                                                    {subItem.name}
                                                </HoverDropDowen.Link>
                                            )
                                        )}
                                    </HoverDropDowen.Content>
                                )}
                            </HoverDropDowen>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
                        <NavLink
                            href={route("welcome")}
                            className="me-2 text-sm font-semibold leading-6 text-gray-900"
                        >
                            <ShoppingBagOutlinedIcon />
                        </NavLink>
                        <NavLink
                            href={route("product.wishlist")}
                            className="me-2 text-sm font-semibold leading-6 text-gray-900"
                        >
                            <FavoriteBorderOutlinedIcon />
                        </NavLink>
                        {user ? (
                            <NavLink
                                href={route("dashboard")}
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Dashboard
                            </NavLink>
                        ) : (
                            <>
                                <NavLink
                                    href={route("login")}
                                    className="me-2 text-sm font-semibold leading-6 text-gray-900"
                                >
                                    <AccountCircleOutlinedIcon />
                                </NavLink>

                                <NavLink
                                    href={route("register")}
                                    className="me-2 text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Register
                                    <span aria-hidden="true">&rarr;</span>
                                </NavLink>
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
                                            href={item.href && route(item.href)}
                                            active={
                                                item.href &&
                                                route().current(item.href)
                                            }
                                            className="block -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                                {user ? (
                                    <div className="py-6">
                                        <Link
                                            href={route("dashboard")}
                                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                            Dashboard
                                        </Link>
                                    </div>
                                ) : (
                                    <>
                                        <div className="py-6">
                                            <NavLink
                                                href={route("login")}
                                                className="me-2 text-sm font-semibold leading-6 text-gray-900"
                                            >
                                                <AccountCircleOutlinedIcon />
                                            </NavLink>
                                        </div>
                                        <div className="py-6">
                                            <NavLink
                                                href={route("register")}
                                                className="me-2 text-sm font-semibold leading-6 text-gray-900"
                                            >
                                                Register
                                            </NavLink>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    );
}
