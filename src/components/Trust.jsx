import React from 'react';
import { Truck, MonitorDown, CalendarCheck } from 'lucide-react';

const Trust = () => {
    return (
        <section className="py-16 bg-white border-y border-border">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 text-center divide-x divide-transparent md:divide-gray-200">

                    <div className="p-4 flex flex-col items-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-4">
                            <MonitorDown size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-text-main mb-2">Instalação Remota</h3>
                        <p className="text-sm text-text-muted">
                            Nossa equipe acessa seu PC e deixa tudo pronto para uso. Sem dor de cabeça.
                        </p>
                    </div>

                    <div className="p-4 flex flex-col items-center">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-4">
                            <Truck size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-text-main mb-2">Envio para todo Brasil</h3>
                        <p className="text-sm text-text-muted">
                            Receba o Pendrive físico na sua oficina com frete grátis ou via download imediato.
                        </p>
                    </div>

                    <div className="p-4 flex flex-col items-center">
                        <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-500 mb-4">
                            <CalendarCheck size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-text-main mb-2">Garantia de 7 Dias</h3>
                        <p className="text-sm text-text-muted">
                            Teste o sistema. Se não gostar, devolvemos seu dinheiro sem burocracia.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Trust;
