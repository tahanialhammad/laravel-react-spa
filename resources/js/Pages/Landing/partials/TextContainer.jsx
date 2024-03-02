import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/Variants";

export default function TextContainer() {
    // function fadeIn(direction = "up") {
    //     return{
    //     initial: {
    //         y: 40,
    //       y: direction === "up" ? 40 : -60,

    //         opacity: 0,
    //     },
    //     animate: {
    //         y: 0,
    //         opacity: 1,
    //         transition: {
    //             duration: 0.5,
    //             ease: "easeInOut",
    //         },
    //     },
    // }
    // };

    return (
        <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="textContainerttt flex flex-col h-full px-2 py-28 md:px-52"
        >
            <div className="textContainer-topttt  flex items-center justify-between text-lg md:text-2xl">
                <motion.span
                    variants={fadeIn()}
                    // initial="initial"
                    // animate="animate" not need in the children 
                    className="text-green-600"
                >
                    Find your clean juice
                </motion.span>
                <motion.span
                    variants={fadeIn()}
                    className="first-letter:text-5xl"
                >
                    2 /4
                </motion.span>
            </div>

            <motion.div
                variants={fadeIn()}
                initial="initial"
                animate="animate"
                className="textContainer-middlettt grid flex-1 place-items-center"
            >
                <span className="text-5xl font-black tracking-wider md:text-9xl">
                    ORANGE
                </span>
            </motion.div>

            <div className="textContainer-bottomtt flex items-center justify-between ">
                <motion.button  variants={fadeIn()} className="p-2 text-base tracking-wide text-white lowercase bg-gray-900 rounded-lg md:px-6 md:py-3 md:text-lg">
                    show all the juices
                </motion.button>
                <motion.p  variants={fadeIn()} className="text-sm font-semibold md:text-2xl">
                    Your healthy <span className="text-green-600"> life </span>{" "}
                    <br /> starts here with us!
                </motion.p>
            </div>
        </motion.div>
    );
}
