import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Newsletter: React.FC = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none w-full text-center">
        <h2 className="text-[20vw] font-black uppercase italic tracking-tighter text-white/5 leading-none">
          JOIN THE CLUB
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-red font-black uppercase italic tracking-[0.5em] text-xs mb-6 block"
          >
            Elite Access
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter mb-12 leading-[0.9]"
          >
            Get the Edge. <br />
            <span className="text-brand-red">Stay Ahead.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium"
          >
            Join the Vegasportswear community for exclusive drops, training insights, and professional-grade performance tips.
          </motion.p>
          
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="flex-1 bg-white/5 border border-white/10 px-8 py-5 text-white font-black uppercase italic tracking-widest focus:outline-none focus:border-brand-red transition-colors"
            />
            <button className="bg-brand-red text-white px-12 py-5 font-black uppercase italic tracking-widest hover:bg-white hover:text-black transition-all">
              Subscribe
            </button>
          </motion.form>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-[10px] font-black uppercase italic tracking-widest mt-8"
          >
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
        {/* Brand Info */}
        <div className="flex flex-col gap-10 -mt-[40px]">
          <h1 className="text-4xl font-black tracking-tighter uppercase italic leading-none">
            {/* <span className="text-brand-blue">Vega</span><span className="text-brand-red">sportswear</span> */}
          <img src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/vega-logo-2.png" alt="" width="200"/>
          </h1>
          <p className="text-gray-500 font-medium leading-relaxed max-w-xs">
            Premium performance gear engineered for the elite athlete. We push the boundaries of what's possible in sports apparel and accessories.
          </p>
          <div className="flex items-center gap-6">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-500 hover:text-brand-red transition-all transform hover:scale-110">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-10">
          <h4 className="text-xs font-black uppercase italic tracking-[0.3em] text-brand-red">Shop</h4>
          <ul className="flex flex-col gap-5 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
            {['Men\'s Collection', 'Accessories', 'New Arrivals', 'Best Sellers'].map((link) => (
              <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-10">
          <h4 className="text-xs font-black uppercase italic tracking-[0.3em] text-brand-red">Support</h4>
          <ul className="flex flex-col gap-5 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
            {['Track Your Order', 'Shipping & Delivery', 'Returns & Exchanges', 'Size Guide', 'Contact Us'].map((link) => (
              <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-10">
          <h4 className="text-xs font-black uppercase italic tracking-[0.3em] text-brand-red">Contact</h4>
          <ul className="flex flex-col gap-8 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
            <li className="flex items-start gap-4">
              <MapPin size={18} className="text-brand-red shrink-0" />
              <span className="leading-relaxed">First floor , Flat No. C-166, Delhi Road, KT Shop, Major Dhyan Chand Nagar, Meerut, Uttar Pradesh- 250002</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={18} className="text-brand-red shrink-0" />
              <span>+1 (800) VEGA-GEAR</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={18} className="text-brand-red shrink-0" />
              <span>support@vegasportswear.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-[9px] text-gray-600 font-black uppercase tracking-[0.4em]">
          © 2026 Vegasportswear. All rights reserved.
        </p>
        <div className="flex items-center gap-10 text-[9px] text-gray-600 font-black uppercase tracking-[0.4em]">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};
