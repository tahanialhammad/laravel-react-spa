import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import AuthNavLink from "@/Components/AuthNavLink";

const menuItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            duration: 0.4,
        },
    },
};

export default function MenuItem({ item }) {
    return (
        <motion.li
            variants={menuItemVariants}
            className="flex items-center mb-2 space-x-6 cursor-pointer"
        >
            <span
                className={
                    "icon-placeholdertt w-[45px] h-[45px] border-2  rounded-full " +
                    item.color
                }
            ></span>
            <span
                className={
                    "text-placeholdertt flex-1 h-8 rounded-lg hover:bg-gray-100 px-2 border-2 " +
                    item.color
                }
            >
                <AuthNavLink
                    href={route(item.href)}
                    active={route().current(item.href)}
                    className="capitalize"
                    method={item.method}
                >
                    {item.name}
                </AuthNavLink>
            </span>
        </motion.li>
    );
}
