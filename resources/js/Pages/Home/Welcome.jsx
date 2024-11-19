import SiteLayout from "@/Layouts/SiteLayout";
import HeroSection from "./partials/HeroSection";
import Skills from "./partials/Skills";
import FramerMotion from "@/Pages/FramerMotion/FramerMotion";
import Features from "./partials/Features";
import Categories from "./partials/Categories";

export default function Welcome({ auth }) {
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
                    className="w-1/4 h-32 bg-cover bg-center text-black flex flex-col items-center justify-centertt rounded-3xl p-4"
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
                        {" "}
                        Over 150 Brands Available
                    </h3>
                    <h1 className="text-3xl font-bold leading-tight capitalize">
                        girl's fashion
                    </h1>
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
