import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ScreenId } from '../types';

interface HeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate }) => {
  const [targetEl, setTargetEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTargetEl(document.getElementById('app-header'));
  }, []);

  const navItems: Array<{ id: ScreenId; label: string; badge?: string; badgeColor?: string }> = [
    { id: 'control-tower', label: 'Control Tower', badge: '3', badgeColor: 'bg-[#ff5722] text-white' },
    { id: 'route-map', label: 'Route Map' },
    { id: 'shipments', label: 'Shipments' },
    { id: 'disruption-lab', label: 'Disruption Lab', badge: 'SIM', badgeColor: 'bg-[#ff5722] text-white' },
    { id: 'recovery-center', label: 'Recovery Center', badge: '0', badgeColor: 'bg-[#0f382a] text-[#79a28f]' },
    { id: 'quantum-lab', label: 'Quantum Lab' },
    { id: 'audit-trail', label: 'Audit Trail' },
    { id: 'ask-fluxq', label: 'Ask FluxQ' },
  ];

  const content = (
    <>
      {/* Primary Top Bar Row - exactly div[1] for xpath body/header[1]/div[1]/nav[1] */}
      <div className="h-14 px-4 flex items-center justify-between gap-3 border-b border-[#c1c8c3]/60 bg-white">
        {/* Brand Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded bg-[#002217] flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-sm">
            <span className="text-[#ff5722] font-mono text-base">⬡</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-sans font-bold text-[#002217] text-sm tracking-tight leading-none">FLUXQ</span>
              <span className="text-[10px] font-sans font-bold tracking-wider text-[#ff5722] uppercase">DECISION INTELLIGENCE</span>
            </div>
            <span className="text-[10px] font-sans text-[#414844] uppercase tracking-wider">Multi-Echelon Industrial Operations</span>
          </div>
        </div>

        {/* Primary Navigation - exactly nav[1] inside div[1] */}
        <nav className="flex items-center gap-1 xl:gap-2 overflow-x-auto py-1">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <a
                key={item.id}
                data-path={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-sans whitespace-nowrap transition-colors border-b-2 ${
                  isActive
                    ? 'border-[#ff5722] text-[#131d25] font-semibold bg-[#e5effb]/60'
                    : 'border-transparent text-[#414844] hover:text-[#131d25] hover:bg-[#ecf4ff]'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`text-[10px] font-mono px-1 py-0.2 rounded font-bold ${item.badgeColor || 'bg-[#dfe9f5] text-[#414844]'}`}>
                    {item.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Status Indicators & User Profile */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="hidden 2xl:flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#ecf4ff] border border-[#c1c8c3]/40 text-[#414844] font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
            <span>LIVE (12s poll)</span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#ffdad6] border border-[#ba1a1a]/30 text-[#93000a] font-mono text-[11px] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#ba1a1a] animate-pulse"></span>
            <span className="hidden sm:inline">SYSTEM WARNING: 1 DISRUPTION ACTIVE</span>
            <span className="sm:hidden">1 DISRUPT</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-[#c1c8c3]/50">
            <div className="flex flex-col text-right">
              <span className="text-xs font-sans font-bold text-[#131d25] leading-tight">Dr. A. Vance</span>
              <span className="text-[10px] font-mono text-[#414844]">Tier 1 Lead · PROD-EU/APAC</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#002217] flex items-center justify-center text-white text-xs font-bold">
              AV
            </div>
          </div>
        </div>
      </div>

      {/* Causality Pipeline Ribbon Row */}
      <div className="h-9 px-4 bg-white border-t border-[#c1c8c3]/40 flex items-center justify-between overflow-x-auto text-[11px] font-mono">
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-bold text-[#414844] uppercase tracking-wider text-[10px]">CAUSALITY PIPELINE:</span>
          <div className="flex items-center gap-1">
            <span className="px-1.5 py-0.5 rounded border border-[#c1c8c3] bg-[#ecf4ff] text-[#414844]">01 SENSE</span>
            <span className="text-[#c1c8c3]">→</span>
            <span className={`px-1.5 py-0.5 rounded border ${currentScreen === 'control-tower' ? 'border-[#ff5722] bg-[#ffdbd1] text-[#b02f00] font-bold' : 'border-[#c1c8c3] bg-[#ecf4ff] text-[#414844]'} flex items-center gap-1`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722]"></span>
              02 PREDICT
            </span>
            <span className="text-[#c1c8c3]">→</span>
            <span className="px-1.5 py-0.5 rounded border border-[#c1c8c3] bg-[#ecf4ff] text-[#414844]">03 EXPLAIN</span>
            <span className="text-[#c1c8c3]">→</span>
            <span className={`px-1.5 py-0.5 rounded border ${currentScreen === 'ask-fluxq' || currentScreen === 'route-map' ? 'border-[#ff5722] bg-[#ffffff] text-[#ff5722] font-bold' : 'border-[#c1c8c3] bg-[#ecf4ff] text-[#414844]'} flex items-center gap-1`}>
              {(currentScreen === 'ask-fluxq' || currentScreen === 'route-map') && <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722]"></span>}
              04 OPTIMIZE
            </span>
            <span className="text-[#c1c8c3]">→</span>
            <span className="px-1.5 py-0.5 rounded border border-[#c1c8c3] bg-[#ecf4ff] text-[#414844]">05 RECOMMEND</span>
            <span className="text-[#c1c8c3]">→</span>
            <span className="px-1.5 py-0.5 rounded border border-[#c1c8c3] bg-[#ecf4ff] text-[#414844]">06 REPLAN</span>
            <span className="text-[#c1c8c3]">→</span>
            <span className="px-1.5 py-0.5 rounded border border-[#c1c8c3] bg-[#ecf4ff] text-[#414844]">07 APPROVE</span>
            <span className="text-[#c1c8c3]">→</span>
            <span className="px-1.5 py-0.5 rounded border border-[#c1c8c3] bg-[#ecf4ff] text-[#414844]">08 AUDIT</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-1.5 text-[#b02f00] font-bold text-[11px] shrink-0 ml-4">
          <span className="text-sm">⚠️</span>
          <span>CORRIDOR SUEZ-ROTTERDAM IN JEOPARDY</span>
        </div>
      </div>
    </>
  );

  if (targetEl) {
    return createPortal(content, targetEl);
  }

  // Fallback if portal target not yet mounted
  return (
    <header className="fixed top-0 left-72 right-0 z-40 bg-white border-b border-[#c1c8c3]">
      {content}
    </header>
  );
};
