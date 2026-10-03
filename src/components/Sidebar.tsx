import React from 'react';
import { ScreenId } from '../types';

interface SidebarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentScreen, onNavigate }) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-white border-r border-[#c1c8c3] z-50 flex flex-col justify-between overflow-y-auto">
      <div className="flex flex-col">
        {/* Sidebar Header */}
        <div className="h-14 px-4 border-b border-[#c1c8c3] flex items-center justify-between bg-[#ecf4ff]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#002217] text-[18px]">hub</span>
            <span className="text-[10px] font-sans uppercase text-[#131d25] tracking-wider font-bold">
              Topology & Nodes
            </span>
          </div>
          <span className="text-[11px] font-mono bg-[#dfe9f5] text-[#414844] px-1.5 py-0.5 rounded font-medium">
            L1-L4
          </span>
        </div>

        {/* Corridors & Nodes Section */}
        <div className="p-3 border-b border-[#c1c8c3]">
          <div className="text-[10px] font-sans uppercase text-[#414844] mb-2 tracking-wider font-bold">
            Corridors & Nodes
          </div>
          <nav className="flex flex-col gap-1">
            <a
              data-path="control-tower"
              href="#control-tower"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('control-tower');
              }}
              className={`flex items-center justify-between px-2.5 py-1.5 rounded text-xs font-sans transition-colors ${
                currentScreen === 'control-tower'
                  ? 'bg-[#dfe9f5] text-[#131d25] font-semibold border-l-2 border-[#ff5722]'
                  : 'text-[#414844] hover:bg-[#ecf4ff] hover:text-[#131d25]'
              }`}
            >
              <span>Corridors & Nodes</span>
              <span className="text-[11px] font-mono text-[#414844]">48 Act</span>
            </a>

            <a
              data-path="route-map"
              href="#route-map"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('route-map');
              }}
              className={`flex items-center justify-between px-2.5 py-1.5 rounded text-xs font-sans transition-colors ${
                currentScreen === 'route-map'
                  ? 'bg-[#dfe9f5] text-[#131d25] font-semibold border-l-2 border-[#ff5722]'
                  : 'text-[#414844] hover:bg-[#ecf4ff] hover:text-[#131d25]'
              }`}
            >
              <span>Multi-Echelon Network</span>
              <span className="text-[11px] font-mono text-[#414844]">12 Hubs</span>
            </a>

            <a
              data-path="shipments"
              href="#shipments"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('shipments');
              }}
              className={`flex items-center justify-between px-2.5 py-1.5 rounded text-xs font-sans transition-colors ${
                currentScreen === 'shipments'
                  ? 'bg-[#dfe9f5] text-[#131d25] font-semibold border-l-2 border-[#ff5722]'
                  : 'text-[#414844] hover:bg-[#ecf4ff] hover:text-[#131d25]'
              }`}
            >
              <span>Consignments</span>
              <span className="text-[11px] font-mono bg-[#ffdad6] text-[#93000a] px-1.5 rounded font-bold">
                3 Delay
              </span>
            </a>
          </nav>
        </div>

        {/* Solver Cores Section */}
        <div className="p-3 border-b border-[#c1c8c3]">
          <div className="text-[10px] font-sans uppercase text-[#414844] mb-2 tracking-wider font-bold">
            Solver Cores
          </div>
          <nav className="flex flex-col gap-1">
            <a
              data-path="disruption-lab"
              href="#disruption-lab"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('disruption-lab');
              }}
              className={`flex items-center justify-between px-2.5 py-1.5 rounded text-xs font-sans transition-colors ${
                currentScreen === 'disruption-lab'
                  ? 'bg-[#dfe9f5] text-[#131d25] font-semibold border-l-2 border-[#ff5722]'
                  : 'text-[#414844] hover:bg-[#ecf4ff] hover:text-[#131d25]'
              }`}
            >
              <span>Constraint Solvers / MIP</span>
              <span className="text-[11px] font-mono text-[#b02f00] font-semibold">OR-Tools</span>
            </a>

            <a
              data-path="quantum-lab"
              href="#quantum-lab"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('quantum-lab');
              }}
              className={`flex items-center justify-between px-2.5 py-1.5 rounded text-xs font-sans transition-colors ${
                currentScreen === 'quantum-lab'
                  ? 'bg-[#dfe9f5] text-[#131d25] font-semibold border-l-2 border-[#ff5722]'
                  : 'text-[#414844] hover:bg-[#ecf4ff] hover:text-[#131d25]'
              }`}
            >
              <span>Quantum Bench</span>
              <span className="text-[11px] font-mono bg-[#c1ecd7] text-[#002116] px-1.5 rounded font-bold">
                QUBO 14ms
              </span>
            </a>

            <a
              data-path="recovery-center"
              href="#recovery-center"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('recovery-center');
              }}
              className={`flex items-center justify-between px-2.5 py-1.5 rounded text-xs font-sans transition-colors ${
                currentScreen === 'recovery-center'
                  ? 'bg-[#dfe9f5] text-[#131d25] font-semibold border-l-2 border-[#ff5722]'
                  : 'text-[#414844] hover:bg-[#ecf4ff] hover:text-[#131d25]'
              }`}
            >
              <span>Sim Scenarios</span>
              <span className="text-[11px] font-mono text-[#414844]">Run #04</span>
            </a>
          </nav>
        </div>

        {/* Governance & Copilot Section */}
        <div className="p-3">
          <div className="text-[10px] font-sans uppercase text-[#414844] mb-2 tracking-wider font-bold">
            Governance & Copilot
          </div>
          <nav className="flex flex-col gap-1">
            <a
              data-path="audit-trail"
              href="#audit-trail"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('audit-trail');
              }}
              className={`flex items-center justify-between px-2.5 py-1.5 rounded text-xs font-sans transition-colors ${
                currentScreen === 'audit-trail'
                  ? 'bg-[#dfe9f5] text-[#131d25] font-semibold border-l-2 border-[#ff5722]'
                  : 'text-[#414844] hover:bg-[#ecf4ff] hover:text-[#131d25]'
              }`}
            >
              <span>Execution Ledger</span>
              <span className="text-[11px] font-mono text-[#3f6656] font-semibold">Verified</span>
            </a>

            <a
              data-path="ask-fluxq"
              href="#ask-fluxq"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('ask-fluxq');
              }}
              className={`flex items-center justify-between px-2.5 py-1.5 rounded text-xs font-sans transition-colors ${
                currentScreen === 'ask-fluxq'
                  ? 'bg-[#dfe9f5] text-[#131d25] font-semibold border-l-2 border-[#ff5722]'
                  : 'text-[#414844] hover:bg-[#ecf4ff] hover:text-[#131d25]'
              }`}
            >
              <span>Neural Copilot</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#131d25]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse"></span>
                Online
              </span>
            </a>
          </nav>
        </div>
      </div>

      {/* Sidebar Footer Benchmarks */}
      <div className="p-3 border-t border-[#c1c8c3] bg-[#ecf4ff] text-[11px] font-mono">
        <div className="flex items-center justify-between text-[#414844]">
          <span className="uppercase">Solver Runtime</span>
          <span className="text-[#131d25] font-bold">99.98%</span>
        </div>
        <div className="w-full bg-[#dae3f0] h-1.5 rounded mt-1 overflow-hidden">
          <div className="bg-[#0f382a] h-full w-[99.98%]"></div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-[#414844] mt-2">
          <span>Latency: 18ms</span>
          <span>Mem: 4.2GB</span>
        </div>
      </div>
    </aside>
  );
};
