import React from 'react';
import { Building2, Anchor, Warehouse, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { COMPANY_PROFILE, TRADE_ASSETS } from '../data/tradeData';

interface SingaporeAdvantageSectionProps {
  onOpenRFQ: () => void;
}

export const SingaporeAdvantageSection: React.FC<SingaporeAdvantageSectionProps> = ({
  onOpenRFQ,
}) => {
  return (
    <section id="singapore-hub" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Assets */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-80 sm:h-96">
              <img
                src={TRADE_ASSETS.singaporeHq}
                alt="Singapore Marina Bay Financial Centre"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono-trade uppercase text-emerald-300 font-bold tracking-wider block">
                  Global Merchant Headquarters
                </span>
                <div className="text-lg font-bold font-display mt-0.5">
                  Marina Bay Financial Centre, Tower 2, Singapore
                </div>
                <div className="text-xs text-slate-300 mt-1 font-mono-trade">
                  Registered Entity: {COMPANY_PROFILE.legalName}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="text-2xl font-bold font-mono-trade text-slate-900">
                  250,000 sq ft
                </div>
                <div className="text-xs text-slate-600 font-medium mt-1">
                  Bonded Logistics Yard at Jurong Port & Keppel Distripark
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <div className="text-2xl font-bold font-mono-trade text-emerald-800">
                  24-Hour
                </div>
                <div className="text-xs text-slate-600 font-medium mt-1">
                  Expedited Singapore Customs TradeNet Clearance
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Advantages */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-2 font-mono-trade">
                Jurisdiction & Physical Assets
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
                The Singapore Infrastructure Edge
              </h2>
              <p className="text-slate-600 mt-3 text-base leading-relaxed">
                Operating under the stringent regulatory framework of Singapore, Radeon Joint Venture
                provides international consignees with unconditional contract certainty, premier port
                allocations, and seamless multi-modal consolidation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-800 text-white shrink-0 mt-0.5">
                  <Anchor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Direct Deepwater Port Berthing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Priority vessel loading and discharging berths across PSA Singapore container terminals
                    and Jurong Port heavy breakbulk quays, eliminating costly anchorage waiting times.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-800 text-white shrink-0 mt-0.5">
                  <Warehouse className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Bonded Free Trade Zone Warehousing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Over 250,000 sq ft of customs-free bonded storage, temperature-regulated cold store bays,
                    and automated flexitank bulk bulking stations.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-800 text-white shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Major Exporter Scheme (MES) Authorized
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Authorized under Singapore Customs Major Exporter Scheme, ensuring zero GST friction
                    and rapid TradeNet permit issuance for urgent international shipments.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenRFQ}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm transition-colors"
              >
                <span>Book Port Consignment Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
