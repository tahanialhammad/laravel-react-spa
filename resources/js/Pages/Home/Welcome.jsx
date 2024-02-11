import SiteLayout from "@/Layouts/SiteLayout";
import HeroSection from "./partials/HeroSection";
import Skills from "./partials/Skills";
import FramerMotion from "@/Pages/FramerMotion/FramerMotion";

export default function Welcome() {
    return (
        <SiteLayout>
            <HeroSection></HeroSection>
            <Skills></Skills>
        </SiteLayout>
    );
}
