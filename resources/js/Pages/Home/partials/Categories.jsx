import React from "react";
import { motion } from "framer-motion";
import PrimaryButton from "@/Components/PrimaryButton";
import CountdownTimer from "./CountdownTimer";

export default function Categories({ initialTime }) {
    const categories = [
        {
            name: "baby toys",

            image: "https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/Mask-Group-13.png",
        },
        {
            name: "body care",
            image: "https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/favpng_lotion-johnsons-baby-milk-infant-shower-gel.png",
        },
        {
            name: "baby bags",
            image: "https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/Mask-Group-14.png",
        },
        {
            name: "Baby Clothes",
            image: "https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/Group-10149-1.jpg",
        },
    ];

    return (
        <div className="flex flex-row my-6 gap-4">
            <div className="w-1/2 bg-indigo-200 rounded-3xl p-4 capitalize text-center relative">
                <h3 className="text-lg font-bold tracking-tight text-red-500 uppercase mt-4">
                    50% off
                </h3>
                <h1 className="text-3xl font-bold text-gray-900 ">
                    deal of the day
                </h1>
                <h3 className="text-2xl font-bold text-gray-900 ">
                    summer collection
                </h3>
                <CountdownTimer initialTime={initialTime} />
                <PrimaryButton className="my-4">Shop Now</PrimaryButton>
                <img
                    className="absolute left-0 top-2/5"
                    src="https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/parkofideas.com-1.png"
                    alt=""
                />
                <img
                    className=""
                    src="https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/parkofideas.com-1032356503-768x584-1.png"
                    alt=""
                />
            </div>
            <div className="w-1/2">
                <div className="grid grid-cols-2 gap-4 border-2 p-4 rounded-3xl ">
                    {categories.map((item, index) => (
                        <CategoryItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function CategoryItem({ item }) {
    return (
        <div className="flex flex-col items-center">
            <img
                src={item.image}
                style={{ width: "124px", hight: "220px" }}
                className="max-w-full m-auto"
                alt=""
            />
            <div>
                <h3 className="text-2xl font-bold capitalize">{item.name}</h3>
            </div>
        </div>
    );
}
