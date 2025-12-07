// Footer.tsx
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ content, nav, lang }: { content: any; nav: any; lang: string }) {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                K
              </div>
              <div>
                <span className="text-3xl font-bold text-gray-900 block">
                  Koulchi<span className="text-primary-600">Connect</span>
                </span>
                <span className="text-gray-500 text-sm">
                  {content.tagline}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-xl">
              {content.about}
            </p>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">
                {content.followUs}
              </h4>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, color: 'hover:bg-blue-100 hover:text-blue-600' },
                  { Icon: Instagram, color: 'hover:bg-pink-100 hover:text-pink-600' },
                  { Icon: Twitter, color: 'hover:bg-sky-100 hover:text-sky-600' },
                  { Icon: Linkedin, color: 'hover:bg-blue-100 hover:text-blue-700' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-500 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <social.Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-gray-900 text-xl mb-6">
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
                      className="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 text-xl mb-6">
                {content.contact}
              </h4>
              <div className="space-y-6">
                {[
                  { Icon: Mail, content: "contact@koulchiconnect.ma" },
                  { Icon: Phone, content: "+212 5 22 00 00 00" },
                  { Icon: MapPin, content: content.location }
                ].map((contact, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                      <contact.Icon size={18} className="text-primary-600" />
                    </div>
                    <div>
                      <p className="text-gray-600">{contact.content}</p>
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