import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner, CrossFit Elite',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content: 'Fitexo transformed how we run our gym. Member retention increased by 60% and our administrative work dropped significantly.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'CEO, FitLife Studios',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'The analytics alone are worth the investment. We finally understand our business metrics and can make data-driven decisions.',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    role: 'Manager, Zen Yoga Center',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'Our members love the mobile app! Class bookings increased 3x since we switched to Fitexo. The platform is incredibly intuitive.',
    rating: 5,
  },
  {
    name: 'James Rodriguez',
    role: 'Founder, Iron Gym Network',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group h-full"
    >
      <div className="h-full glass-strong rounded-3xl p-8 relative overflow-hidden hover:border-primary/30 transition-all duration-500">
        {/* Quote Icon */}
        <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
        
        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>
        
        {/* Content */}
        <p className="text-foreground/90 leading-relaxed mb-8 text-lg">
          "{testimonial.content}"
        </p>
        
        {/* Author */}
        <div className="flex items-center gap-4 mt-auto">
          <div className="relative">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
            />
            <div className="absolute inset-0 rounded-full ring-2 ring-primary/0 group-hover:ring-primary/50 transition-all duration-500" />
          </div>
          <div>
            <div className="font-semibold text-foreground">{testimonial.name}</div>
            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
    <section id="testimonials" className="py-32 relative noise-texture">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-6">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Trusted by
            <br />
            <span className="gradient-text-red">10,000+ Gyms</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what gym owners and fitness entrepreneurs have to say about 
            their experience with Fitexo.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
