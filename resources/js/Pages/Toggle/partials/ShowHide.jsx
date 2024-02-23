import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ShowHide() {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <div class="w-1/4 p-4 text-left cursor-pointer">
                <div className="flex items-center justify-between">
                    <span className="tracking-wide">What is x-data ?</span>
                    <span className="transition-transform duration-500 transform fill-current ">
                        <button onClick={handleToggle}>
                            {/* {isVisible ? "Hide Section" : "Show Section"} */}
                            <svg
                                className="w-5 h-5 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </button>
                    </span>
                </div>
            </div>

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-1/4 p-4 text-left"
                    >
                        <div className="px-6 pb-4 text-gray-600">
                            Declare a new react component and its data for a
                            block of HTML
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

           <h1>Or This </h1>

            <button
                className="rounded text-white bg-gray-900 p-2"
                onClick={handleToggle}
            >
                {isVisible ? "Hide Section" : "Show Section"}
            </button>
            <AnimatePresence>
                {isVisible && (
                    <motion.section
                        className="text-white bg-gray-900 p-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>This is the section content</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla fringilla magna ut nisi eleifend, a
                            ullamcorper magna aliquet. Vivamus et urna
                            efficitur, aliquet lorem vitae, bibendum eros.
                        </p>
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
}
