/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GlobalCorridorsSection } from './components/GlobalCorridorsSection';
import { SingaporeAdvantageSection } from './components/SingaporeAdvantageSection';
import { TradeFinanceSection } from './components/TradeFinanceSection';
import { CorporateGovernanceSection } from './components/CorporateGovernanceSection';
import { ProcurementRFQModal } from './components/ProcurementRFQModal';
import { Footer } from './components/Footer';
import { TradeDivision, TradeCorridor } from './types/trade';

export default function App() {
  const [isRFQOpen, setIsRFQOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState<TradeDivision | null>(null);
  const [selectedCorridor, setSelectedCorridor] = useState<TradeCorridor | null>(null);

  const handleOpenRFQ = () => {
    setSelectedDivision(null);
    setSelectedCorridor(null);
    setIsRFQOpen(true);
  };

  const handleSelectDivision = (division: TradeDivision) => {
    setSelectedDivision(division);
    setSelectedCorridor(null);
    setIsRFQOpen(true);
  };

  const handleSelectCorridor = (corridor: TradeCorridor) => {
    setSelectedCorridor(corridor);
    setSelectedDivision(null);
    setIsRFQOpen(true);
  };

  const handleExploreCorridors = () => {
    const el = document.getElementById('corridors');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-700 selection:text-white">
      {/* Singapore Corporate Top Utility Line */}
      <TopBar />

      {/* Primary Top Bar Contract */}
      <Navbar onOpenRFQ={handleOpenRFQ} />

      {/* Maritime Port Panorama Banner */}
      <div className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[520px] relative overflow-hidden bg-slate-950 border-b border-slate-200">
        <img
          src="/src/assets/images/port_panorama_1790845601780.jpg"
          alt="Port of Singapore maritime logistics hub and container terminal"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-4 sm:left-6 lg:left-8 flex items-center gap-2 text-white text-[11px] font-mono-trade bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-md border border-white/10 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Port of Singapore (PSA / Jurong Island Hub) · Active Maritime Gateways</span>
        </div>
      </div>

      <main className="flex-1">
        {/* Prestige Singapore Merchant Exporter Hero Section */}
        <HeroSection
          onOpenRFQ={handleOpenRFQ}
          onExplorePortfolios={handleExploreCorridors}
        />

        {/* Global Maritime Trade Corridors */}
        <GlobalCorridorsSection
          onSelectCorridorForRFQ={handleSelectCorridor}
        />

        {/* Singapore Port Infrastructure & Logistics Edge */}
        <SingaporeAdvantageSection
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Tier-1 Letters of Credit & Trade Finance */}
        <TradeFinanceSection
          onOpenRFQ={handleOpenRFQ}
        />

        {/* Corporate Governance, Statutory Accreditations & Assays */}
        <CorporateGovernanceSection />
      </main>

      {/* Corporate Footer with Singapore ACRA Registration */}
      <Footer onOpenRFQ={handleOpenRFQ} />

      {/* Export Merchandise RFQ Modal */}
      <ProcurementRFQModal
        isOpen={isRFQOpen}
        onClose={() => {
          setIsRFQOpen(false);
          setSelectedDivision(null);
          setSelectedCorridor(null);
        }}
        prefillDivision={selectedDivision}
        prefillCorridor={selectedCorridor}
      />
    </div>
  );
}
