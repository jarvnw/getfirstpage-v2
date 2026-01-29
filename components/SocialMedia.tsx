
import React from 'react';
import { Youtube, Instagram } from 'lucide-react';

const ThreadsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 7.5c-1.333 -3 -3.667 -4.5 -7 -4.5c-5 0 -8 2.5 -8 9s3.5 9 8 9s7 -3 7 -5s-1 -5 -7 -5c-2.5 0 -3 4.5 0.5 4.5c2 0 3 -2 3 -3s-1 -4 -3 -4s-3 3 -3 4" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const SocialButton: React.FC<{ icon: React.ReactNode; text: string; href?: string }> = ({ icon, text, href = "#" }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand/30 transition-all duration-300 group"
  >
    <div className="text-gray-400 group-hover:text-brand transition-all duration-300 group-hover:scale-110">
      {icon}
    </div>
    <span className="text-gray-600 font-medium text-sm md:text-base group-hover:text-slate-900 transition-colors">
      {text}
    </span>
  </a>
);

const SocialMedia: React.FC = () => {
  return (
    <section id="sosmed" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        <div className="space-y-10 w-full flex flex-col items-center">
          <div className="space-y-4 reveal">
            <p className="text-gray-400 font-medium tracking-wide text-sm md:text-base">Dapatkan konten terbaru kami</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-900">
              <span className="font-playfair font-medium block">Follow sosial</span>
              <span className="font-playfair italic font-medium block">
                <span className="text-brand">media kami</span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl stagger-reveal">
            <SocialButton 
              icon={<Youtube className="w-5 h-5" />} 
              text="First Page Template" 
              href="https://www.youtube.com/channel/UCLNclxK8khv0Y89Op0Q8hkw"
            />
            <SocialButton 
              icon={<Instagram className="w-5 h-5" />} 
              text="firstpage.template" 
              href="https://www.instagram.com/firstpage.template/?hl=id"
            />
            <SocialButton 
              icon={<ThreadsIcon />} 
              text="firstpage.template" 
              href="https://www.threads.com/@firstpage.template"
            />
            <SocialButton 
              icon={<TikTokIcon />} 
              text="firstpage.template" 
              href="https://www.tiktok.com/@firstpage.template"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialMedia;