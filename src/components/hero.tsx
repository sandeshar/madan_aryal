'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-center md:min-h-screen p-10 gap-16 md:gap-32">
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-orange-300 to-transparent"></div> */}
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }} // only triggers once when 20% visible
                className="relative z-10 flex flex-col items-start gap-4 md:w-1/2"
            >
                <p className="text-2xl md:text-3xl font-bold">Hi, I'm</p>
                <h1 className="text-5xl md:text-8xl font-extrabold">Madan Aryal</h1>
                <p className="text-2xl md:text-3xl typewriter mt-3">
                    Graphic <span className="text-orange-500">Designer</span>
                </p>
            </motion.div>

            <motion.div
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="md:w-1/2"
            >
                <div className="rounded-full bg-gray-900 overflow-hidden">
                    <Image src="/madan.png" alt="Madan Aryal" width={700} height={700} className="relative z-10" />
                </div>
            </motion.div>

        </div>
    );
};

export default Hero;