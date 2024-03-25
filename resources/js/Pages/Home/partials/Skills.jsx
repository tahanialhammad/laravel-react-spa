import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <div className="flextt ">
            Skills
            {/* https://codesandbox.io/p/sandbox/framer-motion-5-3-scroll-triggered-animations-2hbg5?file=%2Fsrc%2FApp.tsx%3A25%2C14&from-embed= */}
            <Box />
            <Box />
            <Box />
        </div>
    );
}

function Box() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, x: 500 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="m-12 w-32 h-32 bg-red-600"
        ></motion.div>
    );
}
