import React from "react";
import { motion } from "framer-motion";

const menuItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
         //   ease: [0.6, 0.05, -0.01, 0.9], //error ???
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            duration: 0.4,
         //   ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
};

export default function MenuItem() {
    return (
        <motion.li
            variants={menuItemVariants}
            className="flex items-center mb-5 space-x-6 cursor-pointer"
        >
            <span className="icon-placeholdertt w-[45px] h-[45px] rounded-full"></span>
            <span className="text-placeholdertt flex-1 h-8 rounded-lg"></span>
        </motion.li>
    );
}
