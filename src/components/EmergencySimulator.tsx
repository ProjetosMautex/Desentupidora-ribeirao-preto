import React, { useState } from 'react';
import {
  MessageCircle,
  Clock,
  CheckCircle2,
  MapPin,
  Wrench,
  Building2,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/seoData';

const PROBLEMS = [
  {
    id: 'esgoto',
    label: 'Rede de Esgoto / Caixa de Inspeção',
    tag: 'Mais procurado',
    eta: '25 a 35 min',
    tech: 'Sonda Rotativa + Sistema Desagregador Hidráulico',
  },
  {
    id: 'gordura',
    label: 'Limpeza de Caixa de Gordura',
    tag: 'Cozinha / Restaurante',
    eta: '30 a 40 min',
    tech: 'Higienização por Hidrojateamento + Descarte em ETE',
  },
  {
    id: 'vaso',
    label: 'Vaso Sanitário Entupido',
    tag: 'Urgência 24h',
    eta: '20 a 30 min',
    tech: 'Sonda Revestida Sem Riscar a Louça Sanitária',
  },
  {
    id: 'ralo',
    label: 'Ralo de Chuveiro, Quintal ou Pia',
    tag: 'Sem quebrar piso',
    eta: '25 a 35 min',
    tech: 'Cabos Flexíveis de Raspagem Interna',
  },
  {
    id: 'fossa',
    label: 'Limpeza de Fossa / Caminhão Auto Vácuo',
    tag: 'Descarte ETE Licenciado',
    eta: '40 a 50 min',
    tech: 'Caminhão Combinado Auto Vácuo + Estação de Tratamento',
  },
  {
    id: 'hidrossanitaria',
    label: 'Manutenção Hidrossanitária Predial / Industrial',
    tag: 'Laudo & Garantia',
    eta: '30 a 45 min',
    tech: 'Engenharia Hidrossanitária + Vídeo Inspeção',
  },
];

const REGIONS = [
  { id: 'sul', name: 'Zona Sul / Bonfim Paulista / Nova Aliança / Ribeirânia', base: 'Unidade Sul (8 min)' },
  { id: 'centro', name: 'Centro / Vila Tibério / Campos Elíseos / Sumarezinho', base: 'Unidade Central (10 min)' },
  { id: 'anhanguera', name: 'Eixo Anhanguera / Castelo Branco / Jardim Paulista / Novo Mundo', base: 'Base Operacional Anhanguera (5 min)' },
  { id: 'norte', name: 'Zona Norte / Ipiranga / Simioni / Quintino Facci / Aeroporto', base: 'Unidade Norte (12 min)' },
];

const PROPERTY_TYPES = [
  'Residência / Casa',
  'Apartamento / Condomínio',
  'Restaurante / Comércio',
  'Indústria / Galpão / Hospital',
];

export default function EmergencySimulator() {
  const [selectedProblem, setSelectedProblem] = useState(PROBLEMS[0]);
  const [selectedRegion, setSelectedRegion] = useState(REGIONS[0]);
  const [propertyType, setPropertyType] = useState(PROPERTY_TYPES[0]);
  const [isUrgent, setIsUrgent] = useState(true);

  const customMessage = `Olá HidroRibeirão! Preciso de orçamento grátis de Desentupidora em Ribeirão Preto:
• Serviço: ${selectedProblem.label}
• Imóvel: ${propertyType}
• Região em Ribeirão Preto: ${selectedRegion.name}
• Prioridade: ${isUrgent ? 'EMERGÊNCIA IMEDIATA 24H' : 'Agendar Visita Técnica Gratuita'}`;

  const whatsappHref = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    customMessage
  )}`;

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden">
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 p-6 sm:p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            <Sparkles className="w-4 h-4" />
            Triagem Inteligente & Orçamento Sem Compromisso
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Solicite sua Visita Gratuita em Ribeirão Preto em 3 Cliques
          </h3>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl px-4 py-3 flex items-center gap-3 shrink-0">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
          <div>
            <div className="text-xs text-slate-300">Equipes Disponíveis Agora</div>
            <div className="text-sm font-bold text-amber-400">
              Chegada Estimada: {selectedProblem.eta}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-10 grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Steps */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1 */}
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-3">
              <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs font-black flex items-center justify-center">
                1
              </span>
              Qual problema você precisa resolver em Ribeirão Preto?
            </label>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {PROBLEMS.map((item) => {
                const active = selectedProblem.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedProblem(item)}
                    className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      active
                        ? 'border-blue-800 bg-blue-50/70 ring-2 ring-blue-800/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-amber-400/30 px-2 py-0.5 rounded-md">
                        {item.tag}
                      </span>
                      {active && <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0" />}
                    </div>
                    <div className="font-bold text-slate-900 text-sm leading-snug">
                      {item.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="region-select"
                className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2"
              >
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs font-black flex items-center justify-center">
                  2
                </span>
                Sua Região em Ribeirão Preto
              </label>
              <div className="relative">
                <select
                  id="region-select"
                  value={selectedRegion.id}
                  onChange={(e) =>
                    setSelectedRegion(
                      REGIONS.find((r) => r.id === e.target.value) || REGIONS[0]
                    )
                  }
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm font-semibold text-slate-800 focus:border-blue-800 focus:outline-none"
                >
                  {REGIONS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="property-select"
                className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-2"
              >
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 text-xs font-black flex items-center justify-center">
                  3
                </span>
                Tipo de Local
              </label>
              <select
                id="property-select"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm font-semibold text-slate-800 focus:border-blue-800 focus:outline-none"
              >
                {PROPERTY_TYPES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Urgency Toggle */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => setIsUrgent(true)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                isUrgent
                  ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-sm'
                  : 'bg-slate-100 text-slate-600 border-slate-200'
              }`}
            >
              ⚡ Urgência Imediata (Plantão 24h)
            </button>
            <button
              type="button"
              onClick={() => setIsUrgent(false)}
              className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                !isUrgent
                  ? 'bg-blue-900 text-white border-blue-950 shadow-sm'
                  : 'bg-slate-100 text-slate-600 border-slate-200'
              }`}
            >
              📅 Agendar Visita Técnica Grátis
            </button>
          </div>
        </div>

        {/* Right Diagnostic Summary Card */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 space-y-5 border border-slate-800">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Resumo do Atendimento
              </span>
              <h4 className="text-lg font-extrabold text-white mt-0.5">
                {selectedProblem.label}
              </h4>
            </div>
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-2.5 py-1 rounded-full">
              Visita R$ 0,00
            </span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-2.5">
              <Wrench className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Tecnologia Recomendada: </span>
                {selectedProblem.tech}
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Unidade Mais Próxima: </span>
                {selectedRegion.base}
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Tempo Médio de Chegada: </span>
                <span className="text-emerald-400 font-bold">{selectedProblem.eta}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Execução: </span>
                Sem quebrar pisos • Garantia por escrito • Nota Fiscal
              </div>
            </div>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm sm:text-base py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/25 transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            CHAMAR EQUIPE NO WHATSAPP
          </a>

          <p className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            Orçamento informado antes de iniciar qualquer serviço. Sem compromisso!
          </p>
        </div>
      </div>
    </div>
  );
}
