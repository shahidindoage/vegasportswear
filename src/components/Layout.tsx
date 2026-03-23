import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-black shadow-md py-3' : 'bg-transparent text-white py-5'
      }`}
    >
      {/* bg-transparent text-white py-5 */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="md:flex-none text-center md:text-left">
          <h1 className="text-2xl font-black tracking-tighter uppercase italic">
            {/* <span className="text-brand-blue">Vega</span><span className="text-brand-red">sportswear</span> */}
         <img 
          // Toggle between your dark-mode logo and your original/dark logo
          src={isScrolled 
            ? "logo-4.png" // Dark logo for white bg
            : "https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/vega-logo-2.png"       // Light logo for transparent/dark bg
          } 
          alt="Vega Logo" 
          className="w-24 md:w-28 transition-all duration-300 object-contain"
        />
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-brand-red transition-colors">Products</a>
          <a href="#" className="hover:text-brand-red transition-colors">Accessories</a>
          <a href="#" className="hover:text-brand-red transition-colors">New Arrivals</a>
          <a href="#" className="hover:text-brand-red transition-colors">About Us</a>
       
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <button className="hover:text-brand-red transition-colors">
            <Search size={20} />
          </button>
          <button className="hover:text-brand-red transition-colors">
            <User size={20} />
          </button>
          <button className="relative hover:text-brand-red transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white text-black p-8 shadow-xl md:hidden flex flex-col space-y-6 text-xl font-black uppercase italic"
          >
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Accessories</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};




export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Layer: Large Outlined Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[35vw] md:text-[30vw] font-black uppercase italic tracking-tighter text-transparent"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
        >
          VEGA
        </motion.h1>
      </div>

      {/* Background Image with Mask */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="w-full h-full"
        >
          <img
            src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/imgi_26_pexels-photo-3764011%20(1).jpg"
            alt="Hero Performance"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 w-full max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* Subheader */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <span className="h-[1px] w-6 md:w-12 bg-brand-red" />
            <h2 className="text-brand-red font-black uppercase italic tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-sm">
              Engineered for Excellence
            </h2>
            <span className="h-[1px] w-6 md:w-12 bg-brand-red" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ type: "spring", damping: 15 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white uppercase italic leading-[0.9] mb-6 md:mb-8 tracking-tighter"
          >
            Unleash <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue">Power.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-gray-400 text-sm md:text-xl lg:text-2xl font-medium max-w-xs md:max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed"
          >
            The intersection of high-tech materials and elite performance. Gear that doesn't just keep up—it pushes you forward.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <button className="cursor-pointer group relative w-full sm:w-auto bg-white text-black px-8 py-4 md:px-12 md:py-5 font-black uppercase italic tracking-widest overflow-hidden transition-all duration-300">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Gear</span>
              <div className="absolute inset-0 bg-brand-red transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <button className="cursor-pointer group relative w-full sm:w-auto border border-white/30 hover:border-brand-red px-8 py-4 md:px-12 md:py-5 font-black uppercase italic tracking-widest text-white transition-all duration-300">
              <span className="group-hover:text-brand-red transition-colors duration-300">Explore Exode</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator - Now visible on all screens with adjusted positioning */}
      <div className="absolute bottom-6 md:bottom-12 left-0 right-0 px-8 flex flex-col items-center md:items-end justify-center z-20 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center md:items-end"
        >
          <motion.p 
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[8px] md:text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-3 md:mb-4"
          >
            Scroll to Explore
          </motion.p>
          
          {/* Animated Line */}
          <div className="relative w-px h-12 md:h-20 bg-white/10 overflow-hidden">
            <motion.div 
              animate={{ 
                y: ["-100%", "100%"] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-brand-red to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
