import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { ContentSections } from '../types';

interface ContactProps {
  content: ContentSections['contact'];
  lang: string;
}

export default function Contact({ content, lang }: ContactProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50  relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4 border border-primary-100"
            >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                {content.badge}
            </motion.div>
            
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            {content.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {content.subtitle}
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-96 flex flex-col items-center justify-center text-center"
              >
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-500">
                    <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.form.success}</h3>
                <p className="text-gray-500">Nous vous répondrons dans les plus brefs délais.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="relative group">
                    <label className={`absolute left-10 transition-all duration-200 pointer-events-none z-10 ${
                        focusedField === 'name' || formState.name ? 'text-xs text-primary-600 top-3 font-semibold' : 'text-gray-400 top-4'
                    }`}>
                        {content.form.name}
                    </label>
                    <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-primary-500 transition-colors z-10">
                        <User size={20} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 pt-6 pb-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="relative group">
                    <label className={`absolute left-10 transition-all duration-200 pointer-events-none z-10 ${
                        focusedField === 'phone' || formState.phone ? 'text-xs text-primary-600 top-3 font-semibold' : 'text-gray-400 top-4'
                    }`}>
                        {content.form.phone}
                    </label>
                    <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-primary-500 transition-colors z-10">
                        <Phone size={20} />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 pt-6 pb-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative group">
                    <label className={`absolute left-10 transition-all duration-200 pointer-events-none z-10 ${
                        focusedField === 'email' || formState.email ? 'text-xs text-primary-600 top-3 font-semibold' : 'text-gray-400 top-4'
                    }`}>
                        {content.form.email}
                    </label>
                    <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-primary-500 transition-colors z-10">
                        <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 pt-6 pb-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-200"
                    />
                </div>

                {/* Message Input */}
                <div className="relative group">
                    <label className={`absolute left-10 transition-all duration-200 pointer-events-none z-10 ${
                        focusedField === 'message' || formState.message ? 'text-xs text-primary-600 top-3 font-semibold' : 'text-gray-400 top-4'
                    }`}>
                        {content.form.message}
                    </label>
                    <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-primary-500 transition-colors z-10">
                        <MessageSquare size={20} />
                    </div>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pl-10 pr-4 pt-8 pb-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all duration-200 resize-none"
                    />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-600/20 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>{content.form.submit}</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}