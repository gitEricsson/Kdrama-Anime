'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Kdramas from './components/Kdramas';
import Animes from './components/Animes';

export default function Home() {
  const [activeTab, setActiveTab] = useState('kdramas');

  return (
    <div className="min-h-screen gradient-bg text-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'kdramas' ? <Kdramas /> : <Animes />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
