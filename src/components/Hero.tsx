"use client";

import { Download } from "lucide-react";
import MobileMockup from "./MobileMockup";
import { ContentSections } from "../types";
import { useEffect, useState } from "react";

export default function Hero({
  content,
  lang,
}: {
  content: ContentSections["hero"];
  lang: string;
}) {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const fullTitle = content.title;

  useEffect(() => {
    let i = 0;
    setDisplayedTitle("");
    const typingInterval = setInterval(() => {
      if (i < fullTitle.length) {
        setDisplayedTitle(fullTitle.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70); 

    return () => clearInterval(typingInterval);
  }, [fullTitle]);

  return (
    <section className="pt-24 pb-16 bg-[#F8FAFC] dark:bg-slate-950 overflow-hidden w-full transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          <div className="w-full">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-gray-800 dark:text-white inline-flex items-center ${
                lang === "ar" ? "font-arabic" : ""
              }`}
            >
              <span>{displayedTitle}</span>
              <span className="ml-1 inline-block w-1 h-12 bg-blue-600 animate-ping" />
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-7 leading-relaxed">
              {content.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all">
                <Download size={20} />
                <span>{content.ctaUser}</span>
              </button>

              <button className="bg-gray-900 hover:bg-gray-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700 text-white px-8 py-3 rounded-full font-medium border border-gray-800 transition-all">
                {content.ctaProvider}
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-lg">✓</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {content.common.guaranteedService}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 text-lg">⭐</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {content.common.verifiedPros}
                </span>
              </div>
            </div>
          </div>

          {/* Mockup mobile */}
          <div className="flex justify-center lg:justify-end w-full max-w-full overflow-hidden">
            <div className="w-full max-w-md px-4">
              <MobileMockup />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}