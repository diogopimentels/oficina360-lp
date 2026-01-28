import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "Quanto custa o sistema?",
        answer: "O valor de referência do sistema é R$ 500,00. Hoje estamos liberando por R$ 400,00 no cartão de crédito ou R$ 380,00 no Pix."
    },
    {
        question: "Dá pra parcelar?",
        answer: "Sim, no cartão de crédito é possível parcelar. As condições exatas podem ser combinadas no atendimento."
    },
    {
        question: "O que eu recebo exatamente?",
        answer: "Você recebe um pendrive com o sistema completo instalado, pronto para usar no computador da oficina."
    },
    {
        question: "É assinatura mensal?",
        answer: "Não. É pagamento único pelo acesso ao sistema no pendrive."
    },
    {
        question: "Como eu recebo o produto?",
        answer: "O envio é feito pelos Correios para todo o Brasil. Assim que o pagamento é confirmado, o envio é realizado."
    },
    {
        question: "Tem frete?",
        answer: "O frete pode variar conforme a região. Isso é informado no momento do atendimento."
    },
    {
        question: "Vocês ajudam na instalação?",
        answer: "Sim, enviamos as orientações e damos suporte para você conseguir instalar e usar corretamente."
    },
    {
        question: "Precisa de internet para funcionar?",
        answer: "Grande parte do sistema pode ser usada offline após a instalação, mas algumas funções podem depender de conexão."
    },
    {
        question: "Funciona em qualquer computador?",
        answer: "Funciona em computadores compatíveis com os requisitos mínimos. Se tiver dúvida, é só chamar que verificamos com você."
    },
    {
        question: "Se eu tiver dúvida depois da compra, tenho suporte?",
        answer: "Sim, você pode entrar em contato sempre que precisar de ajuda relacionada ao uso do sistema."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-20 bg-white px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-text-main">Perguntas Frequentes</h2>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-5 text-left font-bold text-text-main hover:bg-gray-100 transition-colors"
                            >
                                {faq.question}
                                {openIndex === idx ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-text-muted" />}
                            </button>

                            {openIndex === idx && (
                                <div className="p-5 pt-0 text-text-muted bg-gray-100/50 border-t border-gray-200">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
