import React from "react";
import Navigation from "./partials/Navigation";
import MenuToggler from "./partials/MenuToggler";
import { motion, useCycle } from "framer-motion";
import { useState } from "react";

const sidebarVariants = {
    open: {
        //  opacity: 0,
        clipPath: `circle(1000px at 40px 40px)`, //https://bennettfeely.com/clippy/
        transition: {
            duration: 0.4,
        },
    },
    closed: {
        //  opacity: 1,
        clipPath: `circle(30px at 40px 40px)`,
        transition: {
            duration: 0.4,
            delay: 0.4,
        },
    },
};

export default function LayoutsExample() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    // console.log(isOpen); //test toggleing

    return (
        <main className="h-screen bg-gradient-to-br from-[#0055ff] to-[rgb(0,153,255)] overflow-hidden">
            <motion.nav
                variants={sidebarVariants}
                initial={false}
                animate={isOpen ? "open" : "closed"} // use this in parrent 
                className="layouts-example absolute top-0 left-0 bottom-0 w-[300px]"
            >
                <motion.div
                    variants={sidebarVariants}
                    // initial="open"
                    // animate="closed"
                    // initial={false}
                    // animate={isOpen ? "open" : "closed"} // move this in parrent
                    className="backgroundttt bg-white absolute top-0 left-0 bottom-0 w-[300px]"
                />
                <MenuToggler toggle={() => toggleOpen()} />
                <Navigation />
            </motion.nav>
        </main>
    );
}
