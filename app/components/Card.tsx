'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  synopsis: string;
  imageUrl: string;
}

export default function Card({ title, synopsis, imageUrl }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-full h-96 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="absolute w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        </div>
        <div
          className="absolute w-full h-full backface-hidden bg-purple-800 p-6 overflow-y-auto rounded-lg shadow-lg"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <h2 className="text-2xl font-bold mb-4 text-purple-200">{title}</h2>
          <p className="text-lg text-gray-200 leading-relaxed">{synopsis}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
