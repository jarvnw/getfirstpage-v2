
import React from 'react';

const Hero: React.FC = () => {
  const heroImage = "https://ik.imagekit.io/hijar/mockup_umkm%20fintrack_zBBnLErSB.jpg?updatedAt=1769606717696&ik-s=5aab179b827e522b285b7f5e170642d75e4982c4";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('solusi');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 reveal">
          <div className="space-y-6">
            <p className="text-gray-400 font-medium tracking-wide text-sm md:text-base">First Page Template</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl leading-tight text-slate-900">
              <span className="font-playfair font-medium block">Solusi digital cerdas,</span>
              <span className="font-playfair italic font-medium block">
                UMKM <span className="text-brand">naik kelas.</span>
              </span>
            </h1>
            <div className="h-2 w-24 bg-brand rounded-full"></div>
          </div>
          
          <a 
            href="#solusi" 
            onClick={handleScroll}
            className="inline-flex items-center justify-center px-8 py-4 bg-brand text-white font-bold rounded-2xl shadow-lg shadow-brand/20 hover:bg-[#e65300] hover:shadow-xl hover:scale-105 transition-all duration-300 transform active:scale-95"
          >
            Lihat Solusi Kami
          </a>
        </div>
        
        <div className="flex-1 w-full flex justify-center lg:justify-end reveal" style={{transitionDelay: '0.3s'}}>
          <div className="relative group max-w-md lg:max-w-full animate-float">
            <img 
              src={heroImage} 
              alt="Digital Solution Illustration" 
              className="relative w-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;