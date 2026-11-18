import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/seoData';

export default function ContactLeadForm() {
  const [name, setName] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [service, setService] = useState('Desentupimento de Esgoto');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá HidroRibeirão! Solicito orçamento grátis em Ribeirão Preto:
• Nome: ${name || 'Cliente'}
• Bairro em Ribeirão Preto: ${neighborhood || 'Não informado'}
• Serviço: ${service}
• Detalhes: ${details || 'Preciso de atendimento rápido'}`;

    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-5"
    >
      <div>
        <span className="text-xs font-extrabold uppercase tracking-widest text-blue-900">
          ORÇAMENTO GRATUITO EM RIBEIRÃO PRETO
        </span>
        <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
          Solicite Atendimento Imediato via WhatsApp
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Preencha abaixo para iniciar o atendimento direto com nossa central no WhatsApp sem custo de visita:
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
            Seu Nome
          </label>
          <input
            type="text"
            required
            placeholder="Ex: João Silva"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-900 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
            Bairro em Ribeirão Preto
          </label>
          <input
            type="text"
            required
            placeholder="Ex: Ribeirânia, Centro, Vila Tibério..."
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-900 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
          Tipo de Serviço Necessário
        </label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 focus:border-blue-900 focus:outline-none"
        >
          <option>Desentupimento de Esgoto</option>
          <option>Limpeza de Caixa de Gordura</option>
          <option>Desentupimento de Vaso Sanitário</option>
          <option>Desentupimento de Ralo ou Pia</option>
          <option>Hidrossanitária / Sistema Desagregador Hidráulico</option>
          <option>Limpeza de Fossa / Tratamento de Esgoto</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
          Observações (Opcional)
        </label>
        <textarea
          rows={3}
          placeholder="Conte brevemente o que está acontecendo (ex: água voltando pelo ralo, urgência 24h)..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-900 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span>INICIAR ATENDIMENTO NO WHATSAPP</span>
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
