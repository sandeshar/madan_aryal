"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-950 text-gray-300 py-8 px-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm md:text-base">
                    &copy; {new Date().getFullYear()} <span className="font-bold text-white">Madan Aryal</span>. All rights reserved.
                </p>

                <p className="text-sm md:text-base">
                    Built by{" "}
                    <Link
                        href="https://www.aryalsandesh.com.np"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500 hover:opacity-80 transition-opacity"
                    >
                        Sandesh Aryal
                    </Link>
                </p>

                <div className="flex gap-5">
                    <Link
                        href="https://facebook.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-600 transition-colors text-xl"
                    >
                        <FaFacebook />
                    </Link>
                    <Link
                        href="https://instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-pink-500 transition-colors text-xl"
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400 transition-colors text-xl"
                    >
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
