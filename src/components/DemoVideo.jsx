import React from 'react';
import { Play } from 'lucide-react';

const DemoVideo = () => {
    return (
        <section id="demonstracao" className="py-20 bg-bg-base px-6 text-center">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-text-main">Veja na <span className="text-primary">Prática</span></h2>
                <p className="text-text-muted mb-12 max-w-2xl mx-auto">
                    Confira como é simples navegar entre os sistemas e encontrar a informação que você precisa em segundos.
                </p>

                {/* Video Placeholder */}
                <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center pl-2 shadow-xl transform group-hover:scale-110 transition-transform">
                            <Play size={40} className="text-primary ml-1" fill="currentColor" />
                        </div>
                    </div>
                    {/* Image Thumbnail Placeholder */}
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop" alt="Demo Video Thumbnail" className="w-full h-full object-cover opacity-80" />
                </div>

                <div className="mt-12">
                    <button
                        onClick={() => document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-3 bg-primary hover:bg-secondary text-white font-bold rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                        Quero essa praticidade
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DemoVideo;
