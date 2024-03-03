import React from "react";
import { motion } from "framer-motion";

export default function AnimatedButton2() {
    return (
        <div>
            <motion.button
                initial={{ x: -400, rotate: 100 }}
                animate={{ x: 400, rotate: 0 }}
                transition={{ duration: 1 }}
                className="inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-none  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
            >
                More Info
            </motion.button>
        </div>
    );
}
