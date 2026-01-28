import React from 'react';
import { DollarSign, Clock, Layers, Zap, Headset } from 'lucide-react';

const benefits = [
    {
        icon: <DollarSign size={24} />,
        title: "Economia Real",
        text: "Sem mensalidades. Tenha lucro livre dos custos fixos."
    },
    {
        icon: <Clock size={24} />,
        title: "Diagnóstico Rápido",
        text: "Menos tempo no PC, mais tempo consertando carros."
    },
    {
        icon: <Layers size={24} />,
        title: "Centralizado",
        text: "Simplo, Dicatec e outros manuais em um único local."
    },
    {
        icon: <Zap size={24} />,
        title: "Plug & Play",
        text: "Nós instalamos, você usa. Sem configurações complexas."
    },
    {
        icon: <Headset size={24} />,
        title: "Suporte Humano",
        text: "Fale com técnicos reais no WhatsApp, não com robôs."
    }
];

const Benefits = () => {
    return (
        <section id="beneficios" className="py-24 bg-white px-6 border-b border-border">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold mb-4 text-text-main">
                            Feito para a Realidade da Oficina
                        </h2>
                        <p className="text-text-muted">
                            Sabemos que oficina é correria. Por isso criamos um sistema direto ao ponto, sem frescuras visuais.
                        </p>
                    </div>

                    <div className="hidden md:block h-px flex-1 bg-gray-200 mx-8 mb-2" />
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-transparent border-l border-gray-200 pl-6 py-2 hover:border-primary transition-colors group">
                            <div className="text-text-muted/70 mb-4 group-hover:text-primary transition-colors">
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-text-main">{benefit.title}</h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
