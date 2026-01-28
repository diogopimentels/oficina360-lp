import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
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
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2 border-b border-gray-200' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={logo} alt="Oficina 360" className="h-10 md:h-12 w-auto object-contain" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <button onClick={() => scrollToSection('sistemas')} className="text-sm font-medium text-text-muted hover:text-primary transition-colors">Sistemas</button>
                    <button onClick={() => scrollToSection('beneficios')} className="text-sm font-medium text-text-muted hover:text-primary transition-colors">Vantagens</button>
                    <button onClick={() => scrollToSection('demonstracao')} className="text-sm font-medium text-text-muted hover:text-primary transition-colors">Demonstração</button>
                    <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-text-muted hover:text-primary transition-colors">FAQ</button>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button
                        onClick={() => scrollToSection('comprar')}
                        className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-bold text-sm transition-all shadow-md hover:shadow-lg uppercase tracking-wide"
                    >
                        Comprar Agora
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-text-main">
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 border-t border-gray-100 md:hidden">
                    <button onClick={() => scrollToSection('sistemas')} className="text-left text-lg font-medium text-text-main hover:text-primary">Sistemas</button>
                    <button onClick={() => scrollToSection('beneficios')} className="text-left text-lg font-medium text-text-main hover:text-primary">Vantagens</button>
                    <button onClick={() => scrollToSection('demonstracao')} className="text-left text-lg font-medium text-text-main hover:text-primary">Demonstração</button>
                    <button onClick={() => scrollToSection('faq')} className="text-left text-lg font-medium text-text-main hover:text-primary">FAQ</button>
                    <button
                        onClick={() => scrollToSection('comprar')}
                        className="mt-4 w-full bg-primary text-white py-4 rounded-lg font-bold text-base shadow-md uppercase tracking-wide"
                    >
                        Quero Comprar
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
