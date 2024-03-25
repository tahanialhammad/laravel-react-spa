import SiteLayout from "@/Layouts/SiteLayout";
import HeroSection from "./partials/HeroSection";
import Skills from "./partials/Skills";
import FramerMotion from "@/Pages/FramerMotion/FramerMotion";
import Features from "./partials/Features";

export default function Welcome({auth}) {
    return (
        <SiteLayout user={auth.user}>
            <HeroSection></HeroSection>
            <Features />
            <Skills></Skills>
        </SiteLayout>
    );
}
