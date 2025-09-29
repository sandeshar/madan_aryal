"use client";
import { motion } from "framer-motion";
import { slideLeft, slideRight, btnInteraction } from "@/utils/animations";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="relative w-full py-16 px-6 md:px-20 overflow-hidden">
            <h1 className="text-5xl font-bold text-center mb-16">Contact Me</h1>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left Side - Contact Info */}
                <motion.div {...slideLeft} className="flex flex-col justify-center gap-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Have a project idea, collaboration request, or just want to say hi?
                        Feel free to reach out using the form or my contact details below.
                    </p>

                    <div className="flex flex-col gap-4 mt-4">
                        <p className="flex items-center gap-3">
                            📍 <span>Kathmandu, Nepal</span>
                        </p>
                        <p className="flex items-center gap-3">
                            📧 <a href="mailto:hello@example.com" className="hover:text-orange-400 transition">hello@example.com</a>
                        </p>
                        <p className="flex items-center gap-3">
                            📞 <a href="tel:+9779800000000" className="hover:text-orange-400 transition">+977 9800000000</a>
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-6 mt-6 text-2xl">
                        <a href="https://github.com/" target="_blank" className="hover:text-orange-400 transition">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" className="hover:text-orange-400 transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com/" target="_blank" className="hover:text-orange-400 transition">
                            <FaTwitter />
                        </a>
                        <a href="https://facebook.com/" target="_blank" className="hover:text-orange-400 transition">
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com/" target="_blank" className="hover:text-orange-400 transition">
                            <FaInstagram />
                        </a>
                    </div>
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.form {...slideRight} className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700 flex flex-col gap-6">
                    <div>
                        <label className="block mb-2 text-sm font-semibold">Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-semibold">Email</label>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-semibold">Message</label>
                        <textarea
                            rows={5}
                            placeholder="Your message"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        ></textarea>
                    </div>

                    <motion.button {...btnInteraction} type="submit" className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg font-bold shadow-lg hover:shadow-orange-500/50 transition">
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
