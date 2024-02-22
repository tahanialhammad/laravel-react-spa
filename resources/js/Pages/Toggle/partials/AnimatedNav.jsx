import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

export default function AnimatedNav() {
    const [active, setActive] = useState(false);

    const divVariants = {
        closed: {
            height: "30px",
            width: "30px",
            overflow: "hidden",
        },
        open: {
            height: "200px",
            width: "200px",
        },
    };

    return (
        <motion.div
            className="bg-gray-900"
            variants={divVariants}
            animate={active ? "open" : "closed"}
        >
            <motion.button onClick={() => setActive((pv) => !pv)}>
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
            </motion.button>

            <ul
                animate={{ display: active ? "" : "none" }}
                class="border border-gray-200 rounded overflow-hidden shadow-md"
            >
                <li class="px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                    First Item
                </li>
                <li class="px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                    Second Item
                </li>
                <li class="px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                    Third Item
                </li>
                <li class="px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                    Another Item
                </li>
            </ul>
        </motion.div>
    );
}
