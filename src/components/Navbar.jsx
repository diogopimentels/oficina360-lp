import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 
            ${isScrolled
                    ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-lg'
                    : 'bg-gray-900 py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
                {/* Logo - White version */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img
                        src={logo}
                        alt="Oficina 360"
                        className="h-10 md:h-12 w-auto object-contain brightness-0 invert opacity-95 hover:opacity-100 transition-opacity"
                    />
                    <span className="hidden md:block font-bold text-xl text-white tracking-wide ml-2 uppercase">
                        Oficina 360
                    </span>
                </div>

                {/* Mobile Brand Name (Centered) */}
                <span className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-lg text-white tracking-wide whitespace-nowrap uppercase">
                    Oficina 360
                </span>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {['Sistemas', 'Vantagens', 'Demonstração', 'FAQ'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase().replace('ç', 'c').replace('ã', 'a'))}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button
                        onClick={() => scrollToSection('comprar')}
                        className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md hover:shadow-primary/20 uppercase tracking-wide border border-transparent hover:border-white/10"
                    >
                        Comprar Agora
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-900 border-t border-gray-800 shadow-2xl p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2">
                    {['Sistemas', 'Vantagens', 'Demonstração', 'FAQ'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase().replace('ç', 'c').replace('ã', 'a'))}
                            className="text-left text-lg font-medium text-gray-200 hover:text-white border-b border-gray-800 pb-2"
                        >
                            {item}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection('comprar')}
                        className="mt-4 w-full bg-primary text-white py-4 rounded-lg font-bold text-base shadow-lg uppercase tracking-wide"
                    >
                        Quero Comprar
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
