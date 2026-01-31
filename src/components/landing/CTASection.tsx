"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-40 relative overflow-hidden border-t border-white/5 bg-black/10">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Stock/Gym_interior_1_tools.webp"
          alt="Gym interior with fitness equipment - background for Fitexo CTA section"
          fill
          sizes="100vw"
          quality={40}
          priority={false}
          className="object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-primary/30 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-secondary/20 backdrop-blur-xl border border-white/10 p-8 md:p-16 lg:p-24 relative overflow-hidden group rounded-[2rem] md:rounded-[3rem] shadow-2xl"
        >
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 md:mb-10 rounded-full">
                <span>Next Steps</span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-7xl lg:text-8xl font-normal mb-8 leading-[1.1] tracking-tight uppercase text-white"
              >
                Ready to
                <br />
                <span className="text-primary underline decoration-primary/20 underline-offset-8 transition-all group-hover:decoration-primary/40">Grow?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-10 md:mb-12 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Join over 10,000 gym owners who trust Fitexo to manage and scale their fitness business.
                Get started today and list your gym on our platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start"
              >
                <a href="https://wa.me/916294737722?text=Hello%20Fitexo%2C%20I'm%20interested%20in%20listing%20my%20gym.">
                  <Button
                    size="lg"
                    className="group relative bg-primary hover:bg-primary/90 text-white px-8 md:px-12 py-7 md:py-9 text-lg md:text-xl rounded-xl font-bold uppercase tracking-wider shadow-xl transition-all flex items-center gap-3"
                  >
                    <WhatsAppIcon className="w-6 h-6" />
                    LIST YOUR GYM
                    <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </a>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/10 bg-white/5 backdrop-blur-sm px-8 md:px-10 py-7 md:py-9 text-lg md:text-xl rounded-xl font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all"
                >
                  BOOK A DEMO
                </Button>
              </motion.div>
            </div>

            {/* Right Content - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid gap-8 md:gap-12"
            >
              <h3 className="text-2xl md:text-3xl font-normal text-white uppercase tracking-tight mb-2 md:mb-4 opacity-40 text-center lg:text-left">Contact Support</h3>

              <div className="flex flex-col md:flex-row items-center lg:items-start md:items-center gap-4 md:gap-6 group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-all">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white" />
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] mb-1">Email Inquiry</div>
                  <a href="mailto:support@fitexo.in" className="text-xl md:text-2xl font-bold text-white hover:text-primary transition-colors tracking-tight">
                    support@fitexo.in
                  </a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center lg:items-start md:items-center gap-4 md:gap-6 group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 flex items-center justify-center rounded-2xl group-hover:bg-primary transition-all">
                  <Phone className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-white" />
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] mb-1">Customer Care</div>
                  <a href="tel:+91 6294 737 722" className="text-xl md:text-2xl font-bold text-white hover:text-primary transition-colors tracking-tight">
                    +91 6294 737 722
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section >
  );
}
