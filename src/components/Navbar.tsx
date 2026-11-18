import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  ChevronDown,
  ShieldCheck,
  Clock,
  MapPin,
  Sparkles,
  Mail,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/seoData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Preciso de atendimento de Desentupidora em Ribeirão Preto (Orçamento Grátis).'
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Emergency & Trust Bar (Sem exibir número de telefone, apenas WhatsApp e E-mail) */}
      <div className="bg-slate-950 text-slate-200 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Plantão 24 Horas em Ribeirão Preto SP
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Chegada Rápida em até {COMPANY_INFO.responseTime}
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Centro, Zona Sul, Anhanguera e toda Ribeirão Preto
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Visita e Orçamento 100% Grátis
            </span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden md:inline-flex items-center gap-1 font-semibold text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white shadow-sm py-4'
        }`}
        aria-label="Navegação Principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform relative">
              <span className="text-amber-400 font-extrabold text-xl tracking-tighter">
                HR
              </span>
              <span className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded-full">
                24H
              </span>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                Hidro<span className="text-blue-800">Ribeirão</span>
              </span>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mt-0.5">
                Desentupidora & Saneamento RP
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="/" className="hover:text-blue-800 transition-colors">
              Início
            </a>
            <a href="/sobre-nos" className="hover:text-blue-800 transition-colors">
              Quem Somos
            </a>

            {/* Dropdown de Serviços (SEO Silo) */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="inline-flex items-center gap-1 hover:text-blue-800 transition-colors py-2 cursor-pointer"
                aria-expanded={servicesOpen}
              >
                Serviços Especializados
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    servicesOpen ? 'rotate-180 text-blue-800' : ''
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-80 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 grid gap-1">
                    {SERVICES_DATA.map((service) => (
                      <a
                        key={service.slug}
                        href={`/servicos/${service.slug}`}
                        className="flex flex-col p-2.5 rounded-xl hover:bg-blue-50/80 transition-colors group"
                      >
                        <span className="text-xs font-bold text-slate-900 group-hover:text-blue-900">
                          {service.shortTitle}
                        </span>
                        <span className="text-[11px] text-slate-500 line-clamp-1">
                          {service.badge} • Ribeirão Preto SP
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/#saneamento" className="hover:text-blue-800 transition-colors">
              Hidrossanitária & ETE
            </a>
            <a href="/#bairros" className="hover:text-blue-800 transition-colors">
              Bairros Atendidos
            </a>
            <a href="/contato" className="hover:text-blue-800 transition-colors">
              Contato
            </a>
          </div>

          {/* Desktop CTA Button (Only WhatsApp) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>FALE NO WHATSAPP</span>
            </a>
          </div>

          {/* Mobile "MENU" Text Button (Substituindo as 3 linhas conforme solicitado) */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-950 text-amber-400 font-extrabold text-xs tracking-widest uppercase shadow-sm hover:bg-blue-900 transition-colors cursor-pointer"
            aria-label="Abrir ou fechar menu de navegação"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? 'FECHAR' : 'MENU'}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-4 pb-6 space-y-4 shadow-xl">
            <div className="grid gap-2 text-sm font-semibold text-slate-800">
              <a
                href="/"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Início (Home)
              </a>
              <a
                href="/sobre-nos"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Quem Somos (Sobre Nós)
              </a>
              <div className="px-3 py-2 bg-slate-50 rounded-xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Serviços em Ribeirão Preto
                </span>
                <div className="grid gap-1.5 pl-1">
                  {SERVICES_DATA.map((s) => (
                    <a
                      key={s.slug}
                      href={`/servicos/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="text-xs font-medium text-slate-700 hover:text-blue-800 py-1 border-b border-slate-200/60 last:border-none"
                    >
                      → {s.title}
                    </a>
                  ))}
                </div>
              </div>
              <a
                href="/#saneamento"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Hidrossanitária & Tratamento de Esgoto
              </a>
              <a
                href="/#bairros"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Bairros Atendidos em Ribeirão Preto
              </a>
              <a
                href="/contato"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Página de Contato
              </a>
            </div>

            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                Fale Conosco no WhatsApp 24h
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
