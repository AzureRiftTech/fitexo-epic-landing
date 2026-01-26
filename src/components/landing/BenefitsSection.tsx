"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Clock, Heart, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Revenue by 40%',
    description: 'Our clients see an average 40% revenue increase within the first year through better retention and upselling.',
    metric: '+40%',
    color: 'from-primary to-red-400',
    image: '/images/Stock/gym_owner_male_on_laptop.webp'
  },
  {
    icon: Clock,
    title: 'Save 15+ Hours Weekly',
    description: 'Automate administrative tasks and focus on what matters most - your members and their fitness goals.',
    metric: '15h+',
    color: 'from-amber-500 to-orange-400',
    image: '/images/Stock/gym_assistant.webp'
  },
  {
    icon: Heart,
    title: '95% Member Retention',
    description: 'Engagement tools and personalized experiences keep members coming back month after month.',
    metric: '95%',
    color: 'from-emerald-500 to-teal-400',
    image: '/images/Stock/Gym_trainer_2.webp'
  },
  {
    icon: Rocket,
    title: '3x Faster Growth',
    description: 'Scale your business with data-driven insights and efficient operations that support expansion.',
    metric: '3x',
    color: 'from-blue-500 to-indigo-400',
    image: '/images/Stock/Gym_interior_1_treadmill.webp'
  },
];

export function BenefitsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="benefits" className="py-40 relative overflow-hidden bg-black/40 border-b border-white/5 bg-mesh">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/[0.03] blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 z-0 opacity-10 industrial-grid" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-8 rounded-full">
            <span>Result Focused</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal mb-8 leading-[1.1] tracking-tight uppercase text-white">
            Benefits That
            <br />
            <span className="text-primary underline decoration-primary/20 underline-offset-8">Scale Growth</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Everything you need to transform your gym operations into a successful fitness business.
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const cardRef = useRef(null);
            const isCardInView = useInView(cardRef, { once: true, margin: '-100px' });

            return (
              <motion.div
                key={benefit.title}
                ref={cardRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isCardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-secondary/30 backdrop-blur-md border border-white/10 h-full relative overflow-hidden transition-all duration-300 group-hover:bg-secondary/50 group-hover:border-primary/40 rounded-3xl min-h-[400px]">
                  {/* Background Image */}
                  {benefit.image && (
                    <div className="absolute inset-0 z-0">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col justify-between h-full p-10">
                    <div className="flex flex-col gap-8">
                      {/* Icon & Metric */}
                      <div className="flex items-start justify-between">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl">
                          <benefit.icon className="w-8 h-8" />
                        </div>
                        <span className="text-5xl font-normal text-white tracking-tighter">
                          {benefit.metric}
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-3xl font-normal text-white mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground/90 leading-relaxed font-medium">
                          {benefit.description}
                        </p>
                      </div>
                    </div>

                    {/* Simple Progress Bar */}
                    <div className="w-full h-1.5 bg-white/5 relative mt-4 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isCardInView ? { width: '100%' } : {}}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="absolute inset-0 bg-primary opacity-60"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
