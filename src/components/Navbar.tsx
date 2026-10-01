import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenRFQ: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRFQ }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 border-b border-slate-200 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark as mandated by design constitution */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-brand font-black tracking-wider text-slate-950 hover:text-emerald-800 transition-colors whitespace-nowrap"
          >
            RADEON JOINT VENTURE
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#corridors" className="hover:text-emerald-700 transition-colors py-1">
              Global Corridors
            </a>
            <a href="#singapore-hub" className="hover:text-emerald-700 transition-colors py-1">
              Singapore Port Hub
            </a>
            <a href="#trade-finance" className="hover:text-emerald-700 transition-colors py-1">
              Trade Finance & LC
            </a>
            <a href="#governance" className="hover:text-emerald-700 transition-colors py-1">
              Corporate Governance
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2.5 text-xs font-semibold tracking-wide text-slate-700 hover:text-slate-950 border border-slate-300 rounded-lg hover:border-slate-400 transition-colors whitespace-nowrap"
            >
              Export Desk
            </a>
            <button
              onClick={onOpenRFQ}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <span>Submit Export RFQ</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenRFQ}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-800 rounded-md sm:hidden"
            >
              RFQ
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-50 border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#corridors"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-200 rounded-md"
          >
            Global Trade Corridors
          </a>
          <a
            href="#singapore-hub"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-200 rounded-md"
          >
            Singapore Port Hub & Logistics
          </a>
          <a
            href="#trade-finance"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-200 rounded-md"
          >
            Trade Finance & Letters of Credit
          </a>
          <a
            href="#governance"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-200 rounded-md"
          >
            Corporate Governance & ESG
          </a>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-emerald-800 rounded-lg shadow-sm"
            >
              Submit Export RFQ
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
