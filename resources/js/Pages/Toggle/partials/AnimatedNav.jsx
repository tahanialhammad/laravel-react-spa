import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedNav() {
    const [active, setActive] = useState(false);

    const divVariants = {
        closed: {
            height: 0,
            width: 0,
            overflow: "hidden",
            // background : "transparent"
        },
        open: {
            height: "100vh",
            width: "20vw",
        },
    };

    return (
        <div className="relative">
            <button
                className="rounded-full bg-gray-900 p-2 absolute top-0 left-0 z-10"
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
                        exit={{ opacity: 0, height: 0 ,  width: 0,}}
                        className="bg-gray-900 absolute top-0 left-0 pt-8"
                    >
                        <ul
                            animate={{ display: active ? "" : "none" }}
                            className="border border-gray-200 rounded overflow-hidden shadow-md"
                        >
                            <li className="px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                                First Item
                            </li>
                            <li className="px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                                Second Item
                            </li>
                            <li className="px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                                Third Item
                            </li>
                            <li className="px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                                Another Item
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
