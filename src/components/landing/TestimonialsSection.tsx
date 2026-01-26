"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Vikram Singh',
    role: 'Owner, PowerHouse Gym',
    image: '/images/Stock/gym_owner_male.webp',
    content: 'Fitexo transformed how we run our gym. Member retention increased by 60% and our administrative work dropped significantly.',
    rating: 5,
  },
  {
    name: 'Rajesh Sharma',
    role: 'CEO, FitLife Studios',
    image: '/images/Stock/gym_owner_male_2.webp',
    content: 'The analytics alone are worth the investment. We finally understand our business metrics and can make data-driven decisions.',
    rating: 5,
  },
  {
    name: 'Priya Das',
    role: 'Manager, Zen Yoga Center',
    image: '/images/Stock/gym_assistant.webp',
    content: 'Our members love the mobile app! Class bookings increased 3x since we switched to Fitexo. The platform is incredibly intuitive.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Founder, Iron Gym Network',
    image: '/images/Stock/Gym_trainer_2.webp',
    content: 'Managing 5 locations was a nightmare before Fitexo. Now I have complete visibility across all gyms from a single dashboard.',
    rating: 5,
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full bg-secondary/20 backdrop-blur-md border border-white/5 p-10 relative overflow-hidden transition-all duration-300 group-hover:bg-secondary/40 group-hover:border-primary/30 rounded-3xl">
        <div className="relative z-10 flex flex-col h-full">
          {/* Quote Icon - Subtle */}
          <div className="absolute top-0 right-0 opacity-5">
            <Quote className="w-40 h-40 fill-white" />
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-8">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>

          {/* Content */}
          <p className="text-white text-lg font-medium leading-relaxed mb-10 italic opacity-90">
            "{testimonial.content}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-5 mt-auto pt-8 border-t border-white/5">
            <div className="relative">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-500"
              />
            </div>
            <div>
              <div className="text-lg font-bold text-white tracking-tight">
                {testimonial.name}
              </div>
              <div className="text-xs text-primary font-bold uppercase tracking-wider mt-1">
                {testimonial.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="py-40 relative overflow-hidden border-y border-white/5 bg-mesh">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/[0.04] blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-8 rounded-full">
            <span>Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-normal mb-8 leading-[1.1] tracking-tight uppercase text-white">
            Trusted by
            <br />
            <span className="text-primary underline decoration-primary/20 underline-offset-8">10,000+ Gyms</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-3xl mx-auto font-medium leading-relaxed">
            Real feedback from gym owners who have scaled their fitness business using our platform tools.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
