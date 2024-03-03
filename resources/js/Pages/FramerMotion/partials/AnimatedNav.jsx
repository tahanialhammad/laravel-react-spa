import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@inertiajs/react";
import AuthNavLink from "@/Components/AuthNavLink";

const navigation = [
    { name: "Home", href: "welcome" },
    { name: "About", href: "about" },
    { name: "Blog", href: "posts" },
    { name: "Contact", href: "contact" },
    { name: "FramerMotion", href: "FramerMotion" },
    { name: "Toggle", href: "Toggle" },
    { name: "LandingPage", href: "LandingPage" },
];

export default function AnimatedNav() {
    const [active, setActive] = useState(false);

    const divVariants = {
        closed: {
            height: 0,
            width: 0,
            overflow: "hidden",
        },
        open: {
            height: "100vh",
            width: "15vw",
        },
    };

    return (
        <div className="relative md:flex hidden">
            <button
                className="rounded-full bg-gray-900 p-2 absolute top-0 left-0 z-20"
                onClick={() => setActive((pv) => !pv)}
            >
                <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {active ? (
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

            <AnimatePresence>
                {active && (
                    <motion.div
                        variants={divVariants}
                        animate={active ? "open" : "closed"}
                        transition={{ duration: 1.5 }}
                        exit={{ opacity: 0, height: 0, width: 0 }}
                        className="bg-gray-900 absolute top-0 left-0 pt-16 ps-4 z-10"
                    >
                        <ul>
                            {navigation.map((item) => (
                                <li className="my-2 text-white hover:text-gray-900 hover:bg-gray-100 hover:border-s-8 hover:border-red-700 transition-all duration-300 ease-in-out">
                                    <AuthNavLink
                                        key={item.name}
                                        href={route(item.href)}
                                        active={route().current(item.href)}
                                        className="px-4 py-4 hover:text-gray-900"
                                    >
                                        {item.name}
                                    </AuthNavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
