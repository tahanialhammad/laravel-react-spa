import React from "react";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";

const navigation = [
    { name: "dashboard", href: "dashboard" },
    { name: "About", href: "about" },
    { name: "Blog", href: "admin/posts" },
    { name: "Contact", href: "contact" },
    { name: "FramerMotion", href: "FramerMotion" },
    { name: "Toggle", href: "Toggle" },
];

const navigationVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

export default function Navigation({ user }) {
    return (
        <motion.ul
            variants={navigationVariants}
            className="p-5 absolute top-[70px] w-[260px]"
        >
              {navigation.map((item) => (
                <MenuItem item={item} key={item.name}/>
            ))}
        </motion.ul>
    );
}
