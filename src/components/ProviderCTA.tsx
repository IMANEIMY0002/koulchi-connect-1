import { ArrowRight, Users, TrendingUp, Shield, Briefcase, Award } from 'lucide-react';

export default function ProviderCTA({ content, lang }: { content: any; lang: string }) {
  return (
    <section id="provider" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-y-48 translate-x-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-600/10 rounded-full -translate-x-32 translate-y-32 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge d'en-tête */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
            <Shield size={20} className="text-primary-300" />
            <span className="text-sm font-medium text-primary-100">
              {content.badge}
            </span>
          </div>
          
          {/* Titre principal */}
          <h2 className={`text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight ${lang === 'ar' ? 'font-arabic' : ''}`}>
            {content.title}
          </h2>
          
          {/* Description */}
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            {content.desc}
          </p>
          
          {/* Cartes d'avantages */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-500 cursor-pointer">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">
                {content.benefits.income.title}
              </h3>
              <p className="text-gray-300">
                {content.benefits.income.desc}
              </p>
            </div>
            
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-500 cursor-pointer">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">
                {content.benefits.clients.title}
              </h3>
              <p className="text-gray-300">
                {content.benefits.clients.desc}
              </p>
            </div>
            
            <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary-500/50 transition-all duration-500 cursor-pointer">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">
                {content.benefits.management.title}
              </h3>
              <p className="text-gray-300">
                {content.benefits.management.desc}
              </p>
            </div>
          </div>
          
         
          
          <button className="group relative bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 hover:from-primary-600 hover:via-primary-700 hover:to-primary-800 text-white px-12 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            <div className="absolute -top-2 -right-2">
              <Award size={20} className="text-yellow-400 opacity-80" />
            </div>
            
            <span className="relative z-10">{content.cta}</span>
            <ArrowRight 
              className={`relative z-10 transition-all duration-500 group-hover:translate-x-2 ${lang === 'ar' ? 'rotate-180' : ''}`} 
              size={24}
            />
            
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
          </button>
          
         
        </div>
      </div>
    </section>
  );
}