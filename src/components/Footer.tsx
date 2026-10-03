import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-72 right-0 h-10 bg-white border-t border-[#c1c8c3] px-4 flex items-center justify-between text-[#414844] font-mono text-[11px] z-30">
      <div className="flex items-center gap-4 overflow-x-auto">
        <span>
          TELEMETRY: <span className="text-[#131d25] font-bold">NOMINAL</span>
        </span>
        <span className="hidden sm:inline">·</span>
        <span>
          AIS FEEDS: <span className="text-[#131d25] font-bold">1,248 LIVE</span>
        </span>
        <span className="hidden sm:inline">·</span>
        <span>
          SOLVER LATENCY: <span className="text-[#0f382a] font-bold">14.2ms</span>
        </span>
        <span className="hidden md:inline">·</span>
        <span className="hidden md:inline">
          LEDGER: <span className="text-[#414844]">HASH 8f2a...c019</span>
        </span>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <span className="hidden lg:inline text-[#717974]">© 2025 FluxQ Decision Systems</span>
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#c1ecd7] text-[#002116] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]"></span>
          OPERATIONAL DESK ACTIVE
        </span>
      </div>
    </footer>
  );
};
