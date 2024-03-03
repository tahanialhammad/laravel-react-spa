import React from "react";
import { motion } from "framer-motion";

export default function AnimatedButton() {
    return (
        <div>
            <h1> initial start point, animate end point CSS object</h1>
            <motion.button
                animate={{
                    x: 200,
                    y: 50,
                    opacity: 0.1,
                    backgroundColor: "black",
                }}
                transition={{ duration: 1 }}
                className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                Button
            </motion.button>
        </div>
    );
}
