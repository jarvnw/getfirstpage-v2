
import React from 'react';

const Hero: React.FC = () => {
  const heroImage = "https://ik.imagekit.io/hijar/Untitled%20design%20(2)_-P-IOFcJV.jpg?updatedAt=1769578012485&ik-s=fefc9fcbbad3cd8296d5af6d632368817f2b460c";

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
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">
              Solusi digital cerdas, <br />
              UMKM <span className="text-brand">naik kelas.</span>
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
