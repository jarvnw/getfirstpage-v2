
import React from 'react';

const Header: React.FC = () => {
  const logoUrl = "https://ik.imagekit.io/hijar/favicon%20orange%20no%20emblem%20100dpi_LkFi1ULrl.png?updatedAt=1769577888004&ik-s=dc551a02d9a8c1cb7c6cbab822b12839824daa13";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src={logoUrl} 
            alt="First Page Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="font-bold text-slate-900 hidden sm:block">First Page Template</span>
        </div>
        
        {/* Navigation and button removed as requested */}
      </div>
    </header>
  );
};

export default Header;
