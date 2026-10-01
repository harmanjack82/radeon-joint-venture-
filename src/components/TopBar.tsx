import React from 'react';
import { Phone, Mail, Building2, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/tradeData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs">
          <span className="flex items-center gap-1.5 text-amber-400 font-medium font-mono-trade">
            <Building2 className="w-3.5 h-3.5" />
            <span>Singapore Registered Global Trading Entity</span>
          </span>
          <span className="text-slate-600 hidden md:inline">|</span>
          <span className="text-slate-400 hidden md:inline">
            Head Office: Marina Bay Financial Centre, Singapore
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] sm:text-xs font-mono-trade">
          <a
            href={`tel:${COMPANY_PROFILE.telephone}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>{COMPANY_PROFILE.telephone}</span>
          </a>
          <span className="text-slate-700">|</span>
          <a
            href={`mailto:${COMPANY_PROFILE.email}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{COMPANY_PROFILE.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
