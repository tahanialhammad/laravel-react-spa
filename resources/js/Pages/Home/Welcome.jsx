import SiteLayout from "@/Layouts/SiteLayout";
import HeroSection from "./partials/HeroSection";
import Skills from "./partials/Skills";
import FramerMotion from "@/Pages/FramerMotion/FramerMotion";
import Features from "./partials/Features";
import Categories from "./partials/Categories";

export default function Welcome({ auth, products }) {
    return (
        <SiteLayout user={auth.user}>
            <div className="flex w-full gap-8">
                {/* <div className="w-1/3 bg-lime-200 rounded-3xl p-4">
    <img src="https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/Cute-Baby-1194x813-1.png" alt="" />
</div> */}

                <div className="w-2/5 bg-lime-200 rounded-3xl p-4 relative">
                    <img
                        src="https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/Cute-Baby-1194x813-1.png"
                        alt=""
                        className="rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lime-200 via-transparent"></div>
                </div>

                <div className="w-3/5 flex flex-col gap-8">
                    <div className="rounded-3xl">
                        <img
                            className="rounded-3xl"
                            src="https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/Mask-Group-10.jpg"
                            alt=""
                        />
                    </div>

                    <div className="">
                        <img
                            className="rounded-3xl"
                            src="https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/Mask_Group_9.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <div className="flex w-full gap-8 my-10">
                <div
                    className="w-1/4 bg-cover bg-center text-black flex flex-col items-center justify-centertt rounded-3xl p-4"
                    style={{
                        backgroundImage: `
                            linear-gradient(to bottom, pink, pink), 
                            url('https://demo.phlox.pro/shop-baby/wp-content/uploads/sites/319/2021/06/Layer-1xfg.png')
                        `,
                        backgroundBlendMode: "overlay",
                    }}
                >
                    <h1 className="text-3xl font-bold leading-tight capitalize">
                        Baby Girl's
                    </h1>
                    <h3 className="text-3xl">Collection</h3>
                </div>

                <div className="w-3/4">
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
                                <div className="!absolute left-4 right-4">
                                    sale
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
                                        <div>title</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="w-3/5 bg-purple-300 rounded-3xl relative h-44">
                    <img
                        className=" absolute -top-12 left-0 h-56"
                        src="https://demo.phlox.pro/shop-cloth-2/wp-content/uploads/sites/342/2022/11/Background-copy25.png"
                        alt=""
                    />

                    <h1>Top New Arrivals Fashion Sunglasses</h1>
                </div>
            </div>
            {/* <HeroSection></HeroSection>
            <Features /> */}
            {/* <Skills></Skills> */}
            {/* <Categories /> */}
        </SiteLayout>
    );
}
