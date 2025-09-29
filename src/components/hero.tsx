import Image from "next/image";
import Animated from "./Animated";
import { heroLeft, heroRight } from "@/utils/animations";

const Hero = () => {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-center md:min-h-screen p-8 gap-10 md:gap-20 overflow-hidden">
            <Animated {...heroLeft} className="relative z-20 flex flex-col items-start gap-4 md:w-1/2">
                <p className="text-xl md:text-2xl font-semibold text-gray-300">Hi, I&apos;m</p>
                <h1 className="text-4xl md:text-7xl font-extrabold name-gradient leading-tight">Madan Aryal</h1>
                <p className="text-xl md:text-2xl typewriter mt-2 text-gray-300">
                    Graphic <span className="text-orange-400">Designer</span>
                </p>

                <p className="mt-4 text-gray-300 max-w-xl">I craft meaningful visuals  branding, illustrations, and digital assets that connect with audiences and drive results.</p>

                <div className="mt-6 flex items-center gap-4">
                    <a href="#contact" className="btn-cta cta-gradient text-white">Hire me</a>
                    <a href="#projects" className="px-4 py-2 rounded-full border border-gray-700 text-sm hover:bg-gray-800 transition">View work</a>
                </div>
            </Animated>

            <Animated {...heroRight} className="md:w-1/2 relative z-10 flex items-center justify-center">
                <div className="rounded-full bg-gray-900 overflow-hidden hero-image-floating shadow-2xl">
                    <Image src="/madan.png" alt="Madan Aryal" width={600} height={600} className="relative z-10" />
                </div>
            </Animated>

        </div>
    );
};

export default Hero;