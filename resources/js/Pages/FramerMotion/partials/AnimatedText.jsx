import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText() {
    // Text Animation
    const titleVariants = {
        hidden: {
            // initial value
            opacity: 0,
        },
        visible: {
            //animate value
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
            },
        },
    };

    const spanVariants = {
        hidden: {
            // initial value
            opacity: 0,
        },
        visible: {
            //animate value
            opacity: 1,
        },
    };

    const titleText =
        "Tahani webdeveloper freelace special in Laravel, Front-endand Woordpress with  Text Animation ";

    return (
        <div>
            <motion.h1
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-8xl"
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
