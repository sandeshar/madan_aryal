"use client"
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-6xl px-4 sm:px-6">
            <div className="glass flex items-center justify-between px-4 py-2 rounded-full border-gray-700 shadow-sm">
                <Link href="#" className="font-bold text-lg">Madan<span className="text-orange-400">.</span></Link>

                <div className="hidden md:flex items-center gap-6">
                    <a href="#about" className="hover:text-orange-400 transition">About</a>
                    <a href="#projects" className="hover:text-orange-400 transition">Projects</a>
                    <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
                    <a href="#contact" className="px-3 py-2 rounded-full text-white cta-gradient font-semibold">Hire Me</a>
                </div>

                <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-gray-800 transition">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-200">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="mt-3 glass p-4 rounded-xl border border-gray-700 backdrop-blur-md">
                    <a href="#about" className="block py-2" onClick={() => setOpen(false)}>About</a>
                    <a href="#projects" className="block py-2" onClick={() => setOpen(false)}>Projects</a>
                    <a href="#contact" className="block py-2" onClick={() => setOpen(false)}>Contact</a>
                    <a href="#contact" className="block py-2 font-semibold text-white cta-gradient text-center rounded">Hire Me</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

