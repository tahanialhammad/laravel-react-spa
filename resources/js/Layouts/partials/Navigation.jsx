import React from "react";
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";

const navigation = [
    { name: "dashboard", href: "dashboard" , color : "border-red-600"},
    { name: "Profile", href: "profile.edit" , color : "border-orange-600" },
    { name: "Blog", href: "admin.posts" ,color : "border-fuchsia-600"},
    { name: "Log Out", href: "logout" ,  color : "border-purple-600",  method:"post"},
    { name: "FramerMotion", href: "FramerMotion", color : "border-indigo-600" },
    { name: "Toggle", href: "Toggle", color : "border-blue-600" },
];

const navigationVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

export default function Navigation({user} ) {
    return (
        <motion.ul
            variants={navigationVariants}
            className="p-5 absolute top-[70px] w-[260px]"
        >
            <div>{user.name}</div>
              {navigation.map((item) => (
                <MenuItem item={item} key={item.name}/>
               
            ))}
        </motion.ul>
    );
}
