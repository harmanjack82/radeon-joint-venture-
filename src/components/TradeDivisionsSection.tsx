import React, { useState } from 'react';
import { Package, ArrowUpRight, CheckCircle2, ShieldCheck, Layers, FileCheck } from 'lucide-react';
import { TRADE_DIVISIONS } from '../data/tradeData';
import { TradeDivision } from '../types/trade';

interface TradeDivisionsSectionProps {
  onSelectDivision: (division: TradeDivision) => void;
}

export const TradeDivisionsSection: React.FC<TradeDivisionsSectionProps> = ({
  onSelectDivision,
}) => {
  const [selectedId, setSelectedId] = useState<string>(TRADE_DIVISIONS[0].id);

  const activeDivision =
    TRADE_DIVISIONS.find((d) => d.id === selectedId) || TRADE_DIVISIONS[0];

  return (
    <section id="portfolios" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-2 font-mono-trade">
              Primary Trade Capabilities · Singapore Export Portfolios
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
              Export Merchandise Divisions
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl text-base">
              Radeon Joint Venture oversees five specialized global merchandise divisions,
              fulfilling high-tonnage multi-modal export contracts under strict Singapore quality assays.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono-trade text-slate-500 bg-slate-100 p-2.5 rounded-lg border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>100% Pre-Shipment Inspection Guaranteed</span>
          </div>
        </div>

        {/* Division Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 border-b border-slate-200">
          {TRADE_DIVISIONS.map((div) => {
            const isActive = div.id === selectedId;
            return (
              <button
                key={div.id}
                type="button"
                onClick={() => setSelectedId(div.id)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {div.name}
              </button>
            );
          })}
        </div>

        {/* Active Division Feature Bento Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Media Column */}
            <div className="lg:col-span-5 relative h-72 lg:h-auto min-h-[320px]">
              <img
                src={activeDivision.image}
                alt={activeDivision.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono-trade text-emerald-300 font-bold uppercase tracking-wider block">
                  Harmonized Tariff: HS {activeDivision.hsCodePrefix}
                </span>
                <div className="text-xl font-bold font-display mt-1">
                  {activeDivision.name}
                </div>
                <div className="text-xs text-slate-300 mt-1 font-mono-trade">
                  Annual Turnover: {activeDivision.annualVolume}
                </div>
              </div>
            </div>

            {/* Division Detailed Specifications */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Portfolio Overview & Scope
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2">
                    {activeDivision.fullDesc}
                  </p>
                </div>

                {/* Key Merchandise Line Items */}
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono-trade mb-3">
                    Export Merchandise Line Items:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeDivision.keyProducts.map((prod) => (
                      <div
                        key={prod}
                        className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200 text-slate-800 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span className="truncate">{prod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications & Quality Assurance */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs">
                  <div>
                    <span className="text-slate-500 font-mono-trade block text-[11px] uppercase">
                      Technical & Chemical Standards:
                    </span>
                    <p className="text-slate-800 font-medium mt-0.5">
                      {activeDivision.specifications}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-slate-600 font-mono-trade">
                    <span>Quality Assay: <strong className="text-emerald-800">{activeDivision.qualityCertification}</strong></span>
                    <span>Incoterms: <strong className="text-slate-900">{activeDivision.incoterms.join(', ')}</strong></span>
                  </div>
                </div>

                {/* Packaging & Logistics */}
                <div>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono-trade block mb-2">
                    Export Packaging Formats:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeDivision.packagingTypes.map((pkg) => (
                      <span
                        key={pkg}
                        className="px-3 py-1 text-xs rounded-md bg-white border border-slate-200 text-slate-700 font-mono-trade"
                      >
                        {pkg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 font-mono-trade">
                  Destinations: <span className="text-slate-800 font-medium">{activeDivision.primaryExportMarkets.join(' · ')}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectDivision(activeDivision)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm transition-colors whitespace-nowrap"
                >
                  <span>Request Division RFQ</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
