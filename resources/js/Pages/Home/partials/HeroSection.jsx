import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Winner from "./Winner";
import AnimatedText from "@/Components/AnimatedText";
import Winner2 from "./Winner2";

export default function HeroSection() {
    return (
        <section>
            {/* hero section*/}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: 900 }}
                        transition={{
                            duration: 7.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    ></motion.div>
                </div>
                <div className="flex flex-row w-full">
                    <div className="w-2/3 text-justify ">
                        <div className="mx-auto max-w-2xl py-12 lg:py-32">
                            <div className="text-left">
                                <AnimatedText
                                    animationSpeed={0.1}
                                    className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                                >
                                    Hi!, Iam Tahani webdeveloper freelace
                                    special in Laravel, Front-endand with React,
                                    VueJs and Tailwind
                                </AnimatedText>

                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Mijn passie ligt in het creëren van
                                    websites, waarbij ik me specifiek richt op
                                    de front-end ontwikkeling van
                                    Laravel-applicaties en en het maken van
                                    WordPress websites voor MKB. Bent u op zoek
                                    naar een betrouwbare en getalenteerde
                                    front-end developer voor uw onderneming?
                                    Zoek niet verder. Met mijn diverse ervaring
                                    en up-to-date kennis van de nieuwste
                                    technologieën, ben ik in staat om voor uw
                                    bedrijf een hoogwaardige en
                                    gebruiksvriendelijke front-end te
                                    realiseren. Neem vandaag nog contact met mij
                                    op en ontdek hoe ik uw bedrijf kan
                                    transformeren!
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <a
                                        href="#"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Get started
                                    </a>
                                    <a
                                        href="#"
                                        className="text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        Learn more{" "}
                                        <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 overflow-hidden">
                        {/* <Winner /> */}
                        <Winner2 />
                    </div>
                </div>

                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Tahanina webdevelopment.{" "}
                            <a
                                href="https://www.linkedin.com/in/tahanialhammad/"
                                className="font-semibold text-indigo-600"
                            >
                                <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Tahani Alhammad Webontwikkelaar
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Mijn passie ligt in het creëren van websites,
                            waarbij ik me specifiek richt op de front-end
                            ontwikkeling van Laravel-applicaties en en het maken
                            van WordPress websites voor MKB. Bent u op zoek naar
                            een betrouwbare en getalenteerde front-end developer
                            voor uw onderneming? Zoek niet verder. Met mijn
                            diverse ervaring en up-to-date kennis van de
                            nieuwste technologieën, ben ik in staat om voor uw
                            bedrijf een hoogwaardige en gebruiksvriendelijke
                            front-end te realiseren. Neem vandaag nog contact
                            met mij op en ontdek hoe ik uw bedrijf kan
                            transformeren!
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a>
                            <a
                                href="#"
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
