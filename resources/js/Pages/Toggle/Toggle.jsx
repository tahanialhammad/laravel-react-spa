import SiteLayout from "@/Layouts/SiteLayout";
import React from "react";
import ToggleButton from "./partials/ToggleButton";
import AnimatedHamburgerButton from "./partials/AnimatedHamburgerButton ";
import AnimatedNav from "./partials/AnimatedNav";
import ShowHide from "./partials/ShowHide";
import UseModal from "./partials/UseModal";
import UseDropdown from "./partials/UseDropdown";
import HoverDropDowen from "@/Components/HoverDropDowen";
import AnimatedHoverDropDowen from "@/Components/AnimatedHoverDropDowen";

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
                <hr className="mt-8" />
                <ShowHide />
                <hr />
                <UseModal />
                <hr />
                <UseDropdown />
                <hr />
                {/* <HoverDropDowen trigger={<div>This is the btn</div>}>
                    {{
                        content: (
                            <div>
                                <p>This is the content of the main section</p>
                                <p>More content here...</p>
                            </div>
                        ),
                    }}
                </HoverDropDowen> */}

                <h1 className="font-bold text-3xl">useContext</h1>
                <HoverDropDowen>
                    <HoverDropDowen.Trigger className="bg-green-200">
                        Trigger text
                    </HoverDropDowen.Trigger>
                    <HoverDropDowen.Content className="bg-red-400">
                        Content text
                    </HoverDropDowen.Content>
                </HoverDropDowen>
                <hr className="mt-8" />

                <AnimatedHoverDropDowen>
                    <AnimatedHoverDropDowen.Trigger className="bg-green-200">
                        Trigger text 22
                    </AnimatedHoverDropDowen.Trigger>
                    <AnimatedHoverDropDowen.Content className="bg-red-400">
                        Content text AnimatedHoverDropDowen
                    </AnimatedHoverDropDowen.Content>
                </AnimatedHoverDropDowen>
            </div>
        </SiteLayout>
    );
}
