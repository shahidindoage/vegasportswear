import React from 'react';
import { motion } from 'motion/react';
import { Navbar, Hero, AthleteSlider } from './components/Layout';
import { SectionHeader, ProductCard, CategoryCard } from './components/Cards';
import { Newsletter, Footer } from './components/Footer';
import { PRODUCTS, CATEGORIES, TRAINING_TYPES, ATHLETES, TECH_FEATURES, COMMUNITY_POSTS } from './constants';
import { Shield, Zap, RefreshCcw, CreditCard, ArrowRight, Users, Cpu, Instagram, Globe } from 'lucide-react';
import { Routes, Route } from 'react-router-dom'
import { Exode } from './components/Exode';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
<Routes>
        {/* Home Page Route */}
        <Route 
          path="/" 
          element={
            <main>
        <Hero />

        {/* Categories - Editorial Split: 40% / 30% / 30% */}
        <section className="bg-black">
          <div className="flex flex-col md:flex-row">
            {CATEGORIES.map((category, index) => (
              <div
                key={category.id}
                style={{ flex: index === 0 ? '0 0 40%' : '0 0 30%' }}
                className="min-h-0"
              >
                <CategoryCard category={category} index={index} />
              </div>
            ))}
          </div>
        </section>

        {/* <section className="relative py-32 bg-[#0A0A0A] overflow-hidden">


  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
    <h2
      className="text-[20vw] font-black uppercase italic tracking-tighter text-transparent"
      style={{ WebkitTextStroke: '1px rgba(255,255,255,0.03)' }}
    >
      VEGA
    </h2>
  </div>

  
  <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red" />

  <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

   
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
      <div>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-brand-red font-black uppercase italic tracking-[0.5em] text-xs mb-4 block"
        >
          Est. 2003 · Meerut, India
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none"
        >
          Who We <br />
          <span className="text-brand-red">Are.</span>
        </motion.h2>
      </div>

    
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="flex-shrink-0"
      >
        <img
          src="Vega.png"
          alt="Vega Industries"
          className="w-32 md:w-80 object-contain opacity-80"
        />
      </motion.div>
    </div>

  
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

    
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        viewport={{ once: true }}
      >
        <div className="border-l-2 border-brand-red pl-6 mb-10">
          <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed">
            Incorporated in <span className="text-white font-bold">2003</span>, Vega Industries is a reputed manufacturer, exporter and supplier of an exclusive range of sports apparel — T-Shirts, Tracksuits, Shorts, Sweat Shirts, Socks and Clothing for all sports.
          </p>
        </div>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
          Our products are designed under the direction of brilliant designers using quality-approved fabric from certified vendors. Stitched with ultra-modern weaving technology, each piece is crafted to meet the current demands of performance and fashion.
        </p>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Operating under the brand name <span className="text-white font-bold">"Vega"</span>, we offer products in a plethora of patterns, designs, styles, prints and colors — at market-leading prices, tailored to every patron's requirement.
        </p>
      </motion.div>

   
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <h4 className="text-white font-black uppercase italic tracking-widest text-xs mb-3 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-brand-red" />
            Our Infrastructure
          </h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            State-of-the-art facility divided into production, designing, procurement, quality testing, logistics, and sales departments — each equipped with sophisticated machines handled by adroit professionals.
          </p>
        </div>
        <div>
          <h4 className="text-white font-black uppercase italic tracking-widest text-xs mb-3 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-brand-red" />
            Our Team
          </h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            A workforce of hardworking, dedicated professionals across creative design, sales & marketing, procurement, and packaging — recruited for talent, skill, and experience. Available 24×7 to meet every customer requirement.
          </p>
        </div>
      </motion.div>
    </div>

   
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 mb-24"
    >
      {[
        { number: '20+', label: 'Years of Excellence' },
        { number: '600+', label: 'Outlets Across India' },
        { number: '2', label: 'Sri Lanka Premier League Teams' },
        { number: '1', label: 'Official Zimbabwe Cricket Merchandiser' },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.05 * i }}
          viewport={{ once: true }}
          className="bg-[#0A0A0A] px-8 py-10 group hover:bg-brand-red/5 transition-colors duration-500"
        >
          <h3 className="text-4xl md:text-5xl font-black italic text-white mb-2 group-hover:text-brand-red transition-colors">
            {stat.number}
          </h3>
          <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest leading-snug">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>

   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="relative border border-white/8 p-8 group hover:border-brand-red/40 transition-all duration-500 bg-white/[0.02]"
      >
        <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center mb-6">
          <span className="text-brand-red text-lg font-black italic">ZC</span>
        </div>
        <h4 className="text-white font-black uppercase italic tracking-tight text-xl mb-3">
          Zimbabwe Cricket
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          Proud Official Merchandiser for Zimbabwe Cricket — supplying international-standard apparel to one of cricket's storied nations.
        </p>
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red group-hover:w-full transition-all duration-500" />
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="relative border border-white/8 p-8 group hover:border-brand-red/40 transition-all duration-500 bg-white/[0.02]"
      >
        <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center mb-6">
          <span className="text-brand-red text-lg font-black italic">SL</span>
        </div>
        <h4 className="text-white font-black uppercase italic tracking-tight text-xl mb-3">
          Sri Lanka Premier League
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          Official kit supplier for <span className="text-white/70">Wayamba United</span> and <span className="text-white/70">Ruhuna Royals</span> — two premier franchises of the Sri Lanka Premier League.
        </p>
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red group-hover:w-full transition-all duration-500" />
      </motion.div>

 
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="relative border border-white/8 p-8 group hover:border-brand-red/40 transition-all duration-500 bg-white/[0.02]"
      >
        <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center mb-6">
          <span className="text-brand-red text-lg font-black italic">14</span>
        </div>
        <h4 className="text-white font-black uppercase italic tracking-tight text-xl mb-3">
          Sustainable Innovation
        </h4>
        <p className="text-gray-500 text-sm leading-relaxed">
          Spanning 14+ years of dynamic innovation — continuously raising the bar with evolving processes, 600+ retail touchpoints, and a commitment to first-class sport.
        </p>
        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red group-hover:w-full transition-all duration-500" />
      </motion.div>
    </div>



  </div>


  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5" />

</section> */}

        {/* Featured Products - Premium Grid */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <SectionHeader
              title="Engineered for Excellence"
              subtitle="The latest innovations in performance wear. Designed for those who refuse to settle."
              linkText="View All Products"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {PRODUCTS.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Recover Banner - Atmospheric with CricSox logo */}
       <section className="relative h-screen flex items-center overflow-hidden bg-black">
  
  {/* Background Image */}
  <motion.div
    initial={{ scale: 1.15, opacity: 0.4 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 2.5, ease: 'easeOut' }}
    className="absolute inset-0"
  >
    <img
      src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/baanner-2.jpeg"
      alt="Recovery"
      className="w-full h-full object-cover object-center"
      referrerPolicy="no-referrer"
    />
    {/* Heavy left-to-right dark fade so text is always readable */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/10" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
  </motion.div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
    <div className="max-w-2xl flex flex-col gap-7">

      {/* ── Logo Row ── */}
      <motion.div
        initial={{ x: -24, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <img src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/cric.png" alt="CricSox" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
        <div className="leading-none">
          <h3 className="text-[#276296] font-black uppercase italic tracking-widest text-xl md:text-2xl leading-none">
            Cric<span className="text-brand-red">Sox</span>
          </h3>
          <span className="text-white/35 text-[9px] font-bold uppercase tracking-[0.35em]">By Vega Sports</span>
        </div>
        <div className="w-px h-8 bg-white/20 mx-1" />
        <span className="text-brand-red font-black uppercase italic tracking-[0.3em] text-[10px] hidden sm:block">
          The Science of Rest
        </span>
      </motion.div>

      {/* ── Main Title ── */}
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="font-black uppercase italic tracking-tighter leading-[0.82] text-white"
        style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
      >
        Recover
        <br />
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: '2px rgba(255,255,255,0.85)' }}
        >
          Faster.
        </span>
      </motion.h2>

      {/* ── Quote ── */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        viewport={{ once: true }}
        className="border-l-2 border-brand-red pl-5 py-1"
      >
        <p className="text-white/70 text-sm md:text-[15px] font-medium italic leading-relaxed tracking-wide">
          "CRICSOX is Designed to Meet the Standards<br className="hidden md:block" /> of International Cricket"
        </p>
        <span className="mt-2 block text-white/25 text-[9px] font-black uppercase tracking-[0.45em]">
          — Performance Standard
        </span>
      </motion.div>

      {/* ── CTA Button ── */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <button className="group relative inline-flex items-center gap-3 bg-brand-red text-white px-10 py-4 font-black uppercase italic tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-2xl">
          View Product
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </motion.div>

    </div>
  </div>

  {/* Vertical side label */}
  <div
    className="absolute right-6 bottom-16 hidden lg:block"
    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
  >
    <span className="text-white/15 font-black uppercase italic tracking-[0.8em] text-[9px]">
      CRICSOX // VEGA PERFORMANCE LABS // 2026
    </span>
  </div>

</section>

        {/* Athlete Spotlight - Team Apex */}
        {/* <section className="py-24 md:py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
              <div className="max-w-2xl">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-brand-red font-black uppercase italic tracking-[0.4em] text-xs mb-4 block"
                >
                  Community Curated
                </motion.span>
                <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.95] overflow-visible">
                  Powering  <br />
                  <span className="relative inline-block pr-6 text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">Teams </span>
                  <span className="text-brand-red"> Worldwide.</span>
                </h2>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <button className="cursor-pointer w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-black/20 hover:border-black hover:text-black transition-all">
                  <ArrowRight size={20} className="rotate-180" />
                </button>
                <button className="cursor-pointer w-14 h-14 rounded-full border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              {ATHLETES.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group relative h-[60vh] md:h-[75vh] overflow-hidden bg-zinc-100"
                >
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-brand-red font-black uppercase italic tracking-widest text-[10px] mb-2 block">{item.discipline} Selection</span>
                      <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4">{item.name}</h3>
                      <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                        <p className="text-gray-300 text-sm font-medium italic mb-6">"{item.quote}"</p>
                        <button className="w-full py-4 bg-white text-black font-black uppercase italic tracking-widest text-xs hover:bg-brand-red hover:text-white transition-colors">
                          Shop the look
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
        <AthleteSlider/>

        {/* Community Social Wall */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-24">
              <span className="text-brand-red font-black uppercase italic tracking-[0.5em] text-xs mb-4 block">Community</span>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-8">
                Vega in <br /><span className="text-brand-red">The Wild.</span>
              </h2>
              <p className="text-gray-500 font-medium max-w-xl mx-auto">
                Tag <span className="text-white">#Vegasportswear</span> to be featured in our elite community gallery.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {COMMUNITY_POSTS.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden bg-gray-900 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                >
                  <img src={post.image} alt="Community" className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center">
                      <Instagram size={24} className="text-white mx-auto mb-2" />
                      <span className="text-white font-black uppercase italic text-[10px] tracking-widest">{post.user}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <SectionHeader
              title="The Elite Standard"
              subtitle="Most trusted gear by professional athletes worldwide. Proven under pressure."
              linkText="Shop Best Sellers"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRODUCTS.filter(p => p.isBestSeller).map((product, index) => (
                <div key={product.id} className={index === 0 ? 'md:col-span-2' : ''}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-20 bg-black border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {[
                { label: 'Global Shipping', icon: <Zap size={16} /> },
                { label: 'Elite Support', icon: <RefreshCcw size={16} /> },
                { label: 'Secure Checkout', icon: <Shield size={16} /> },
                { label: 'Pro Warranty', icon: <CreditCard size={16} /> }
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-3">
                  <div className="text-brand-red">{badge.icon}</div>
                  <span className="text-white font-black uppercase italic tracking-[0.3em] text-[10px]">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
          } 
        />

        {/* Exode Page Route */}
        <Route path="/exode" element={<Exode />} />
        
        {/* Optional: 404 Redirect to Home */}
        <Route path="*" element={<Hero />} />
      </Routes>
      

      <Footer />
    </div>
  );
}
