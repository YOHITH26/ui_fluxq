import React, { useState } from 'react';
import { ScreenId } from '../types';

interface AskFluxQScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

interface ChatTurn {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  time: string;
  type?: 'incident_assessment' | 'impact_cascade' | 'plain';
}

export const AskFluxQScreen: React.FC<AskFluxQScreenProps> = ({ onNavigate }) => {
  const [inputVal, setInputVal] = useState<string>('');
  const [messages, setMessages] = useState<ChatTurn[]>([
    {
      id: 'turn-1-u',
      sender: 'user',
      text: 'Why is shipment FLX-2048 at critical risk, and what is the optimal recovery action?',
      time: '14:28:10 UTC',
    },
    {
      id: 'turn-1-a',
      sender: 'assistant',
      text: '',
      time: '14:28:11 UTC',
      type: 'incident_assessment',
    },
    {
      id: 'turn-2-u',
      sender: 'user',
      text: 'Which other consignments are affected by the Chennai weather cell?',
      time: '14:29:45 UTC',
    },
    {
      id: 'turn-2-a',
      sender: 'assistant',
      text: '',
      time: '14:29:46 UTC',
      type: 'impact_cascade',
    },
  ]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const timeStr = new Date().toISOString().substring(11, 19) + ' UTC';

    const userTurn: ChatTurn = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      time: timeStr,
    };

    setMessages((prev) => [...prev, userTurn]);
    setInputVal('');

    setTimeout(() => {
      const assistantTurn: ChatTurn = {
        id: `a-${Date.now()}`,
        sender: 'assistant',
        text: `Query evaluated across 1,428 node states against spatiotemporal radar: "${query}". Network integrity score remains at 94.2%. Constraint solver verifies zero cascading inventory starvation in Tier-2 facilities over the 24h horizon. Optimal Pareto replan ready for dispatch sign-off.`,
        time: new Date().toISOString().substring(11, 19) + ' UTC',
        type: 'plain',
      };
      setMessages((prev) => [...prev, assistantTurn]);
    }, 500);
  };

  return (
    <div className="flex flex-col gap-4 pb-12">
      {/* Subheader Banner */}
      <div className="w-full bg-white p-4 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col gap-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-[#414844] font-mono text-[11px] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-pulse"></span>
              <span>DECISION INTELLIGENCE COPILOT // REASONING CORE v4.2</span>
              <span className="text-[#dae3f0]">/</span>
              <span className="text-[#0f382a] font-bold">CAUSALITY ENGINE</span>
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <h1 className="font-sans font-bold text-xl text-[#002217] tracking-tight">ASK FLUXQ</h1>
              <span className="text-[#414844] text-xs font-sans hidden md:inline">
                Conversational causality engine, explainability SHAP synthesis, and multi-echelon scenario analysis.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#ecf4ff] rounded text-[#0f382a] font-mono text-[11px] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#16a34a]"></span>
              <span>FLUXQ INTELLIGENCE ONLINE</span>
            </div>
            <div className="hidden xl:inline-flex items-center px-2 py-1 bg-[#dfe9f5] rounded text-[#414844] font-mono text-[11px]">
              <span>SOURCES: LIVE + METAR + QUBO</span>
            </div>
            <button
              onClick={() => {
                setMessages([
                  {
                    id: 'init-u',
                    sender: 'user',
                    text: 'System session initialized. Telemetry sync nominal.',
                    time: '14:30:00 UTC',
                  },
                ]);
              }}
              className="px-2.5 py-1 bg-[#ecf4ff] hover:bg-[#dfe9f5] text-[#131d25] rounded font-mono text-[11px] uppercase transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">refresh</span>
              <span>Reset Session</span>
            </button>
            <button
              onClick={() => alert('Exporting signed Merkle audit proof for session #FLX-88201...')}
              className="px-2.5 py-1 bg-[#002217] text-white hover:bg-[#0f382a] rounded font-mono text-[11px] uppercase transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">receipt_long</span>
              <span>Export Audit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main 2-Column Split: 8 cols Chat Stage + 4 cols Operational Context */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* LEFT COLUMN: Conversational Stage */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {/* Quick Action Seed Pills */}
          <div className="w-full bg-white p-2.5 rounded-lg border border-[#c1c8c3] shadow-xs flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
            <span className="text-[#414844] font-bold uppercase tracking-wider whitespace-nowrap pl-1">
              DIAGNOSTIC SEEDS:
            </span>
            <button
              onClick={() => handleSend('Show critical shipments analysis and liquid damage exposure.')}
              className="px-2.5 py-1 rounded bg-[#ffdad6] text-[#93000a] hover:bg-[#ffdad6]/80 font-bold whitespace-nowrap flex items-center gap-1 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">emergency</span>
              <span>Critical Shipments (4)</span>
            </button>

            <button
              onClick={() => handleSend('Explain Chennai Cyclone DIS-0042 spatiotemporal trajectory.')}
              className="px-2.5 py-1 rounded bg-[#ffdbd1] text-[#b02f00] hover:bg-[#ffdbd1]/80 font-bold whitespace-nowrap flex items-center gap-1 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">thunderstorm</span>
              <span>Chennai Cyclone (DIS-0042)</span>
            </button>

            <button
              onClick={() => handleSend('Analyze high SLA breach risks ($184,500 total exposure).')}
              className="px-2.5 py-1 rounded bg-[#dfe9f5] text-[#131d25] hover:bg-[#dae3f0] whitespace-nowrap transition-colors"
            >
              High SLA Risks ($184k)
            </button>

            <button
              onClick={() => handleSend('Compare Plan B (BLR Reroute) trade-offs for bio-pharma payload.')}
              className="px-2.5 py-1 rounded bg-[#c1ecd7] text-[#002116] hover:bg-[#a5d0bc] font-bold whitespace-nowrap flex items-center gap-1 transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">alt_route</span>
              <span>Plan B Trade-offs</span>
            </button>

            <button
              onClick={() => handleSend('Compare Quantum QUBO 14ms bench versus classical Google OR-Tools.')}
              className="px-2.5 py-1 rounded bg-[#ecf4ff] text-[#414844] hover:bg-[#dfe9f5] whitespace-nowrap transition-colors"
            >
              Quantum QUBO vs MIP
            </button>
          </div>

          {/* Onboarding Diagnostic Box with 4 Clickable Prompts */}
          <div className="bg-white p-4 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col gap-3">
            <div className="flex items-center justify-between pb-2 border-b border-[#c1c8c3]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-[#002217] text-white flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[18px]">psychology</span>
                </div>
                <div>
                  <div className="font-sans font-bold text-xs text-[#002217]">FLUXQ REASONING ENGINE v4.2</div>
                  <div className="font-mono text-[10px] text-[#414844]">OPERATIONAL WORKBENCH // TIER-1 GLOBAL NETWORK</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] px-2 py-0.5 rounded bg-[#dfe9f5] text-[#131d25]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722]"></span>
                <span>1,428 CONSIGNMENTS MONITORED</span>
              </div>
            </div>

            <p className="text-xs font-sans text-[#131d25] leading-relaxed">
              Operational causality system ready. Cross-referencing real-time telemetry from 1,428 active consignments, live meteorological radars (Open-Meteo METAR VOMM), and Google OR-Tools / D-Wave QUBO mathematical recovery solvers. Ask direct causal questions or test replan hypotheses below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
              {[
                {
                  title: 'Why is shipment FLX-2048 classified as Critical (Risk 8.7)?',
                  sub: 'Cold-Chain Insulin · MAA ➔ DXB ➔ FRA · SLA Risk',
                },
                {
                  title: 'Which shipments intersect the 25km Chennai hazard polygon?',
                  sub: 'Disruption DIS-0042 · Monsoonal Deluge · 8 Nodes',
                },
                {
                  title: 'Compare Plan B (Air Cargo Upgrade) vs Plan A (Feeder) for FLX-2048.',
                  sub: 'Pareto Frontier · SLA Recovery vs +$82.10 Delta',
                },
                {
                  title: 'What changed in network SLA breach projections in the last 60 minutes?',
                  sub: 'Delta Matrix · $184,500 total exposure variance',
                },
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(item.title)}
                  className="text-left p-2.5 rounded bg-[#ecf4ff] hover:bg-[#dfe9f5] transition-colors border border-[#c1c8c3]/60 flex items-start gap-2 group"
                >
                  <span className="material-symbols-outlined text-[#ff5722] text-[18px] mt-0.5 group-hover:translate-x-0.5 transition-transform">
                    help
                  </span>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-xs text-[#131d25]">{item.title}</span>
                    <span className="font-mono text-[10px] text-[#414844] mt-0.5">{item.sub}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Conversation Stream */}
          <div className="flex flex-col gap-4">
            {messages.map((turn) => {
              if (turn.sender === 'user') {
                return (
                  <div key={turn.id} className="flex justify-end">
                    <div className="max-w-2xl bg-[#c1ecd7] p-3 rounded-lg border border-[#a5d0bc] shadow-xs">
                      <div className="flex items-center gap-1.5 mb-1 text-[#002116] text-[10px] font-mono">
                        <span className="material-symbols-outlined text-[14px]">account_circle</span>
                        <span className="font-bold uppercase tracking-wider">DR. A. VANCE // DISPATCH DESK 1</span>
                        <span className="ml-auto text-[#274e3f]">{turn.time}</span>
                      </div>
                      <p className="font-sans font-bold text-xs text-[#002116]">{turn.text}</p>
                    </div>
                  </div>
                );
              }

              // Assistant Cards
              if (turn.type === 'incident_assessment') {
                return (
                  <div key={turn.id} className="bg-white p-4 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between pb-2 border-b border-[#c1c8c3] gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#ff5722]"></span>
                        <span className="font-sans font-bold text-xs text-[#002217] uppercase tracking-wide">
                          INCIDENT ASSESSMENT // CONSIGNMENT FLX-2048
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#ffdad6] text-[#93000a] text-[10px] font-mono font-bold">
                          SEVERITY 8.7 // CRITICAL
                        </span>
                      </div>
                      <div className="font-mono text-[10px] text-[#717974] flex items-center gap-2">
                        <span>SOLVER: OR-TOOLS + QAOA</span>
                        <span>•</span>
                        <span>CONFIDENCE: 99.4%</span>
                      </div>
                    </div>

                    {/* Executive Summary */}
                    <div className="bg-[#ecf4ff] p-3 rounded border border-[#c1c8c3] text-xs font-sans text-[#131d25] leading-relaxed">
                      Consignment <strong className="font-bold text-[#002217]">FLX-2048</strong> (Cold-Chain Bio-Pharma / Insulin #992) is currently flagged <span className="text-[#ba1a1a] font-bold">CRITICAL</span> due to direct spatiotemporal intersection with Disruption <strong className="font-bold text-[#131d25]">DIS-0042</strong> at Chennai International Air Cargo Terminal (MAA). Ground-stop delays exceed current active refrigeration endurance envelopes.
                    </div>

                    {/* 1. Risk & SLA Quantification */}
                    <div>
                      <div className="text-[10px] font-mono text-[#414844] uppercase tracking-wider font-bold mb-1.5 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">speed</span>
                        <span>1. RISK &amp; SLA QUANTIFICATION</span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 font-mono">
                        <div className="bg-[#ecf4ff] p-2.5 rounded border border-[#c1c8c3]">
                          <div className="text-[9px] text-[#717974] uppercase">Composite Risk</div>
                          <div className="text-xl font-bold text-[#ba1a1a] mt-0.5">8.7<span className="text-xs text-[#717974] font-normal">/10</span></div>
                          <div className="text-[10px] text-[#ba1a1a] font-semibold">+4.2 delta (60m)</div>
                        </div>

                        <div className="bg-[#ecf4ff] p-2.5 rounded border border-[#c1c8c3]">
                          <div className="text-[9px] text-[#717974] uppercase">Breach Probability</div>
                          <div className="text-xl font-bold text-[#ff5722] mt-0.5">74.0%</div>
                          <div className="text-[10px] text-[#b02f00] font-semibold">Liquid Damages: $48k</div>
                        </div>

                        <div className="bg-[#ecf4ff] p-2.5 rounded border border-[#c1c8c3]">
                          <div className="text-[9px] text-[#717974] uppercase">Projected Arrival</div>
                          <div className="text-xl font-bold text-[#131d25] mt-0.5">18:40</div>
                          <div className="text-[10px] text-[#ba1a1a] font-semibold">+140m Schedule Delay</div>
                        </div>

                        <div className="bg-[#ecf4ff] p-2.5 rounded border border-[#c1c8c3]">
                          <div className="text-[9px] text-[#717974] uppercase">Cold SLA Buffer Slack</div>
                          <div className="text-xl font-bold text-[#ba1a1a] mt-0.5">-35m</div>
                          <div className="text-[9px] text-[#ba1a1a] font-bold">REFRIGERATION EXHAUSTED</div>
                        </div>
                      </div>
                    </div>

                    {/* 2. Causal Attribution Engine (SHAP Values) */}
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                        <div className="font-bold text-[#414844] uppercase tracking-wider flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">query_stats</span>
                          <span>2. CAUSAL ATTRIBUTION ENGINE (EXPLAINABILITY / SHAP ROOTS)</span>
                        </div>
                        <span className="text-[#717974]">Kernel SHAP v3.8 · Normalised baseline</span>
                      </div>

                      <div className="bg-[#ecf4ff] p-3 rounded border border-[#c1c8c3] space-y-2 font-mono text-[11px]">
                        <div>
                          <div className="flex justify-between text-xs mb-0.5">
                            <span className="font-sans font-semibold text-[#131d25]">Severe Weather Hazard (Cyclone Cell MAA, 82mm/hr deluge)</span>
                            <span className="font-bold text-[#ba1a1a]">+32% Risk Contribution</span>
                          </div>
                          <div className="w-full bg-[#dae3f0] h-2 rounded overflow-hidden">
                            <div className="bg-[#ba1a1a] h-full w-[32%]"></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-0.5">
                            <span className="font-sans font-semibold text-[#131d25]">Runway 07/25 Ground Hold &amp; Air Freight Slot Congestion</span>
                            <span className="font-bold text-[#ff5722]">+21% Risk Contribution</span>
                          </div>
                          <div className="w-full bg-[#dae3f0] h-2 rounded overflow-hidden">
                            <div className="bg-[#ff5722] h-full w-[21%]"></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-0.5">
                            <span className="font-sans font-semibold text-[#131d25]">Depleted Phase-Change Active Cooling Slack (-35m variance)</span>
                            <span className="font-bold text-[#0f382a]">+17% Risk Contribution</span>
                          </div>
                          <div className="w-full bg-[#dae3f0] h-2 rounded overflow-hidden">
                            <div className="bg-[#0f382a] h-full w-[17%]"></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-0.5">
                            <span className="font-sans font-semibold text-[#131d25]">Regional Feeder Truck Turnaround Lag (NH-48 waterlogging)</span>
                            <span className="text-[#717974]">+8% Risk Contribution</span>
                          </div>
                          <div className="w-full bg-[#dae3f0] h-2 rounded overflow-hidden">
                            <div className="bg-[#717974] h-full w-[8%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3. Recommended Operator Action (Plan B Pareto Optimal) */}
                    <div className="bg-[#dfe9f5] p-3.5 rounded-lg border border-[#c1c8c3]">
                      <div className="flex items-center justify-between pb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[#ff5722] text-[18px]">recommend</span>
                          <span className="font-sans font-bold text-xs text-[#002217] uppercase tracking-wide">
                            3. RECOMMENDED OPERATOR ACTION (PARETO OPTIMAL)
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-[#c1ecd7] text-[#002116] font-mono text-[10px] font-bold">
                          RECOMMENDATION READY
                        </span>
                      </div>

                      <p className="text-xs font-sans text-[#131d25] my-2 leading-relaxed">
                        FluxQ Mixed-Integer Optimizer has synthesized 4 candidate recovery branches. <strong>Plan B (Intermodal Air Cargo Upgrade via Bengaluru BLR)</strong> is recommended under strict bio-pharma temperature constraints. It mitigates route interruption by cutting SLA breach probability from <strong className="text-[#ba1a1a]">74.0%</strong> to <strong className="text-[#16a34a]">2.0%</strong>, recovers <strong>130 minutes</strong> of critical transit schedule, and incurs a net surcharge of <strong>₹6,800 ($82.10 USD)</strong>.
                      </p>

                      {/* Side-by-side comparison */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-2 font-mono text-[11px]">
                        <div className="bg-white p-2.5 rounded border border-[#c1c8c3]">
                          <div className="text-[10px] font-bold text-[#ba1a1a] uppercase">CURRENT TRAJECTORY (DEFAULT FEEDS)</div>
                          <div className="flex justify-between mt-1 text-[#414844]">
                            <span>Arrival Time:</span>
                            <span className="text-[#ba1a1a] font-bold">18:40 (+140m)</span>
                          </div>
                          <div className="flex justify-between text-[#414844]">
                            <span>SLA Breach Prob:</span>
                            <span className="text-[#ba1a1a] font-bold">74%</span>
                          </div>
                          <div className="flex justify-between text-[#414844]">
                            <span>Refrigeration Breach:</span>
                            <span className="text-[#ba1a1a] font-bold">HIGH (Spoilage Imminent)</span>
                          </div>
                        </div>

                        <div className="bg-white p-2.5 rounded border border-[#16a34a]/60">
                          <div className="text-[10px] font-bold text-[#16a34a] uppercase">RECOMMENDED: PLAN B (BLR REROUTE)</div>
                          <div className="flex justify-between mt-1 text-[#414844]">
                            <span>Arrival Time:</span>
                            <span className="text-[#16a34a] font-bold">16:30 (+10m SLA Compliant)</span>
                          </div>
                          <div className="flex justify-between text-[#414844]">
                            <span>SLA Breach Prob:</span>
                            <span className="text-[#16a34a] font-bold">2.0%</span>
                          </div>
                          <div className="flex justify-between text-[#414844]">
                            <span>Cost Variance:</span>
                            <span className="text-[#131d25] font-bold">+$82.10 USD (Expedited)</span>
                          </div>
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        <button
                          onClick={() => onNavigate('route-map')}
                          className="py-1.5 px-3 rounded bg-[#ff5722] hover:bg-[#e64a19] text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow-xs flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-[16px]">task_alt</span>
                          <span>OPEN RECOVERY CENTER &amp; SIGN-OFF →</span>
                        </button>
                        <button
                          onClick={() => onNavigate('route-map')}
                          className="py-1.5 px-3 rounded bg-white hover:bg-[#ecf4ff] text-[#131d25] border border-[#c1c8c3] font-sans text-xs font-bold transition-colors flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-[16px]">map</span>
                          <span>VIEW ON ROUTE MAP</span>
                        </button>
                        <button
                          onClick={() => alert('Cryptographic Root Proof verified: SHA256 matches immutable ledger.')}
                          className="py-1.5 px-3 rounded bg-white hover:bg-[#ecf4ff] text-[#414844] border border-[#c1c8c3] font-sans text-xs transition-colors flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-[16px]">lock</span>
                          <span>INSPECT AUDIT PROOF</span>
                        </button>
                      </div>
                    </div>

                    {/* Data Provenance Footer */}
                    <div className="bg-[#ecf4ff] px-3 py-1.5 rounded flex flex-wrap items-center justify-between text-[10px] font-mono text-[#414844] border border-[#c1c8c3]">
                      <div className="flex items-center gap-3">
                        <strong className="text-[#002217]">DATA PROVENANCE:</strong>
                        <span>METAR VOMM (14:20Z)</span>
                        <span>•</span>
                        <span>AIS Maritime/Aero Hub</span>
                        <span>•</span>
                        <span>OR-Tools v9.8 + QAOA</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#16a34a] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
                        <span>HASH: 0x9f18a2e0...verified</span>
                      </div>
                    </div>
                  </div>
                );
              }

              if (turn.type === 'impact_cascade') {
                return (
                  <div key={turn.id} className="bg-white p-4 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col gap-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#c1c8c3]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#002217] text-[18px]">hub</span>
                        <span className="font-sans font-bold text-xs text-[#002217] uppercase tracking-wide">
                          IMPACT CASCADE // MONSOON POLYGON DIS-0042 (CHENNAI 25KM)
                        </span>
                      </div>
                      <span className="text-[10px] font-mono bg-[#dfe9f5] text-[#131d25] px-2 py-0.5 rounded font-bold">
                        8 TOTAL EXPOSED · 3 CRITICAL SLA HAZARDS
                      </span>
                    </div>

                    <p className="text-xs font-sans text-[#131d25]">
                      The geospatial storm envelope intersects <strong>8 active consignments</strong> within the southern India corridor. <strong>3 shipments</strong> face immediate contractual breach deadlines with an aggregate liquidated damages risk of <strong>$184,500 USD</strong> if unmitigated within 45 minutes:
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left font-mono text-[11px]">
                        <thead>
                          <tr className="bg-[#ecf4ff] border-b border-[#c1c8c3] text-[#717974] text-[9px] uppercase tracking-wider">
                            <th className="py-2 px-2">Consignment</th>
                            <th className="py-2 px-2">Manifest Type</th>
                            <th className="py-2 px-2">Current Route</th>
                            <th className="py-2 px-2 text-right">Risk Score</th>
                            <th className="py-2 px-2 text-right">SLA Breach %</th>
                            <th className="py-2 px-2 text-right">Penalty Exp.</th>
                            <th className="py-2 px-2">Mitigation Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#dae3f0]">
                          <tr className="hover:bg-[#ecf4ff] transition-colors">
                            <td className="py-2 px-2 font-bold text-[#ba1a1a] flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a]"></span>
                              FLX-2048
                            </td>
                            <td className="py-2 px-2 font-sans text-xs text-[#131d25]">Pharma / Insulin #992</td>
                            <td className="py-2 px-2 text-[#414844]">MAA → DXB → FRA</td>
                            <td className="py-2 px-2 text-right font-bold text-[#ba1a1a]">8.7</td>
                            <td className="py-2 px-2 text-right font-bold text-[#ba1a1a]">74.0%</td>
                            <td className="py-2 px-2 text-right font-bold text-[#131d25]">$48,000</td>
                            <td className="py-2 px-2">
                              <span className="px-2 py-0.5 rounded bg-[#c1ecd7] text-[#002116] font-bold text-[10px]">
                                Plan B Ready
                              </span>
                            </td>
                          </tr>

                          <tr className="hover:bg-[#ecf4ff] transition-colors">
                            <td className="py-2 px-2 font-bold text-[#ff5722] flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722]"></span>
                              FLX-3109
                            </td>
                            <td className="py-2 px-2 font-sans text-xs text-[#131d25]">Avionics Inertial Guidance</td>
                            <td className="py-2 px-2 text-[#414844]">BLR → MAA → SIN</td>
                            <td className="py-2 px-2 text-right font-bold text-[#ff5722]">7.2</td>
                            <td className="py-2 px-2 text-right font-bold text-[#ff5722]">48.2%</td>
                            <td className="py-2 px-2 text-right font-bold text-[#131d25]">$92,500</td>
                            <td className="py-2 px-2">
                              <span className="px-2 py-0.5 rounded bg-[#dfe9f5] text-[#131d25] font-semibold text-[10px]">
                                Feeder Re-dispatch
                              </span>
                            </td>
                          </tr>

                          <tr className="hover:bg-[#ecf4ff] transition-colors">
                            <td className="py-2 px-2 font-bold text-[#ff5722] flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722]"></span>
                              FLX-1892
                            </td>
                            <td className="py-2 px-2 font-sans text-xs text-[#131d25]">Lithium EV Powertrains</td>
                            <td className="py-2 px-2 text-[#414844]">MAA Sea → RTM</td>
                            <td className="py-2 px-2 text-right font-bold text-[#ff5722]">6.9</td>
                            <td className="py-2 px-2 text-right font-bold text-[#ff5722]">42.0%</td>
                            <td className="py-2 px-2 text-right font-bold text-[#131d25]">$44,000</td>
                            <td className="py-2 px-2">
                              <span className="px-2 py-0.5 rounded bg-[#dfe9f5] text-[#131d25] font-semibold text-[10px]">
                                Rail Shift In Eval
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#dae3f0]">
                      <span className="text-[10px] font-mono text-[#717974]">
                        Remaining 5 consignments within buffer threshold (&lt;20% breach prob).
                      </span>
                      <button
                        onClick={() => onNavigate('route-map')}
                        className="py-1 px-3 rounded bg-[#ecf4ff] hover:bg-[#dfe9f5] text-[#002217] font-mono text-[11px] font-bold transition-colors flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[14px]">filter_alt</span>
                        <span>FILTER ROUTE MAP FOR EXPOSED BATCH →</span>
                      </button>
                    </div>
                  </div>
                );
              }

              // Plain assistant response
              return (
                <div key={turn.id} className="bg-white p-4 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col gap-2">
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#c1c8c3]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#16a34a]"></span>
                      <span className="font-sans font-bold text-xs text-[#002217]">QUERY RESOLUTION ENGINE</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#c1ecd7] text-[#002116] font-mono text-[10px] font-bold">
                        SOLVER CONVERGED
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#717974]">{turn.time}</span>
                  </div>
                  <p className="text-xs font-sans text-[#131d25] leading-relaxed">{turn.text}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom Chat Prompt Bar */}
          <div className="bg-white p-3 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => alert('Attaching telemetry stream / GeoJSON vector polygon...')}
                className="p-2 rounded bg-[#ecf4ff] hover:bg-[#dfe9f5] text-[#414844] transition-colors"
                title="Attach Telemetry / GeoJSON / Node Manifest"
              >
                <span className="material-symbols-outlined text-[18px]">attach_file</span>
              </button>

              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend();
                }}
                placeholder="Ask FluxQ about shipments, disruptions, risk models, recovery trade-offs, or audit hashes..."
                className="flex-1 h-10 px-3 rounded bg-[#ecf4ff] border border-[#c1c8c3] text-xs font-sans text-[#131d25] placeholder:text-[#717974] focus:outline-none focus:border-[#ff5722] focus:bg-white transition-colors"
              />

              <button
                onClick={() => alert('Listening for operator voice dispatch...')}
                className="p-2 rounded bg-[#ecf4ff] hover:bg-[#dfe9f5] text-[#414844] transition-colors"
                title="Voice Input"
              >
                <span className="material-symbols-outlined text-[18px]">mic</span>
              </button>

              <button
                onClick={() => handleSend()}
                className="h-10 px-4 bg-[#002217] hover:bg-[#0f382a] text-white rounded font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>SEND</span>
                <span className="material-symbols-outlined text-[#ff5722] text-[16px]">arrow_forward</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#717974] px-1">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px] text-[#0f382a]">shield</span>
                FluxQ queries verified telemetry &amp; mathematical solver state. Decisions are logged to the immutable ledger.
              </span>
              <span>Press ↵ Enter to solve</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Live Operational Context (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] font-mono uppercase text-[#414844] font-bold tracking-wider">
              LIVE OPERATIONAL CONTEXT
            </span>
            <span className="text-[10px] font-mono text-[#002217] font-semibold">FEED: EPSG:4326 LIVE</span>
          </div>

          {/* Network Snapshot Card */}
          <div className="bg-white p-4 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col gap-3">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#c1c8c3]">
              <div className="flex items-center gap-1.5 font-sans font-bold text-xs text-[#002217]">
                <span className="material-symbols-outlined text-[16px]">travel_explore</span>
                <span>Network Snapshot</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#ffdbd1] text-[#b02f00] text-[10px] font-mono font-bold">
                MODERATE ALERT
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 font-mono text-[11px]">
              <div className="bg-[#ecf4ff] p-2.5 rounded border border-[#c1c8c3]">
                <div className="text-[9px] text-[#717974] uppercase">Active Disruptions</div>
                <div className="text-xl font-bold text-[#ba1a1a] mt-0.5">
                  1 <span className="text-xs text-[#717974] font-normal">Crit / 2 Mod</span>
                </div>
                <div className="text-[10px] text-[#717974] mt-0.5">MAA, RTM, SUEZ</div>
              </div>

              <div className="bg-[#ecf4ff] p-2.5 rounded border border-[#c1c8c3]">
                <div className="text-[9px] text-[#717974] uppercase">Exposed Consignments</div>
                <div className="text-xl font-bold text-[#ff5722] mt-0.5">8</div>
                <div className="text-[10px] text-[#717974] mt-0.5">3 in high SLA hazard</div>
              </div>
            </div>

            <div className="bg-[#ecf4ff] p-2.5 rounded border border-[#c1c8c3] font-mono text-[11px]">
              <div className="flex justify-between mb-1">
                <span className="text-[#414844]">Liquid Damages Exposure:</span>
                <span className="text-[#ba1a1a] font-bold">$184,500 USD</span>
              </div>
              <div className="w-full bg-[#dae3f0] h-1.5 rounded overflow-hidden">
                <div className="bg-[#ba1a1a] h-full w-[68%]"></div>
              </div>
              <div className="flex justify-between text-[10px] text-[#717974] mt-1.5">
                <span>Buffer slack capacity: 42m</span>
                <span>Threshold: -30m max</span>
              </div>
            </div>
          </div>

          {/* Active Focus Entity Card */}
          <div className="bg-white p-4 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col gap-2.5">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#c1c8c3]">
              <div className="flex items-center gap-1.5 font-sans font-bold text-xs text-[#002217]">
                <span className="w-2 h-2 rounded-full bg-[#ff5722]"></span>
                <span>FOCUS: FLX-2048</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#ffdad6] text-[#93000a] text-[10px] font-mono font-bold">
                SIGN-OFF PENDING
              </span>
            </div>

            <div className="space-y-1.5 text-xs font-sans">
              <div className="flex justify-between">
                <span className="text-[#717974]">Manifest:</span>
                <span className="font-semibold text-[#131d25]">Cold-Chain Insulin 100IU</span>
              </div>
              <div className="flex justify-between font-mono text-[11px]">
                <span className="text-[#717974]">Corridor:</span>
                <span className="text-[#131d25]">MAA → DXB → FRA</span>
              </div>
              <div className="flex justify-between font-mono text-[11px]">
                <span className="text-[#717974]">Live Temp Sensor:</span>
                <span className="text-[#0f382a] font-bold">+2.4°C (Target: 2-8°C)</span>
              </div>
              <div className="flex justify-between font-mono text-[11px]">
                <span className="text-[#717974]">Passive Dry-Ice Slack:</span>
                <span className="text-[#ff5722] font-bold">78h remain (-35m delay loss)</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#dae3f0] flex items-center justify-between">
              <button
                onClick={() => onNavigate('route-map')}
                className="text-[11px] font-mono text-[#ff5722] hover:text-[#b02f00] font-bold uppercase flex items-center gap-1 transition-colors"
              >
                <span>Focus on Route Map</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </button>
              <span className="text-[10px] font-mono text-[#717974]">AIS TAG: #992-MAA</span>
            </div>
          </div>

          {/* Model Transparency & Solver Diagnostics */}
          <div className="bg-white p-4 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col gap-2.5">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#c1c8c3]">
              <div className="flex items-center gap-1.5 font-sans font-bold text-xs text-[#002217]">
                <span className="material-symbols-outlined text-[16px]">memory</span>
                <span>Model &amp; Solver Core</span>
              </div>
              <span className="text-[10px] font-mono text-[#717974]">v4.19-RT</span>
            </div>

            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="p-2 rounded bg-[#ecf4ff] flex justify-between items-center">
                <div>
                  <div className="font-semibold text-[#131d25]">Cox Hazard Engine</div>
                  <div className="text-[9px] text-[#717974]">Gradient Boosted Survival v4.2</div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#0f382a]">99.4%</span>
                  <div className="text-[9px] text-[#717974]">CONFIDENCE</div>
                </div>
              </div>

              <div className="p-2 rounded bg-[#ecf4ff] flex justify-between items-center">
                <div>
                  <div className="font-semibold text-[#131d25]">Classical MIP Solver</div>
                  <div className="text-[9px] text-[#717974]">Google OR-Tools v9.8</div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#131d25]">38.4ms</span>
                  <div className="text-[9px] text-[#717974]">GAP &lt; 0.01%</div>
                </div>
              </div>

              <div className="p-2 rounded bg-[#ecf4ff] flex justify-between items-center">
                <div>
                  <div className="font-semibold text-[#131d25]">Quantum QUBO / QAOA</div>
                  <div className="text-[9px] text-[#717974]">D-Wave Advantage 4.1 Bench</div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#002217]">14.1ms</span>
                  <div className="text-[9px] text-[#ff5722] font-bold">QCR +11.54%</div>
                </div>
              </div>

              <div className="p-2 rounded bg-[#ecf4ff] text-[10px] flex flex-col gap-0.5">
                <div className="flex justify-between text-[#717974]">
                  <span>Cryptographic Root:</span>
                  <span className="text-[#0f382a] font-bold">IMMUTABLE</span>
                </div>
                <div className="text-[#131d25] font-mono truncate">
                  0x8f2a410b9cd8e34279b90fa619d882a...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
