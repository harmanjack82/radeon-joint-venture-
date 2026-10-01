import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Building2, Globe2, Award, FileText } from 'lucide-react';
import { TRADE_ASSETS, COMPANY_PROFILE } from '../data/tradeData';

interface HeroSectionProps {
  onOpenRFQ: () => void;
  onExplorePortfolios: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRFQ,
  onExplorePortfolios,
}) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-6 pb-8 lg:pt-8 lg:pb-10 border-b border-slate-200 overflow-hidden">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-corporate-dots opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Regional Trust Marker */}
            <div className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200/90 rounded-full px-3.5 py-1.5 shadow-xs">
              <span className="text-emerald-800 font-bold uppercase tracking-wider">Singapore Merchant Exporter</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>ACRA Registered Trading House</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Port of Singapore (PSA / Jurong Hub)</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-950 tracking-tight leading-[1.12] text-balance">
              Singapore’s Premier Merchant Exporter. Powering Global Trade.
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              Radeon Joint Venture orchestrates large-scale international merchandise trade,
              connecting producers and industrial manufacturers across five continents through
              Singapore’s maritime infrastructure, rigorous SGS quality assays, and Tier-1 trade finance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenRFQ}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-md transition-all whitespace-nowrap"
              >
                <span>Request Merchandise RFQ</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExplorePortfolios}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl shadow-xs transition-colors whitespace-nowrap"
              >
                <span>Explore Global Corridors</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>100% SGS & BV Pre-Shipment Inspection</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-emerald-700" />
                <span>Tier-1 Bank Confirmed LC (DBS, OCBC, UOB)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-700" />
                <span>Incoterms® 2020 Compliance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Prestige Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
              <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden">
                <img
                  src={TRADE_ASSETS.heroPort}
                  alt="Singapore Maritime Port Terminal"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono-trade uppercase text-amber-300 font-bold tracking-wider block">
                    Global Maritime Crossroads · Singapore
                  </span>
                  <div className="text-base font-bold font-display leading-tight mt-0.5">
                    PSA Singapore & Jurong Port Multi-Modal Berths
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Direct access to 48 international deepwater gateway terminals.
                  </div>
                </div>
              </div>

              {/* Floating Corporate Credibility Badge */}
              <div className="bg-slate-900 text-white rounded-xl p-4 mt-2 grid grid-cols-2 gap-4 text-left font-mono-trade">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">Export Volume:</span>
                  <span className="text-lg font-bold text-emerald-400">{COMPANY_PROFILE.annualVolume}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">World Ports:</span>
                  <span className="text-lg font-bold text-white">{COMPANY_PROFILE.establishedMarkets}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Proof Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-16 border-t border-slate-200">
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="text-3xl font-display font-extrabold text-slate-900 font-mono-trade">
              614,000 MT
            </div>
            <div className="text-xs text-slate-600 font-medium mt-1">
              Annual Merchandise Export Volume
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="text-3xl font-display font-extrabold text-emerald-800 font-mono-trade">
              5 Divisions
            </div>
            <div className="text-xs text-slate-600 font-medium mt-1">
              Specialized Commodity & Industrial Portfolios
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="text-3xl font-display font-extrabold text-slate-900 font-mono-trade">
              48 Ports
            </div>
            <div className="text-xs text-slate-600 font-medium mt-1">
              Direct Global Ocean Terminals Served
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
            <div className="text-3xl font-display font-extrabold text-slate-900 font-mono-trade">
              100% Inspected
            </div>
            <div className="text-xs text-slate-600 font-medium mt-1">
              Independent SGS & Bureau Veritas Quality Assay
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
