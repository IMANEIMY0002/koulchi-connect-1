import { Download } from "lucide-react";
import MobileMockup from "@/components/MobileMockup";
import { ContentSections } from "@/types";

export default function Hero({
  content,
  lang,
}: {
  content: ContentSections["hero"];
  lang: string;
}) {
  return (
    <section className="pt-24 pb-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-gray-800 ${
                lang === "ar" ? "font-arabic" : ""
              }`}
            >
              {content.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-7 leading-relaxed">
              {content.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">

              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all">
                <Download size={20} />
                <span>{content.ctaUser}</span>
              </button>

              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium border border-gray-800 transition-all">
                {content.ctaProvider}
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-5">

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <span className="text-gray-700 font-medium">
                  {content.common.guaranteedService}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 text-lg">⭐</span>
                </div>
                <span className="text-gray-700 font-medium">
                  {content.common.verifiedPros}
                </span>
              </div>

            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <MobileMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
