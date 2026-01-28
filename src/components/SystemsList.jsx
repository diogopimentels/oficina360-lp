import React from 'react';
import simploLogo from '../assets/simplo.png';
import dicatecLogo from '../assets/dicatec.png';
import mec2000Logo from '../assets/mecanica2000.png';
import doutorIE from '../assets/doutorie.png';

const systems = [
    {
        image: simploLogo,
        title: "Simplo 2026",
        description: "O maior banco de dados de esquemas elétricos do Brasil. Inclui injeção eletrônica, ar condicionado e muito mais.",
        details: "Esquemas coloridos, localização de componentes, pinagem de módulos."
    },
    {
        image: dicatecLogo,
        title: "Dicatec 2026",
        description: "Referência em diagramas e oscilogramas. Essencial para diagnósticos avançados.",
        details: "Novos veículos 2024/2025, tabelas de torque, correias e correntes."
    },
    {
        image: mec2000Logo,
        title: "Mecânica 2000",
        description: "Manuais passo-a-passo e vídeos técnicos de procedimentos complexos.",
        details: "Desmontagem de motores, câmbios automáticos e metrologia."
    },
    {
        image: doutorIE,
        title: "Doutor-IE",
        description: "Enciclopédia automotiva completa com boletins técnicos e dicas de defeitos.",
        details: "Sincronismo de correias, pressão de pneus, fluidos e lubrificantes."
    }
];

const SystemsList = () => {
    return (
        <section id="sistemas" className="py-24 bg-bg-base px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main uppercase">O QUE ESTÁ INCLUSO NO <span className="text-primary">PENDRIVE</span></h2>
                <p className="text-text-muted max-w-2xl mx-auto">
                    O sistema reúne diferentes plataformas técnicas em um único ambiente para facilitar o dia a dia da oficina.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {systems.map((sys, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all hover:shadow-lg group flex flex-col items-center text-center h-full">

                        {/* Logo Container - White Background & Fixed Size */}
                        <div className="h-32 w-full flex items-center justify-center mb-6 p-4 bg-bg-base rounded-lg border border-gray-100">
                            <img
                                src={sys.image}
                                alt={sys.title}
                                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-text-main">{sys.title}</h3>
                        <p className="text-text-muted text-sm mb-4 leading-relaxed flex-grow">
                            {sys.description}
                        </p>
                        {/* Editable slot for user specific details */}
                        <div className="w-full p-3 bg-gray-50 rounded border border-dashed border-gray-300 text-xs text-text-muted italic text-left mt-auto">
                            {sys.details}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SystemsList;
