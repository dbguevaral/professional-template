"use client"; // Required for interactivity and hooks

import { useState } from "react";
import Link from "next/link";
import { Inter } from 'next/font/google';
import { Star, User, Menu, X } from "lucide-react"; // Added X icon for closing

const inter = Inter({ subsets: ['latin'] });

export default function Navbar() {
    // state to track if the mobile menu is open
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white border-b relative">
            <nav className={`flex flex-row items-center justify-between w-full px-8 py-4 ${inter.className}`}>
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2 z-20">
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">ProjectName</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex flex-row items-center gap-8 ml-auto mr-10">
                    <Link href="/for-parents" className="hover:text-blue-600 transition-colors">For Parents</Link>
                    <Link href="/for-professionals" className="hover:text-blue-600 transition-colors">For Professionals</Link>
                    <Link href="/how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
                    <Link href="/about-us" className="hover:text-blue-600 transition-colors">About Us</Link>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row items-center gap-4 z-20">
                    <Link href="/login" className="hidden lg:block">
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-all">
                            <User className="w-4 h-4" />
                            Login
                        </button>
                    </Link>
                    <Link href="/signup" className="hidden lg:block">
                        <button className="px-4 py-2 bg-black text-white border border-black rounded-md hover:bg-gray-800 transition-all">
                            Sign Up
                        </button>
                    </Link>
                    
                    {/* Mobile Menu Toggle Button: Now visible up to 'lg' threshold */}
                    <button 
                        className="lg:hidden p-2 border border-gray-600 rounded-md"
                        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggles the state
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full h-[calc(100vh-100%)] bg-white border-b shadow-lg lg:hidden z-10 flex flex-col p-6 gap-4 animate-in fade-in slide-in-from-top-2">
                    <Link href="/for-parents" onClick={() => setIsMenuOpen(false)}>For Parents</Link>
                    <Link href="/for-professionals" onClick={() => setIsMenuOpen(false)}>For Professionals</Link>
                    <Link href="/how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
                    <Link href="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    <hr className="my-2" />
                    <Link href="/login" className="lg:hidden">Login</Link>
                    <Link href="/signup" className="lg:hidden text-blue-600 font-bold">Sign Up</Link>
                </div>
            )}
        </header>
    );
}