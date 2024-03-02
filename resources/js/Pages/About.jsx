import SiteLayout from "@/Layouts/SiteLayout";
import { Link, Head } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";

export default function About({ name }) {
    return (
        <SiteLayout>
            <Head title="About" />
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{
                        x: "-100vw",
                    }}
                    animate={{
                        x: 0,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    exit={{
                        y: "-100vh", //exit and AnimatePresence not woork
                    }}
                    className="bg-green-300 relative sm:flex sm:justify-center sm:items-center min-h-screen"
                >
                    {/* Guset Page Content */}
                    <h1>about {name} page</h1>
                    <img src="./images/undraw_selected.svg" alt="" className="w-64 h-64"
                     style={{
                        x: '100px',
                        y: '100px',
                       
                    }}/>
                    <img src="./images/undraw_selectoption.svg" alt="" className="w-64 h-64"/>
                    <img src="./images/undraw_website.svg" alt="" className="w-64 h-64"/>
                </motion.div>
            </AnimatePresence>
        </SiteLayout>
    );
}
