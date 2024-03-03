import React from "react";
import { motion } from "framer-motion";

export default function DelayType() {
    return (
        <div className="px-14">
            <h1>delay, type, stiffness , mass, damping, </h1>
            <motion.button
                initial={{ x: 100 }}
                animate={{ x: -100 }}
                transition={{
                    duration: 2,
                    //  delay: 2,
                    //  type: "tween",
                    type: "spring",
                    stiffness: 200,
                    mass: 0.5,
                    damping: 10,
                }}
                className="inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-none  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
            >
                delay btn
            </motion.button>
        </div>
    );
}
