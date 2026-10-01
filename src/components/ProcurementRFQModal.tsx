import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Copy, Check } from 'lucide-react';
import { TradeDivision, TradeCorridor } from '../types/trade';

interface ProcurementRFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillDivision?: TradeDivision | null;
  prefillCorridor?: TradeCorridor | null;
}

export const ProcurementRFQModal: React.FC<ProcurementRFQModalProps> = ({
  isOpen,
  onClose,
  prefillDivision,
  prefillCorridor,
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: prefillCorridor?.region || 'United Arab Emirates',
    destinationPort: prefillCorridor?.ports[0] || 'Jebel Ali Port (Dubai)',
    division: prefillDivision?.name || 'Agricultural Commodities & Edible Oils',
    productLine: prefillDivision?.keyProducts[0] || 'RBD Palm Olein (CP8)',
    tonnage: '2,000 Metric Tons',
    incoterm: 'CIF Destination Port',
    paymentTerms: 'Irrevocable LC at Sight',
    shipmentMonth: 'Next Scheduled Sailing (Within 30 Days)',
    notes: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `RFQ-SG-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedRef(ref);
  };

  const handleCopy = () => {
    if (submittedRef) {
      navigator.clipboard?.writeText(submittedRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setSubmittedRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <span className="text-xs font-mono-trade uppercase text-emerald-800 font-bold tracking-wider">
              Singapore Export Trade Desk
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              Submit Export Merchandise RFQ
            </h3>
          </div>
          <button
            onClick={handleReset}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedRef ? (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-2xl font-bold text-slate-900">
                Merchandise RFQ Lodged Successfully
              </h4>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                Your request has been routed to the Senior Trading Desk at Radeon Joint Venture
                Singapore. A detailed Proforma Quotation with SGS assay specifications and shipping schedule will be transmitted within 4 business hours.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 max-w-md mx-auto font-mono-trade text-xs text-left space-y-2">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500">Official Reference:</span>
                <span className="text-emerald-800 font-bold text-sm flex items-center gap-1.5">
                  <span>{submittedRef}</span>
                  <button onClick={handleCopy} className="text-slate-400 hover:text-slate-700 p-0.5">
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Shipper Entity:</span>
                <span className="text-slate-900 font-medium">Radeon Joint Venture Pte. Ltd.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Merchandise:</span>
                <span className="text-slate-900 font-medium">{formData.productLine}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Volume / Load:</span>
                <span className="text-slate-900 font-medium">{formData.tonnage}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Destination:</span>
                <span className="text-slate-900 font-medium">{formData.destinationPort}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors"
              >
                Return to Trade Operations
              </button>
            </div>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-trade text-slate-600 mb-1 font-semibold">
                  Buyer Company Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Global Trading B.V."
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-trade text-slate-600 mb-1 font-semibold">
                  Procurement Officer Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-trade text-slate-600 mb-1 font-semibold">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="trade@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-trade text-slate-600 mb-1 font-semibold">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+65 9123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-700 font-mono-trade"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-trade text-slate-600 mb-1 font-semibold">
                  Target Destination Port *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rotterdam / Jebel Ali / Los Angeles"
                  value={formData.destinationPort}
                  onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-trade text-slate-600 mb-1 font-semibold">
                  Requested Volume / Tonnage *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 2,000 MT or 50 x 20ft FCL"
                  value={formData.tonnage}
                  onChange={(e) => setFormData({ ...formData, tonnage: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-700 font-mono-trade"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-trade text-slate-600 mb-1 font-semibold">
                  Merchandise Category
                </label>
                <input
                  type="text"
                  value={formData.productLine}
                  onChange={(e) => setFormData({ ...formData, productLine: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-700"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-trade text-slate-600 mb-1 font-semibold">
                  Incoterms® 2020 Term
                </label>
                <select
                  value={formData.incoterm}
                  onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-700"
                >
                  <option value="CIF Destination Port">CIF (Cost, Insurance & Freight)</option>
                  <option value="FOB Singapore">FOB Singapore (Free On Board)</option>
                  <option value="CFR Destination Port">CFR (Cost & Freight)</option>
                  <option value="DDP Delivered Duty Paid">DDP (Delivered Duty Paid)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-trade text-slate-600 mb-1 font-semibold">
                Additional Technical Specifications or Notes
              </label>
              <textarea
                rows={3}
                placeholder="Mention specific SGS chemical assay parameters, packaging preferences (Flexitanks, Drums, ISO Tanks, Bulk), or target delivery window..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-white border border-slate-300 rounded-lg p-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-700"
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono-trade">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Confidential Singapore Trade Inquiry</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
