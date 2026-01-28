import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import simploLogo from '../assets/simplo.png';
import dicatecLogo from '../assets/dicatec.png';
import mecanicaLogo from '../assets/mecanica2000.png';
import doutorieLogo from '../assets/doutorie.png';

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

                {/* Right Visual - Animated Tech Interface */}
                <div className="relative flex justify-center md:justify-end items-center mb-10 md:mb-0">
                    <div className="relative w-full max-w-sm md:max-w-md aspect-square">
                        {/* Abstract Glow Background */}
                        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />

                        {/* Main Floating Card - Clean White Theme */}
                        <div className="absolute inset-0 z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden flex flex-col animate-float">
                            {/* Window Header */}
                            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2 bg-gray-50">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="text-[10px] text-gray-400 font-mono ml-2 uppercase tracking-wide">Sistema Oficina 360</div>
                            </div>

                            {/* Window Body - Simulated Interface */}
                            <div className="p-6 flex-1 flex flex-col gap-4 relative bg-slate-50/50">
                                {/* Search Bar Simulation */}
                                <div className="bg-white rounded-lg p-3 border border-gray-100 flex items-center gap-3 shadow-sm">
                                    <div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                                    <div className="h-2 w-32 bg-gray-200 rounded animate-pulse" />
                                </div>

                                {/* Results Grid Simulation */}
                                <div className="grid grid-cols-2 gap-3 mt-2">
                                    {[dicatecLogo, simploLogo, mecanicaLogo, doutorieLogo].map((logo, i) => (
                                        <div key={i} className="bg-white rounded-lg p-2 border border-gray-100 flex flex-col gap-2 hover:border-primary/20 transition-colors shadow-sm items-center justify-center h-32">
                                            <img src={logo} alt="System Logo" className="h-full w-full object-contain" />
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
