import React from "react";
import Navigation from "./partials/Navigation";
import MenuToggler from "./partials/MenuToggler";
import { motion, useCycle } from "framer-motion";
import { useState } from "react";

const sidebarVariants = {
    open: {
        clipPath: `circle(1000px at 40px 40px)`,
        transition: {
            duration: 0.4,
        },
    },
    closed: {
        clipPath: `circle(30px at 40px 40px)`,
        transition: {
            duration: 0.4,
            delay: 0.4,
        },
    },
};
export default function AnimatedAuthNav({user}) {
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <motion.nav
            variants={sidebarVariants}
            initial={false}
            animate={isOpen ? "open" : "closed"} // use this in parrent
            className="layouts-example absolute top-0 left-0 bottom-0 w-[300px]"
        >
            <motion.div
                variants={sidebarVariants}
                className="backgroundttt bg-white absolute top-0 left-0 bottom-0 w-[300px]"
            />
            <MenuToggler toggle={() => toggleOpen()} />
            <Navigation user={user} />
        </motion.nav>
    );
}
