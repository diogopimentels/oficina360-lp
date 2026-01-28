import React from 'react';
import { Check, ShieldCheck, CreditCard } from 'lucide-react';

const BuySection = () => {
    return (
        <section id="comprar" className="py-24 bg-bg-base px-6 text-center">
            {/* Main Pricing Card - Compact & Premium */}
            <div className="max-w-lg mx-auto bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden relative mb-12 transform hover:scale-[1.01] transition-transform duration-300">
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                    Oferta Limitada
                </div>

                <div className="p-8">
                    <h2 className="text-2xl font-extrabold mb-1 text-text-main uppercase tracking-tight">Pendrive OFICINA 360</h2>
                    <p className="text-sm text-text-muted mb-6">Tudo o que sua oficina precisa.</p>

                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wide">20% OFF</span>
                        <span className="text-text-muted/50 line-through text-base">R$ 500,00</span>
                    </div>

                    <div className="text-5xl font-black text-text-main mb-2 tracking-tighter">
                        R$ 400<span className="text-2xl font-bold text-text-muted">,00</span>
                    </div>

                    <div className="space-y-1 mb-8">
                        <p className="text-text-main text-sm font-medium">no Pix à vista</p>
                        <p className="text-xs text-text-muted">ou <strong>R$ 420,00</strong> em até 5x sem juros</p>
                    </div>

                    <a
                        href="https://wa.link/6op4t8"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-secondary text-white font-bold text-base rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                        Falar no WhatsApp e ver o sistema
                    </a>

                    <div className="mt-4 flex flex-wrap justify-center gap-4 text-[10px] font-medium text-text-muted uppercase tracking-wide">
                        <div className="flex items-center gap-1"><CreditCard size={12} /> Pix, Cartão ou Boleto</div>
                        <div className="flex items-center gap-1"><ShieldCheck size={12} /> Compra Segura</div>
                    </div>
                </div>

                <div className="bg-gray-50/80 p-5 border-t border-gray-100">
                    <ul className="space-y-2 text-left max-w-xs mx-auto">
                        <li className="flex gap-2 text-text-main text-xs"><span className="text-green-600 shrink-0"><Check size={16} /></span> Acesso imediato Simplo/Dicatec</li>
                        <li className="flex gap-2 text-text-main text-xs"><span className="text-green-600 shrink-0"><Check size={16} /></span> Brindes Exclusivos</li>
                        <li className="flex gap-2 text-text-main text-xs"><span className="text-green-600 shrink-0"><Check size={16} /></span> Garantia de Satisfação</li>
                    </ul>
                </div>
            </div>

            {/* Closing Call */}
        </section>
    );
};

export default BuySection;
