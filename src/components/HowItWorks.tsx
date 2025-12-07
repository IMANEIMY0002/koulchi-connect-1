import { Search, UserCheck, CalendarCheck } from 'lucide-react';
import { useState } from 'react';

const steps = [Search, UserCheck, CalendarCheck];

export default function HowItWorks({ content, lang }: { content: any; lang: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
      `}</style>

      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            {content.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {content.steps.map((step: any, i: number) => {
            const Icon = steps[i];
            const stepNumber = i + 1;
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                className="relative h-full"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-500 h-full flex flex-col ${
                    isHovered ? 'transform -translate-y-4 shadow-2xl' : ''
                  }`}
                  style={{
                    background: isHovered
                      ? 'linear-gradient(135deg, #eef7ffff 0%, #75a1be2c 100%)'
                      : '#ffffff',
                    border: isHovered
                      ? '1px solid #cadeffff'
                      : '2px solid #cbd3e4ff',
                    boxShadow: isHovered
                      ? '0 20px 40px rgba(0, 63, 163, 0.21)'
                      : '0 4px 6px rgba(0,0,0,0.23)',
                  }}
                >

                  {/* Numéro */}
                  <div
                    className={`absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                      isHovered ? 'scale-110' : ''
                    }`}
                    style={{
                      background: isHovered
                        ? 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)'
                        : '#fb923c',
                    }}
                  >
                    <span className="text-white font-bold text-lg">{stepNumber}</span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-md transition-all duration-500 ${
                      isHovered ? 'scale-110' : ''
                    }`}
                    style={{
                      background: isHovered
                        ? 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
                        : '#3b82f6',
                    }}
                  >
                    <Icon size={36} strokeWidth={2} />
                  </div>

                  {/* Title + Desc */}
                  <h3
                    className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                      isHovered ? 'text-blue-600' : 'text-gray-900'
                    } ${lang === 'ar' ? 'font-arabic' : ''}`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed flex-grow">{step.desc}</p>
                </div>

                {isHovered && (
                  <div
                    className="absolute -z-10 w-full h-full top-0 left-0 rounded-2xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
