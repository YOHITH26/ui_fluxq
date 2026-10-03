import React, { useState } from 'react';
import { ScreenId } from '../types';

interface RouteMapScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const RouteMapScreen: React.FC<RouteMapScreenProps> = ({ onNavigate }) => {
  const [mapStyle, setMapStyle] = useState<'vector' | 'nautical' | 'metar'>('vector');
  const [isLive, setIsLive] = useState<boolean>(true);
  const [selectedRisk, setSelectedRisk] = useState<string>('all');
  const [selectedShipment, setSelectedShipment] = useState<string>('FLX-2048');
  const [layers, setLayers] = useState({
    shipments: true,
    disruptions: true,
    radar: true,
    traffic: true,
    ports: true,
    flights: true,
  });

  const toggleLayer = (k: keyof typeof layers) => {
    setLayers((prev) => ({ ...prev, [k]: !prev[k] }));
  };

  return (
    <div className="flex flex-col gap-3 pb-12">
      {/* Top Subheader & Geospatial Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 py-2 px-4 bg-white rounded-lg border border-[#c1c8c3] shadow-xs">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#414844] uppercase tracking-wider">
            <span>Geospatial Topology</span>
            <span>/</span>
            <span className="text-[#002217] font-semibold">APAC-EU &amp; Trans-Indian Conduits</span>
            <span className="w-1 h-1 rounded-full bg-[#717974]"></span>
            <span className="text-[#ff5722] font-bold">GRID EPSG:4326</span>
          </div>
          <div className="flex items-baseline gap-3 mt-0.5">
            <h1 className="font-sans font-bold text-xl text-[#002217] tracking-tight">ROUTE MAP</h1>
            <p className="font-sans text-xs text-[#414844] hidden sm:inline">
              Real-time shipment network and disruption exposure
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#ecf4ff] border border-[#c1c8c3] text-[#131d25] font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#16a34a]"></span>
            <span className="font-bold">NETWORK OPERATIONAL</span>
            <span className="text-[#717974]">· 12s sync</span>
          </div>

          <div className="flex items-center gap-1 bg-[#ecf4ff] p-0.5 rounded border border-[#c1c8c3]">
            <button
              onClick={() => setIsLive(!isLive)}
              className={`flex items-center gap-1 px-2 py-0.5 rounded font-mono text-[11px] font-bold transition-all ${
                isLive ? 'bg-[#ff5722] text-white shadow-xs' : 'bg-white text-[#414844]'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              <span>Live (12s)</span>
            </button>
            <button
              onClick={() => alert('Refreshing live maritime and aerodynamic positioning vectors...')}
              className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-[#dfe9f5] text-[#131d25] font-mono text-[11px] transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">refresh</span>
              <span>Refresh</span>
            </button>
            <button
              onClick={() => alert('Configuring dynamic telemetry layers...')}
              className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-[#dfe9f5] text-[#131d25] font-mono text-[11px] transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">layers</span>
              <span>Layer Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Map Filter Ribbon & Provenance Strip */}
      <div className="flex flex-col gap-2 bg-white p-3 rounded-lg border border-[#c1c8c3] shadow-xs text-[11px] font-mono">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Layer toggles */}
          <div className="flex flex-wrap items-center gap-2 text-[#131d25]">
            <span className="text-[#414844] font-bold uppercase tracking-wider mr-1">LAYERS:</span>
            {[
              { id: 'shipments', label: 'Shipments (1,428)' },
              { id: 'disruptions', label: 'Disruptions (3)' },
              { id: 'radar', label: 'Weather Radar' },
              { id: 'traffic', label: 'Traffic Congestion' },
              { id: 'ports', label: 'Ports & Hubs' },
              { id: 'flights', label: 'Flight Corridors' },
            ].map((layer) => (
              <label
                key={layer.id}
                className="flex items-center gap-1 px-2 py-0.5 rounded bg-[#ecf4ff] border border-[#c1c8c3] cursor-pointer hover:bg-[#dfe9f5] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={layers[layer.id as keyof typeof layers]}
                  onChange={() => toggleLayer(layer.id as keyof typeof layers)}
                  className="w-3 h-3 accent-[#ff5722]"
                />
                <span>{layer.label}</span>
              </label>
            ))}
          </div>

          {/* Severity filtering pills */}
          <div className="flex items-center gap-1">
            <span className="text-[#414844] font-bold uppercase tracking-wider mr-1">RISK:</span>
            <button
              onClick={() => setSelectedRisk('all')}
              className={`px-2 py-0.5 rounded ${
                selectedRisk === 'all'
                  ? 'bg-[#002217] text-white font-bold'
                  : 'bg-[#ecf4ff] text-[#414844] hover:bg-[#dfe9f5]'
              }`}
            >
              All (128)
            </button>
            <button
              onClick={() => setSelectedRisk('low')}
              className={`px-2 py-0.5 rounded ${
                selectedRisk === 'low'
                  ? 'bg-[#002217] text-white font-bold'
                  : 'bg-[#ecf4ff] text-[#414844] hover:bg-[#dfe9f5]'
              }`}
            >
              Low (97)
            </button>
            <button
              onClick={() => setSelectedRisk('mod')}
              className={`px-2 py-0.5 rounded ${
                selectedRisk === 'mod'
                  ? 'bg-[#002217] text-white font-bold'
                  : 'bg-[#ecf4ff] text-[#414844] hover:bg-[#dfe9f5]'
              }`}
            >
              Mod (14)
            </button>
            <button
              onClick={() => setSelectedRisk('high')}
              className={`px-2 py-0.5 rounded ${
                selectedRisk === 'high'
                  ? 'bg-[#ff5722] text-white font-bold'
                  : 'bg-[#ffdbd1] text-[#b02f00] hover:bg-[#ffdbd1]/80'
              }`}
            >
              High (13)
            </button>
            <button
              onClick={() => setSelectedRisk('crit')}
              className={`px-2 py-0.5 rounded flex items-center gap-1 ${
                selectedRisk === 'crit'
                  ? 'bg-[#ba1a1a] text-white font-bold'
                  : 'bg-[#ffdad6] text-[#93000a] hover:bg-[#ffdad6]/80'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] animate-pulse"></span>
              <span>Crit (4)</span>
            </button>
          </div>
        </div>

        {/* Feeds Data Provenance Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#dae3f0] text-[#414844]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-[#131d25]">FEEDS:</span>
            <span className="flex items-center gap-1 text-[#0f382a]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
              LIVE — Open-Meteo GFS 0.05°
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 text-[#0f382a]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
              LIVE — AIS MarineTraffic v4
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 text-[#0f382a]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
              LIVE — ADS-B Flight Exchange
            </span>
          </div>

          <div className="flex items-center gap-1 text-[#b02f00] font-semibold">
            <span className="material-symbols-outlined text-[13px]">cyclone</span>
            <span>SYNTHETIC INGEST: Disruption Lab DIS-0042 (Active Triage)</span>
          </div>
        </div>
      </div>

      {/* Main Operational Stage: 8 cols Map Canvas + 4 cols Selected Triage Dossier */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-3 items-start">
        {/* LEFT 8 COLS: Dominant Geospatial Vector Map */}
        <div className="xl:col-span-8 bg-white rounded-lg border border-[#c1c8c3] shadow-xs flex flex-col overflow-hidden relative min-h-[580px]">
          {/* Top HUD Overlay */}
          <div className="absolute top-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
            <div className="pointer-events-auto bg-white/95 backdrop-blur px-3 py-1.5 rounded border border-[#c1c8c3] shadow-sm flex items-center gap-3">
              <div className="flex items-center gap-1.5 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-pulse"></span>
                <span className="text-[#131d25] font-bold">CORRIDOR FOCUS:</span>
                <span className="text-[#ff5722] font-semibold">BAY OF BENGAL // ARABIAN SEA CHOKEPOINTS</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-[#717974] font-mono text-[10px]">
                <span>Projection: WGS84</span>
                <span>·</span>
                <span>Zoom: 4.8x</span>
                <span>·</span>
                <span className="text-[#002217] font-bold">17 Consignments Projected</span>
              </div>
            </div>

            {/* Map Style Controls */}
            <div className="pointer-events-auto flex items-center gap-1 bg-white/95 backdrop-blur p-1 rounded border border-[#c1c8c3] shadow-sm font-mono text-[11px]">
              <button
                onClick={() => setMapStyle('vector')}
                className={`px-2 py-0.5 rounded font-bold transition-colors ${
                  mapStyle === 'vector' ? 'bg-[#002217] text-white' : 'text-[#414844] hover:bg-[#dfe9f5]'
                }`}
              >
                Vector Topo
              </button>
              <button
                onClick={() => setMapStyle('nautical')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  mapStyle === 'nautical' ? 'bg-[#002217] text-white' : 'text-[#414844] hover:bg-[#dfe9f5]'
                }`}
              >
                Nautical AIS
              </button>
              <button
                onClick={() => setMapStyle('metar')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  mapStyle === 'metar' ? 'bg-[#002217] text-white' : 'text-[#414844] hover:bg-[#dfe9f5]'
                }`}
              >
                METAR Vector
              </button>
              <div className="w-px h-3.5 bg-[#c1c8c3] mx-1"></div>
              <button className="w-5 h-5 flex items-center justify-center text-[#131d25] hover:bg-[#dfe9f5] rounded font-bold">
                +
              </button>
              <button className="w-5 h-5 flex items-center justify-center text-[#131d25] hover:bg-[#dfe9f5] rounded font-bold">
                -
              </button>
            </div>
          </div>

          {/* Interactive SVG Map Viewport */}
          <div className="relative w-full h-[580px] bg-[#f7f9ff] overflow-hidden select-none">
            <svg className="w-full h-full" viewBox="0 0 1000 580">
              <defs>
                <pattern id="rm-dot-matrix" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#0f382a" fillOpacity="0.07" />
                </pattern>
                <radialGradient id="rm-cycloneRadar" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ba1a1a" stopOpacity="0.45" />
                  <stop offset="40%" stopColor="#ff5722" stopOpacity="0.30" />
                  <stop offset="75%" stopColor="#ffb5a0" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#ff5722" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect width="1000" height="580" fill="#f7f9ff" />
              <rect width="1000" height="580" fill="url(#rm-dot-matrix)" />

              {/* Landmass Shapes */}
              <g fill="#e5effb" opacity="0.85">
                {/* Europe */}
                <path d="M 60 70 L 120 60 L 170 85 L 210 110 L 225 150 L 190 190 L 150 200 L 110 170 L 80 180 L 50 140 Z" />
                {/* Arabian Peninsula */}
                <path d="M 330 240 L 410 220 L 460 270 L 450 330 L 410 370 L 360 350 L 335 300 Z" />
                {/* Indian Subcontinent */}
                <path d="M 520 230 L 610 210 L 670 250 L 650 360 L 610 440 L 580 410 L 550 330 L 510 280 Z" />
                {/* Southeast Asia */}
                <path d="M 720 290 L 780 300 L 820 360 L 800 430 L 770 460 L 750 400 L 730 340 Z" />
              </g>

              {/* Subcontinental Coastlines */}
              <path
                d="M 520 230 L 610 210 L 670 250 L 650 360 L 610 440 L 580 410 L 550 330 L 510 280 Z"
                fill="none"
                stroke="#c1c8c3"
                strokeDasharray="3 3"
                strokeWidth="1.5"
              />

              {/* Sea Route LANE-MARITIME-09 */}
              <path
                d="M 765 420 C 680 450, 600 450, 520 370 C 470 320, 410 290, 340 240 C 260 200, 190 160, 140 80"
                fill="none"
                stroke="#0f382a"
                strokeDasharray="6 4"
                strokeWidth="2.5"
                opacity="0.8"
              />
              <text x="410" y="420" fill="#0f382a" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" letterSpacing="1">
                LANE-MARITIME-09 (SUEZ/INDIAN OCEAN NOMINAL)
              </text>

              {/* Flight Corridor: FRA -> DXB -> MAA */}
              <path d="M 430 260 Q 280 180 150 90" fill="none" stroke="#0f382a" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 605 390 Q 520 320 430 260" fill="none" stroke="#ba1a1a" strokeWidth="3" strokeDasharray="8 6" className="animate-pulse" />

              {/* Feeder route MAA -> BLR -> BOM */}
              <path d="M 605 390 L 585 375 L 560 330" fill="none" stroke="#ff5722" strokeDasharray="3 3" strokeWidth="2" />
              <circle cx="585" cy="375" r="3.5" fill="#ffffff" stroke="#ff5722" strokeWidth="2" />
              <text x="592" y="378" fill="#131d25" fontFamily="JetBrains Mono" fontSize="9" fontWeight="bold">
                BLR [HUB]
              </text>

              {/* Cyclone Radar Polygon at Chennai */}
              <g transform="translate(605, 390)">
                <circle cx="0" cy="0" r="76" fill="url(#rm-cycloneRadar)" className="animate-pulse" />
                <circle cx="0" cy="0" r="76" fill="none" stroke="#ff5722" strokeWidth="1.5" strokeDasharray="5 3" />
                <circle cx="0" cy="0" r="50" fill="none" stroke="#ba1a1a" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="28" fill="#ba1a1a" fillOpacity="0.25" stroke="#ba1a1a" strokeWidth="2" />
                <circle cx="0" cy="0" r="5" fill="#ba1a1a" />
              </g>

              {/* Hub: Frankfurt FRA */}
              <g transform="translate(150, 90)">
                <circle cx="0" cy="0" r="5" fill="#002217" stroke="#ffffff" strokeWidth="1.5" />
                <text x="8" y="3" fill="#002217" fontFamily="Inter" fontSize="11" fontWeight="bold">
                  FRA (Frankfurt)
                </text>
                <text x="8" y="14" fill="#414844" fontFamily="JetBrains Mono" fontSize="8">
                  EU CENTRAL DC
                </text>
              </g>

              {/* Hub: Rotterdam RTM */}
              <g transform="translate(135, 75)">
                <rect x="-3" y="-3" width="6" height="6" fill="#0f382a" />
                <text x="-52" y="3" fill="#131d25" fontFamily="Inter" fontSize="10" fontWeight="bold">
                  RTM Port
                </text>
              </g>

              {/* Hub: Dubai DXB */}
              <g transform="translate(430, 260)">
                <circle cx="0" cy="0" r="6" fill="#002217" stroke="#ffffff" strokeWidth="1.5" />
                <text x="-15" y="-10" fill="#002217" fontFamily="Inter" fontSize="11" fontWeight="bold">
                  DXB (Dubai)
                </text>
                <text x="-25" y="15" fill="#414844" fontFamily="JetBrains Mono" fontSize="8">
                  T1 CONDUIT GATEWAY
                </text>
              </g>

              {/* Hub: Mumbai BOM */}
              <g transform="translate(560, 330)">
                <circle cx="0" cy="0" r="5" fill="#002217" stroke="#ffffff" strokeWidth="1.5" />
                <text x="-70" y="3" fill="#002217" fontFamily="Inter" fontSize="10" fontWeight="bold">
                  BOM (Mumbai)
                </text>
              </g>

              {/* Hub: Singapore SIN */}
              <g transform="translate(765, 420)">
                <circle cx="0" cy="0" r="6" fill="#002217" stroke="#ffffff" strokeWidth="1.5" />
                <text x="10" y="3" fill="#002217" fontFamily="Inter" fontSize="11" fontWeight="bold">
                  SIN (Singapore)
                </text>
                <text x="10" y="14" fill="#414844" fontFamily="JetBrains Mono" fontSize="8">
                  APAC TRANSSHIPMENT
                </text>
              </g>

              {/* Consignment FLX-3109 */}
              <g transform="translate(490, 305)" className="cursor-pointer">
                <rect x="-18" y="-10" width="36" height="18" rx="2" fill="#ffffff" stroke="#ff5722" strokeWidth="1.5" />
                <text x="0" y="3" fill="#541100" fontFamily="JetBrains Mono" fontSize="9" fontWeight="bold" textAnchor="middle">
                  FLX-3109
                </text>
              </g>

              {/* Consignment FLX-1892 */}
              <g transform="translate(572, 350)" className="cursor-pointer">
                <rect x="-16" y="-8" width="32" height="16" rx="2" fill="#ffffff" stroke="#ffb5a0" strokeWidth="1" />
                <text x="0" y="3" fill="#131d25" fontFamily="JetBrains Mono" fontSize="8" fontWeight="600" textAnchor="middle">
                  FLX-1892
                </text>
              </g>

              {/* Vessel CMA CGM ADONIS */}
              <g transform="translate(390, 275)">
                <polygon points="-5,4 5,4 7,-4 -7,-4" fill="#0f382a" />
                <text x="12" y="3" fill="#0f382a" fontFamily="JetBrains Mono" fontSize="8" fontWeight="600">
                  CMA CGM ADONIS
                </text>
              </g>

              {/* SELECTED TARGET SHIPMENT: FLX-2048 with beacon and callout */}
              <g
                id="marker-flx-2048"
                transform="translate(605, 390)"
                className="cursor-pointer"
                onClick={() => setSelectedShipment('FLX-2048')}
              >
                <circle cx="0" cy="0" r="22" fill="none" stroke="#ba1a1a" strokeWidth="1.5" className="animate-ping" opacity="0.75" />
                <circle cx="0" cy="0" r="10" fill="#ba1a1a" stroke="#ffffff" strokeWidth="2" />
                <circle cx="0" cy="0" r="4" fill="#ffffff" />

                {/* Callout box */}
                <g transform="translate(18, -48)">
                  <rect x="0" y="0" width="168" height="42" rx="4" fill="#ffffff" stroke="#ff5722" strokeWidth="2" />
                  <rect x="0" y="0" width="168" height="4" fill="#ba1a1a" />
                  <text x="8" y="16" fill="#ba1a1a" fontFamily="JetBrains Mono" fontSize="10" fontWeight="bold">
                    FLX-2048 [CRITICAL 8.7]
                  </text>
                  <text x="8" y="28" fill="#131d25" fontFamily="Inter" fontSize="9" fontWeight="600">
                    Insulin Cold-Chain #992
                  </text>
                  <text x="8" y="37" fill="#b02f00" fontFamily="JetBrains Mono" fontSize="8" fontWeight="600">
                    MAA TERMINAL GROUND STOP
                  </text>
                </g>
              </g>

              {/* Floating Disruption Banner */}
              <g transform="translate(480, 485)">
                <rect x="0" y="0" width="360" height="34" rx="4" fill="#ffffff" stroke="#ba1a1a" strokeWidth="1.5" />
                <rect x="0" y="0" width="4" height="34" fill="#ba1a1a" />
                <text x="12" y="15" fill="#ba1a1a" fontFamily="Inter" fontSize="11" fontWeight="bold">
                  ⚠️ SEVERE WEATHER (Monsoon Cyclone Cell 04B)
                </text>
                <text x="12" y="27" fill="#414844" fontFamily="JetBrains Mono" fontSize="9">
                  RADIUS: 25km | DELAY DELTA: +120m | SOURCE: LIVE Open-Meteo
                </text>
              </g>
            </svg>

            {/* Floating Legend Bottom-Left */}
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur p-2.5 rounded border-l-2 border-[#0f382a] border border-[#c1c8c3] shadow-md max-w-xs font-mono text-[10px]">
              <div className="font-bold text-[#414844] uppercase mb-1">EXPOSURE SEVERITY INDEX</div>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#a5d0bc]"></span>
                  <span>Low &lt;2.0</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#dae3f0]"></span>
                  <span>Moderate 2.0-5.0</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5722]"></span>
                  <span className="font-semibold text-[#b02f00]">High 5.1-8.0</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ba1a1a] animate-pulse"></span>
                  <span className="text-[#ba1a1a] font-bold">Critical &gt;8.0</span>
                </div>
              </div>
            </div>

            {/* Radar Azimuth Stamp Bottom-Right */}
            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded text-right font-mono text-[10px] text-[#414844] border border-[#c1c8c3]">
              <div className="font-bold text-[#131d25]">SWEEP RADAR AZIMUTH: 142.8°</div>
              <div className="text-[9px] text-[#717974]">CORRELATION CONFIDENCE: 99.4%</div>
            </div>
          </div>

          {/* Interaction hint strip */}
          <div className="h-7 px-3 bg-[#ecf4ff] border-t border-[#c1c8c3] flex items-center justify-between font-mono text-[10px] text-[#414844]">
            <span>Click node or flight path to inspect real-time kinematic telemetry and feeds.</span>
            <span className="font-bold text-[#ff5722]">CLICKING SHIPMENT SYNCS SOLVER &amp; RECOVERY WORKBENCH</span>
          </div>
        </div>

        {/* RIGHT 4 COLS: Consignment Triage Dossier (Selected: FLX-2048) */}
        <div className="xl:col-span-4 bg-white rounded-lg border border-[#c1c8c3] border-t-4 border-t-[#ff5722] shadow-xs p-4 flex flex-col justify-between">
          <div className="space-y-3">
            {/* Header */}
            <div className="pb-2 border-b border-[#c1c8c3]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#717974] uppercase font-bold tracking-wider">
                  CONSIGNMENT TRIAGE DOSSIER
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] bg-[#ffdad6] text-[#93000a] px-2 py-0.5 rounded font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] animate-pulse"></span>
                  CRITICAL INTERVENTION
                </span>
              </div>

              <div className="flex items-baseline justify-between mt-1">
                <h2 className="font-mono text-2xl font-bold text-[#131d25] tracking-tight">{selectedShipment}</h2>
                <div className="text-right">
                  <span className="text-[9px] font-mono text-[#717974] uppercase block">RISK SCORE</span>
                  <span className="font-mono text-xl font-bold text-[#ba1a1a]">
                    8.7<span className="text-xs text-[#717974] font-normal">/10</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between font-mono text-[10px] bg-[#ffdbd1]/50 px-2 py-1 rounded text-[#b02f00] font-bold mt-1">
                <span>SLA BREACH PROBABILITY:</span>
                <span>74% (MARGIN DEPLETED)</span>
              </div>
            </div>

            {/* Cargo Profile & Cold Chain Specifications */}
            <div className="bg-[#ecf4ff] p-2.5 rounded border border-[#c1c8c3] text-xs">
              <div className="flex items-center justify-between text-[10px] font-mono mb-0.5">
                <span className="font-bold text-[#414844] uppercase">CARGO PROFILE &amp; PAYLOAD</span>
                <span className="bg-[#002217] text-white px-1.5 rounded">REEFER T1</span>
              </div>
              <div className="font-sans font-bold text-[#002217]">
                Cold-Chain Bio-Pharma (Insulin Active Substance)
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1.5 font-mono text-[10px] text-[#414844]">
                <div>Batch: <strong className="text-[#131d25]">#992-INS-FRA</strong></div>
                <div>Thermal Limit: <strong className="text-[#ba1a1a]">2.0°C - 8.0°C</strong></div>
                <div>Payload: <strong className="text-[#131d25]">4.8 MT (Palletized)</strong></div>
                <div>Passive Life: <strong className="text-[#ba1a1a]">14h 22m</strong></div>
              </div>
            </div>

            {/* Intended Routing Corridor */}
            <div>
              <span className="text-[10px] font-mono text-[#717974] uppercase font-bold block mb-1">
                INTENDED ROUTING CORRIDOR
              </span>
              <div className="flex items-center justify-between bg-white p-2 rounded border border-[#c1c8c3] font-mono text-xs text-center">
                <div>
                  <div className="font-bold text-[#131d25]">MAA</div>
                  <div className="text-[9px] text-[#ba1a1a] font-bold">BLOCKED</div>
                </div>
                <span className="text-[#ff5722] font-bold">➔</span>
                <div>
                  <div className="font-bold text-[#131d25]">DXB</div>
                  <div className="text-[9px] text-[#717974]">TRANSIT</div>
                </div>
                <span className="text-[#c1c8c3]">➔</span>
                <div>
                  <div className="font-bold text-[#131d25]">FRA</div>
                  <div className="text-[9px] text-[#717974]">DESTINATION</div>
                </div>
              </div>
            </div>

            {/* High-density Financial & Kinetic metrics */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#ecf4ff] p-2 rounded border border-[#c1c8c3] font-mono">
                <span className="text-[9px] text-[#717974] uppercase block">ESTIMATED ARRIVAL</span>
                <span className="text-lg font-bold text-[#ba1a1a] block mt-0.5">18:40</span>
                <span className="text-[10px] text-[#717974]">Orig 16:20 (<span className="text-[#ba1a1a] font-bold">+140m delay</span>)</span>
              </div>

              <div className="bg-[#ecf4ff] p-2 rounded border border-[#c1c8c3] font-mono">
                <span className="text-[9px] text-[#717974] uppercase block">CARGO VALUATION</span>
                <span className="text-lg font-bold text-[#131d25] block mt-0.5">$1.20M</span>
                <span className="text-[10px] text-[#ba1a1a] font-bold">Penalty: $112,000 USD</span>
              </div>
            </div>

            {/* Active Hazard Intersection Box */}
            <div className="bg-[#ffdad6]/40 p-2.5 rounded border-l-4 border-[#ff5722] border border-[#c1c8c3]">
              <div className="flex items-center gap-1 text-[10px] font-mono text-[#ba1a1a] font-bold uppercase mb-0.5">
                <span className="material-symbols-outlined text-[14px]">warning</span>
                <span>HAZARD INTERSECTION DETECTED</span>
              </div>
              <div className="font-sans font-bold text-xs text-[#131d25]">
                Severe Weather: Monsoon Cyclone Cell 04B
              </div>
              <div className="mt-1 space-y-0.5 font-mono text-[10px] text-[#414844]">
                <div>Epicenter: Chennai MAA Runway 07/25</div>
                <div>Hazard Envelope: 25 km Radius · Gusts 58 kts</div>
                <div>Consensus Confidence: <strong className="text-[#0f382a]">99.4% (Multi-Sensor)</strong></div>
              </div>
            </div>

            {/* Explainability Factor Decomposition */}
            <div className="bg-[#ecf4ff] p-2.5 rounded border border-[#c1c8c3] font-mono text-[10px]">
              <div className="flex justify-between font-bold text-[#414844] mb-1">
                <span>EXPLAINABILITY DECOMPOSITION</span>
                <span className="text-[#002217]">SHAP v0.9</span>
              </div>
              <div className="space-y-1.5">
                <div>
                  <div className="flex justify-between mb-0.5">
                    <span>Severe Weather Impact</span>
                    <span className="font-bold text-[#ba1a1a]">+32% variance</span>
                  </div>
                  <div className="w-full bg-[#dae3f0] h-1.5 rounded overflow-hidden">
                    <div className="bg-[#ba1a1a] h-full w-[64%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-0.5">
                    <span>Port &amp; Tarmac Congestion</span>
                    <span className="font-bold text-[#ff5722]">+21% variance</span>
                  </div>
                  <div className="w-full bg-[#dae3f0] h-1.5 rounded overflow-hidden">
                    <div className="bg-[#ff5722] h-full w-[42%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-0.5">
                    <span>Dynamic Buffer Depletion</span>
                    <span className="font-bold text-[#ba1a1a]">+17% SLA drain</span>
                  </div>
                  <div className="w-full bg-[#dae3f0] h-1.5 rounded overflow-hidden">
                    <div className="bg-[#ba1a1a] h-full w-[34%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Action CTAs */}
          <div className="flex flex-col gap-2 mt-4 pt-3 border-t border-[#c1c8c3]">
            <button
              onClick={() => onNavigate('ask-fluxq')}
              className="w-full py-2 px-3 rounded bg-[#ff5722] hover:bg-[#e64a19] text-white font-sans text-xs font-bold text-center uppercase tracking-wider shadow-xs transition-colors flex items-center justify-center gap-1"
            >
              <span>TRANSFER TO RECOVERY CENTER</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>

            <a
              data-path="ask-fluxq"
              href="#ask-fluxq"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('ask-fluxq');
              }}
              className="w-full py-1.5 px-3 rounded bg-white hover:bg-[#ecf4ff] border border-[#002217] text-[#002217] font-sans text-xs font-bold text-center tracking-wide transition-colors flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">psychology</span>
              <span>Ask FluxQ Copilot about FLX-2048</span>
            </a>

            <a
              data-path="disruption-lab"
              href="#disruption-lab"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('disruption-lab');
              }}
              className="w-full py-1 px-3 rounded bg-[#ecf4ff] text-[#414844] hover:bg-[#dfe9f5] hover:text-[#131d25] font-mono text-[11px] text-center transition-colors"
            >
              Simulate Reroute (QUBO MIP Lab) →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom High-Density Operational Summary Bar */}
      <div className="w-full bg-white rounded-lg p-3 border-l-4 border-[#002217] border border-[#c1c8c3] shadow-xs font-mono text-[11px]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 text-[#131d25]">
            <div>ACTIVE SHIPMENTS: <strong className="text-[#002217]">1,428</strong></div>
            <div>IN TRANSIT: <strong>128</strong></div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722]"></span>
              <span>AT RISK (&gt;5.0): <strong className="text-[#ff5722]">17</strong></span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a] animate-pulse"></span>
              <span>CRITICAL BREACH: <strong className="text-[#ba1a1a]">4</strong></span>
            </div>
            <div>
              ACTIVE DISRUPTIONS: <strong className="text-[#ba1a1a]">1 CRITICAL (Chennai DIS-0042)</strong> + 2 MODERATE
            </div>
          </div>

          <div className="flex items-center gap-3 text-[#414844]">
            <div>NETWORK CONFORMANCE: <strong className="text-[#16a34a]">94.2%</strong></div>
            <div className="px-2 py-0.5 rounded bg-[#c1ecd7] text-[#002116] font-bold">
              SOLVER GAP: 0.00% (QUBO READY)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
