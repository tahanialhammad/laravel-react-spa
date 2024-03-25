import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LandingPage2() {
    const ref = useRef(null);
// https://www.framer.com/motion/use-scroll/
    // useScroll: hook to Tracks the scroll position of the referenced element (ref) and returns scrollYProgress, which represents the current progress of the scroll as a value between 0 and 1.
    const { scrollYProgress } = useScroll({
        target: ref, //hook
        offset: ["start start", "end start"], 
        //how and wheen we start triggring this animation, start in start of viewport ,
        //  It means that scrolling ends when the bottom of the container reaches the top of the viewport.
    });

    // useTransform: Maps the scrollYProgress value to new ranges to create different effects. Here, it's used to adjust the backgroundY and textY values based on the scroll progress.
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); //[map from]  [map to]
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
      <div>
        <div
            ref={ref} //to track y progress of this element
            className="w-full h-screen overflow-hidden relative grid place-items-center"
        >
            <motion.h1
                style={{ y: textY }}
                className="font-bold text-white text-7xl md:text-9xl relative z-10"
            >
                PARALLAX
            </motion.h1>

            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(/images/image-full.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
            />
            <div
                className="absolute inset-0 z-20"
                style={{
                    backgroundImage: `url(/images/image-bottom.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
        </div>


        <div className="w-full bg-[#06141D]">
                <div className="max-w-lg space-y-4 mx-auto py-24 text-neutral-300">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Corporis, vitae optio, itaque, quas aliquam
                        doloremque laboriosam similique ad laudantium adipisci
                        excepturi rem dolorem necessitatibus! Ad necessitatibus
                        quisquam at qui dolorem?
                    </p>
                </div>
            </div>
        </div>
    );
}
