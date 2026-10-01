import React from 'react';
import { Award, ShieldCheck, CheckCircle2, FileText, Scale, Globe } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/tradeData';

export const CorporateGovernanceSection: React.FC = () => {
  return (
    <section id="governance" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-2 font-mono-trade">
            Corporate Governance & Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950 tracking-tight">
            Institutional Standards & Statutory Standing
          </h2>
          <p className="text-slate-600 mt-2 text-base leading-relaxed">
            Radeon Joint Venture operates as a fully licensed Singapore trading house,
            adhering to global trade integrity, anti-money laundering (AML) controls, and international sanctions compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <Scale className="w-6 h-6 text-emerald-800 mb-3" />
            <h3 className="text-base font-bold text-slate-900 mb-1">
              ACRA Registered
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Incorporated under the Singapore Companies Act (Cap. 50).
              Full audited accounts lodged annually with ACRA.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <Award className="w-6 h-6 text-emerald-800 mb-3" />
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Major Exporter Scheme
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Awarded Major Exporter Scheme (MES) status by Singapore Customs,
              certifying trusted trader compliance and expedited clearance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <ShieldCheck className="w-6 h-6 text-emerald-800 mb-3" />
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Independent Assays
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              100% of cargo lots undergo third-party chemical, moisture, and metallurgical
              testing by SGS or Bureau Veritas before Clean Bill of Lading issuance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <Globe className="w-6 h-6 text-emerald-800 mb-3" />
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Sanctions Governance
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Strict counterparty screening against UN, OFAC, and Monetary Authority of Singapore (MAS)
              sanctions lists prior to contract execution.
            </p>
          </div>
        </div>

        {/* Accreditations Banner */}
        <div className="p-6 rounded-2xl bg-slate-100 border border-slate-200">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono-trade mb-4">
            Institutional Memberships & Accreditations:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono-trade text-slate-800">
            {COMPANY_PROFILE.statutoryAccreditations.map((item) => (
              <div key={item} className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
