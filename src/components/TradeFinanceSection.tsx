import React from 'react';
import { Landmark, ShieldCheck, FileCheck, ArrowRight, Check } from 'lucide-react';
import { TRADE_FINANCE_INSTRUMENTS, COMPANY_PROFILE } from '../data/tradeData';

interface TradeFinanceSectionProps {
  onOpenRFQ: () => void;
}

export const TradeFinanceSection: React.FC<TradeFinanceSectionProps> = ({ onOpenRFQ }) => {
  return (
    <section id="trade-finance" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-2 font-mono-trade">
            Structured Trade Finance & Risk Management
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
            Institutional Banking & Letters of Credit
          </h2>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            Radeon Joint Venture mitigates international transaction risks through comprehensive
            trade finance structures, backed by Singapore’s highest-rated financial institutions.
          </p>
        </div>

        {/* Banking Partners Pill Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono-trade mb-4">
            Primary Singapore Advising & Issuing Banking Partners:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {COMPANY_PROFILE.bankingPartners.map((bank) => (
              <div
                key={bank}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center font-bold text-sm text-slate-800 font-mono-trade"
              >
                {bank}
              </div>
            ))}
          </div>
        </div>

        {/* Trade Instruments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TRADE_FINANCE_INSTRUMENTS.map((inst) => (
            <div
              key={inst.name}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono-trade text-emerald-800 font-bold block mb-1">
                  {inst.type}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {inst.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {inst.description}
                </p>

                <div className="space-y-3 text-xs pt-4 border-t border-slate-100 font-mono-trade">
                  <div>
                    <span className="text-slate-400 uppercase text-[10px] block">
                      Settlement Conditions:
                    </span>
                    <span className="text-slate-800 font-medium">{inst.settlementTerms}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenRFQ}
                  className="w-full py-2.5 px-4 text-xs font-bold text-emerald-900 hover:text-white bg-emerald-50 hover:bg-emerald-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Inquire with LC Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Incoterms 2020 Compliance Strip */}
        <div className="p-6 bg-slate-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Full Incoterms® 2020 & Hague-Visby Regulatory Adherence</span>
            </h4>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Every sales contract is executed with clear delivery points, marine cargo insurance coverage
              (Institute Cargo Clauses A), and transfer of risks under Singapore jurisdiction.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenRFQ}
            className="px-6 py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors whitespace-nowrap"
          >
            Review LC Terms with Legal Officer
          </button>
        </div>
      </div>
    </section>
  );
};
