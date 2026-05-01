import {Menu, X} from 'lucide-react';
import {useState} from "react";

export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuIsOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
            {/*menu on large screen*/}
            <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:16 md:20">
                    <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => scrollToSection('hero')}>
                        <div>
                            <img
                                // src="/lightbulb.png"
                                alt="DevPro"
                                className="w-6 h-6 sm:w-12 sm:h-8"
                            />
                        </div>
                        <span>
                            <span className="text-lg sm:text-xl md:text-2xl font-medium"></span>
                            <span className="text-blue-300">Dev</span>
                            <span className="text-white">Pro</span>
                        </span>
                    </div>
                    {/*Nav links*/}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="hover:text-white text-shadow-2xs transition-colors cursor-pointer"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('networking')}
                            className="hover:text-white text-shadow-2xs transition-colors cursor-pointer"
                        >
                            Networking Concepts
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="hover:text-white text-shadow-2xs transition-colors cursor-pointer"
                        >
                            About Me
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="hover:text-white text-shadow-2xs transition-colors cursor-pointer"
                        >
                            Contact
                        </button>
                        <a
                            href="https://github.com/yourusername/yourusername.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white text-shadow-2xs transition-colors"
                        >
                            GitHub
                        </a>
                    </div>

                    <button
                        className="md:hidden p-2 cursor-pointer hover:text-white"
                        onClick={()=> setMobileMenuIsOpen((prev)=> !prev)}>
                        {mobileMenuIsOpen ? (
                            <X className="w-5 h-5 sm:w-6 sm:h-6"/>
                        ) : (
                        <Menu className="w-5 h-5 sm:w-6 sm:h-6"/>
                        )}
                    </button>
                </div>
            </div>
            {/*menu on mobile */}
            {mobileMenuIsOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-lg boarder-t border-slate-800 slide-in-from-top animate-in duration-350">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="block w-full text-left hover:text-white text-shadow-2xs transition-colors"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('networking')}
                            className="block w-full text-left hover:text-white text-shadow-2xs transition-colors"
                        >
                            Networking Concepts
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="block w-full text-left hover:text-white text-shadow-2xs transition-colors"
                        >
                            About Me
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="block w-full text-left hover:text-white text-shadow-2xs transition-colors"
                        >
                            Contact
                        </button>

                        <a
                            href="https://github.com/yourusername/yourusername.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:text-white text-shadow-2xs transition-colors"
                            onClick={() => setMobileMenuIsOpen(false)}
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
