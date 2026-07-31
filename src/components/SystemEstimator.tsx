import React, { useState } from 'react';
import { Sun, Camera, Calculator, Zap, ShieldCheck, DollarSign, CheckCircle2, MessageSquare, ArrowRight, RefreshCw } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

interface SystemEstimatorProps {
  onOpenQuoteModalWithCustomData: (summary: string) => void;
}

export const SystemEstimator: React.FC<SystemEstimatorProps> = ({ onOpenQuoteModalWithCustomData }) => {
  const [propertyType, setPropertyType] = useState<'Home' | 'Shop' | 'Office' | 'School' | 'Industry'>('Home');
  const [solutionType, setSolutionType] = useState<'solar' | 'cctv' | 'combo'>('combo');
  const [solarKw, setSolarKw] = useState<number>(3);
  const [cctvCount, setCctvCount] = useState<number>(8);
  const [isBatteryBackup, setIsBatteryBackup] = useState<boolean>(true);

  // Solar calculations
  const panelWattage = 540;
  const totalPanelWattageRequired = solarKw * 1000;
  const panelCount = Math.ceil(totalPanelWattageRequired / panelWattage);
  const monthlyGenerationKw = solarKw * 120; // Avg 120 units per kW per month
  const estMonthlySavings = Math.round(monthlyGenerationKw * 8); // Avg $0.10 or local unit rate

  // Storage / NVR calculation
  const nvrChannels = cctvCount <= 4 ? 4 : cctvCount <= 8 ? 8 : cctvCount <= 16 ? 16 : 32;
  const storageTb = cctvCount <= 4 ? '1 TB' : cctvCount <= 8 ? '2 TB' : cctvCount <= 16 ? '4 TB' : '8 TB surveillance HDD';

  const getEstCostRange = () => {
    let base = 0;
    if (solutionType === 'solar' || solutionType === 'combo') {
      base += solarKw * 60000; // estimated currency units
    }
    if (solutionType === 'cctv' || solutionType === 'combo') {
      base += cctvCount * 3500;
    }
    const low = Math.round(base * 0.9);
    const high = Math.round(base * 1.1);
    return `₹${low.toLocaleString()} - ₹${high.toLocaleString()} approx.`;
  };

  const generateSummaryText = () => {
    let text = `Inquiry for ${propertyType} - `;
    if (solutionType === 'solar') {
      text += `${solarKw}kW Solar System (${panelCount} Panels ~ ${monthlyGenerationKw} kWh/mo savings)`;
    } else if (solutionType === 'cctv') {
      text += `${cctvCount} CCTV Cameras Setup (${nvrChannels} Channel NVR, ${storageTb})`;
    } else {
      text += `COMBO: ${solarKw}kW Solar + ${cctvCount} CCTV Cameras System`;
    }
    return text;
  };

  const handleWhatsAppInquiry = () => {
    const summary = generateSummaryText();
    const message = `Hello Expert Technologies, I calculated a custom estimate on your website:\n\n*Property:* ${propertyType}\n*Package:* ${summary}\n*Est. Solar Generation:* ${monthlyGenerationKw} Units/month\n\nPlease share detailed quotation and site visit schedule.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="estimator" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-blue-50/50 to-slate-50 relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-blue-600" />
            <span>Instant Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Solar Capacity &amp; CCTV Needs
          </h2>
          <p className="text-base text-slate-600">
            Get an instant estimate tailored for your property type in seconds before requesting a formal quote.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full" />
        </div>

        {/* Main Estimator Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-8">
            
            {/* Step 1: Select Property Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {(['Home', 'Shop', 'Office', 'School', 'Industry'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPropertyType(type)}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      propertyType === type
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Solution Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                2. Select Solution Requirement
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setSolutionType('solar')}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer text-left ${
                    solutionType === 'solar'
                      ? 'border-amber-500 bg-amber-50/60 text-slate-900 ring-2 ring-amber-500/30'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Sun className={`w-5 h-5 ${solutionType === 'solar' ? 'text-amber-500' : 'text-slate-400'}`} />
                  <div>
                    <div className="text-xs font-bold">Solar Power Only</div>
                    <div className="text-[11px] text-slate-500">Rooftop Generation</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSolutionType('cctv')}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer text-left ${
                    solutionType === 'cctv'
                      ? 'border-blue-600 bg-blue-50/60 text-slate-900 ring-2 ring-blue-500/30'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Camera className={`w-5 h-5 ${solutionType === 'cctv' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <div>
                    <div className="text-xs font-bold">CCTV Security Only</div>
                    <div className="text-[11px] text-slate-500">4K Surveillance</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSolutionType('combo')}
                  className={`p-3.5 rounded-xl border flex items-center gap-3 transition-all cursor-pointer text-left ${
                    solutionType === 'combo'
                      ? 'border-green-600 bg-green-50/60 text-slate-900 ring-2 ring-green-500/30'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <Zap className={`w-5 h-5 ${solutionType === 'combo' ? 'text-green-600' : 'text-slate-400'}`} />
                  <div>
                    <div className="text-xs font-bold">Solar + CCTV Combo</div>
                    <div className="text-[11px] text-slate-500">Best Value Deal</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Solar Settings (If Solar or Combo) */}
            {(solutionType === 'solar' || solutionType === 'combo') && (
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>Solar Plant Capacity ({solarKw} kW)</span>
                  </label>
                  <span className="text-sm font-extrabold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                    {solarKw} kW System
                  </span>
                </div>

                <input
                  type="range"
                  min={1}
                  max={25}
                  step={1}
                  value={solarKw}
                  onChange={(e) => setSolarKw(parseInt(e.target.value))}
                  className="w-full accent-amber-500 h-2 bg-amber-200 rounded-lg cursor-pointer"
                />

                <div className="flex justify-between text-xs text-amber-800 font-medium">
                  <span>1 kW (Small Home)</span>
                  <span>5 kW (Villa/Office)</span>
                  <span>15 kW+ (Commercial)</span>
                  <span>25 kW (Factory)</span>
                </div>

                <div className="flex items-center gap-2 pt-1 text-xs text-slate-700">
                  <input
                    type="checkbox"
                    id="battery-check"
                    checked={isBatteryBackup}
                    onChange={(e) => setIsBatteryBackup(e.target.checked)}
                    className="w-4 h-4 text-amber-500 rounded border-amber-300 focus:ring-amber-400"
                  />
                  <label htmlFor="battery-check" className="cursor-pointer font-medium">
                    Include Battery Storage / Off-Grid Backup Option
                  </label>
                </div>
              </div>
            )}

            {/* CCTV Settings (If CCTV or Combo) */}
            {(solutionType === 'cctv' || solutionType === 'combo') && (
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/60 space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
                    <Camera className="w-4 h-4 text-blue-600" />
                    <span>Number of CCTV Cameras ({cctvCount} Cameras)</span>
                  </label>
                  <span className="text-sm font-extrabold text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
                    {cctvCount} Cameras
                  </span>
                </div>

                <input
                  type="range"
                  min={2}
                  max={32}
                  step={2}
                  value={cctvCount}
                  onChange={(e) => setCctvCount(parseInt(e.target.value))}
                  className="w-full accent-blue-600 h-2 bg-blue-200 rounded-lg cursor-pointer"
                />

                <div className="flex justify-between text-xs text-blue-800 font-medium">
                  <span>2 Cams (Entry)</span>
                  <span>8 Cams (Office/Shop)</span>
                  <span>16 Cams (School)</span>
                  <span>32 Cams (Industry)</span>
                </div>
              </div>
            )}

          </div>

          {/* Results Summary Column (Right) */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Estimated Configuration</span>
                <span className="px-2.5 py-1 rounded bg-green-500/20 text-green-400 text-xs font-semibold">
                  {propertyType} Package
                </span>
              </div>

              {/* Detailed Specs Calculated */}
              <div className="space-y-3 text-sm">
                {(solutionType === 'solar' || solutionType === 'combo') && (
                  <>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400 text-xs">Solar Plant Size:</span>
                      <span className="font-bold text-amber-300">{solarKw} kW Tier-1 System</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400 text-xs">Solar Panels Required:</span>
                      <span className="font-bold text-white">~{panelCount} x 540W Mono PERC</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400 text-xs">Est. Generation:</span>
                      <span className="font-bold text-green-400">~{monthlyGenerationKw} Units / month</span>
                    </div>
                  </>
                )}

                {(solutionType === 'cctv' || solutionType === 'combo') && (
                  <>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400 text-xs">CCTV Cameras:</span>
                      <span className="font-bold text-blue-300">{cctvCount} Full-HD / 4K Cameras</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400 text-xs">Recorder / Storage:</span>
                      <span className="font-bold text-white">{nvrChannels}-Ch NVR ({storageTb})</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                      <span className="text-slate-400 text-xs">Remote Live View:</span>
                      <span className="font-bold text-blue-400">iOS, Android &amp; PC Included</span>
                    </div>
                  </>
                )}

                <div className="pt-2">
                  <div className="text-xs text-slate-400">Estimated Budget Range:</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    {getEstCostRange()}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    *Includes installation, wiring, mounting structures, and warranties.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 space-y-3">
              <button
                id="estimator-submit-quote-btn"
                onClick={() => onOpenQuoteModalWithCustomData(generateSummaryText())}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Official Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="estimator-whatsapp-btn"
                onClick={handleWhatsAppInquiry}
                className="w-full py-3 px-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Estimate Directly to WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
