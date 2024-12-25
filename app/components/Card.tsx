'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  synopsis: string;
  imageUrl: string;
  episodes?: number;
  rating?: number;
}

export default function Card({
  title,
  synopsis,
  imageUrl,
  episodes,
  rating,
}: CardProps) {
  const [isFlipped, setIsFlipped] = useState(true);

  return (
    <motion.div
      className="w-full h-[500px] cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        initial={true}
        animate={{ rotateY: isFlipped ? 0 : 360 }}
        transition={{ duration: 0.8 }}
      >
        {isFlipped ? (
          <div
            className="absolute w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-6">
              <h2 className="text-3xl font-bold text-shadow">{title}</h2>
            </div>
          </div>
        ) : (
          <div className="absolute w-full h-full backface-hidden bg-purple-900 p-6 overflow-y-auto rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-purple-200">{title}</h2>
            <p className="text-lg text-gray-200 leading-relaxed">{synopsis}</p>
            {episodes && (
              <p className="text-lg mt-2 text-gray-200 leading-relaxed">
                Episodes: {episodes}
              </p>
            )}
            {rating && (
              <p className="text-lg mt-2 text-gray-200 leading-relaxed">
                Rating: {rating}/10
              </p>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
