import React from 'react';
import FancyHeader from './components/FancyHeader.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#080808] text-[#f5f5f5] overflow-hidden selection:bg-white selection:text-black">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 grain-overlay"></div>
      
      <main className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-24 lg:px-32">
        <FancyHeader />
        
        {/* Decorative elements */}
        <div className="absolute top-12 right-12 text-[10px] font-mono tracking-[0.3em] uppercase opacity-40 vertical-text hidden md:block">
          System_v.0.4.2 // Artifact
        </div>
        
        <div className="absolute bottom-12 left-12 flex items-center gap-4">
          <div className="w-8 h-[1px] bg-white/20"></div>
          <span className="text-[10px] font-mono tracking-widest uppercase opacity-40">Est. 2024</span>
        </div>
      </main>

      {/* Ambient Background Glow */}
      <div className="fixed top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-white/[0.01] blur-[100px] rounded-full pointer-events-none"></div>
    </div>
  );
}