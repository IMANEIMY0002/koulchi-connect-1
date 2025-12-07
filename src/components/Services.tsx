import { Droplets, Zap, Sparkles, Paintbrush, Hammer, Home, Wind, Wrench } from 'lucide-react';

const icons = [Droplets, Zap, Sparkles, Paintbrush, Hammer, Home, Wind, Wrench];

export default function Services({ content, lang }: { content: any; lang: string }) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${lang === 'ar' ? 'font-arabic' : ''}`}>
            {content.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {content.items.map((item: any, i: number) => {
            const Icon = icons[i];
            return (
              <div 
                key={i} 
                className="bg-white border border-gray-200 rounded-xl p-5 text-center group hover:shadow-lg hover:border-primary-100 transition-all"
              >
                <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                  <Icon size={28} className="text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className={`font-bold text-gray-800 mb-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}