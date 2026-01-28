import React from 'react';
import { DollarSign, Zap, Layers, HardDrive, MessageCircle } from 'lucide-react';

const Benefits = () => {
    const features = [
        {
            icon: <DollarSign size={32} strokeWidth={1.5} />,
            title: "Economia real",
            description: "Sem mensalidades. Tenha lucro livre dos custos fixos.",
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            icon: <Zap size={32} strokeWidth={1.5} />,
            title: "Diagnóstico rápido",
            description: "Menos tempo no PC, mais tempo consertando carros.",
            color: "text-amber-500",
            bg: "bg-amber-50"
        },
        {
            icon: <Layers size={32} strokeWidth={1.5} />,
            title: "Centralizado",
            description: "Simplo, Dicatec, Mecânica2000 e Doutor-IE em um único lugar.",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            icon: <MessageCircle size={32} strokeWidth={1.5} />,
            title: "Suporte humano",
            description: "Fale com técnicos reais no WhatsApp, não com robôs.",
            color: "text-pink-500",
            bg: "bg-pink-50"
        }
    ];

    return (
        <section id="vantagens" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-text-main mb-6 leading-tight">
                        Feito para a <span className="text-primary">realidade da oficina</span>
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed">
                        Sabemos que oficina é correria. Por isso criamos um sistema direto ao ponto,
                        <span className="font-semibold text-text-main"> sem frescuras visuais</span> e focado em resultado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-bg-base border border-transparent hover:border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <div className={feature.color}>
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-text-main mb-3">{feature.title}</h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
