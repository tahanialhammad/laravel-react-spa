import { motion } from "framer-motion";
import { fadeIn } from "@/Variants";
import { Link } from "@inertiajs/react";

export default function Header() {
    return (
        <motion.nav
            variants={fadeIn("down")}
            initial="initial"
            animate="animate"
            className="headerttt h-[10vh] flex items-center px-10 py-4 md:px-20 text-lg justify-between"
        >
            <span className="header-logottt font-black md:text-2xl">
                <Link href="/">CLEAN JUICE </Link>
            </span>
            <ul className=" justify-center flex-1 hidden space-x-5 md:flex">
                <li>SHOP</li>
                <li>STORY</li>
                <li>MENU</li>
                <li>CONTACT</li>
                <li>ALL JUICES</li>
            </ul>

            <span className="header-accounttt hidden font-medium md:block">
                My Account
            </span>
            <span className="header-usertt block md:hidden">🤕</span>
        </motion.nav>
    );
}
