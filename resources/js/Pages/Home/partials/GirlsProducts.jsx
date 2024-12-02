import SecondaryButton from "@/Components/SecondaryButton";
import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AddToFavorites from "@/Pages/Shop/AddToFavorites";
import { Link } from "@inertiajs/react";

export default function GirlsProducts({ auth, products, userFavorites }) {
    return (
        <div>
            <div className="flex w-full gap-8 mb-10 mt-20">
                <div
                    className="w-1/4 bg-auto bg-bottom bg-no-repeat text-black flex flex-col items-center justify-centertt rounded-3xl p-4"
                    style={{
                        backgroundImage: `
                            url('https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/Layer-1xfg.png')
                        `,
                        backgroundColor: "pink",
                        backgroundPositionY: "100px",
                    }}
                >
                    <div className="text-center">
                        <h3 className="text-red-600 font-bold text-lg">
                            50% off
                        </h3>
                        <h1 className="text-3xl font-bold leading-tight capitalize">
                            Baby Girl's
                        </h1>
                        <h3 className="text-3xl">Collection</h3>
                    </div>
                </div>

                <div className="w-3/4 -mt-10">
                    <h3 className="text-lg capitalize">
                        Over 150 Brands Available
                    </h3>
                    <h1 className="text-3xl font-black leading-tight capitalize">
                        girl's fashion
                    </h1>

                    <div className="overflow-x-auto scroll-pl-6 snap-x flex space-x-6 p-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="w-60 snap-start flex-shrink-0 bg-white relative border-2 p-4 rounded-3xl"
                            >
                                <div className="!absolute left-4 top-4">
                                    <span
                                        className={`bg-red-400 px-3 py-1 rounded-full text-white ${
                                            product.discounted_price
                                                ? ""
                                                : "hidden"
                                        }`}
                                    >
                                        sale!
                                    </span>
                                </div>

                                <div class="!absolute top-4 right-4">
                                    <AddToFavorites
                                        product={product}
                                        userFavorites={userFavorites}
                                    />
                                </div>

                                <div className="mt-4">
                                    <div class="flex flex-col items-center justify-between mb-3">
                                        <img
                                            src="https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/Group-10147-1-637x847.jpg"
                                            alt=""
                                        />
                                        <div className="flex justify-between align-middle w-full">
                                            <div>
                                            <Link
                                                        href={route(
                                                            "products.show",
                                                            product
                                                        )}
                                                        className="block text-xl text-blue-gray-900 font-bold"
                                                    >
                                                        {product.name}
                                                    </Link>
                                                {product.discounted_price ? (
                                                    <p>
                                                        <span>
                                                            €
                                                            {
                                                                product.discounted_price
                                                            }
                                                        </span>
                                                        <span className="line-through text-gray-400 ms-1">
                                                            €{product.price}
                                                        </span>
                                                    </p>
                                                ) : (
                                                    <p>€{product.price}</p>
                                                )}
                                            </div>
                                            <SecondaryButton>
                                                <ShoppingBagOutlinedIcon />
                                            </SecondaryButton>
                                        </div>

                                        <p className="flex items-center gap-1.5 text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
