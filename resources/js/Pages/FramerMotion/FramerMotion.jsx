import SiteLayout from "@/Layouts/SiteLayout";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedNav from "./partials/AnimatedNav";
import AnimatedButton1 from "./partials/AnimatedButton1";
import AnimatedButton2 from "./partials/AnimatedButton2";
import AnimatedExit from "./partials/AnimatedExit";
import DelayType from "./partials/DelayType";
import HoverWhileFocus from "./partials/HoverWhileFocus";
import VariantsButton from "./partials/VariantsButton";
import KeyframesAndRepeat from "./partials/KeyframesAndRepeat";
import RepeatAnimated from "./partials/RepeatAnimated";
import AnimatedText from "./partials/AnimatedText";

export default function FramerMotion() {
    return (
        <SiteLayout>
            <div className="relative isolate px-6 pt-24 lg:px-8">
                <AnimatedNav />
                {/* https://www.framer.com/motion/introduction/ */}
                <h1> Framer Motion</h1>
                <hr />
                <AnimatedButton1 />
                <hr />
                <AnimatedButton2 />
                <hr />
                <AnimatedExit />
                <hr />
                <DelayType />
                <hr />
                <HoverWhileFocus />
                <hr />
                <VariantsButton />

                <hr />
                <KeyframesAndRepeat />
                <hr />
                <RepeatAnimated />

                <hr />
                <AnimatedText />
            </div>
        </SiteLayout>
    );
}
