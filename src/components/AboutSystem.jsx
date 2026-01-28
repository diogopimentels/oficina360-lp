import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const AboutSystem = () => {
    return (
        <section className="py-24 bg-white text-center px-6 border-y border-border">
            <div className="max-w-6xl mx-auto">

                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
                    {/* Problem / Context */}
                    <div className="text-left space-y-6">
                        <div className="flex items-center gap-3 text-red-600">
                            <AlertTriangle size={32} strokeWidth={2.5} />
                            <h3 className="text-2xl md:text-3xl font-extrabold text-text-main uppercase tracking-tight">
                                Você já passou por isso na oficina?
                            </h3>
                        </div>

                        <div className="space-y-4 text-lg text-text-muted leading-relaxed">
                            <p>
                                <strong className="text-text-main">Carro parado no elevador</strong>, cliente esperando, e você perdendo tempo procurando esquema elétrico ou informação técnica.
                            </p>
                            <p>
                                Cada minuto perdido vira atraso, estresse e serviço acumulando.
                            </p>
                            <p className="pt-4 font-medium text-text-main">
                                Agora imagine ter tudo organizado em um só lugar, pronto para buscar por veículo e acessar a informação certa rapidamente.
                            </p>
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="text-left bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10" />

                        <h3 className="text-xl md:text-2xl font-black text-text-main mb-4 uppercase text-primary">
                            Um sistema só. <br />
                            <span className="text-text-main">Várias fontes técnicas integradas.</span>
                        </h3>

                        <p className="text-text-muted mb-8 leading-relaxed">
                            Reunimos as melhores bases de informações em uma única interface simples de usar. Você pesquisa uma vez e encontra o que precisa para <strong>Linha Leve, Pesada (Diesel) e Máquinas Agrícolas</strong>.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 font-medium text-text-main">
                                <CheckMark />
                                <span>Busca rápida por veículo</span>
                            </li>
                            <li className="flex items-center gap-3 font-medium text-text-main">
                                <CheckMark />
                                <span>Esquemas elétricos organizados</span>
                            </li>
                            <li className="flex items-center gap-3 font-medium text-text-main">
                                <CheckMark />
                                <span>Dados técnicos centralizados</span>
                            </li>
                            <li className="flex items-center gap-3 font-medium text-text-main">
                                <CheckMark />
                                <span>Funciona direto no seu computador</span>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <button
                                onClick={() => document.getElementById('demonstracao')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-secondary text-white font-bold text-lg rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
                            >
                                Ver como funciona
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CheckMark = () => (
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
    </div>
);

export default AboutSystem;
