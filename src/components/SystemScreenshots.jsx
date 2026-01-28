import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importing images directly to ensure they are bundled
import img1 from '../assets/carrossel/Captura de tela 2026-01-27 204520.png';
import img2 from '../assets/carrossel/Captura de tela 2026-01-27 204532.png';
import img3 from '../assets/carrossel/Captura de tela 2026-01-27 204546.png';
import img4 from '../assets/carrossel/Captura de tela 2026-01-27 204559.png';
import img5 from '../assets/carrossel/Captura de tela 2026-01-27 204621.png';
import img6 from '../assets/carrossel/Captura de tela 2026-01-27 204646.png';
import img7 from '../assets/carrossel/Captura de tela 2026-01-27 204702.png';
import img8 from '../assets/carrossel/Captura de tela 2026-01-27 204715.png';
import img9 from '../assets/carrossel/Captura de tela 2026-01-27 204742.png';
import img10 from '../assets/carrossel/Captura de tela 2026-01-27 204800.png';

const screenshots = [
    { src: img1, label: 'Menu Principal Intuitivo' },
    { src: img2, label: 'Busca por Veículo e Montadora' },
    { src: img3, label: 'Esquemas Elétricos Detalhados' },
    { src: img4, label: 'Diagnóstico de Injeção Eletrônica' },
    { src: img5, label: 'Tabela de Torques e Apertos' },
    { src: img6, label: 'Diagramas de Fusíveis' },
    { src: img7, label: 'Correias e Correntes de Comando' },
    { src: img8, label: 'Pinagem de Módulos' },
    { src: img9, label: 'Dados Técnicos de Ar Condicionado' },
    { src: img10, label: 'Manuais de Serviço Completos' }
];

const SystemScreenshots = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth * 0.85; // Scroll 85% of width to show next slide peek

            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.clientWidth);
            setActiveIndex(index);
        }
    };

    return (
        <section id="demonstracao" className="py-20 bg-bg-base px-0 md:px-6 text-center overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-text-main px-6">Veja o Sistema <span className="text-primary">Por Dentro</span></h2>
                <p className="text-text-muted mb-12 max-w-2xl mx-auto px-6">
                    Navegue pelas telas reais do sistema. Simples, direto e organizado.
                </p>

                <div className="relative group">
                    {/* Scroll Container */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-8 px-6 md:px-0 scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {screenshots.map((item, idx) => (
                            <div
                                key={idx}
                                className="snap-center shrink-0 w-[85vw] md:w-[800px] relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white"
                            >
                                <img
                                    src={item.src}
                                    alt={`Tela: ${item.label}`}
                                    loading="lazy"
                                    className="w-full h-auto object-cover block"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-sm text-white py-3 px-4 text-sm font-medium">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons (Desktop) */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg z-10 hidden md:flex transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50"
                        disabled={activeIndex === 0}
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg z-10 hidden md:flex transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {screenshots.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    if (scrollRef.current) {
                                        const width = scrollRef.current.clientWidth;
                                        scrollRef.current.scrollTo({ left: width * idx, behavior: 'smooth' });
                                    }
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-12 px-6">
                    <button
                        onClick={() => document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full sm:w-auto px-10 py-3 bg-primary hover:bg-secondary text-white font-bold rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        Quero essa praticidade
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SystemScreenshots;
