import React from 'react';
import { Star, ShoppingCart, Heart, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { Product, Category } from '../types';

export const SectionHeader = ({ title, subtitle, linkText, linkHref }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
      <div>
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-4">{title}</h2>
        {subtitle && <p className="text-gray-500 text-lg md:text-xl font-medium max-w-xl">{subtitle}</p>}
      </div>
      {linkText && (
        <a href={linkHref || '#'} className="text-brand-red font-black uppercase italic tracking-widest hover:text-black transition-colors flex items-center gap-2 group">
          {linkText}
          <span className="w-8 h-[2px] bg-brand-red group-hover:bg-black transition-colors" />
        </a>
      )}
    </div>
  );
};

export const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -15 }}
      className="group relative bg-white overflow-hidden transition-all duration-500"
    >
      <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
        {product.isNew && <span className="bg-brand-red text-white text-[9px] font-black uppercase italic px-4 py-1.5 tracking-[0.2em] shadow-lg">New Drop</span>}
        {product.isBestSeller && <span className="bg-brand-blue text-white text-[9px] font-black uppercase italic px-4 py-1.5 tracking-[0.2em] shadow-lg">Elite Pick</span>}
      </div>
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F8F8F8]">
        <motion.img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] flex flex-col gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <button className="w-full bg-white text-black py-4 font-black uppercase italic text-[10px] tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-brand-red hover:text-white transition-all shadow-2xl">
            <ShoppingCart size={14} /> Quick Add
          </button>
        </div>
        <button className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-red hover:text-white shadow-xl">
          <Heart size={16} />
        </button>
      </div>
      <div className="pt-8 pb-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xs font-black uppercase italic tracking-[0.1em] text-gray-400">{product.category}</h3>
          <div className="flex items-center gap-1">
            <Star size={10} className="fill-brand-red text-brand-red" />
            <span className="text-[10px] font-bold">{product.rating}</span>
          </div>
        </div>
        <h2 className="text-lg font-black uppercase italic tracking-tighter mb-4 group-hover:text-brand-red transition-colors leading-tight">{product.name}</h2>
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-black italic text-black">₹{product.price.toFixed(2)}</span>
          {product.originalPrice && <span className="text-sm text-gray-400 line-through font-bold">₹{product.originalPrice.toFixed(2)}</span>}
        </div>
      </div>
    </motion.div>
  );
};

export const CategoryCard = ({ category, index }) => {
  const isLaunchingSoon = index === 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.2, duration: 1 }}
      viewport={{ once: true }}
      className="group relative h-[95vh] overflow-hidden bg-black border-r border-white/5 last:border-r-0"
    >
      <motion.img
        src={category.image}
        alt={category.title}
        className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
          isLaunchingSoon
            ? 'opacity-40 blur-[3px] group-hover:blur-[2px] group-hover:opacity-30 scale-105'
            : 'opacity-60 group-hover:scale-110 group-hover:opacity-40'
        }`}
        referrerPolicy="no-referrer"
      />

      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full text-center">
        <h2
          className="text-[12vw] font-black uppercase italic tracking-tighter text-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}
        >
          {category.id}
        </h2>
      </div>

      {/* Launching Soon Overlay — index 1 only */}
      {isLaunchingSoon && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 px-8 py-6 rounded-sm"
            style={{
              background: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            <div className="w-10 h-10 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center mb-1">
              <Lock size={16} className="text-brand-red" />
            </div>
            <span className="text-brand-red font-black uppercase italic tracking-[0.4em] text-[10px]">Coming Soon</span>
            <span className="text-white font-black uppercase italic tracking-tight text-2xl md:text-3xl leading-tight text-center">
              {category.title.split(' ')[0]} <br />
              <span className="text-brand-red">{category.title.split(' ')[1]}</span>
            </span>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-6 h-px bg-white/30" />
              <span className="text-white/50 text-[9px] font-bold uppercase tracking-widest">Launching 2026</span>
              <div className="w-6 h-px bg-white/30" />
            </div>
          </motion.div>
        </div>
      )}

      {/* Normal content — index 0 and index 2 */}
      {!isLaunchingSoon && (
        <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end items-start z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-black uppercase italic tracking-[0.4em] text-xs mb-4 block">Collection 2026</span>
            <h3 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6 leading-[0.85]">
              {category.title.split(' ')[0]} <br />
              <span className="text-brand-red">{category.title.split(' ')[1]}</span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-10 max-w-xs font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {category.description}
            </p>
            <button className="group relative flex items-center gap-6 text-white font-black uppercase italic tracking-widest overflow-hidden">
              <span className="relative z-10">Explore</span>
              <div className="w-12 h-px bg-white group-hover:w-20 group-hover:bg-brand-red transition-all duration-500" />
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};
