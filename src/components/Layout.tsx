import React, { useState, useEffect, useRef } from 'react';
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
export const ATHLETES = [
  {
    id: '1',
    name: 'rwanda team',
    discipline: 'Elite Sprinter',
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/1.jpg',
    quote: 'Vega gear gives me the 1% edge I need on the track.'
  },
  {
    id: '2',
    name: 'nigeria team',
    discipline: 'Crossfit Champion',
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/2.jpg',
    quote: 'Durability is everything. Vega never lets me down.'
  },
  {
    id: '3',
    name: 'zimbabwe team',
    discipline: 'Ultra Marathoner',
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/3.jpg',
    quote: 'The thermal regulation in the Pro series is unmatched.'
  },
  {
    id: '4',
    name: 'Karnataka team',
    discipline: 'Ultra Marathoner',
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/4.jpg',
    quote: 'The thermal regulation in the Pro series is unmatched.'
  }
];
const NAV_ITEMS = [
  {
    label: 'Products',
    dropdown: [
      { label: 'T-Shirts', href: '#' },
      { label: 'Polo T-Shirts', href: '#' },
      { label: 'Performance Jackets', href: '#' },
      { label: 'Training Shorts', href: '#' },
      { label: 'Compression Pants', href: '#' },
      { label: 'Track Pants', href: '#' },
      { label: 'Hoodies & Sweatshirts', href: '#' },
      { label: 'Full Sleeves', href: '#' },
    ],
  },
  {
    label: 'Accessories',
    dropdown: [
      { label: 'Socks & Grip Socks', href: '#' },
      { label: 'Caps & Headwear', href: '#' },
      { label: 'Bags & Backpacks', href: '#' },
      { label: 'Water Bottles', href: '#' },
      { label: 'Wristbands', href: '#' },
    ],
  },
  { label: 'New Arrivals', dropdown: null },
  { label: 'About Us', dropdown: null },
  { label: 'EXODE', dropdown: null },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (label) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white text-black shadow-md py-3' : 'bg-transparent text-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="md:flex-none text-center md:text-left">
            <h1 className="text-2xl font-black tracking-tighter uppercase italic">
              <img
                src={isScrolled ? 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/logo.png' : 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Vega%20(2).png'}
                alt="Vega Logo"
                className="w-24 md:w-28 transition-all duration-300 object-contain"
              />
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-widest">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className={`flex items-center gap-1 hover:text-brand-red transition-colors py-2 ${activeDropdown === item.label ? 'text-brand-red' : ''}`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </a>
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white text-black shadow-2xl border-t-2 border-brand-red z-50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="flex items-center px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-colors group"
                        >
                          <span className="w-0 group-hover:w-2 h-[2px] bg-white transition-all duration-200 mr-0 group-hover:mr-2 overflow-hidden" />
                          {sub.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-5">
            <button className="hover:text-brand-red transition-colors"><Search size={20} /></button>
            <button className="hover:text-brand-red transition-colors"><User size={20} /></button>
            <button className="relative hover:text-brand-red transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white text-black shadow-xl md:hidden flex flex-col text-sm font-black uppercase italic max-h-[80vh] overflow-y-auto"
            >
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-gray-100">
                  <button
                    className="w-full flex items-center justify-between px-8 py-5 text-left hover:text-brand-red transition-colors"
                    onClick={() => item.dropdown ? setMobileExpanded(mobileExpanded === item.label ? null : item.label) : setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown size={16} className={`transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180 text-brand-red' : ''}`} />
                    )}
                  </button>
                  <AnimatePresence>
                    {item.dropdown && mobileExpanded === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-gray-50"
                      >
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="flex items-center px-12 py-3 text-xs text-gray-600 hover:text-brand-red hover:bg-gray-100 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            — {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/916398204040" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 group">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl"
        >
          <motion.div
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full bg-[#25D366]"
          />
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white relative z-10" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </motion.div>
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold uppercase tracking-widest px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none">
          Chat with us
        </div>
      </a>
    </>
  );
};

const HERO_SLIDES = [
  {
    video: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/video.mp4',
    fallback: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Sequence%2001.00_00_01_00.Still001.jpg.jpeg',
    // label: 'Cricket Performance',
  },
  {
    video: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/video-2.mp4',
    fallback: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Sequence%2001.00_00_24_10.Still001.jpg.jpeg',
    // label: 'Athletic Training',
  },
  
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlide(currentSlide);
      setAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        setAnimating(false);
        setPrevSlide(null);
      }, 800);
    }, 7000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === currentSlide) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentSlide]);

  const goToSlide = (i: number) => {
    if (i === currentSlide) return;
    setPrevSlide(currentSlide);
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide(i);
      setAnimating(false);
      setPrevSlide(null);
    }, 800);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* Video Slideshow */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0"
          style={{
            opacity: index === currentSlide ? (animating ? 0 : 1) : 0,
            transform: `scale(${index === currentSlide ? (animating ? 1.03 : 1) : 1.06})`,
            transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 7s ease-out',
            zIndex: index === currentSlide ? 1 : 0,
          }}
        >
          <video
            ref={(el) => { videoRefs.current[index] = el; }}
            src={slide.video}
            poster={slide.fallback}
            autoPlay={index === 0}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay gradients */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/25 to-black/75" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* Large outlined BG text */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-[35vw] md:text-[30vw] font-black uppercase italic tracking-tighter text-transparent"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
        >
          VEGA
        </motion.h1>
      </div>

      {/* Main centered content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 w-full max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          className="flex flex-col items-center w-full"
        >
          {/* Subheader */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <span className="h-[1px] w-6 md:w-12 bg-brand-red flex-shrink-0" />
            <h2 className="text-brand-red font-black uppercase italic tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-sm text-center">
              Engineered for Excellence
            </h2>
            <span className="h-[1px] w-6 md:w-12 bg-brand-red flex-shrink-0" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1 } }}
            transition={{ type: 'spring', damping: 15 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black text-white uppercase italic leading-[0.9] mb-4 md:mb-6 tracking-tighter text-center"
          >
            Unleash <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue">
              Power.
            </span>
          </motion.h1>

          {/* Slide label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] mt-2"
            >
              {HERO_SLIDES[currentSlide].label}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Slide dots — centered bottom */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`transition-all duration-500 rounded-full ${i === currentSlide ? 'w-8 h-2 bg-brand-red' : 'w-2 h-2 bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>

      {/* Scroll indicator — bottom RIGHT */}
      <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.p
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[8px] md:text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Scroll to Explore
          </motion.p>
          <div className="relative w-px h-10 md:h-14 bg-white/10 overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-brand-red to-transparent"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
};


export const AthleteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width < 768;
  const itemsVisible = isMobile ? 1 : 3;
  const gap = isMobile ? 24 : 40; 
  const maxIndex = Math.max(0, ATHLETES.length - itemsVisible);

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-6xl">
            <motion.span className="text-brand-red font-black uppercase italic tracking-[0.4em] text-xs mb-4 block">
              Community Curated
            </motion.span>
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.95]">
              Powering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">Teams </span>
              <span className="text-brand-red"> Worldwide.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={prevSlide} className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:border-black transition-all">
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <button onClick={nextSlide} className="w-14 h-14 rounded-full border border-black flex items-center justify-center bg-white hover:bg-black hover:text-white transition-all">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            className="flex gap-6 lg:gap-10"
            animate={{ x: `calc(-${currentIndex * (100 / itemsVisible)}% - ${currentIndex * (gap / itemsVisible)}px)` }}
            transition={{ type: "spring", stiffness: 180, damping: 25 }}
          >
            {ATHLETES.map((item) => (
              <motion.div
                key={item.id}
                className={`relative h-[65vh] md:h-[75vh] flex-shrink-0 overflow-hidden bg-zinc-100 group ${isMobile ? 'w-full' : 'w-[calc(33.333%-1.7rem)]'}`}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end overflow-hidden">
                  {/* This wrapper moves the entire block up. 
                    Default: translate-y that hides the quote/button.
                    Hover: translate-y-0 brings them into view.
                  */}
                  <div className="transform translate-y-[120px] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]">
                    
                    <span className="text-brand-red font-black uppercase italic tracking-widest text-[10px] mb-2 block">
                      {item.discipline} Selection
                    </span>
                    
                    <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-6">
                      {item.name}
                    </h3>
                    
                    {/* Hidden content that becomes visible as the parent slides up */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <p className="text-gray-400 text-sm italic mb-8 max-w-[250px]">
                        "{item.quote}"
                      </p>
                      <button className="w-full py-4 bg-white text-black font-black uppercase italic text-xs tracking-[0.2em] hover:bg-brand-red hover:text-white transition-colors duration-300">
                        Shop the look
                      </button>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};