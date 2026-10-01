import React from 'react';
import { MapPin, Phone, Mail, Building2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/tradeData';

interface FooterProps {
  onOpenRFQ: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRFQ }) => {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Singapore Registration */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              className="text-xl font-brand font-black tracking-wider text-white hover:text-emerald-400 transition-colors inline-block"
            >
              RADEON JOINT VENTURE
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Singapore-headquartered global merchant exporter. Managing bulk commodity supply chains,
              industrial metallurgy, semiconductor transshipment, and transcontinental containerized freight.
            </p>
            <div className="font-mono-trade space-y-1 text-slate-400 text-[11px] pt-1">
              <div>ACRA Status: <span className="text-emerald-400">Live & Registered</span></div>
              <div>GST Registration: <span className="text-slate-200">{COMPANY_PROFILE.gstNumber}</span></div>
              <div>Customs MES Exporter: <span className="text-emerald-400">Authorized & Active</span></div>
            </div>
          </div>

          {/* Trade Portfolios */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-mono-trade">
              Merchandise Portfolios
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button type="button" onClick={onOpenRFQ} className="hover:text-emerald-400 transition-colors text-left">
                  Agri-Commodities & Edible Oils
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenRFQ} className="hover:text-emerald-400 transition-colors text-left">
                  Industrial Metals & Steel Billets
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenRFQ} className="hover:text-emerald-400 transition-colors text-left">
                  Microelectronics & Silicon
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenRFQ} className="hover:text-emerald-400 transition-colors text-left">
                  Petrochemicals & Polymers
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenRFQ} className="hover:text-emerald-400 transition-colors text-left">
                  Consumer Packaged Goods
                </button>
              </li>
            </ul>
          </div>

          {/* Trade Operations */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-mono-trade">
              Trade Operations
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#corridors" className="hover:text-emerald-400 transition-colors">
                  Global Shipping Corridors
                </a>
              </li>
              <li>
                <a href="#singapore-hub" className="hover:text-emerald-400 transition-colors">
                  Singapore Port Facilities
                </a>
              </li>
              <li>
                <a href="#trade-finance" className="hover:text-emerald-400 transition-colors">
                  Letters of Credit & Banking
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-emerald-400 transition-colors">
                  Quality Assays & SGS Inspection
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-emerald-400 transition-colors">
                  Corporate Governance
                </a>
              </li>
            </ul>
          </div>

          {/* Singapore Office & Contact */}
          <div className="space-y-3 font-mono-trade">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-mono-trade">
              Singapore Trade Desk
            </div>
            <div className="space-y-2.5 text-[11px]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{COMPANY_PROFILE.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-slate-300">{COMPANY_PROFILE.telephone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-slate-300">{COMPANY_PROFILE.email}</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenRFQ}
                  className="w-full py-2.5 px-3 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors text-center font-sans shadow-xs"
                >
                  Direct Export RFQ
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-trade text-slate-400">
          <div>
            © 2016 Radeon Joint Venture (Radeon Global Merchant Ventures Pte. Ltd.). All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Incoterms® 2020</span>
            <span>·</span>
            <span>Singapore Law Jurisdiction</span>
            <span>·</span>
            <span>Hague-Visby Rules</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
