import React from "react";
import TextContainer from "./partials/TextContainer";
import Header from "./partials/Header";
import BottleContainer from "./partials/bottleContainer";
import Leaf from "./partials/Leaf";
import { motion } from "framer-motion";
import { leavesContainer } from "@/Variants";

export default function LandingPage1() {
    return (
        <div>
            <Header />
            <main className="relative h-[90vh]">
                <TextContainer />
                <BottleContainer />
                <motion.div
                     variants={leavesContainer}
                     initial="initial"
                     animate="animate"
                     >
                    <Leaf animationSpeed={1.8} className="leafWrapper-1tt absolute top-52 left-[30%]" imageUrl="./images/leaf01.png" />
                    <Leaf animationSpeed={1.6} className="leafWrapper-2tt  absolute top-1/2 right-72" imageUrl="./images/leaf02.png" />
                    <Leaf animationSpeed={1.5} className="leafWrapper-3tt absolute top-10 right-[40%]" imageUrl="./images/leaf03.png" />
                    <Leaf animationSpeed={1.7} className="leafWrapper-4tt absolute top-[36%] right-1/3" imageUrl="./images/leaf04.png" />
                    <Leaf animationSpeed={1.8} className="leafWrapper-5tt absolute top-[75%] left-1/4" imageUrl="./images/leaf05.png" />

                </motion.div>
            </main>
        </div>
    );
}
