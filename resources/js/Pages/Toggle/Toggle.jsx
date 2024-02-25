import SiteLayout from "@/Layouts/SiteLayout";
import React from "react";
import ToggleButton from "./partials/ToggleButton";
import AnimatedHamburgerButton from "./partials/AnimatedHamburgerButton ";
import AnimatedNav from "./partials/AnimatedNav";
import ShowHide from "./partials/ShowHide";
import UseModal from "./partials/UseModal";

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
                <hr className="mt-8"/>
                <ShowHide />
                <hr />
                <UseModal />
            </div>
        </SiteLayout>
    );
}
