import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
//https://www.hover.dev/components/buttons
export default function AnimatedHamburgerButton() {
    const [active, setActive] = useState(false);
    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <motion.button
                onClick={() => setActive((pv) => !pv)}
                animate={active ? "open" : "closed"}
                className="relative h-20 w-20 rounded-full bg-black/0 transition-colors hover:bg-black/20"
            >
                <motion.span
                    // variants={{
                    //     open: {
                    //         rotate: ["0deg", "0deg", "45deg"],
                    //         top: ["35%", "50%", "50%"],
                    //     },
                    //     closed: {
                    //         rotate: ["45deg", "0deg", "0deg"],
                    //         top: ["50%", "50%", "35%"],
                    //     },
                    // }}
                    variants={VARIANTS.top}
                    className="absolute h-1 w-10 bg-black"
                    style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                />
                <motion.span
                    variants={VARIANTS.middle}
                    className="absolute h-1 w-10 bg-black"
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                    variants={VARIANTS.bottom}
                    className="absolute h-1 w-5 bg-black"
                    style={{
                        x: "-50%",
                        y: "50%",
                        bottom: "35%",
                        left: "calc(50% + 10px)",
                    }}
                />
            </motion.button>
        </MotionConfig>
    );
}


const VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"], // wait time start value to end value
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
      },
    },
  };