import React from "react";
import { motion } from "framer-motion";

export default function RepeatAnimated() {
    return (
        <div>
            <h1>Repeat</h1>
            <motion.div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "red",
                }}
                initial={{ x: 0 }}
                animate={{ x: 900 }}
                transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    //  repeatType: "loop",
                }} //repeatType: loop ,mirror ,repeat : 5
            >
                <h1>Repeat</h1>
            </motion.div>
        </div>
    );
}
