import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText({className, children, animationSpeed = 0.1 }) {
    const textVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: animationSpeed,
            },
        },
    };

    const spanVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
    };

    const titleText = children; 

    return (
        <div>
            <motion.h1
                variants={textVariants}
                initial="initial"
                animate="animate"
                className={className}
            >
                {titleText.split("").map((char, index) => (
                    <motion.span variants={spanVariants} key={index}>
                        {char}
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
}
