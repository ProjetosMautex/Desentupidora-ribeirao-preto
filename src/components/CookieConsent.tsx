import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem('hidroribeirao_cookie_consent');
      if (!accepted) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    try {
      localStorage.setItem('hidroribeirao_cookie_consent', 'accepted');
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  const rejectOptional = () => {
    try {
      localStorage.setItem('hidroribeirao_cookie_consent', 'essential_only');
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Termo de Consentimento de Cookies"
      className="fixed bottom-16 sm:bottom-5 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-slate-950/95 backdrop-blur-md text-white border border-slate-800 rounded-2xl p-5 shadow-2xl"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5 text-amber-400" />
        </div>
        <div className="space-y-2 text-xs leading-relaxed text-slate-300">
          <div className="font-extrabold text-sm text-white">
            Termo de Consentimento de Cookies (LGPD)
          </div>
          <p>
            Utilizamos cookies essenciais e de análise no site{' '}
            <strong className="text-white">hidroribeirao.com</strong> para melhorar sua experiência de navegação e agilizar seu atendimento em Ribeirão Preto. Ao continuar, você concorda com nossa{' '}
            <a
              href="/politica-de-privacidade"
              className="text-amber-400 underline hover:text-amber-300 font-semibold"
            >
              Política de Privacidade e Cookies
            </a>
            .
          </p>
          <div className="pt-2 flex items-center gap-2.5">
            <button
              type="button"
              onClick={acceptCookies}
              className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
            >
              Aceitar e Continuar
            </button>
            <button
              type="button"
              onClick={rejectOptional}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs py-2.5 px-3.5 rounded-xl transition-colors cursor-pointer"
            >
              Apenas Essenciais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
