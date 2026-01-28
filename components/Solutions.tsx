
import React from 'react';
import { ArrowRight } from 'lucide-react';

const SolutionLink: React.FC<{ text: string; href?: string; isHighlighted?: boolean }> = ({ text, href = "#", isHighlighted = false }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center justify-between w-full p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out ${isHighlighted ? 'border-brand/20' : 'hover:border-brand/40'}`}
  >
    <span className={`font-semibold text-sm md:text-base transition-colors duration-300 ${isHighlighted ? 'text-brand' : 'text-gray-600 group-hover:text-brand'}`}>
      {text}
    </span>
    <div className={`p-2 rounded-full transition-all duration-500 group-hover:rotate-[360deg] ${isHighlighted ? 'bg-brand/10 text-brand' : 'text-gray-300 group-hover:bg-brand/10 group-hover:text-brand'}`}>
      <ArrowRight className="w-5 h-5" />
    </div>
  </a>
);

const Solutions: React.FC = () => {
  const solutionImage = "https://ik.imagekit.io/hijar/mockup_toko%20online_VuXBoBPXg.png?updatedAt=1769606718856&ik-s=36fe8611cbb5d5b13c88d6b0d0d5ce6b8789480e";

  return (
    <section id="solusi" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        
        <div className="flex-1 w-full flex justify-center lg:justify-start reveal">
          <div className="relative group max-w-md lg:max-w-full">
            <img 
              src={solutionImage} 
              alt="Business Strategy" 
              className="relative w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <div className="space-y-4 reveal">
            <p className="text-gray-400 font-medium tracking-wide text-sm md:text-base">Dapatkan solusi cerdas</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Atasi masalah <br />
              <span className="text-brand">bisnismu</span>
            </h2>
          </div>

          <div className="grid gap-4 max-w-lg stagger-reveal">
            <SolutionLink 
              text="Website Toko Online UMKM" 
              href="https://webstoreumkm.vercel.app" 
              isHighlighted={true}
            />
            <SolutionLink 
              text="Aplikasi Pencatatan Keuangan UMKM" 
              href="https://umkmfintrack.vercel.app" 
              isHighlighted={true}
            />
            <SolutionLink 
              text="Template Notion untuk Bisnis" 
              href="https://firstpagetemplate.super.site/template-notion-by-first-page-template" 
            />
            <SolutionLink 
              text="Template Notion Gratis Untuk Produktivitas" 
              href="https://firstpagetemplate.super.site/template-notion-by-first-page-template/personal-productivity-system-lite" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solutions;
