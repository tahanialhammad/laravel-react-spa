import React, { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedHoverDropDownContext = createContext();

export default function AnimatedHoverDropDown({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((previousState) => !previousState);
    };

    return (
        <AnimatedHoverDropDownContext.Provider value={{ isOpen, toggleOpen }}>
            <div className="relative">{children}</div>
        </AnimatedHoverDropDownContext.Provider>
    );
}

const Trigger = ({ children, className = "" }) => {
    const { toggleOpen } = useContext(AnimatedHoverDropDownContext);

    return (
        <button
            className={className}
            onMouseEnter={toggleOpen}
            onMouseLeave={toggleOpen}
        >
            {children}
        </button>
    );
};

const Content = ({ children, className = "" }) => {
    const { isOpen } = useContext(AnimatedHoverDropDownContext);
    const divVariants = {
        closed: {
            height: 0,
            opacity: 0,
        },
        open: {
            height: "100px",
            opacity: 1,
        },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={divVariants}
                    animate={isOpen ? "open" : "closed"}
                    transition={{ duration: 0.5 }}
                    exit={{ opacity: 0, height: 0 }}
                    className={className}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

AnimatedHoverDropDown.Trigger = Trigger;
AnimatedHoverDropDown.Content = Content;
