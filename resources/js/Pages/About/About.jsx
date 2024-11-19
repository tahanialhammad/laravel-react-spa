import SiteLayout from "@/Layouts/SiteLayout";
import { Link, Head } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./partials/HeroSection";

export default function About({ auth }) {
    return (
        <SiteLayout user={auth.user}>
            <Head title="About" />
            <HeroSection />
        </SiteLayout>
    );
}
