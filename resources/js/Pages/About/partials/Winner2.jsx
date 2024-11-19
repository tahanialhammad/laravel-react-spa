import RotatingImage from "@/Components/RotatingImage";
import React from "react";

export default function Winner2() {
    return (
        <div className="relative">
            <RotatingImage className="w-96 h-96 absolute top-0 -right-32" />
            <img
                src="./images/winner.png"
                alt=""
                className="w-64 h-64 absolute top-20 -right-10"
            />
        </div>
    );
}
