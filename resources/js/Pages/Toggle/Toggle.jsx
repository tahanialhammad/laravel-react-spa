import SiteLayout from "@/Layouts/SiteLayout";
import React from "react";
import ToggleButton from "./partials/ToggleButton";
import AnimatedHamburgerButton from "./partials/AnimatedHamburgerButton ";
import AnimatedNav from "./partials/AnimatedNav";

export default function Toggle() {
    return (
        <SiteLayout>
            <div>
                <h1>Toggles</h1>
                <ToggleButton></ToggleButton>
                <hr />
                <AnimatedHamburgerButton />
                <hr />
                <AnimatedNav />
            </div>
        </SiteLayout>
    );
}
