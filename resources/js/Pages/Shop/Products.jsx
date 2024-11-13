import React from "react";
import SiteLayout from "@/Layouts/SiteLayout";

export default function Store({products, userFavorites}) {
    const bg = "./images/candel-no-bg.png";

    return (
        <SiteLayout>
            <div className="container">
                <div>SHOP</div>
                <div className="flex w-full">
                    <div className="bg-red-200 w-1/4">side bar</div>
                    <div className="w-3/4">
                        <div className="flex items-center justify-center">
                            <div className="container mx-auto px-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                                {products.map((product) => (         
                                    <div key={product.id} 
                                    className="bg-transparent rounded-lg relative">

                        <button onClick={() => toggleFavorite(product.id)}>
                            {userFavorites.includes(product.id) ? "💖" : "🤍"}
                        </button>



                                        <a
                                            href=""
                                            class="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="w-6 h-6"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                                />
                                            </svg>
                                        </a>

                                        <img
                                            src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt="Placeholder Image"
                                            className="w-full h-48 rounded-md object-cover"
                                        />
                                        <div className="px-1 py-4">
                                            <div className="flex items-center justify-between mb-3">
                                                <h5 className="block text-xl text-blue-gray-900">
                                                {product.name}
                                                </h5>
                                                <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="-mt-0.5 h-5 w-5 text-yellow-700"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clip-rule="evenodd"
                                                        ></path>
                                                    </svg>
                                                    5.0
                                                </p>
                                            </div>

                                            <p className="text-gray-700 text-base">
                                                <span class="text-xl font-bold tracking-tight text-gray-900">
                                                €{product.price}
                                                </span>
                                            </p>
                                        </div>
                                        <div class="p-6 pt-3">
                                            <button
                                                class="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                type="button"
                                            >
                                                Add to card
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SiteLayout>
    );
}
