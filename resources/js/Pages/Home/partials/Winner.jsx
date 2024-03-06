import React from "react";
import { motion } from "framer-motion";

function fadeIn(direction = "A") {
    return {
        initial: {
            x: 400,
            // y: direction === "A" ? 200 : direction === "C" ? -200 : 0,
            y: (() => {
                if (direction === "A") {
                    return 200;
                } else if (direction === "C") {
                    return -200;
                } else {
                    return 0;
                }
            })(),
            opacity: 0,
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 2.5,
                ease: "easeInOut",
            },
        },
    };
}

export default function Winner() {
    return (
        <div className="">
            <motion.div
                variants={fadeIn()}
                initial="initial"
                animate="animate"
                className="relative "
            >
                <motion.img
                    variants={fadeIn("B")}
                    // initial="initial"
                    // animate="animate"
                    src="./images/winner.png"
                    alt=""
                    className="absolute top-20 -right-52"
                />
                <motion.img
                    variants={fadeIn("A")}
                    // initial="initial"
                    // animate="animate"
                    src="./images/laravel.png"
                    alt=""
                    className="absolute top-28 right-44 w-16"
                />

                {/* react goed */}
                <motion.img
                    variants={fadeIn("B")}
                    // initial="initial"
                    // animate="animate"
                    src="./images/React.png"
                    alt=""
                    className="absolute top-64 right-64 w-16"
                />

                <motion.img
                    variants={fadeIn("C")}
                    // initial="initial"
                    // animate="animate"
                    src="./images/Tailwind.png"
                    alt=""
                    className="absolute top-96 right-44 w-16"
                />
            </motion.div>
        </div>
    );
}
