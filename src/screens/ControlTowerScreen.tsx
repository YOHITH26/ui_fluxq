import React, { useState } from 'react';
import { ScreenId } from '../types';

interface ControlTowerScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const ControlTowerScreen: React.FC<ControlTowerScreenProps> = ({ onNavigate }) => {
  const [activeLayer, setActiveLayer] = useState<'all' | 'weather' | 'port' | 'air'>('all');
  const [selectedShipment, setSelectedShipment] = useState<string>('FLX-2048');

  return (
    <div className="flex flex-col gap-4 pb-12">
      {/* Subheader banner */}
      <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-[#c1c8c3] text-[11px] font-mono shadow-xs">
        <div className="flex items-center gap-2 overflow-x-auto">
          <span className="font-bold text-[#131d25] uppercase">⬡ PIPELINE ::</span>
          <span className="px-2 py-0.5 rounded bg-[#002217] text-[#c1ecd7] font-bold">
            01 SENSE / 02 PREDICT
          </span>
          <span className="text-[#c1c8c3]">→</span>
          <span className="text-[#414844]">03 EXPLAIN</span>
          <span className="text-[#c1c8c3]">→</span>
          <span className="text-[#414844]">04 OPTIMIZE</span>
          <span className="text-[#c1c8c3]">→</span>
          <span className="text-[#414844]">05 RECOMMEND</span>
          <span className="text-[#c1c8c3]">·</span>
          <span className="text-[#414844]">POLL: 12s AGO</span>
          <span className="text-[#c1c8c3]">·</span>
          <span className="font-semibold text-[#002217]">APAC-EU OPERATIONAL CORRIDOR</span>
        </div>
        <div className="hidden md:flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#c1ecd7] text-[#002116] font-bold shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
          <span>LIVE TELEMETRY</span>
        </div>
      </div>

      {/* Top 5 KPI Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {/* Card 1 */}
        <div className="bg-white p-3.5 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#414844] text-[10px] font-sans font-bold uppercase tracking-wider">
            <span>ACTIVE SHIPMENTS</span>
            <span className="material-symbols-outlined text-[16px]">local_shipping</span>
          </div>
          <div className="my-1">
            <div className="text-2xl lg:text-3xl font-mono font-bold text-[#131d25] tracking-tight">1,428</div>
            <div className="text-[11px] font-mono text-[#3f6656] font-medium">+12 IN TRANSIT · 94.2% ON-TIME</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-3.5 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#414844] text-[10px] font-sans font-bold uppercase tracking-wider">
            <span>AT RISK / EXPOSED</span>
            <span className="px-1.5 py-0.2 rounded bg-[#ffdad6] text-[#93000a] text-[9px] font-mono font-bold">
              ELEVATED
            </span>
          </div>
          <div className="my-1">
            <div className="text-2xl lg:text-3xl font-mono font-bold text-[#ff5722] tracking-tight">18</div>
            <div className="text-[11px] font-mono text-[#414844]">
              <span className="font-bold text-[#ff5722]">11 MODERATE</span> · <span className="font-bold text-[#ba1a1a]">7 HIGH</span>
            </div>
            <div className="text-[10px] font-mono text-[#717974] truncate">Exposures in MAA sector</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-3.5 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#414844] text-[10px] font-sans font-bold uppercase tracking-wider">
            <span>CRITICAL SLA BREACH</span>
            <span className="material-symbols-outlined text-[16px] text-[#ba1a1a]">emergency</span>
          </div>
          <div className="my-1">
            <div className="text-2xl lg:text-3xl font-mono font-bold text-[#ba1a1a] tracking-tight">03</div>
            <div className="text-[11px] font-mono text-[#ba1a1a] font-semibold">&gt;90% PROBABILITY &lt; 4H</div>
            <div className="text-[10px] font-mono text-[#414844]">IMPACT COST: $142,500 EXP</div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-3.5 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#414844] text-[10px] font-sans font-bold uppercase tracking-wider">
            <span>AVG ETA DEVIATION</span>
            <span className="material-symbols-outlined text-[16px]">schedule</span>
          </div>
          <div className="my-1">
            <div className="text-2xl lg:text-3xl font-mono font-bold text-[#ff5722] tracking-tight">+42.5m</div>
            <div className="text-[11px] font-mono text-[#414844]">NETWORK CONFORMANCE</div>
            <div className="text-[10px] font-mono text-[#717974]">NOMINAL THRESHOLD: +15m</div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-3.5 rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#414844] text-[10px] font-sans font-bold uppercase tracking-wider">
            <span>ACTIVE DISRUPTIONS</span>
            <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse"></span>
          </div>
          <div className="my-1">
            <div className="text-lg font-sans font-bold text-[#ba1a1a] tracking-tight uppercase leading-snug">
              SEVERE WEATHER
            </div>
            <div className="text-[11px] font-mono text-[#414844]">CHENNAI ZONE · 25KM RADIUS</div>
            <div className="text-[10px] font-mono text-[#b02f00] font-semibold">MONSOON CYCLONE DISRUPT-0042</div>
          </div>
        </div>
      </div>

      {/* Main Section: Center Topology Map & Incident Summary Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left 8 cols: Corridor Risk & Multimodal Topology */}
        <div className="lg:col-span-8 bg-white rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col overflow-hidden">
          {/* Map Header */}
          <div className="p-3 border-b border-[#c1c8c3] flex flex-wrap items-center justify-between gap-2 bg-[#ecf4ff]">
            <div>
              <div className="font-sans font-bold text-xs text-[#002217] uppercase tracking-wide">
                CORRIDOR RISK & MULTIMODAL TOPOLOGY
              </div>
              <div className="text-[10px] font-mono text-[#414844]">
                GEOSPATIAL PROJECTION · APAC &gt; MEA &gt; EU CONDUITS
              </div>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-mono">
              <button
                onClick={() => setActiveLayer('all')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  activeLayer === 'all' ? 'bg-[#002217] text-white' : 'bg-white text-[#414844] hover:bg-[#dfe9f5]'
                }`}
              >
                ALL LAYERS
              </button>
              <button
                onClick={() => setActiveLayer('weather')}
                className={`px-2 py-0.5 rounded text-[10px] ${
                  activeLayer === 'weather' ? 'bg-[#002217] text-white' : 'bg-white text-[#414844] hover:bg-[#dfe9f5]'
                }`}
              >
                WEATHER
              </button>
              <button
                onClick={() => setActiveLayer('port')}
                className={`px-2 py-0.5 rounded text-[10px] ${
                  activeLayer === 'port' ? 'bg-[#002217] text-white' : 'bg-white text-[#414844] hover:bg-[#dfe9f5]'
                }`}
              >
                PORT AIS
              </button>
              <button
                onClick={() => setActiveLayer('air')}
                className={`px-2 py-0.5 rounded text-[10px] ${
                  activeLayer === 'air' ? 'bg-[#002217] text-white' : 'bg-white text-[#414844] hover:bg-[#dfe9f5]'
                }`}
              >
                AIR AIS
              </button>
              <div className="h-4 w-px bg-[#c1c8c3] mx-1"></div>
              <button className="w-5 h-5 flex items-center justify-center bg-white rounded text-[#131d25] font-bold hover:bg-[#dfe9f5]">
                +
              </button>
              <button className="w-5 h-5 flex items-center justify-center bg-white rounded text-[#131d25] font-bold hover:bg-[#dfe9f5]">
                -
              </button>
            </div>
          </div>

          {/* Interactive SVG Map Canvas */}
          <div className="relative w-full h-[380px] bg-[#f7f9ff] overflow-hidden select-none">
            {/* SVG Visualizer */}
            <svg className="w-full h-full" viewBox="0 0 850 380">
              <defs>
                <pattern id="ct-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#0f382a" fillOpacity="0.06" />
                </pattern>
                <radialGradient id="ct-cyclone" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ba1a1a" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#ff5722" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ff5722" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect width="100%" height="100%" fill="#f7f9ff" />
              <rect width="100%" height="100%" fill="url(#ct-grid)" />

              {/* Generalized Landmass outlines */}
              <g fill="#e5effb" opacity="0.8">
                {/* Europe */}
                <path d="M 50 40 L 140 30 L 190 70 L 160 120 L 90 110 Z" />
                {/* Arabian Peninsula */}
                <path d="M 280 150 L 370 140 L 400 190 L 360 240 L 290 220 Z" />
                {/* Indian Peninsula */}
                <path d="M 440 160 L 530 150 L 580 200 L 530 290 L 470 250 Z" />
                {/* Southeast Asia */}
                <path d="M 640 210 L 710 220 L 740 280 L 680 310 Z" />
              </g>

              {/* Connecting routes */}
              {/* Sea Route */}
              <path
                d="M 120 70 Q 280 200 450 250 T 670 290"
                fill="none"
                stroke="#0f382a"
                strokeWidth="2"
                strokeDasharray="6 4"
                opacity="0.6"
              />

              {/* Main Air Corridor: RTM -> FRA -> DXB -> MAA -> SIN */}
              <path
                d="M 110 50 L 150 70 L 360 160 L 520 230 L 670 290"
                fill="none"
                stroke="#717974"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />

              {/* Disrupted Segment (DXB to Chennai MAA) */}
              <path
                d="M 360 160 Q 440 190 520 230"
                fill="none"
                stroke="#ba1a1a"
                strokeWidth="3"
                className="animate-pulse"
              />

              {/* CHENNAI CYCLONE RADAR RING */}
              <g transform="translate(520, 230)">
                <circle cx="0" cy="0" r="54" fill="url(#ct-cyclone)" className="animate-pulse" />
                <circle cx="0" cy="0" r="54" fill="none" stroke="#ba1a1a" strokeWidth="1.5" strokeDasharray="4 3" />
                <circle cx="0" cy="0" r="32" fill="none" stroke="#ff5722" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="5" fill="#ba1a1a" />
                <text x="12" y="-12" fill="#ba1a1a" fontFamily="JetBrains Mono" fontSize="10" fontWeight="bold">
                  CHENNAI [CYCLONE EYE]
                </text>
                <text x="12" y="0" fill="#414844" fontFamily="JetBrains Mono" fontSize="9">
                  Radius 25km • 8 Shipments In-Sector
                </text>
              </g>

              {/* Nodes */}
              {/* Rotterdam */}
              <g transform="translate(110, 50)">
                <rect x="-4" y="-4" width="8" height="8" fill="#002217" />
                <text x="8" y="3" fill="#131d25" fontFamily="Inter" fontSize="10" fontWeight="bold">
                  RTM • ROTTERDAM
                </text>
                <text x="8" y="13" fill="#717974" fontFamily="JetBrains Mono" fontSize="8">
                  Port Terminal Maas
                </text>
              </g>

              {/* Frankfurt */}
              <g transform="translate(170, 70)">
                <circle cx="0" cy="0" r="4.5" fill="#002217" stroke="#ffffff" strokeWidth="1.5" />
                <text x="8" y="3" fill="#131d25" fontFamily="Inter" fontSize="10" fontWeight="bold">
                  FRA • FRANKFURT
                </text>
                <text x="8" y="13" fill="#717974" fontFamily="JetBrains Mono" fontSize="8">
                  Cargo Gateway Alpha
                </text>
              </g>

              {/* Dubai */}
              <g transform="translate(360, 160)">
                <circle cx="0" cy="0" r="5" fill="#002217" stroke="#ffffff" strokeWidth="1.5" />
                <text x="8" y="-4" fill="#131d25" fontFamily="Inter" fontSize="10" fontWeight="bold">
                  DXB • DUBAI
                </text>
                <text x="8" y="7" fill="#b02f00" fontFamily="JetBrains Mono" fontSize="8" fontWeight="600">
                  Congestion: High (+45m buffer)
                </text>
              </g>

              {/* Consignment FLX-1892 */}
              <g transform="translate(425, 195)">
                <circle cx="0" cy="0" r="3.5" fill="#ff5722" />
                <text x="-35" y="-6" fill="#541100" fontFamily="JetBrains Mono" fontSize="8" fontWeight="bold">
                  FLX-1892 6.9
                </text>
              </g>

              {/* Consignment FLX-2048 (Target Critical) */}
              <g
                transform="translate(485, 218)"
                className="cursor-pointer"
                onClick={() => setSelectedShipment('FLX-2048')}
              >
                <circle cx="0" cy="0" r="10" fill="none" stroke="#ba1a1a" strokeWidth="1.5" className="animate-ping" />
                <circle cx="0" cy="0" r="5" fill="#ba1a1a" stroke="#ffffff" strokeWidth="1.5" />
                <rect x="-35" y="-22" width="76" height="15" rx="2" fill="#ba1a1a" />
                <text x="3" y="-11" fill="#ffffff" fontFamily="JetBrains Mono" fontSize="8" fontWeight="bold" textAnchor="middle">
                  FLX-2048 CRIT 8.7
                </text>
                <text x="3" y="15" fill="#ba1a1a" fontFamily="JetBrains Mono" fontSize="7" fontWeight="bold" textAnchor="middle">
                  PHARMA +140m
                </text>
              </g>

              {/* Consignment FLX-3109 */}
              <g transform="translate(565, 252)">
                <circle cx="0" cy="0" r="4" fill="#ff5722" />
                <text x="8" y="1" fill="#b02f00" fontFamily="JetBrains Mono" fontSize="8" fontWeight="bold">
                  FLX-3109 7.2
                </text>
                <text x="8" y="10" fill="#717974" fontFamily="JetBrains Mono" fontSize="7">
                  +95m DELAY
                </text>
              </g>

              {/* Singapore */}
              <g transform="translate(670, 290)">
                <circle cx="0" cy="0" r="5" fill="#002217" stroke="#ffffff" strokeWidth="1.5" />
                <text x="8" y="2" fill="#131d25" fontFamily="Inter" fontSize="10" fontWeight="bold">
                  SIN • SINGAPORE
                </text>
                <text x="8" y="12" fill="#717974" fontFamily="JetBrains Mono" fontSize="8">
                  Changi Logipark
                </text>
              </g>
            </svg>

            {/* Top-left Disruption Badge Overlay */}
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur p-2 rounded border border-[#c1c8c3] text-[11px] font-mono shadow-xs max-w-xs">
              <div className="flex items-center gap-1.5 text-[#ba1a1a] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse"></span>
                <span>ACTIVE DISRUPTION DIS-0042</span>
              </div>
              <div className="text-[#131d25] font-sans font-semibold mt-0.5">
                Chennai Metro & Port Marine Zone
              </div>
              <div className="text-[10px] text-[#414844] mt-0.5">
                Wind: 78 km/h • Sea State 5 • Runway 07/25 Closed
              </div>
            </div>

            {/* Bottom-left Legend Overlay */}
            <div className="absolute bottom-2 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded text-[10px] font-mono border border-[#c1c8c3] flex items-center gap-3">
              <span className="font-bold text-[#414844]">RISK INDEX:</span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#a5d0bc]"></span> &lt;2.0 Low
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#dae3f0]"></span> 2.0-5.0 Mod
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#ff5722]"></span> 5.1-8.0 High
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#ba1a1a]"></span> &gt;8.0 Crit
              </span>
            </div>

            {/* Bottom-right Projection Tag */}
            <div className="absolute bottom-2 right-3 text-[10px] font-mono text-[#717974]">
              MULTIMODAL: AIR / SEA / ROAD • GEO-EPSG: 4326
            </div>
          </div>
        </div>

        {/* Right 4 cols: Incident-0042 Detail Card */}
        <div className="lg:col-span-4 bg-white rounded-lg border border-[#c1c8c3] shadow-xs p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#c1c8c3]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#ba1a1a]">warning</span>
                <div>
                  <div className="text-[10px] font-mono text-[#717974] uppercase">INCIDENT-0042</div>
                  <div className="font-sans font-bold text-xs text-[#ba1a1a]">SEVERE WEATHER MONSOON</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#ffdad6] text-[#93000a] text-[10px] font-mono font-bold">
                CRITICAL
              </span>
            </div>

            {/* Incident Metrics Grid */}
            <div className="grid grid-cols-2 gap-2 mt-3 font-mono text-[11px]">
              <div className="p-2 rounded bg-[#ecf4ff]">
                <div className="text-[10px] text-[#717974] uppercase">EPICENTER COORDINATES</div>
                <div className="font-bold text-[#131d25] mt-0.5">13.0827° N, 80.2707° E</div>
                <div className="text-[9px] text-[#414844] truncate">Chennai Metro & Coastal Hub</div>
              </div>

              <div className="p-2 rounded bg-[#ecf4ff]">
                <div className="text-[10px] text-[#717974] uppercase">DETECTION TIME</div>
                <div className="font-bold text-[#131d25] mt-0.5">06:14 UTC (T-46m)</div>
                <div className="text-[9px] text-[#3f6656]">Auto-ingested radar</div>
              </div>

              <div className="p-2 rounded bg-[#ecf4ff]">
                <div className="text-[10px] text-[#717974] uppercase">IMPACT RADIUS</div>
                <div className="font-bold text-[#ff5722] text-sm mt-0.5">25.0 km</div>
                <div className="text-[9px] text-[#414844]">Perimeter active</div>
              </div>

              <div className="p-2 rounded bg-[#ecf4ff]">
                <div className="text-[10px] text-[#717974] uppercase">EXPECTED DELAY</div>
                <div className="font-bold text-[#ba1a1a] text-sm mt-0.5">+120 min</div>
                <div className="text-[9px] text-[#414844]">Max transit shift</div>
              </div>

              <div className="p-2 rounded bg-[#ecf4ff]">
                <div className="text-[10px] text-[#717974] uppercase">AFFECTED CONSIGNMENTS</div>
                <div className="font-bold text-[#131d25] mt-0.5">8 Shipments</div>
                <div className="text-[9px] text-[#ba1a1a] font-semibold">3 High Value</div>
              </div>

              <div className="p-2 rounded bg-[#ecf4ff]">
                <div className="text-[10px] text-[#717974] uppercase">INTERVENTION STATUS</div>
                <div className="font-bold text-[#b02f00] mt-0.5">Pending Replan</div>
                <div className="text-[9px] text-[#414844]">Solver queued</div>
              </div>
            </div>
          </div>

          {/* Action Buttons - contains the required Open Disruption Lab link */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#c1c8c3]">
            <button
              onClick={() => onNavigate('route-map')}
              className="py-2 px-2.5 rounded bg-[#ecf4ff] hover:bg-[#dfe9f5] text-[#002217] text-xs font-sans font-bold flex items-center justify-center gap-1 transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">visibility</span>
              <span>Impact Corridor</span>
            </button>

            {/* KEY LINK FOR SPEC: xpath //a[contains(., 'Open Disruption Lab')] */}
            <a
              href="#disruption-lab"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('disruption-lab');
              }}
              className="py-2 px-2.5 rounded bg-[#002217] hover:bg-[#0f382a] text-white text-xs font-sans font-bold flex items-center justify-center gap-1 transition-colors text-center shadow-xs"
            >
              <span className="material-symbols-outlined text-[16px]">science</span>
              <span>Open Disruption Lab</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row: Disruption Propagation Causal Pipeline + Critical Shipments */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left 7 cols: Disruption Propagation Causal Pipeline */}
        <div className="lg:col-span-7 bg-white rounded-lg border border-[#c1c8c3] shadow-xs p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#c1c8c3]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ff5722] text-[18px]">account_tree</span>
                <span className="font-sans font-bold text-xs text-[#002217] uppercase tracking-wide">
                  DISRUPTION PROPAGATION CAUSAL PIPELINE
                </span>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-mono text-[#414844]">
                <span>TRACE-ID #CY-0042</span>
                <span>•</span>
                <span>DETERMINISTIC LATENCY: 14.2ms</span>
              </div>
            </div>

            {/* 5 Causal Pipeline Stages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mt-3 font-mono text-[11px]">
              <div className="p-2 rounded bg-[#ecf4ff] border-t-2 border-[#ff5722]">
                <div className="text-[9px] text-[#ff5722] font-bold uppercase">01 • SENSE DETECT</div>
                <div className="font-bold text-[#131d25] mt-1 text-xs">Severe Cyclone</div>
                <div className="text-[9px] text-[#717974] mt-1">Chennai Zone (+120 min marine delay)</div>
              </div>

              <div className="p-2 rounded bg-[#ecf4ff] border-t-2 border-[#0f382a]">
                <div className="text-[9px] text-[#0f382a] font-bold uppercase">02 • EXPOSURE ENGINE</div>
                <div className="font-bold text-[#131d25] mt-1 text-xs">8 Intersecting</div>
                <div className="text-[9px] text-[#717974] mt-1">Polygon bounding box live match</div>
              </div>

              <div className="p-2 rounded bg-[#ecf4ff] border-t-2 border-[#ba1a1a]">
                <div className="text-[9px] text-[#ba1a1a] font-bold uppercase">03 • PREDICTIVE AI</div>
                <div className="font-bold text-[#ba1a1a] mt-1 text-xs">Score: 8.7 (+7.3Δ)</div>
                <div className="text-[9px] text-[#717974] mt-1">Dynamic gradient boost risk</div>
              </div>

              <div className="p-2 rounded bg-[#ecf4ff] border-t-2 border-[#ba1a1a]">
                <div className="text-[9px] text-[#ba1a1a] font-bold uppercase">04 • SLA ANALYSIS</div>
                <div className="font-bold text-[#ba1a1a] mt-1 text-xs">3 Breaches</div>
                <div className="text-[9px] text-[#717974] mt-1">$142,500 contract liquid damages</div>
              </div>

              <div className="p-2 rounded bg-[#ecf4ff] border-t-2 border-[#16a34a]">
                <div className="text-[9px] text-[#16a34a] font-bold uppercase">05 • RECOVERY ENGINE</div>
                <div className="font-bold text-[#16a34a] mt-1 text-xs">4 Candidate Plans</div>
                <div className="text-[9px] text-[#717974] mt-1">QUBO solver reroute ready</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#c1c8c3]">
            <div className="text-[11px] font-mono text-[#414844] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-[#16a34a]">verified</span>
              <span>Attribution confidence index: <strong className="text-[#131d25]">99.4%</strong> (Verified by 3 sensors)</span>
            </div>

            <button
              onClick={() => onNavigate('ask-fluxq')}
              className="py-1.5 px-4 rounded bg-[#ff5722] hover:bg-[#e64a19] text-white font-sans text-xs font-bold uppercase tracking-wider shadow-xs transition-colors flex items-center gap-1.5"
            >
              <span>LAUNCH RECOVERY CENTER</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Right 5 cols: Critical Shipments & SHAP Attribution */}
        <div className="lg:col-span-5 bg-white rounded-lg border border-[#c1c8c3] shadow-xs p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#c1c8c3]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#ba1a1a]">warning</span>
                <span className="font-sans font-bold text-xs text-[#002217] uppercase tracking-wide">
                  CRITICAL SHIPMENTS
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#ffdad6] text-[#93000a] text-[10px] font-mono font-bold">
                4 FLAGGED
              </span>
            </div>

            {/* List of Shipments */}
            <div className="flex flex-col gap-1.5 mt-2.5">
              {/* Shipment 1 */}
              <div
                onClick={() => setSelectedShipment('FLX-2048')}
                className={`p-2 rounded cursor-pointer transition-colors border ${
                  selectedShipment === 'FLX-2048' ? 'bg-[#ffdbd1]/40 border-[#ff5722]' : 'bg-[#ecf4ff] border-transparent hover:border-[#c1c8c3]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-[#ba1a1a]">FLX-2048</span>
                    <span className="px-1 rounded bg-[#ffdad6] text-[#93000a] text-[9px] font-bold">CRIT 8.7</span>
                  </div>
                  <span className="text-[#ba1a1a] font-bold">+140m</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-sans text-[#414844] mt-0.5">
                  <span>MAA (Chennai) → DXB (Dubai) → FRA (Frankfurt)</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono mt-0.5">
                  <span className="text-[#717974]">Pharma: $1.2M Value</span>
                  <span className="text-[#ba1a1a] font-semibold">SLA Breach: 74%</span>
                </div>
              </div>

              {/* Shipment 2 */}
              <div
                onClick={() => setSelectedShipment('FLX-3109')}
                className={`p-2 rounded cursor-pointer transition-colors border ${
                  selectedShipment === 'FLX-3109' ? 'bg-[#ffdbd1]/40 border-[#ff5722]' : 'bg-[#ecf4ff] border-transparent hover:border-[#c1c8c3]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-[#ff5722]">FLX-3109</span>
                    <span className="px-1 rounded bg-[#ffdbd1] text-[#b02f00] text-[9px] font-bold">HIGH 7.2</span>
                  </div>
                  <span className="text-[#ff5722] font-bold">+95m</span>
                </div>
                <div className="text-[11px] font-sans text-[#414844] mt-0.5">
                  MAA → SIN (Singapore) → NRT (Tokyo)
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono mt-0.5">
                  <span className="text-[#717974]">Electronics Assembly</span>
                  <span className="text-[#ff5722] font-semibold">SLA Breach: 48%</span>
                </div>
              </div>

              {/* Shipment 3 */}
              <div
                onClick={() => setSelectedShipment('FLX-1892')}
                className={`p-2 rounded cursor-pointer transition-colors border ${
                  selectedShipment === 'FLX-1892' ? 'bg-[#ffdbd1]/40 border-[#ff5722]' : 'bg-[#ecf4ff] border-transparent hover:border-[#c1c8c3]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-[#ff5722]">FLX-1892</span>
                    <span className="px-1 rounded bg-[#ffdbd1] text-[#b02f00] text-[9px] font-bold">HIGH 6.9</span>
                  </div>
                  <span className="text-[#ff5722] font-bold">+110m</span>
                </div>
                <div className="text-[11px] font-sans text-[#414844] mt-0.5">
                  MAA → BOM (Mumbai) → LHR (London)
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono mt-0.5">
                  <span className="text-[#717974]">Automotive Sensors</span>
                  <span className="text-[#ff5722] font-semibold">SLA Breach: 42%</span>
                </div>
              </div>
            </div>

            {/* Explainability Attribution SHAP Vals for selected FLX-2048 */}
            <div className="mt-2.5 p-2 rounded bg-[#dfe9f5]/50 border border-[#c1c8c3]/60 font-mono text-[10px]">
              <div className="flex items-center justify-between text-[#131d25] font-bold mb-1">
                <span>EXPLAINABILITY ATTRIBUTION (FLX-2048)</span>
                <span className="text-[#717974]">SHAP VALS</span>
              </div>
              <div className="space-y-1">
                <div>
                  <div className="flex justify-between text-[#414844]">
                    <span>Severe Cyclone Weather:</span>
                    <span className="text-[#ba1a1a] font-bold">+32% impact</span>
                  </div>
                  <div className="w-full bg-[#dae3f0] h-1 rounded overflow-hidden mt-0.5">
                    <div className="bg-[#ba1a1a] h-full w-[32%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[#414844]">
                    <span>DXB Airport Hub Congestion:</span>
                    <span className="text-[#ff5722] font-bold">+21% impact</span>
                  </div>
                  <div className="w-full bg-[#dae3f0] h-1 rounded overflow-hidden mt-0.5">
                    <div className="bg-[#ff5722] h-full w-[21%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[#414844]">
                    <span>Buffer Slack Depleted:</span>
                    <span className="text-[#131d25] font-bold">+17% impact</span>
                  </div>
                  <div className="w-full bg-[#dae3f0] h-1 rounded overflow-hidden mt-0.5">
                    <div className="bg-[#0f382a] h-full w-[17%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#c1c8c3]">
            <div className="text-[11px] font-mono text-[#414844]">
              Target ETA: <strong className="text-[#ba1a1a]">18:40</strong> (Orig 16:20)
            </div>
            <button
              onClick={() => onNavigate('ask-fluxq')}
              className="py-1 px-3 rounded bg-[#ff5722] hover:bg-[#e64a19] text-white font-sans text-xs font-bold transition-colors"
            >
              Transfer to Recovery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
