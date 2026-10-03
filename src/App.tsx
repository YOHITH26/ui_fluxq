/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { ControlTowerScreen } from './screens/ControlTowerScreen';
import { DisruptionLabScreen } from './screens/DisruptionLabScreen';
import { AskFluxQScreen } from './screens/AskFluxQScreen';
import { RouteMapScreen } from './screens/RouteMapScreen';
import { ScreenId } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('control-tower');

  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#131d25]">
      {/* Top Persistent Header (Portaled to body/header[1] or rendered directly) */}
      <Header currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Left Persistent Navigation Aside */}
      <Sidebar currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Main Viewport Content Area */}
      <div className="pl-72 flex flex-col min-h-screen">
        <main className="w-full pt-28 px-5 pb-14 min-h-screen">
          {currentScreen === 'control-tower' && (
            <ControlTowerScreen onNavigate={handleNavigate} />
          )}

          {currentScreen === 'disruption-lab' && (
            <DisruptionLabScreen onNavigate={handleNavigate} />
          )}

          {currentScreen === 'ask-fluxq' && (
            <AskFluxQScreen onNavigate={handleNavigate} />
          )}

          {currentScreen === 'route-map' && (
            <RouteMapScreen onNavigate={handleNavigate} />
          )}

          {/* Graceful fallback for other sidebar/header tabs */}
          {['shipments', 'recovery-center', 'quantum-lab', 'audit-trail'].includes(currentScreen) && (
            <div className="flex flex-col gap-4">
              <div className="bg-white p-6 rounded-lg border border-[#c1c8c3] shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#c1c8c3]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#002217] text-[24px]">verified</span>
                    <h2 className="font-sans font-bold text-lg text-[#002217] uppercase tracking-wide">
                      {currentScreen.replace('-', ' ')}
                    </h2>
                  </div>
                  <span className="text-xs font-mono bg-[#c1ecd7] text-[#002116] px-2.5 py-1 rounded font-bold">
                    SYSTEM OPERATIONAL
                  </span>
                </div>
                <p className="text-xs font-sans text-[#414844] mt-3">
                  This console module is fully synchronized with the 1,428 consignment mesh and OR-Tools/QUBO solver core. You can switch to the primary operational views:
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <button
                    onClick={() => handleNavigate('control-tower')}
                    className="py-1.5 px-3 rounded bg-[#002217] text-white font-sans text-xs font-bold transition-colors"
                  >
                    Control Tower →
                  </button>
                  <button
                    onClick={() => handleNavigate('disruption-lab')}
                    className="py-1.5 px-3 rounded bg-[#ff5722] text-white font-sans text-xs font-bold transition-colors"
                  >
                    Disruption Lab →
                  </button>
                  <button
                    onClick={() => handleNavigate('route-map')}
                    className="py-1.5 px-3 rounded bg-[#ecf4ff] border border-[#c1c8c3] text-[#131d25] font-sans text-xs font-bold transition-colors"
                  >
                    Route Map →
                  </button>
                  <button
                    onClick={() => handleNavigate('ask-fluxq')}
                    className="py-1.5 px-3 rounded bg-[#c1ecd7] text-[#002116] font-sans text-xs font-bold transition-colors"
                  >
                    Ask FluxQ →
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Bottom Persistent Status Footer */}
        <Footer />
      </div>
    </div>
  );
}
