import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 text-white py-16 px-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand Column */}
                <div className="col-span-1 md:col-span-2 space-y-4">
                    <img src={logo} alt="Oficina 360" className="h-10 w-auto object-contain brightness-0 invert opacity-90" />
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                        O sistema definitivo para oficinas mecânicas. Informação técnica, esquemas elétricos e manuais de serviço em um só lugar.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">Navegação</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><button onClick={() => scrollToSection('sistemas')} className="hover:text-primary transition-colors">Sistemas Inclusos</button></li>
                        <li><button onClick={() => scrollToSection('beneficios')} className="hover:text-primary transition-colors">Vantagens</button></li>
                        <li><button onClick={() => scrollToSection('demonstracao')} className="hover:text-primary transition-colors">Demonstração</button></li>
                        <li><button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">Perguntas Frequentes</button></li>
                    </ul>
                </div>

                {/* Contact/Action */}
                <div className="space-y-4">
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider">Contato</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <a href="https://wa.link/6op4t8" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                Falar no WhatsApp
                            </a>
                        </li>
                        <li className="pt-2">
                            <a
                                href="#comprar"
                                onClick={(e) => { e.preventDefault(); scrollToSection('comprar'); }}
                                className="inline-block px-6 py-2 bg-primary hover:bg-secondary text-white font-bold rounded-md transition-all text-xs uppercase tracking-wide"
                            >
                                Comprar Agora
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} Oficina 360. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
