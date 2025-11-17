import HeroSection from "./HeroSection";
import HeroSectionSmall from "./HeroSectionSmall";
const Hero = () => {
    return (
        <>
            <div className="hidden md:block">
                <HeroSection />
            </div>
            <div className="block md:hidden">
                <HeroSectionSmall />
            </div>
        </>
    );
};

export default Hero;