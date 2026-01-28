import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-white py-12 px-6 border-t border-border text-center md:text-left">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="flex flex-col gap-2 items-center md:items-start">
                    <img src={logo} alt="Oficina 360" className="h-10 w-auto object-contain mb-2" />
                    <p className="text-text-muted text-sm">Tecnologia e informação para o mecânico moderno.</p>
                </div>

                <div className="text-text-muted text-sm">
                    &copy; {new Date().getFullYear()} Oficina 360. Todos os direitos reservados.
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-text-muted hover:text-primary transition-colors font-medium">Instagram</a>
                    <a href="#" className="text-text-muted hover:text-primary transition-colors font-medium">Facebook</a>
                    <a href="#" className="text-text-muted hover:text-primary transition-colors font-medium">YouTube</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
