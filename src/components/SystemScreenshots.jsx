import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importing images directly to ensure they are bundled
import img1 from '../assets/carrossel/screenshot-01.png';
import img2 from '../assets/carrossel/screenshot-02.png';
import img3 from '../assets/carrossel/screenshot-03.png';
import img4 from '../assets/carrossel/screenshot-04.png';
import img5 from '../assets/carrossel/screenshot-05.png';
import img6 from '../assets/carrossel/screenshot-06.png';
import img7 from '../assets/carrossel/screenshot-07.png';
import img8 from '../assets/carrossel/screenshot-08.png';
import img9 from '../assets/carrossel/screenshot-09.png';
import img10 from '../assets/carrossel/screenshot-10.png';

const screenshots = [
    { src: img1, label: '1. Selecione o módulo desejado (Simplo, Dicatec, etc)' },
    { src: img2, label: '2. Escolha a Montadora e o Veículo' },
    { src: img3, label: '3. Acesse o Esquema Elétrico exato' },
    { src: img4, label: '4. Consulte valores de teste e sensores' },
    { src: img5, label: '5. Verifique torques de aperto do motor' },
    { src: img6, label: '6. Localize caixas e diagramas de fusíveis' },
    { src: img7, label: '7. Veja o ponto de correias e correntes' },
    { src: img8, label: '8. Confira a pinagem dos módulos (ECU)' },
    { src: img9, label: '9. Acesse dados de Ar Condicionado' },
    { src: img10, label: '10. Tenha manuais de serviço completos' }
];

const SystemScreenshots = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    // Derived state for the modal
    const selectedImage = selectedImageIndex !== null ? screenshots[selectedImageIndex] : null;

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

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
    };

    const navigateLightbox = (direction, e) => {
        e.stopPropagation();
        if (selectedImageIndex === null) return;

        if (direction === 'next') {
            setSelectedImageIndex((prev) => (prev + 1) % screenshots.length);
        } else {
            setSelectedImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
        }
    };

    return (
        <section id="demonstracao" className="py-20 bg-bg-base px-0 md:px-6 text-center overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-text-main px-6">Veja o Sistema <span className="text-primary">Por Dentro</span></h2>
                <p className="text-text-muted mb-12 max-w-2xl mx-auto px-6">
                    Siga o passo a passo e veja como é fácil encontrar a informação que você precisa.
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
                                className="snap-center shrink-0 w-[85vw] md:w-[800px] relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white cursor-pointer transition-transform active:scale-[0.98]"
                                onClick={() => openLightbox(idx)}
                            >
                                <img
                                    src={item.src}
                                    alt={`Tela: ${item.label}`}
                                    loading="lazy"
                                    className="w-full h-auto object-cover block pointer-events-none"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-sm text-white py-3 px-4 text-sm font-medium">
                                    {item.label} <span className="text-[10px] opacity-70 ml-2 md:hidden">(Toque para ampliar)</span>
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

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={closeLightbox}
                >
                    <div className="relative max-w-6xl w-full max-h-[95vh] flex flex-col items-center">
                        {/* Close Button */}
                        <button
                            className="absolute -top-12 right-0 text-white/80 hover:text-white p-2"
                            onClick={closeLightbox}
                        >
                            <span className="sr-only">Fechar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        {/* Nav Prev */}
                        <button
                            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
                            onClick={(e) => navigateLightbox('prev', e)}
                        >
                            <ChevronLeft size={48} />
                        </button>

                        <img
                            src={selectedImage.src}
                            alt={selectedImage.label}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Nav Next */}
                        <button
                            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
                            onClick={(e) => navigateLightbox('next', e)}
                        >
                            <ChevronRight size={48} />
                        </button>

                        <div className="mt-6 text-white font-medium text-lg md:text-xl text-center px-4" onClick={(e) => e.stopPropagation()}>
                            {selectedImage.label}
                            <div className="text-sm text-gray-400 font-normal mt-1">
                                {selectedImageIndex + 1} de {screenshots.length}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SystemScreenshots;
