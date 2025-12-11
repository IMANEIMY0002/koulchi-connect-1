import { Search, UserCheck, CalendarCheck } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [Search, UserCheck, CalendarCheck];

export default function HowItWorks({ content, lang }: { content: any; lang: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white overflow-hidden"> 
      <div className="container mx-auto px-4">

        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            {content.title}
          </motion.h2>
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: 80 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="h-1.5 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto items-start relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-100 -z-0">
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-full bg-blue-100 origin-left"
                />
            </div>

          {content.steps.map((step: any, i: number) => {
            const Icon = steps[i];
            const stepNumber = i + 1;
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="relative h-full pt-4"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  animate={{ 
                      y: isHovered ? -10 : 0,
                      boxShadow: isHovered 
                        ? '0 25px 50px -12px rgba(59, 130, 246, 0.25)' 
                        : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  className="bg-white rounded-3xl p-8 text-center h-full flex flex-col relative border border-gray-100 z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                    className="absolute -top-6 -right-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg text-white font-bold text-xl rotate-12"
                  >
                    {stepNumber}
                  </motion.div>

                  <motion.div
                    animate={{ 
                        scale: isHovered ? 1.1 : 1,
                        backgroundColor: isHovered ? '#1d4ed8' : '#3b82f6'
                    }}
                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-xl shadow-blue-200"
                  >
                    <Icon size={40} strokeWidth={1.5} />
                  </motion.div>

                  <h3
                    className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      isHovered ? 'text-blue-600' : 'text-gray-900'
                    } ${lang === 'ar' ? 'font-arabic' : ''}`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed flex-grow text-lg">{step.desc}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
