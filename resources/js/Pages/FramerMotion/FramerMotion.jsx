import SiteLayout from "@/Layouts/SiteLayout";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FramerMotion() {
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
        <SiteLayout>
            <div className="relative isolate px-6 pt-24 lg:px-8">
                {/* https://www.framer.com/motion/introduction/ */}
                <h1> Framer Motion</h1>
                <hr />
                <div>
                    <h1> initial start point, animate end point CSS object</h1>
                    <motion.button
                        animate={{
                            x: 200,
                            y: 50,
                            opacity: 0,
                            backgroundColor: "black",
                        }}
                        transition={{ duration: 1 }}
                        className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        Button
                    </motion.button>
                </div>
                <hr />
                <div>
                    <motion.button
                        initial={{ x: -400, rotate: 100 }}
                        animate={{ x: 400, rotate: 0 }}
                        transition={{ duration: 1 }}
                        className="inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-none  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        More Info
                    </motion.button>
                </div>
                <hr />
                <div>
                    <h1>
                        exit animation with useEffect, useState and we need to
                        AnimatePresence{" "}
                    </h1>
                    <AnimatePresence>
                        {show && (
                            <motion.button
                                className="inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-none  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                exit={{ opacity: 0, x:200 }}
                                transition={{ duration: 2 }}
                            >
                                show if true
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>
                <hr />
                <div>

                </div>
            </div>
        </SiteLayout>
    );
}
