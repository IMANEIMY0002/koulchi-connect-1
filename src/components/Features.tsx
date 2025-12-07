import { ShieldCheck, Clock, Star, Languages, Bell, ThumbsUp } from "lucide-react";
import { useState } from "react";

 
const icons = [ShieldCheck, Clock, Star, ThumbsUp, Languages, Bell];
 
export default function Features({ content, lang }: { content: any; lang: string }) {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              {content.badge}
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${lang === "ar" ? "font-arabic" : ""}`}>
            {content.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
             {content.subtitle}
          </p>
        </div>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((item: any, i: number) => {
            const Icon = icons[i];
 
            return (
              <FeatureCard key={i} item={item} Icon={Icon} lang={lang} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
 
function FeatureCard({ item, Icon, lang }: { item: any; Icon: any; lang: string }) {
  const [isHovered, setIsHovered] = useState(false);
 
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl p-8 transition-all duration-300 cursor-pointer group relative overflow-hidden"
      style={{
        border: isHovered
          ? '1px solid #cadeffff'
          : '2px solid #cbd3e4ff',
        boxShadow: isHovered
          ? '0 20px 40px rgba(0, 63, 163, 0.21), 0 0 0 1px rgba(59, 130, 246, 0.1)'
          : '0 4px 6px rgba(0, 0, 0, 0.23)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
     
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
          <Icon size={28} strokeWidth={2} />
        </div>
 
        <div>
          <h4 className={`font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-700 transition-colors ${lang === "ar" ? "font-arabic" : ""}`}>
            {item.title}
          </h4>
          <p className="text-gray-600 leading-relaxed text-base">{item.desc}</p>
        </div>
      </div>
 
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
}
 