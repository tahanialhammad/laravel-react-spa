import SiteLayout from "@/Layouts/SiteLayout";
import React from "react";
import ToggleButton from "./partials/ToggleButton";
import AnimatedHamburgerButton from "./partials/AnimatedHamburgerButton ";

export default function Toggle() {
    return (
        <SiteLayout>
            <div>
                <h1>Toggles</h1>
                <ToggleButton></ToggleButton>
                <hr />
                <AnimatedHamburgerButton />
            </div>
        </SiteLayout>
    );
}
