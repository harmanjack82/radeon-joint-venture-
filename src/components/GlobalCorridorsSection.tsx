import React, { useState } from 'react';
import { Globe2, Ship, Clock, Anchor, ArrowRight, MapPin } from 'lucide-react';
import { TRADE_CORRIDORS } from '../data/tradeData';
import { TradeCorridor } from '../types/trade';

interface GlobalCorridorsSectionProps {
  onSelectCorridorForRFQ: (corridor: TradeCorridor) => void;
}

export const GlobalCorridorsSection: React.FC<GlobalCorridorsSectionProps> = ({
  onSelectCorridorForRFQ,
}) => {
  const [selectedCorridor, setSelectedCorridor] = useState<TradeCorridor>(TRADE_CORRIDORS[0]);

  return (
    <section id="corridors" className="pt-8 pb-16 lg:pt-10 lg:pb-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 max-w-3xl">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-2 font-mono-trade">
            International Maritime Logistics · Singapore Nexus
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
            Global Trade Corridors & Destination Terminals
          </h2>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            Positioned at the world's busiest maritime junction, Radeon Joint Venture
            contracts regular scheduled container space and full vessel charters connecting
            Singapore with 48 primary deepwater ports.
          </p>
        </div>

        {/* Corridors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRADE_CORRIDORS.map((corridor) => {
            const isSelected = corridor.id === selectedCorridor.id;

            return (
              <div
                key={corridor.id}
                onClick={() => setSelectedCorridor(corridor)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-emerald-700 shadow-md ring-1 ring-emerald-700/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono-trade text-emerald-800 font-bold uppercase tracking-wider">
                      {corridor.averageTransitDays} Transit
                    </span>
                    <span className="text-xs font-mono-trade text-slate-500">
                      Weekly Sailings
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {corridor.region}
                  </h3>

                  <div className="space-y-3 text-xs mb-6">
                    <div>
                      <span className="text-slate-400 uppercase font-mono-trade block text-[10px] mb-1">
                        Primary Discharge Terminals:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {corridor.ports.map((p) => (
                          <span
                            key={p}
                            className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded text-[11px] font-mono-trade"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-slate-400 uppercase font-mono-trade block text-[10px]">
                        Vessel Charter & Space Allocation:
                      </span>
                      <p className="text-slate-700 font-medium mt-0.5">
                        {corridor.vesselTypes}
                      </p>
                    </div>

                    <div>
                      <span className="text-slate-400 uppercase font-mono-trade block text-[10px]">
                        Primary Merchandise Handled:
                      </span>
                      <p className="text-slate-600 mt-0.5">
                        {corridor.keyCommodities}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCorridorForRFQ(corridor);
                  }}
                  className="w-full py-2.5 px-4 text-xs font-bold text-slate-800 hover:text-white bg-slate-100 hover:bg-emerald-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Inquire for {corridor.region.split(' &')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
