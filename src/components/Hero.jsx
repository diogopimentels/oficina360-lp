import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import bannerImage from '../assets/bannerheader.png';

const Hero = () => {
    return (
        <section className="relative pt-24 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6 bg-bg-base">
            {/* Subtle Grid Background - Light Industrial feel */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Content */}
                <div className="text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-border text-text-muted text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Versão 2026 Disponível
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] mb-6 tracking-tight text-text-main uppercase">
                        Todos os manuais da sua oficina em um <span className="text-primary">único sistema</span>
                    </h1>

                    <p className="text-text-muted text-lg md:text-xl mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
                        Encontre esquemas elétricos, informações técnicas e dados de diagnóstico em segundos — sem precisar abrir vários programas ou perder tempo procurando.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <button
                            onClick={() => document.getElementById('demonstracao')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-secondary text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                        >
                            Quero ver o sistema funcionando
                        </button>
                    </div>

                    <div className="mt-8 flex items-center justify-center md:justify-start gap-6 text-sm text-text-muted font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-primary" />
                            <span>Sem Mensalidades</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-primary" />
                            <span>Instalação Grátis</span>
                        </div>
                    </div>
                </div>

                {/* Right Visual - Banner Image with Backlight */}
                <div className="relative flex justify-center md:justify-end items-center">
                    {/* Elegant Background Decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-2xl -z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-secondary/5 rounded-full blur-xl -z-10" />

                    <img
                        src={bannerImage}
                        alt="Interface do Sistema Oficina 360"
                        className="w-full max-w-sm object-contain drop-shadow-xl z-10 rounded-lg"
                    />
                </div>
            </div>
        </section >
    );
};

export default Hero;
