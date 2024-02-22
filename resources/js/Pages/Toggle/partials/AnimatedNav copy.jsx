import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

export default function AnimatedNav() {
    const [active, setActive] = useState(false);

    const divVariants = {
        closed: {
            height: "30px",
            width : "30px",
        },
        open: {
            height: "200px",
            width : "200px",
        },
    };

    return (
        <motion.div
            // className={`bg-gray-500 ${active ? "h-80 w-3/12	" : "h-10 w-10"}`}
            //refacture 1
            className="bg-gray-900 p-2"
            // style={{ width: "200px" }}
            // animate={{ height: active ? "200px" : "100px" }}
            transition={{ duration: 0.5 }}
            //refacture 2
            variants={divVariants}
            animate={active ? "open" : "closed"}
        >
            <motion.button onClick={() => setActive((pv) => !pv)}>
                <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {active ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    )}
                </svg>
            </motion.button>

            <ul>
                <li className="text-whit">link1</li>
                <li className="text-whit">link1</li>

            </ul>
        </motion.div>
    );
}
