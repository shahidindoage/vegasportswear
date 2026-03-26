import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Home, Filter, SlidersHorizontal, Package, ShieldCheck, RefreshCw } from 'lucide-react';
import { ProductCard } from './Cards';

 interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}
const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Vega Performance Jacket',
    price: 800.00,
    originalPrice: 1000.00,
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Shirts/s1.jpg',
    category: 'Men',
    rating: 4.8,
    reviews: 124,
    isNew: true,
  },
  {
    id: '2',
    name: 'Elite Training Shorts',
    price: 600.00,
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Shirts/s10.jpg',
    category: 'Men',
    rating: 4.5,
    reviews: 89,
    isBestSeller: true,
  },
  {
    id: '3',
    name: 'Pro Compression Leggings',
    price: 499.00,
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Shirts/s11.jpg',
    category: 'Women',
    rating: 4.9,
    reviews: 210,
    isNew: true,
  },
  {
    id: '4',
    name: 'Velocity Running Tee',
    price: 799.00,
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Shirts/s12.jpg',
    category: 'Women',
    rating: 4.7,
    reviews: 56,
  },
  {
    id: '5',
    name: 'Vega Grip Weightlifting Gloves',
    price: 899.00,
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Shirts/s13.jpg',
    category: 'Accessories',
    rating: 4.6,
    reviews: 42,
  },
  {
    id: '6',
    name: 'HydraFlow 1L Water Bottle',
    price: 1299.00,
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Shirts/s14.jpg',
    category: 'Accessories',
    rating: 4.8,
    reviews: 156,
    isBestSeller: true,
  },
  {
    id: '7',
    name: 'Performance Training Socks (3-Pack)',
    price: 1499.00,
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Shirts/s15.jpg',
    category: 'Accessories',
    rating: 4.9,
    reviews: 88,
  },
  {
    id: '8',
    name: 'Elite Gym Duffel Bag',
    price: 1500.00,
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Shirts/s16.jpg',
    category: 'Accessories',
    rating: 4.7,
    reviews: 45,
    isNew: true,
  },
  {
    id: '9',
    name: 'Resistance Band Set',
    price: 1200.00,
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Shirts/s17.jpg',
    category: 'Accessories',
    rating: 4.5,
    reviews: 112,
  },
  {
    id: '10',
    name: 'Microfiber Sports Towel',
    price: 1299.00,
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Shirts/s18.jpg',
    category: 'Accessories',
    rating: 4.6,
    reviews: 34,
  },
  {
    id: '11',
    name: 'Adjustable Jump Rope',
    price: 1499.00,
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Shirts/s2.jpg',
    category: 'Accessories',
    rating: 4.8,
    reviews: 67,
  },
  {
    id: '12',
    name: 'Yoga Mat - Pro Grip',
    price: 4888.00,
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Shirts/s3.jpg',
    category: 'Accessories',
    rating: 4.9,
    reviews: 92,
    isBestSeller: true,
  },
  {
    id: '13',
    name: 'Vega Recovery Foam Roller',
    price: 4000.00,
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Shirts/s4.jpg',
    category: 'Accessories',
    rating: 4.7,
    reviews: 58,
  },
  {
    id: '14',
    name: 'Liquid Chalk - Elite Grip',
    price: 1200.00,
    image: 'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/Shirts/s5.jpg',
    category: 'Accessories',
    rating: 4.8,
    reviews: 120,
  },
  
];

export const Accessories = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const accessories = PRODUCTS;
  const hasMore = visibleCount < accessories.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <div >
      {/* Breadcrumb & Banner */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-black py-20">
        <div className="absolute inset-0">
          <img 
            src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/baanner-2.jpeg" 
            alt="Accessories Banner" 
            className="w-full h-full object-cover opacity-60 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            <button 
              onClick={() => onNavigate('home')}
              className="hover:text-brand-red transition-colors flex items-center gap-1"
            >
              <Home size={12} /> Home
            </button>
            <ChevronRight size={12} />
            <span className="text-white">Products</span>
            <ChevronRight size={12} />
            <span className="text-white">T-Shirts</span>
            
          </nav>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mb-4"
          >
            The <span className="text-brand-red">T-Shirts.</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-xl font-medium"
          >
            Engineered to complement your training. From high-grip gloves to thermal-regulating hydration, every piece is built for the grind.
          </motion.p>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-2 text-xs font-black uppercase italic tracking-widest hover:text-brand-red transition-colors">
                <Filter size={16} /> Filter
              </button>
              <button className="flex items-center gap-2 text-xs font-black uppercase italic tracking-widest hover:text-brand-red transition-colors">
                <SlidersHorizontal size={16} /> Sort By
              </button>
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Showing {Math.min(visibleCount, accessories.length)} of {accessories.length} Products
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {accessories.slice(0, visibleCount).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 4) * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="mt-24 text-center">
              <button 
                onClick={handleLoadMore}
                className="group relative inline-flex items-center gap-4 px-12 py-5 bg-black text-white font-black uppercase italic tracking-widest hover:bg-brand-red transition-all"
              >
                Load More Products
                <div className="w-8 h-px bg-white/30 group-hover:w-12 transition-all" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Tech Section - Outstanding Design */}
      {/* <section className="py-32 bg-[#0A0A0A] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="absolute -top-20 -left-20 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1591197172021-c1538abcad2b?auto=format&fit=crop&q=80" 
                alt="Tech Detail" 
                className="relative z-10 w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-red p-12 hidden md:block z-20">
                <p className="text-6xl font-black text-white italic tracking-tighter">99%</p>
                <p className="text-xs font-bold text-white/70 uppercase tracking-[0.3em]">Durability Rating</p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-brand-red font-black uppercase italic tracking-[0.5em] text-xs">Material Science</span>
                <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">
                  Built For <br />
                  <span className="text-brand-red">The Extremes.</span>
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <ShieldCheck className="text-brand-red" />, title: "Impact Resistance", desc: "Reinforced structures designed to withstand high-intensity training environments." },
                  { icon: <RefreshCw className="text-brand-red" />, title: "Thermal Control", desc: "Advanced materials that regulate temperature and manage moisture effectively." },
                  { icon: <Package className="text-brand-red" />, title: "Ergonomic Design", desc: "Contoured shapes that provide natural fit and maximum comfort during movement." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-black text-white uppercase italic tracking-tight mb-2">{item.title}</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Care Guide Section */}
      {/* <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-6">Gear Care Guide</h2>
            <p className="text-gray-500 font-medium">Maximize the lifespan of your Vega accessories with our professional maintenance protocols.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Cleaning", desc: "Hand wash with cold water and mild detergent. Avoid harsh chemicals that degrade performance fibers." },
              { title: "Drying", desc: "Air dry only. High heat from dryers can compromise structural integrity and elastic properties." },
              { title: "Storage", desc: "Store in a cool, dry place away from direct sunlight to prevent material fatigue and color fading." }
            ].map((step, i) => (
              <div key={i} className="p-12 border border-gray-100 hover:border-brand-red transition-colors group">
                <span className="text-4xl font-black text-gray-100 group-hover:text-brand-red/20 transition-colors mb-6 block italic">0{i+1}</span>
                <h3 className="text-2xl font-black uppercase italic tracking-tight mb-4">{step.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};
