import SiteLayout from "@/Layouts/SiteLayout";
import HeroSection from "./partials/HeroSection";
import Skills from "./partials/Skills";
import FramerMotion from "@/Pages/FramerMotion/FramerMotion";
import Features from "./partials/Features";
import Categories from "./partials/Categories";
import GirlsProducts from "./partials/GirlsProducts";

export default function Welcome({ auth, products, initialTime }) {
    return (
        <SiteLayout user={auth.user}>
            <HeroSection />
            <GirlsProducts products={products} />
            <Categories initialTime={initialTime} />

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
