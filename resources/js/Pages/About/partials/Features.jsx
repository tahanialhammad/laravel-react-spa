import React from "react";

import Lottie from "lottie-react";
import laptopAnimation from "../../../../../public/lottiefiles/laptop.json";


export default function Features() {
    return (
        <div className="flex mb-10">
            <div className="w-1/3">
                <Lottie className="h-48" animationData={laptopAnimation} />
            </div>
            <div className="w-2/3">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Terwijl Je De Wereld Verkent.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Ik probeer gelijke tred te houden met de ontwikkeling in het
                    bouwen en ontwerpen van websites die gemakkelijk te beheren
                    en te gebruiken zijn.
                    <br />
                    Responsive website, Met een gratis tutorial dag, zodat je je
                    website goed kunt beheren.
                    <br />
                    Prijzen zijn afhankelijk van de hoeveelheid en het soort
                    website
                </p>
            </div>
        </div>
    );
}
