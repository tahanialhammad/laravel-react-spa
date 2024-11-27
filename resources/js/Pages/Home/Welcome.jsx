import SiteLayout from "@/Layouts/SiteLayout";
import HeroSection from "./partials/HeroSection";
import Skills from "./partials/Skills";
import FramerMotion from "@/Pages/FramerMotion/FramerMotion";
import Features from "./partials/Features";
import Categories from "./partials/Categories";
import GirlsProducts from "./partials/GirlsProducts";
import PrimaryButton from "@/Components/PrimaryButton";
import Subscribe from "./partials/Subscribe";

export default function Welcome({ auth, products, initialTime }) {
    return (
        <SiteLayout user={auth.user}>
            <HeroSection />
            <GirlsProducts products={products} />
            <Categories initialTime={initialTime} />

            <div className="flex">
                <div className="w-3/5 bg-rose-200 rounded-3xl relative h-60">
                    <img
                        className="absolute -top-12 left-0 h-72"
                        src="./images/pregnant.png"
                        alt=""
                    />
                    <div className="absolute top-1/4 right-10">
                        <h4 className="text-xl text-red-500 uppercase font-bold">
                            50% off
                        </h4>

                        <h1 className="text-3xl capitalize font-black">
                            mother care
                        </h1>
                        <h3 className="text-2xl  capitalize">
                            At Affordable Prices!
                        </h3>
                        <PrimaryButton>Shop Now</PrimaryButton>
                    </div>
                </div>
            </div>
            <Features />
            <Subscribe />
        </SiteLayout>
    );
}
