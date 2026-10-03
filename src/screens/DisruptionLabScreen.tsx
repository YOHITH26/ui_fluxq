import React, { useState } from 'react';
import { ScreenId } from '../types';

interface DisruptionLabScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const DisruptionLabScreen: React.FC<DisruptionLabScreenProps> = ({ onNavigate }) => {
  const [selectedVector, setSelectedVector] = useState<string>('Severe Weather');
  const [selectedPreset, setSelectedPreset] = useState<string>('Chennai');
  const [blastRadius, setBlastRadius] = useState<number>(25);
  const [severityTier, setSeverityTier] = useState<'Low' | 'Moderate' | 'High' | 'CRITICAL'>('CRITICAL');
  const [delayDeviation, setDelayDeviation] = useState<number>(120);
  const [isSynthetic, setIsSynthetic] = useState<boolean>(true);
  const [isInjecting, setIsInjecting] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);

  const presets: Record<string, { label: string; coords: string }> = {
    Chennai: { label: 'Chennai (MAA Maritime & Air Hub)', coords: '13.0827°N, 80.2707°E' },
    'Dubai Hub': { label: 'Dubai (DXB T1 Gateway)', coords: '25.2532°N, 55.3657°E' },
    Frankfurt: { label: 'Frankfurt (FRA Cargo Hub)', coords: '50.0379°N, 8.5622°E' },
    Singapore: { label: 'Singapore (SIN Changi Intermodal)', coords: '1.3644°N, 103.9915°E' },
  };

  const handleInject = () => {
    setIsInjecting(true);
    setNotification('Simulating causal propagation across 1,428 active transit polygons...');
    setTimeout(() => {
      setIsInjecting(false);
      setNotification('Disruption successfully injected! 8 consignments exposed in blast radius.');
      setTimeout(() => setNotification(null), 4000);
    }, 800);
  };

  return (
    <div className="flex flex-col gap-4 pb-12">
      {/* Subheader Banner */}
      <div className="bg-white p-4 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col gap-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-sans font-bold text-lg text-[#002217] tracking-tight">
              DISRUPTION SIMULATION LAB
            </span>
            <span className="px-2 py-0.5 rounded bg-[#ffdad6] text-[#93000a] text-[10px] font-mono font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] animate-pulse"></span>
              SANDBOX ACTIVE • SYNTHETIC TWIN LINKED
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono text-[#414844]">
            <span className="px-2 py-0.5 rounded bg-[#ecf4ff] border border-[#c1c8c3]">
              Twin Sync: <strong className="text-[#002217]">APAC-Corridor-v4.2</strong>
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#16a34a]">sync</span>
              Polling every 12s
            </span>
          </div>
        </div>

        <p className="text-xs font-sans text-[#414844] mt-1">
          Simulate real-world disruptions, trigger synthetic stress tests, and observe real-time causal network propagation across multi-echelon corridors.
        </p>

        {notification && (
          <div className="mt-2 p-2 rounded bg-[#c1ecd7] text-[#002116] font-mono text-xs flex items-center gap-2 animate-fadeIn">
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            <span>{notification}</span>
          </div>
        )}
      </div>

      {/* Main 2-Column Split: Injection Engine & Live Propagation Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column (5 cols): Disruption Injection Engine */}
        <div className="lg:col-span-5 bg-white rounded-lg border border-[#c1c8c3] shadow-xs p-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#c1c8c3]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ff5722] text-[18px]">bolt</span>
                <span className="font-sans font-bold text-xs text-[#002217] uppercase tracking-wide">
                  DISRUPTION INJECTION ENGINE
                </span>
              </div>
              <span className="text-[10px] font-mono bg-[#ecf4ff] text-[#414844] px-1.5 py-0.5 rounded">
                CORE // OR-SIM v2.8
              </span>
            </div>

            {/* Disruption Taxonomy (Select Vector) */}
            <div>
              <div className="flex justify-between items-center text-[10px] font-mono text-[#414844] uppercase tracking-wider font-bold mb-1.5">
                <span>DISRUPTION TAXONOMY</span>
                <span className="text-[#717974]">SELECT VECTOR</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                {[
                  { id: 'Severe Weather', icon: 'cyclone' },
                  { id: 'Traffic Congestion', icon: 'traffic' },
                  { id: 'Port Bottleneck', icon: 'anchor' },
                  { id: 'Air Ground Stop', icon: 'flight_land' },
                  { id: 'Geopolitical', icon: 'public' },
                  { id: 'Infrastructure', icon: 'construction' },
                ].map((vec) => (
                  <button
                    key={vec.id}
                    onClick={() => setSelectedVector(vec.id)}
                    className={`p-2 rounded border text-left flex items-center gap-2 transition-colors ${
                      selectedVector === vec.id
                        ? 'bg-[#ff5722] text-white border-[#e64a19] font-bold shadow-xs'
                        : 'bg-[#ecf4ff] hover:bg-[#dfe9f5] text-[#131d25] border-[#c1c8c3]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">{vec.icon}</span>
                    <span className="truncate">{vec.id}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Epicenter / Location Target & Presets */}
            <div>
              <div className="flex justify-between text-[10px] font-mono text-[#414844] uppercase tracking-wider font-bold mb-1">
                <span>EPICENTER / LOCATION TARGET</span>
                <span className="text-[#717974]">{presets[selectedPreset]?.coords}</span>
              </div>
              <div className="p-2 rounded bg-[#ecf4ff] border border-[#c1c8c3] font-mono text-xs font-semibold text-[#131d25] flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#ff5722]">location_on</span>
                <span>{presets[selectedPreset]?.label}</span>
              </div>
              <div className="flex items-center gap-1.5 mt-2 overflow-x-auto text-[10px] font-mono">
                <span className="text-[#717974]">PRESETS:</span>
                {Object.keys(presets).map((pKey) => (
                  <button
                    key={pKey}
                    onClick={() => setSelectedPreset(pKey)}
                    className={`px-2 py-0.5 rounded border transition-colors ${
                      selectedPreset === pKey
                        ? 'bg-[#002217] text-white border-[#002217] font-bold'
                        : 'bg-white text-[#414844] border-[#c1c8c3] hover:bg-[#dfe9f5]'
                    }`}
                  >
                    {pKey}
                  </button>
                ))}
              </div>
            </div>

            {/* Impact Radius & Blast Zone Slider */}
            <div>
              <div className="flex justify-between text-[10px] font-mono text-[#414844] uppercase tracking-wider font-bold mb-1">
                <span>IMPACT RADIUS & BLAST ZONE</span>
                <span className="text-[#ff5722] text-sm font-bold font-mono">{blastRadius} km</span>
              </div>
              <input
                type="range"
                min={5}
                max={200}
                value={blastRadius}
                onChange={(e) => setBlastRadius(Number(e.target.value))}
                className="w-full h-1.5 bg-[#dae3f0] rounded-lg appearance-none cursor-pointer accent-[#ff5722]"
              />
              <div className="flex justify-between text-[9px] font-mono text-[#717974] mt-1">
                <span>Local (5 km)</span>
                <span>Sub-Metropolitan (50 km)</span>
                <span>Regional Corridor (200 km)</span>
              </div>
            </div>

            {/* Severity Tier & Delay Deviation */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="text-[10px] font-mono text-[#414844] uppercase tracking-wider font-bold mb-1">
                  SEVERITY TIER
                </div>
                <div className="grid grid-cols-2 gap-1 text-[11px] font-mono">
                  {(['Low', 'Moderate', 'High', 'CRITICAL'] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setSeverityTier(tier)}
                      className={`py-1 px-1.5 rounded border text-center font-bold transition-colors ${
                        severityTier === tier
                          ? tier === 'CRITICAL'
                            ? 'bg-[#ba1a1a] text-white border-[#93000a]'
                            : 'bg-[#ff5722] text-white border-[#e64a19]'
                          : 'bg-[#ecf4ff] text-[#414844] border-[#c1c8c3] hover:bg-[#dfe9f5]'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-[#414844] uppercase tracking-wider font-bold mb-1">
                  DELAY DEVIATION BASELINE
                </div>
                <div className="p-2 rounded bg-[#ecf4ff] border border-[#c1c8c3] text-center flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#ff5722]">schedule</span>
                  <span className="text-base font-mono font-bold text-[#ba1a1a]">+{delayDeviation} min</span>
                </div>
              </div>
            </div>

            {/* Environmental Forcing Vectors */}
            <div>
              <div className="text-[10px] font-mono text-[#414844] uppercase tracking-wider font-bold mb-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">air</span>
                <span>ENVIRONMENTAL FORCING VECTORS</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
                <div className="p-2 rounded bg-[#ecf4ff] border border-[#c1c8c3]">
                  <div className="text-[#717974]">SUSTAINED WIND</div>
                  <div className="font-bold text-[#131d25] text-xs mt-0.5">85 km/h</div>
                </div>
                <div className="p-2 rounded bg-[#ecf4ff] border border-[#c1c8c3]">
                  <div className="text-[#717974]">PRECIPITATION</div>
                  <div className="font-bold text-[#131d25] text-xs mt-0.5">62 mm/h</div>
                </div>
                <div className="p-2 rounded bg-[#ecf4ff] border border-[#c1c8c3]">
                  <div className="text-[#717974]">RUNWAY RVR</div>
                  <div className="font-bold text-[#ba1a1a] text-xs mt-0.5">400 m</div>
                </div>
              </div>
            </div>

            {/* Simulation Flag Checkbox */}
            <label className="flex items-center gap-2 p-2 rounded bg-[#dfe9f5]/50 border border-[#c1c8c3] cursor-pointer">
              <input
                type="checkbox"
                checked={isSynthetic}
                onChange={(e) => setIsSynthetic(e.target.checked)}
                className="w-4 h-4 accent-[#ff5722]"
              />
              <div className="text-xs font-sans text-[#131d25]">
                <strong className="block font-semibold">Mark as Synthetic Simulation Event</strong>
                <span className="text-[10px] font-mono text-[#717974]">FLAG // DRY_RUN (Isolation Verified)</span>
              </div>
            </label>
          </div>

          {/* Action Button: Inject Disruption into Network */}
          <div className="mt-4 pt-3 border-t border-[#c1c8c3]">
            <button
              onClick={handleInject}
              disabled={isInjecting}
              className={`w-full py-2.5 px-4 rounded text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm ${
                isInjecting ? 'bg-[#717974]' : 'bg-[#ff5722] hover:bg-[#e64a19] active:scale-98'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {isInjecting ? 'autorenew' : 'flash_on'}
              </span>
              <span>{isInjecting ? 'COMPUTING CAUSAL MESH...' : 'INJECT DISRUPTION INTO NETWORK'}</span>
            </button>
            <div className="flex items-center justify-between text-[10px] font-mono text-[#717974] mt-2">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span> Causality Mesh: Operational
              </span>
              <span>Propagation Clock: 0.00s</span>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Real-Time Results & Quantification Stages */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Active Event Broadcast Header Card */}
          <div className="bg-white p-3.5 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="text-xs font-mono font-bold text-[#ba1a1a] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse"></span>
                <span>EVENT CREATED: DISRUPTION-0042</span>
              </div>
              <div className="text-[10px] font-mono text-[#414844] mt-0.5">
                TARGET: <strong>Chennai Metro Area (25km)</strong> • DELAY: <strong>+120 min Baseline Shift</strong>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono">
              <span className="px-2 py-0.5 rounded bg-[#ffdad6] text-[#93000a] font-bold">
                SYNTHETIC_EVENT // SEVERE_WEATHER
              </span>
              <span className="text-[#3f6656] font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">cell_tower</span>
                BROADCASTING
              </span>
            </div>
          </div>

          {/* STAGE 01: Exposure Engine Geometric Scan */}
          <div className="bg-white p-4 rounded-lg border border-[#c1c8c3] shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#c1c8c3]">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-[#002217] text-[#c1ecd7] text-[10px] font-mono font-bold">
                  STAGE 01
                </span>
                <span className="font-sans font-bold text-xs text-[#002217] uppercase tracking-wide">
                  EXPOSURE ENGINE GEOMETRIC SCAN
                </span>
              </div>
              <div className="text-[10px] font-mono text-[#16a34a] font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">done</span>
                <span>Scanning 1,428 active transit polygons... Done (42ms)</span>
              </div>
            </div>

            <div className="mt-3 p-3 rounded bg-[#ffdbd1]/30 border-l-4 border-[#ff5722] flex items-start gap-3">
              <span className="material-symbols-outlined text-[#ff5722] text-[24px]">crisis_alert</span>
              <div>
                <div className="font-mono font-bold text-sm text-[#541100]">
                  8 CONSIGNMENTS INTERSECT IMPACT POLYGON
                </div>
                <p className="text-xs font-sans text-[#414844] mt-0.5">
                  Spatial-temporal overlap confirmed within 25km blast radius. Corridors exposed:{' '}
                  <strong className="text-[#131d25]">MAA-DXB Air • NH16 Road • Outer Anchorage</strong>.
                </p>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex justify-between text-[10px] font-mono text-[#717974] mb-1">
                <span>CONVEX HULL INTERSECTION PROGRESS</span>
                <span className="text-[#16a34a] font-bold">100% RESOLVED</span>
              </div>
              <div className="w-full bg-[#dae3f0] h-1.5 rounded overflow-hidden">
                <div className="bg-[#16a34a] h-full w-full"></div>
              </div>
            </div>
          </div>

          {/* STAGE 02: Predictive AI & Financial Breach Quantification */}
          <div className="bg-white p-4 rounded-lg border border-[#c1c8c3] shadow-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#c1c8c3]">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-[#002217] text-[#c1ecd7] text-[10px] font-mono font-bold">
                  STAGE 02
                </span>
                <span className="font-sans font-bold text-xs text-[#002217] uppercase tracking-wide">
                  PREDICTIVE AI & FINANCIAL BREACH QUANTIFICATION
                </span>
              </div>
              <span className="text-[10px] font-mono bg-[#ffdad6] text-[#93000a] px-2 py-0.5 rounded font-bold">
                ⚠️ 3 CRITICAL SLA BREACH RISKS ($184,500 EXPOSURE)
              </span>
            </div>

            {/* Exposed Consignments Table */}
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left font-mono text-[11px]">
                <thead>
                  <tr className="border-b border-[#c1c8c3] text-[#717974] text-[9px] uppercase tracking-wider">
                    <th className="py-2 px-1">Shipment Ref</th>
                    <th className="py-2 px-1">Cargo Spec</th>
                    <th className="py-2 px-1">Downstream SLA Window</th>
                    <th className="py-2 px-1 text-right">Predicted Delay</th>
                    <th className="py-2 px-1 text-right">Breach Prob</th>
                    <th className="py-2 px-1 text-right">At-Risk Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#dae3f0]">
                  <tr className="hover:bg-[#ecf4ff] transition-colors">
                    <td className="py-2 px-1 font-bold text-[#ba1a1a] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a]"></span>
                      FLX-2048
                    </td>
                    <td className="py-2 px-1 font-sans text-xs text-[#131d25]">Cold-Chain Bio-Pharma (Insulin)</td>
                    <td className="py-2 px-1 text-[#717974]">Frankfurt Airport (T-4h 15m)</td>
                    <td className="py-2 px-1 text-right font-bold text-[#ba1a1a]">+140 min</td>
                    <td className="py-2 px-1 text-right font-bold text-[#ba1a1a]">74%</td>
                    <td className="py-2 px-1 text-right font-bold text-[#131d25]">$112,000</td>
                  </tr>

                  <tr className="hover:bg-[#ecf4ff] transition-colors">
                    <td className="py-2 px-1 font-bold text-[#ff5722] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722]"></span>
                      FLX-3109
                    </td>
                    <td className="py-2 px-1 font-sans text-xs text-[#131d25]">Precision Avionics Guidance Mod</td>
                    <td className="py-2 px-1 text-[#717974]">Toulouse Final Line (T-7h 40m)</td>
                    <td className="py-2 px-1 text-right font-bold text-[#ff5722]">+95 min</td>
                    <td className="py-2 px-1 text-right font-bold text-[#ff5722]">48%</td>
                    <td className="py-2 px-1 text-right font-bold text-[#131d25]">$48,500</td>
                  </tr>

                  <tr className="hover:bg-[#ecf4ff] transition-colors">
                    <td className="py-2 px-1 font-bold text-[#ff5722] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722]"></span>
                      FLX-1892
                    </td>
                    <td className="py-2 px-1 font-sans text-xs text-[#131d25]">Tier-1 EV Powertrain Inverter</td>
                    <td className="py-2 px-1 text-[#717974]">Munich Gigafactory (T-11h 20m)</td>
                    <td className="py-2 px-1 text-right font-bold text-[#ff5722]">+110 min</td>
                    <td className="py-2 px-1 text-right font-bold text-[#ff5722]">42%</td>
                    <td className="py-2 px-1 text-right font-bold text-[#131d25]">$24,000</td>
                  </tr>

                  <tr className="hover:bg-[#ecf4ff] transition-colors">
                    <td className="py-2 px-1 font-bold text-[#002217] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a5d0bc]"></span>
                      FLX-4001
                    </td>
                    <td className="py-2 px-1 font-sans text-xs text-[#131d25]">Dry Bulk Electronic Components</td>
                    <td className="py-2 px-1 text-[#717974]">Rotterdam Gateway (T-36h)</td>
                    <td className="py-2 px-1 text-right text-[#414844]">+35 min</td>
                    <td className="py-2 px-1 text-right text-[#414844]">12%</td>
                    <td className="py-2 px-1 text-right text-[#717974]">$0 (Buffer)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* STAGE 03: Recovery Engine Handoff // Optimizer Artifacts */}
          <div className="bg-[#002217] text-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between pb-2 border-b border-[#0f382a]">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-[#ff5722] text-white text-[10px] font-mono font-bold">
                  STAGE 03
                </span>
                <span className="font-sans font-bold text-xs uppercase tracking-wide text-white">
                  RECOVERY ENGINE HANDOFF // OPTIMIZER ARTIFACTS
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#a5d0bc]">
                QUBO SOLVER // CONVERGED 14ms
              </span>
            </div>

            <div className="mt-3 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-[#c1ecd7] uppercase tracking-wide">
                  4 RECOVERY PLANS GENERATED BY CLASSICAL & QUANTUM TRIAGE
                </div>
                <p className="text-xs text-[#dae3f0] mt-1 max-w-xl">
                  Optimal Pareto tradeoff found: reroute FLX-2048 via Bangalore (BLR) feeder flight saves{' '}
                  <strong className="text-white font-bold">$112,000</strong> contract penalty with only $4,200 carbon offset variance.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => onNavigate('ask-fluxq')}
                  className="py-2 px-3 rounded bg-[#ff5722] hover:bg-[#e64a19] text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  OPEN RECOVERY CENTER FOR FLX-2048 →
                </button>
                <button
                  onClick={() => alert('Exporting solver artifact JSON payload: { incident: "DIS-0042", exposures: 8, optimalPlan: "BLR-REROUTE" }')}
                  className="py-2 px-2.5 rounded bg-[#0f382a] hover:bg-[#274e3f] text-[#a5d0bc] font-mono text-xs transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>EXPORT JSON</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Historical Synthetic Disruption Experiments Archive */}
      <div className="bg-white p-4 rounded-lg border border-[#c1c8c3] shadow-xs">
        <div className="flex items-center justify-between pb-2 border-b border-[#c1c8c3]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#002217] text-[18px]">history</span>
            <span className="font-sans font-bold text-xs text-[#002217] uppercase tracking-wide">
              HISTORICAL SYNTHETIC DISRUPTION EXPERIMENTS
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#717974]">
            ARCHIVE LEDGER: 24 RUNS LOGGED • ALL PARAMETERS CACHED
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 font-mono text-[11px]">
          {/* EXP-0041 */}
          <div className="p-3 rounded bg-[#ecf4ff] border border-[#c1c8c3] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#002217]">EXP-0041: Port Congestion @ Rotterdam Anchorage</span>
                <span className="text-[10px] text-[#717974]">2025-05-14 08:12 UTC</span>
              </div>
              <div className="text-[10px] text-[#414844] mt-1">
                Blast: 45 km radius | Deviation: +180 min | <span className="text-[#ba1a1a] font-bold">14 Consignments Impacted</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#dae3f0]">
              <span className="text-[#16a34a] font-sans text-xs">✓ Mitigated: Modal shift via Betuweroute Dedicated Freight Rail</span>
              <button
                onClick={() => alert('Reloading synthetic scenario EXP-0041 parameters...')}
                className="px-2 py-0.5 rounded bg-white hover:bg-[#dfe9f5] text-[#002217] text-[10px] font-bold"
              >
                Re-run Sim
              </button>
            </div>
          </div>

          {/* EXP-0040 */}
          <div className="p-3 rounded bg-[#ecf4ff] border border-[#c1c8c3] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#002217]">EXP-0040: Air Traffic Ground Stop @ Dubai Int'l (DXB)</span>
                <span className="text-[10px] text-[#717974]">2025-05-13 19:44 UTC</span>
              </div>
              <div className="text-[10px] text-[#414844] mt-1">
                Blast: 10 km radius | Deviation: +60 min | <span className="text-[#ff5722] font-bold">5 Consignments Impacted</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#dae3f0]">
              <span className="text-[#16a34a] font-sans text-xs">✓ Mitigated: Absorbed by destination handling time buffer</span>
              <button
                onClick={() => alert('Reloading synthetic scenario EXP-0040 parameters...')}
                className="px-2 py-0.5 rounded bg-white hover:bg-[#dfe9f5] text-[#002217] text-[10px] font-bold"
              >
                Re-run Sim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
