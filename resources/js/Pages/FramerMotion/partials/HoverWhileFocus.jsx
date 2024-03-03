import React from "react";
import { motion } from "framer-motion";

export default function HoverWhileFocus() {
    return (
        <div>
            <h1>hover, tp click, whileFocus</h1>
            <motion.button
                initial={{ x: 100 }}
                transition={{
                    duration: 2,
                    type: "spring",
                    stiffness: 200,
                    mass: 0.5,
                    damping: 10,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.5 }}
                className="inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-none  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
            >
                hover btn
            </motion.button>
            <div>
                <motion.input
                    className="mt-8"
                    type="text"
                    whileFocus={{ scale: 1.2 }}
                />
            </div>
            <div>
                <motion.button
                    initial={{ x: 100 }}
                    transition={{
                        duration: 2,
                        type: "spring",
                        stiffness: 200,
                        mass: 0.5,
                        damping: 10,
                    }}
                    whileDrag={{ scale: 1.3 }}
                    drag="x" // not limited
                    dragConstraints={{ left: 0, right: 100 }} //limitation
                    className="inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-none  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                >
                    drag btn
                </motion.button>
            </div>
            <div className="mt-24">
                <motion.button
                    initial={{ x: 100 }}
                    transition={{
                        duration: 2,
                        type: "spring",
                        stiffness: 200,
                        mass: 0.5,
                        damping: 10,
                    }}
                    whileInView={{ x: 0, scale: 1.6 }}
                    className="inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-none  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                >
                    whileInView btn after scroll
                </motion.button>
            </div>
        </div>
    );
}
