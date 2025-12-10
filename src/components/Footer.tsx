import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ content, nav, lang }: { content: any; nav: any; lang: string }) {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                K
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 block leading-none">
                  Koulchi<span className="text-primary-600">Connect</span>
                </span>
                <span className="text-gray-400 text-xs mt-1 font-medium tracking-wide uppercase">
                  {content.tagline}
                </span>
              </div>
            </div>
            
            <p className="text-gray-500 mb-10 text-lg leading-relaxed max-w-md">
              {content.about}
            </p>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-6 text-sm uppercase tracking-wider">
                {content.followUs}
              </h4>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, color: 'hover:bg-[#1877F2] hover:text-white', bg: 'bg-blue-50 text-[#1877F2]' },
                  { Icon: Instagram, color: 'hover:bg-[#E4405F] hover:text-white', bg: 'bg-pink-50 text-[#E4405F]' },
                  { Icon: Twitter, color: 'hover:bg-[#1DA1F2] hover:text-white', bg: 'bg-sky-50 text-[#1DA1F2]' },
                  { Icon: Linkedin, color: 'hover:bg-[#0A66C2] hover:text-white', bg: 'bg-blue-50 text-[#0A66C2]' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className={`w-12 h-12 ${social.bg} rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${social.color}`}
                  >
                    <social.Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-8">
                {content.links}
              </h4>
              <ul className="space-y-4">
                {[
                  { href: "#", label: content.home },
                  { href: "#services", label: nav.services },
                  { href: "#features", label: nav.features },
                  { href: "#provider", label: content.joinUs },
                ].map((link, i) => (
                  <li key={i}>
                    <a 
                      href={link.href} 
                      className="text-gray-500 hover:text-primary-600 font-medium transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-200 opacity-0 transition-opacity hover:opacity-100"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-8">
                {content.contact}
              </h4>
              <div className="space-y-6">
                {[
                  { Icon: Mail, content: "contact@koulchiconnect.ma" },
                  { Icon: Phone, content: "+212 5 22 00 00 00" },
                  { Icon: MapPin, content: content.location }
                ].map((contact, i) => (
                  <div key={i} className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-primary-50 transition-colors">
                      <contact.Icon size={18} className="text-gray-600 group-hover:text-primary-600 transition-colors" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium group-hover:text-gray-900 transition-colors mt-2">{contact.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

         <div className="border-t border-gray-200 pt-8">
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-xs">
              {content.trademark}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}