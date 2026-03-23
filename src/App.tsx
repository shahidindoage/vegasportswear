import React from 'react';
import { motion } from 'motion/react';
import { Navbar, Hero } from './components/Layout';
import { SectionHeader, ProductCard, CategoryCard } from './components/Cards';
import { Newsletter, Footer } from './components/Footer';
import { PRODUCTS, CATEGORIES, TRAINING_TYPES, ATHLETES, TECH_FEATURES, COMMUNITY_POSTS } from './constants';
import { Shield, Zap, RefreshCcw, CreditCard, ArrowRight, Users, Cpu, Instagram, Globe } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Categories - Editorial Split */}
        <section className="bg-black">
          <div className="flex flex-col md:flex-row">
            {CATEGORIES.map((category, index) => (
              <div key={category.id} className="flex-1">
                <CategoryCard category={category} index={index} />
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products - Premium Grid */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <SectionHeader 
              title="Engineered for Excellence" 
              subtitle="The latest innovations in performance gear. Designed for those who refuse to settle."
              linkText="View All Products"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {PRODUCTS.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Technology Showcase - Technical Grid */}
        {/* <section className="py-32 bg-[#F8F8F8]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-24">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-red font-black uppercase italic tracking-[0.5em] text-xs mb-4 block"
              >
                Innovation Lab
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8">
                The Fabric of <br />
                <span className="text-brand-red">Performance.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {TECH_FEATURES.map((feature, index) => (
                <motion.div 
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-12 border border-black/5 hover:border-brand-red transition-all group"
                >
                  <div className="w-16 h-16 bg-black text-white flex items-center justify-center mb-8 group-hover:bg-brand-red transition-colors">
                    {feature.icon === 'Cpu' && <Cpu size={32} />}
                    {feature.icon === 'Zap' && <Zap size={32} />}
                    {feature.icon === 'Shield' && <Shield size={32} />}
                  </div>
                  <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4">{feature.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Recover Banner - Atmospheric */}
        <section className="relative h-[90vh] flex items-center overflow-hidden bg-black">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" 
              alt="Recovery"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          </motion.div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="text-brand-red font-black uppercase italic tracking-[0.5em] text-sm mb-6 block"
              >
                The Science of Rest
              </motion.span>
              <motion.h2 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-[0.85] mb-10"
              >
                Recover <br />
                <span className="text-transparent border-text stroke-white" style={{ WebkitTextStroke: '2px white' }}>Faster.</span>
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-xl mb-12 max-w-xl font-medium leading-relaxed"
              >
                Advanced compression technology and thermal regulation designed to accelerate muscle repair and optimize your downtime.
              </motion.p>
              <motion.button 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-brand-red text-white px-12 py-5 font-black uppercase italic tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl"
              >
                Explore Recovery Gear
              </motion.button>
            </div>
          </div>

          
          <div className="absolute right-0 bottom-20 vertical-text hidden lg:block pr-8">
            <span className="text-white/20 font-black uppercase italic tracking-[1em] text-xs">
              VEGA PERFORMANCE LABS // 2026
            </span>
          </div>
        </section>

        {/* Athlete Spotlight - Team Apex */}
        <section className="py-24 md:py-32 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    {/* Heading Section */}
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
    The <br />
    <span className="relative inline-block pr-6 text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
      Creator
    </span>
    <span className="text-brand-red"> Edit.</span>
  </h2>
</div>
      
      {/* Navigation - Hidden on Mobile for cleaner look */}
      <div className="hidden md:flex items-center gap-4">
        <button className="cursor-pointer w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-black/20 hover:border-black hover:text-black transition-all">
          <ArrowRight size={20} className="rotate-180" />
        </button>
        <button className="cursor-pointer w-14 h-14 rounded-full border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>

    {/* Product/Influencer Grid */}
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
          {/* Main Image */}
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-brand-red font-black uppercase italic tracking-widest text-[10px] mb-2 block">
                {item.discipline} Selection
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4">
                {item.name}
              </h3>
              
              {/* Product reveal on hover */}
              <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                <p className="text-gray-300 text-sm font-medium italic mb-6">
                  "{item.quote}"
                </p>
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
</section>

        {/* Training Types - Vertical Editorial List */}
        {/* <section className="py-32 bg-[#0A0A0A] text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <span className="text-brand-red font-black uppercase italic tracking-[0.4em] text-xs mb-4 block">Disciplines</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                  Built For <br />
                  <span className="text-brand-red">Every Grind.</span>
                </h2>
              </div>
              <p className="text-gray-500 max-w-sm font-medium leading-relaxed">
                Specialized equipment engineered for the unique demands of your specific training modality.
              </p>
            </div>

            <div className="space-y-px bg-white/5">
              {TRAINING_TYPES.map((type, index) => (
                <motion.div 
                  key={type.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative py-12 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors px-4"
                >
                  <div className="flex items-center gap-12">
                    <span className="text-gray-700 font-black italic text-2xl group-hover:text-brand-red transition-colors">
                      0{index + 1}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                      {type.title}
                    </h3>
                  </div>
                  
               
                  <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-64 h-40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-20 scale-75 group-hover:scale-100">
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-black uppercase italic tracking-widest text-brand-red">Explore</span>
                    <div className="w-10 h-10 rounded-full border border-brand-red flex items-center justify-center">
                      <ArrowRight size={16} className="text-brand-red" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Sustainability - Impact Section */}
        {/* <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square bg-brand-red/5 overflow-hidden"
              >
                <img 
                  src="p13.jpg" 
                  alt="Sustainability" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-brand-red/30 flex items-center justify-center animate-spin-slow">
                    <Globe size={64} className="text-brand-red" />
                  </div>
                </div>
              </motion.div>

              <div>
                <span className="text-brand-red font-black uppercase italic tracking-[0.5em] text-xs mb-6 block">Our Commitment</span>
                <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-10">
                  Gear That <br />
                  <span className="text-brand-red">Gives Back.</span>
                </h2>
                <p className="text-gray-500 text-xl font-medium leading-relaxed mb-12">
                  By 2028, 100% of our performance materials will be sourced from recycled ocean plastics and organic fibers. Performance shouldn't cost the planet.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div>
                    <h4 className="text-3xl font-black italic text-black mb-2">85%</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Recycled Materials</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-black italic text-black mb-2">0%</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Virgin Plastics</p>
                  </div>
                </div>
                <button className="group flex items-center gap-6 text-black font-black uppercase italic tracking-widest">
                  Read Our Impact Report
                  <div className="w-12 h-px bg-black group-hover:w-20 group-hover:bg-brand-red transition-all duration-500" />
                </button>
              </div>
            </div>
          </div>
        </section> */}

        {/* Community Social Wall - Bento Grid */}
        <section className="py-32 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-24">
              <span className="text-brand-red font-black uppercase italic tracking-[0.5em] text-xs mb-4 block">Community</span>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-8">
                Vega in <br />
                <span className="text-brand-red">The Wild.</span>
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
                  <img 
                    src={post.image} 
                    alt="Community" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
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

        {/* Best Sellers - Bento Grid Style */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <SectionHeader 
              title="The Elite Standard" 
              subtitle="Most trusted gear by professional athletes worldwide. Proven under pressure."
              linkText="Shop Best Sellers"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRODUCTS.filter(p => p.isBestSeller).map((product, index) => (
                <div key={product.id} className={index === 0 ? "md:col-span-2" : ""}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News - Magazine Layout */}
        {/* <section className="py-32 bg-[#F8F8F8]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex justify-between items-end mb-20">
              <h2 className="text-5xl font-black uppercase italic tracking-tighter">The Pulse</h2>
              <button className="text-xs font-black uppercase italic tracking-widest border-b-2 border-black pb-1 hover:text-brand-red hover:border-brand-red transition-all">
                Read All Stories
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { title: "The Future of Carbon-Fiber Footwear", date: "March 15, 2026", image: "b1.jpg" },
                { title: "Nutrition Hacks for Peak Performance", date: "March 10, 2026", image: "b2.jpg" },
                { title: "Mental Fortitude in Elite Sports", date: "March 05, 2026", image: "b3.jpg" }
              ].map((news, index) => (
                <motion.article 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden mb-8">
                    <img 
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-black uppercase italic px-4 py-1.5 tracking-widest">
                      Training
                    </div>
                  </div>
                  <span className="text-brand-red text-[10px] font-black uppercase italic tracking-widest mb-3 block">
                    {news.date}
                  </span>
                  <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4 group-hover:text-brand-red transition-colors leading-tight">
                    {news.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6 line-clamp-2">
                    Exploring the latest breakthroughs in athletic science and how they're reshaping the competitive landscape.
                  </p>
                  <div className="flex items-center gap-2 text-black font-black uppercase italic text-[10px] tracking-widest">
                    Read More <ArrowRight size={12} />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section> */}

        {/* Features / Trust Badges - Minimal Bar */}
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
                  <span className="text-white font-black uppercase italic tracking-[0.3em] text-[10px]">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
