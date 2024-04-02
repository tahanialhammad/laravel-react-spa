import React from "react";
import { motion } from "framer-motion";

export default function Categories() {
    const surroundingImages = [
        "https://www.tahanina.nl/nawara/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-13-at-12.39.37-PM.jpeg",
        "https://www.tahanina.nl/nawara/wp-content/uploads/2019/01/rezen-2.png",
    ];

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-l font-thin text-red-500">Diensten</h1>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Verwachte kenmerken
            </h3>
            <div className="">
                {surroundingImages.map((image, index) => (
                    <CategoryItem key={index} image={image} />
                ))}
            </div>
        </div>
    );
}

function CategoryItem({ image }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, x: 500 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.8 }}
            className="w-56 h-56 m-4 rounded-lg bg-gray-100 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* <img className="w-56 max-h-56 rounded-lg" src={image} alt="" /> */}
        </motion.div>
    );
}
