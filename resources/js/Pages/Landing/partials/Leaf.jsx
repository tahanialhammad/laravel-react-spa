import React from "react";
import { motion } from "framer-motion";
import { leafWrapper, leaf } from "@/Variants";

export default function Leaf({ className, imageUrl, animationSpeed }) {
    return (
        <motion.div variants={leafWrapper} className={className}>
            <motion.img
                custom={animationSpeed}
                variants={leaf}
                className="leaf"
                src={imageUrl}
            />
        </motion.div>
    );
}
