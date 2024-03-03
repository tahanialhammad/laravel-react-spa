import React from "react";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";

const navigationVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

export default function Navigation() {
    return (
        <motion.ul
            variants={navigationVariants}
            className="p-5 absolute top-[100px] w-[260px]"
        >
            {/* <style>{` p { color: red; } `}</style>
            <p>hi</p> */}
            {[...Array(5)].map((_, i) => (
                <MenuItem key={i}/>
            ))}
        </motion.ul>
    );
}
