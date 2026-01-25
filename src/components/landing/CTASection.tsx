import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 relative noise-texture overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden"
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 shimmer" />
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }} />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Ready to Transform
                <br />
                <span className="gradient-text-red">Your Gym?</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-muted-foreground mb-8"
              >
                Join 10,000+ gym owners who trust Fitexo to manage their business. 
                Start your free trial today — no credit card required.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="group bg-primary text-primary-foreground px-8 py-6 text-lg rounded-2xl red-glow-intense shimmer hover:scale-105 transition-transform"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="glass border-border px-8 py-6 text-lg rounded-2xl hover:border-primary/50 transition-colors"
                >
                  Book a Demo
                </Button>
              </motion.div>
            </div>
            
            {/* Right Content - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
              
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl neo flex items-center justify-center group-hover:red-glow transition-all duration-500">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:hello@fitexo.in" className="text-foreground hover:text-primary transition-colors">
                    hello@fitexo.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl neo flex items-center justify-center group-hover:red-glow transition-all duration-500">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a href="tel:+1-888-FITEXO" className="text-foreground hover:text-primary transition-colors">
                    +1-888-FITEXO
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl neo flex items-center justify-center group-hover:red-glow transition-all duration-500">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <span className="text-foreground">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
