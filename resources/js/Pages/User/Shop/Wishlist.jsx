import React from "react";
import SiteLayout from "@/Layouts/SiteLayout";
import { Link } from "@mui/material";
import { Head } from "@inertiajs/react";
// import AddToFavorites from "./AddToFavorites";
import SecondaryButton from "@/Components/SecondaryButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Pagination from "@/Components/Pagination";

export default function Wishlist({ auth, products }) {
    return (
        <SiteLayout user={auth.user}>
            <Head title="Shop" />

            <div className="container">
                <h1 className="font-bold text-3xl">My WishList</h1>

                <div className="container mx-auto px-4 ">
                    {products?.data?.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                            {products.data.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-transparent relative border-2 rounded-3xl"
                                >
                                    <div className="!absolute top-4 left-4 ">
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
                                        {/* <AddToFavorites
                                                product={product}
                                                userFavorites={
                                                    userFavorites
                                                }
                                            /> */}
                                    </div>

                                    <img
                                        src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Placeholder Image"
                                        className="w-full h-48 rounded-3xl object-cover"
                                    />

                                    <div className="p-4">
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
                            ))}
                        </div>
                    ) : (
                        <p className="text-center">Your wishlist is empty.</p>
                    )}
                </div>

                {products?.data?.length > 0 && (
                    <Pagination links={products.links} />
                )}
            </div>
        </SiteLayout>
    );
}
