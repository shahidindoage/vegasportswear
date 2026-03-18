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
         <img src="logo.png" alt="" width="100"/>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-brand-red transition-colors">Men</a>
          <a href="#" className="hover:text-brand-red transition-colors">Women</a>
          <a href="#" className="hover:text-brand-red transition-colors">Accessories</a>
          <a href="#" className="hover:text-brand-red transition-colors">New Arrivals</a>
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
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Men</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Women</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Accessories</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</a>
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
          className="text-[30vw] font-black uppercase italic tracking-tighter text-transparent border-text stroke-white"
          style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)' }}
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
            src="https://picsum.photos/seed/athlete-hero/1920/1080"
            alt="Hero Performance"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Floating Elements: Accessories */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[15%] w-48 h-48"
        >
          <img 
            src="p2.jpg" 
            alt="Glove" 
            className="w-full h-full object-contain drop-shadow-2xl opacity-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[15%] w-56 h-56"
        >
          <img 
            src="p7.jpg" 
            alt="Bottle" 
            className="w-full h-full object-contain drop-shadow-2xl opacity-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-[1px] w-12 bg-brand-red" />
            <h2 className="text-brand-red font-black uppercase italic tracking-[0.4em] text-xs md:text-sm">
              Engineered for Excellence
            </h2>
            <span className="h-[1px] w-12 bg-brand-red" />
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ type: "spring", damping: 12 }}
            className="text-7xl md:text-[10rem] font-black text-white uppercase italic leading-[0.85] mb-8 tracking-tighter"
          >
            Unleash <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue">Power.</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            className="text-gray-400 text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            The intersection of high-tech materials and elite performance. Gear that doesn't just keep up—it pushes you forward.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="group relative bg-white text-black px-12 py-5 font-black uppercase italic tracking-widest overflow-hidden transition-all duration-300">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Gear</span>
              <div className="absolute inset-0 bg-brand-red transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="group flex items-center gap-4 text-white font-black uppercase italic tracking-widest hover:text-brand-red transition-colors">
              Watch Film
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-brand-red group-hover:bg-brand-red/10 transition-all">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Stats/Micro-details */}
      <div className="absolute bottom-12 left-0 right-0 px-8 hidden md:flex items-end justify-between z-20">
        <div className="flex gap-12">
          <div>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Materials</p>
            <p className="text-white font-bold italic">Carbon-Infused</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Durability</p>
            <p className="text-white font-bold italic">Military Grade</p>
          </div>
        </div>
        
        <div className="flex flex-col items-end">
          <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-4">Scroll to Explore</p>
          <div className="w-px h-16 bg-gradient-to-b from-brand-red to-transparent" />
        </div>
      </div>
    </section>
  );
};
