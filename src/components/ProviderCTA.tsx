import { ArrowRight, Users, TrendingUp, Shield, Briefcase, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProviderCTA({ content, lang }: { content: any; lang: string }) {
  return (
    <section id="provider" className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-10 border border-white/10"
          >
            <Shield size={18} className="text-blue-400" />
            <span className="text-sm font-medium text-blue-100 uppercase tracking-wider">
              {content.badge}
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            {content.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            {content.desc}
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
                { icon: TrendingUp, key: 'income' },
                { icon: Users, key: 'clients' },
                { icon: Briefcase, key: 'management' }
            ].map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    whileHover={{ y: -10, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-left transition-all duration-300"
                >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                        <item.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                        {content.benefits[item.key].title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {content.benefits[item.key].desc}
                    </p>
                </motion.div>
            ))}
          </div>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-12 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 mx-auto shadow-2xl shadow-blue-900/50 overflow-hidden group"
          >
            <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
            />
            
            <span className="relative z-10">{content.cta}</span>
            <ArrowRight 
              className={`relative z-10 transition-all duration-300 group-hover:translate-x-1 ${lang === 'ar' ? 'rotate-180' : ''}`} 
              size={24}
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
}