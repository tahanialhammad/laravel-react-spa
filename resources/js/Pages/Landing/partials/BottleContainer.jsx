import React from "react";
import { motion } from "framer-motion";
import { bottleWrapper , bottle} from "@/Variants";

export default function BottleContainer() {
    return (
        <motion.div
            variants={bottleWrapper}
            initial="initial"
            animate="animate"
            className="bottleWrapperttt absolute top-0 left-0 grid w-full text-center place-items-center"
        >
            <motion.img
              variants={bottle}
              // initial="initial"
              // animate="animate" becouse we set that in parent
                src="./images/juice.png"
                alt=""
                className="h-[400px] w-[250px] md:h-[550px] md:w-[500px] object-contain"
            />
        </motion.div>
    );
}
