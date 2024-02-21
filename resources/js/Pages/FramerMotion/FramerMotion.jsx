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

    const divVariants = {
        hidden: {
            // initial value
            x: 100,
        },
        visible: {
            //animate value
            x: 0,
            transition: {
                duration: 2,
            },
        },
    };

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
                <hr />
                <div className="px-14">
                    <h1>delay, type, stiffness , mass, damping, </h1>
                    <motion.button
                        initial={{ x: 100 }}
                        animate={{ x: -100 }}
                        transition={{
                            duration: 2,
                            //  delay: 2,
                            //  type: "tween",
                            type: "spring",
                            stiffness: 200,
                            mass: 0.5,
                            damping: 10,
                        }}
                        className="inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-none  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        delay btn
                    </motion.button>
                </div>
                <hr />
                <div>
                    <h1>hover, tp click, whileFocus</h1>
                    <motion.button
                        initial={{ x: 100 }}
                        transition={{
                            duration: 2,
                            type: "spring",
                            stiffness: 200,
                            mass: 0.5,
                            damping: 10,
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.5 }}
                        className="inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-none  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        hover btn
                    </motion.button>
                    <div>
                        <motion.input
                            className="mt-8"
                            type="text"
                            whileFocus={{ scale: 1.2 }}
                        />
                    </div>
                    <div>
                        <motion.button
                            initial={{ x: 100 }}
                            transition={{
                                duration: 2,
                                type: "spring",
                                stiffness: 200,
                                mass: 0.5,
                                damping: 10,
                            }}
                            whileDrag={{ scale: 1.3 }}
                            drag="x" // not limited
                            dragConstraints={{ left: 0, right: 100 }} //limitation
                            className="inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-none  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        >
                            drag btn
                        </motion.button>
                    </div>
                    <div className="mt-24">
                        <motion.button
                            initial={{ x: 100 }}
                            transition={{
                                duration: 2,
                                type: "spring",
                                stiffness: 200,
                                mass: 0.5,
                                damping: 10,
                            }}
                            whileInView={{ x: 0, scale: 1.6 }}
                            className="inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-none  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        >
                            whileInView btn after scroll
                        </motion.button>
                    </div>
                </div>
                <hr />
                <div>
                    <h1>Variants</h1>
                    <motion.button
                        variants={divVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center justify-center px-4 py-2 bg-black border border-transparent rounded-none  font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                    >
                        Variants btn
                    </motion.button>
                </div>

                <hr />
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

                <hr />
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

                <hr />
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
            </div>
        </SiteLayout>
    );
}
