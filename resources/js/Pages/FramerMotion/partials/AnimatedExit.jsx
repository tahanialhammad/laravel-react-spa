import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedExit() {
    const [show, setShow] = useState(true); //show btn in deflual state
    //     useEffect(()=>{
    // //function
    //     }, []);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 5000);
    }, []);

    return (
        <div>
            <h1>
                exit animation with useEffect, useState and we need to
                AnimatePresence
            </h1>
            <AnimatePresence>
                {show && (
                    <motion.button
                        className="inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-none  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        exit={{ opacity: 0, x: 200 }}
                        transition={{ duration: 2 }}
                    >
                        show if true
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
