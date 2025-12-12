'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryProps {
  content: {
    title: string;
    subtitle: string;
    images: {
      title: string;
      category: string;
      image: string;
    }[];
  };
  lang: string;
}

export default function Gallery({ content, lang }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + content.images.length) % content.images.length);
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            {content.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            {content.subtitle}
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-900 dark:bg-black border border-gray-200 dark:border-slate-800">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.4 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={content.images[currentIndex].image}
                  alt={content.images[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="inline-block bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide">
                        {content.images[currentIndex].category}
                    </span>
                    <h3 className={`text-3xl md:text-5xl font-bold text-white mb-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                        {content.images[currentIndex].title}
                    </h3>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white text-white hover:text-black w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white text-white hover:text-black w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          
          <div className="flex justify-center gap-3 mt-8">
            {content.images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                    const dir = index > currentIndex ? 1 : -1;
                    setDirection(dir);
                    setCurrentIndex(index);
                }}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-10 h-3 bg-primary-600'
                    : 'w-3 h-3 bg-gray-300 dark:bg-slate-700 hover:bg-gray-400 dark:hover:bg-slate-600'
                } rounded-full`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}