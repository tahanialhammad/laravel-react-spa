import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedHoverDropDowen() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((previousState) => !previousState);
    };
    
    const divVariants = {
        closed: {
            height: 0,
        },
        open: {
            height: "100px",
        },
    };

    return (
        <div
            className="dropdown-container w-64"
            onMouseEnter={toggleOpen}
            onMouseLeave={toggleOpen}
        >
            <button className="dropdown-button text-center bg-green-300 w-full">
                Hover Me
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={divVariants}
                        animate={isOpen ? "open" : "closed"}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0, height: 0 }}
                        className="dropdown-content bg-red-300 mt-1"
                    >
                        <p>Dropdown Content Here</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
