import React from "react";
import { motion } from "framer-motion";

export default function KeyframesAndRepeat() {
    return (
        <div className="bg-green-400 p-2">
            <h1>Keyframes, repeat</h1>
            <motion.div
                initial={{
                    opacity: 0,
                    x: [0, 100, 0],
                    y: [0, 100, 0],
                    scale: [1, 2, 1],
                }}
                animate={{
                    opacity: 1,
                    x: [0, 100, 0],
                    y: [0, 100, 0],
                    scale: [1, 2, 1],
                }}
            >
                <h1>tahaninnnnnnnnaaaaaa</h1>
            </motion.div>
        </div>
    );
}
