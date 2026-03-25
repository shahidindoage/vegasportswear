import React from 'react';
import { motion } from 'motion/react';
import { Compass, Mountain, Map, Shield, Zap, Globe, ArrowRight, ShoppingBag, Heart, Star } from 'lucide-react';

const EXODE_PRODUCTS = [
   {
    id: 'e1',
    name: 'Sports Socks',
    price: 600.00,
    image: 'sock.jpeg',
    category: 'Footwear',
    color: 'Moss Green'
  },
  {
    id: 'e2',
    name: 'Sports Socks',
    price: 600.00,
    image: 'sock.jpeg',
    category: 'Footwear',
    color: 'Moss Green'
  },
   {
    id: 'e3',
    name: 'Sports Socks',
    price: 600.00,
    image: 'sock.jpeg',
    category: 'Footwear',
    color: 'Moss Green'
  },
   {
    id: 'e4',
    name: 'Sports Socks',
    price: 600.00,
    image: 'sock.jpeg',
    category: 'Footwear',
    color: 'Moss Green'
  },
  
];

export const Exode = () => {
  return (
    <div className="bg-exode-dark text-exode-sand font-sans selection:bg-exode-orange selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920" 
            alt="Mountain Range" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-exode-dark via-transparent to-exode-dark" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Logo Recreation */}
            <div className="flex flex-col items-center mb-8">
              {/* <div className="relative w-32 h-32 mb-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-exode-orange opacity-80" />
                </motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                >
                  <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-exode-green" />
                </motion.div>
              </div> */}
              <img src="exode.png" alt="" />
              <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter uppercase italic leading-none mb-2">
                EXODE
              </h1>
              <p className="text-exode-green font-black uppercase italic tracking-[0.5em] text-sm md:text-xl">
                Every Mile, A Story
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
            >
              <button className="bg-exode-orange text-white px-12 py-5 font-black uppercase italic tracking-widest hover:bg-exode-sand hover:text-exode-dark transition-all duration-300 shadow-2xl">
                Begin The Journey
              </button>
              <button className="border-2 border-exode-sand/30 text-exode-sand px-12 py-5 font-black uppercase italic tracking-widest hover:bg-exode-sand/10 transition-all">
                View Collection
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-[10px] font-black uppercase italic tracking-[0.3em] mb-4 opacity-50">Explore The Wild</span>
          <div className="w-px h-12 bg-gradient-to-b from-exode-orange to-transparent" />
        </div>
      </section>

      {/* About Section - From PDF */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-exode-orange font-black uppercase italic tracking-[0.4em] text-xs mb-6 block">Our Legacy</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-10">
              Crafted in <br />
              <span className="text-exode-green">The Heart of India.</span>
            </h2>
            <div className="space-y-6 text-exode-sand/70 text-lg font-medium leading-relaxed">
              <p>
                Incorporated in the year <span className="text-exode-sand font-bold">2003</span> in Meerut, Uttar Pradesh, we are a reputed organization indulged in Manufacturing, Exporting and Supplying an exclusive range of high-performance sports apparel.
              </p>
              <p>
                Under the brand name <span className="text-exode-sand font-bold">"Exode"</span>, our products are designed under the stern direction of brilliant designers using quality approved fabrics procured from the most authentic certified vendors of the industry.
              </p>
              <p>
                Offered products are stitched by making use of ultra-modern weaving technology, ensuring a royal look, longevity, and mesmerizing patterns that resonate with the elite athlete and the modern explorer.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-exode-green/10 p-4 border border-exode-sand/10">
              <img 
                src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80&w=800" 
                alt="Manufacturing Excellence" 
                className="w-full h-full object-cover grayscale brightness-75"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-exode-orange p-12 hidden md:block">
              <p className="text-4xl font-black italic text-white leading-none mb-2">20+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/80">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-exode-green font-black uppercase italic tracking-[0.4em] text-xs mb-4 block">The Gear</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
                Adventure <br />
                <span className="text-exode-orange">Essentials.</span>
              </h2>
            </div>
            <button className="group flex items-center gap-4 text-exode-sand font-black uppercase italic tracking-widest hover:text-exode-orange transition-colors">
              Shop All
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {EXODE_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-exode-dark mb-6 border border-exode-sand/5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-exode-orange text-white text-[10px] font-black uppercase italic px-3 py-1 tracking-widest">
                    {product.category}
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-exode-sand hover:bg-exode-orange hover:text-white transition-all">
                    <Heart size={18} />
                  </button>
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black to-transparent">
                    <button className="w-full bg-exode-sand text-exode-dark py-4 font-black uppercase italic tracking-widest flex items-center justify-center gap-3 hover:bg-exode-orange hover:text-white transition-colors">
                      <ShoppingBag size={18} />
                      Quick Add
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-black uppercase italic tracking-tight group-hover:text-exode-orange transition-colors">{product.name}</h3>
                  <span className="font-bold italic text-exode-orange">₹{product.price}</span>
                </div>
                <p className="text-exode-sand/40 text-[10px] font-black uppercase tracking-widest">{product.color}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section - From PDF */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-exode-green/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-exode-dark border border-exode-sand/10">
                  <Globe size={32} className="text-exode-green mb-6" />
                  <h4 className="text-3xl font-black italic mb-2">600+</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-exode-sand/50">Outlets Across India</p>
                </div>
                <div className="p-8 bg-exode-dark border border-exode-sand/10 mt-12">
                  <Shield size={32} className="text-exode-orange mb-6" />
                  <h4 className="text-3xl font-black italic mb-2">Official</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-exode-sand/50">Zimbabwe Cricket Partner</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-exode-green font-black uppercase italic tracking-[0.4em] text-xs mb-6 block">The Journey</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-10">
                Sustainable <br />
                <span className="text-exode-orange">Innovation.</span>
              </h2>
              <p className="text-exode-sand/70 text-xl font-medium leading-relaxed mb-10">
                Spanning almost <span className="text-exode-sand font-bold">14 years</span>, the EXODE sustainability journey has been dynamic, marked by an ever-evolving set of challenges and opportunities. As we continue to raise the bar, we see new opportunities to deliver skin-friendly, eco-conscious products.
              </p>
              <div className="flex items-center gap-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-exode-dark bg-exode-green overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-xs font-bold italic text-exode-sand/50 uppercase tracking-widest">
                  Trusted by <span className="text-exode-sand">1M+</span> Explorers
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section - From PDF */}
      <section className="py-32 bg-exode-sand text-exode-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-24">
            <span className="text-exode-orange font-black uppercase italic tracking-[0.5em] text-xs mb-4 block">The Difference</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
              Why Choose <br />
              <span className="text-exode-green">EXODE?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Timely Delivery', icon: <Zap size={24} />, desc: 'Efficient order processing and expeditious shipping worldwide.' },
              { title: 'Reliable Inventory', icon: <Shield size={24} />, desc: 'State-of-the-art infrastructure covering large areas for consistent supply.' },
              { title: 'Innovative Design', icon: <Mountain size={24} />, desc: 'Brilliant designers using ultra-modern weaving technology.' },
              { title: 'High Quality', icon: <Star size={24} />, desc: 'Quality approved fabrics procured from authentic certified vendors.' },
              { title: 'Accurate Customization', icon: <Map size={24} />, desc: 'Products designed as per the exact details specified by clients.' },
              { title: 'Global Sales', icon: <Globe size={24} />, desc: 'Reputed organization indulged in manufacturing and exporting globally.' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 border border-exode-dark/10 hover:bg-exode-dark hover:text-exode-sand transition-all duration-500"
              >
                <div className="w-16 h-16 bg-exode-dark text-exode-sand flex items-center justify-center mb-8 group-hover:bg-exode-orange group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4">{item.title}</h3>
                <p className="opacity-70 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Peak Experience - Creative Section */}
      <section className="py-32 bg-exode-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black uppercase italic tracking-tighter text-exode-sand/5 pointer-events-none select-none">
            PEAK
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              {/* Abstract Mountain Peaks */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 left-0 w-full h-full border-l-[250px] border-l-transparent border-r-[250px] border-r-transparent border-b-[400px] border-b-exode-orange/20" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 border-l-[180px] border-l-transparent border-r-[180px] border-r-transparent border-b-[300px] border-b-exode-green/30" />
                  <div className="absolute bottom-1/4 left-1/4 w-1/2 h-1/2 bg-exode-sand/5 rounded-full blur-3xl" />
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&q=80&w=800" 
                alt="Adventure" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div>
              <span className="text-exode-orange font-black uppercase italic tracking-[0.5em] text-xs mb-6 block">The Philosophy</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-10">
                Every Mile, <br />
                <span className="text-exode-green">A New Story.</span>
              </h2>
              <p className="text-exode-sand/70 text-xl font-medium leading-relaxed mb-12">
                We believe that the best stories aren't told in books, but written on the trails, carved into the mountains, and whispered by the wind. EXODE is more than gear; it's your companion in every chapter of your adventure.
              </p>
              <div className="space-y-8">
                {[
                  { label: 'Exploration', value: '100%' },
                  { label: 'Performance', value: 'Elite' },
                  { label: 'Storytelling', value: 'Infinite' }
                ].map(stat => (
                  <div key={stat.label}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-exode-sand/50">{stat.label}</span>
                      <span className="font-black italic text-exode-orange">{stat.value}</span>
                    </div>
                    <div className="h-px w-full bg-exode-sand/10">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-exode-orange" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-20 border-t border-exode-sand/10 text-center">
        <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">
          <span className="text-exode-orange">EXODE</span>
        </h2>
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-exode-sand/30">
          A VEGA INDUSTRIES BRAND // EST. 2003
        </p>
      </footer>
    </div>
  );
};
