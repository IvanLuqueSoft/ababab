import React from 'react';
import { motion } from 'framer-motion';

export default function FancyHeader() {
  return (
    <div className="max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-[clamp(3rem,12vw,10rem)] font-black tracking-tighter leading-[0.8] mb-12">
          <span className="block">BEYOND</span>
          <span 
            className="block text-transparent"
            style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}
          >
            THE
          </span>
          <span className="block relative">
            VOID
            <motion.span 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "circOut" }}
              className="absolute -bottom-2 left-0 w-full h-[4px] bg-white origin-left"
            />
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex flex-col md:flex-row gap-12 items-start mt-16"
      >
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">Description</span>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-400 max-w-xl">
            A digital experience crafted for those who seek the unconventional. 
            We dismantle the generic to build something that feels truly authored.
          </p>
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">Status</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-sm font-mono text-zinc-500">Active_Sequence</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}