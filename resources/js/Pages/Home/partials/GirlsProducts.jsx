import SecondaryButton from "@/Components/SecondaryButton";
import React from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export default function GirlsProducts({ products }) {
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
                    <h1 className="text-3xl font-bold leading-tight capitalize">
                        girl's fashion
                    </h1>

                    <div className="overflow-x-auto scroll-pl-6 snap-x flex space-x-6 p-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="w-60 snap-start flex-shrink-0 bg-white relative border-2 p-4 rounded-3xl"
                            >
                                <div className="!absolute left-4 right-4  ">
                                    <span className="bg-red-400 px-3 py-1 rounded-full text-white">
                                        sale!{" "}
                                    </span>
                                </div>
                                <button
                                    class="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            class="w-6 h-6"
                                        >
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                                        </svg>
                                    </span>
                                </button>

                                <div className="mt-4">
                                    <div class="flex flex-col items-center justify-between mb-3">
                                        <img
                                            src="https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/Group-10147-1-637x847.jpg"
                                            alt=""
                                        />
                                        <div className="flex justify-between align-middle w-full">
                                            <div>
                                                <h1 className="text-lg font-bold">
                                                    {product.name}
                                                </h1>
                                                <p>{product.price}</p>
                                            </div>
                                            <SecondaryButton>
                                                <ShoppingBagOutlinedIcon />
                                            </SecondaryButton>
                                        </div>
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
