import { motion } from "framer-motion";

export default function RotatingImage({ className }) {
    return (
        <motion.img
            src="./images/skills.png"
            alt="Rotating Image"
            className={`w-32 h-32 ` + className}
            animate={{
                rotate: 360,
                transition: { duration: 50, loop: Infinity },
            }}
        />
    );
}
