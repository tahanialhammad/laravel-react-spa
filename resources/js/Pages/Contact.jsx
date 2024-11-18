import SiteLayout from "@/Layouts/SiteLayout";
import { Link, Head } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact({ auth, ...props }) {
    return (
        <SiteLayout user={auth.user}>
            <Head title="Contact" />
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
                        y: "-100vh",
                    }}
                    className="bg-yellow-300 relative sm:flex sm:justify-center sm:items-center min-h-screen"
                >
                    <h1>Contact {props.name} page</h1>
                </motion.div>
            </AnimatePresence>
        </SiteLayout>
    );
}
