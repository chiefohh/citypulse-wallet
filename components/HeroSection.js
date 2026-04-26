'use client';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center text-center px-6">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-8 border border-blue-500/30"
      >
        <MapPin size={14} />
        Powered by real-time context AI
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight mb-6"
      >
        The right offer.{' '}
        <span className="text-blue-400">The right moment.</span>{' '}
        Right where you are.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-slate-400 text-xl max-w-2xl mb-10"
      >
        CityPulse detects your exact context — weather, location, time, merchant demand — 
        and generates a personalised local offer before you even knew you needed it.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a href="#demo">
          <Button className="bg-blue-500 hover:bg-blue-400 text-white text-lg px-8 py-6 rounded-xl font-semibold shadow-lg shadow-blue-500/25">
            Try Live Demo →
          </Button>
        </a>
      </motion.div>

    </div>
  );
}