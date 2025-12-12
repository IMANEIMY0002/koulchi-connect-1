'use client';

import { Droplets, Zap, Sparkles, Paintbrush, Hammer, Home, Wind, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const icons = [Droplets, Zap, Sparkles, Paintbrush, Hammer, Home, Wind, Wrench];

export default function Services({ content, lang }: { content: any; lang: string }) {
  const [shuffledOrder, setShuffledOrder] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Mélange
  useEffect(() => {
    if (shuffledOrder.length === 0) {
      const order = content.items.map((_: any, i: number) => i);
      const shuffled = [...order].sort(() => Math.random() - 0.5);
      setShuffledOrder(shuffled);
    }
  }, [content.items]);

  // Construire les items affichés selon l'ordre mélangé
  const displayItems = shuffledOrder.length > 0
    ? shuffledOrder.map((originalIndex) => ({
        ...content.items[originalIndex],
        OriginalIcon: icons[originalIndex] || Home,
        id: originalIndex,
      }))
    : content.items.map((item: any, i: number) => ({
        ...item,
        OriginalIcon: icons[i] || Home,
        id: i,
      }));

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {content.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              {content.subtitle}
            </p>
          </motion.div>
        </div>
        
        {/* Grid Services */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {displayItems.map((item: any, idx: number) => {
            const Icon = item.OriginalIcon;
            
            return (
              <div
                key={item?.id}
                className="relative group block p-2 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
               
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-primary-100/50 dark:bg-primary-900/30 block rounded-xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                
                {/* Card */}
                <div className="relative z-20 h-full w-full p-5 overflow-hidden bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 group-hover:border-primary-200 dark:group-hover:border-primary-800 rounded-xl transition-all duration-300 shadow-sm group-hover:shadow-lg">
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                    <Icon size={28} className="text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {/* Title */}
                  <h3 className={`font-bold text-gray-800 dark:text-gray-100 mb-2 text-center group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors ${lang === 'ar' ? 'font-arabic' : ''}`}>
                    {item.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}