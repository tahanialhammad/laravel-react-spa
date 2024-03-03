import React from "react";
import { motion } from "framer-motion";

export default function VariantsButton() {
    const divVariants = {
        hidden: {
            // initial value
            x: 100,
        },
        visible: {
            //animate value
            x: 0,
            transition: {
                duration: 2,
            },
        },
    };

    return (
        <div>
            <h1>Variants</h1>
            <motion.button
                variants={divVariants}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-none  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
            >
                Variants btn
            </motion.button>
        </div>
    );
}
