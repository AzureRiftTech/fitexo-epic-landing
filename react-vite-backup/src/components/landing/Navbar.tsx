import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className={`px-8 py-4 flex items-center justify-between transition-all duration-500 border border-white/10 rounded-2xl ${isScrolled
              ? 'bg-black/80 backdrop-blur-xl shadow-xl'
              : 'bg-transparent border-transparent'
            }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                <Dumbbell className="w-7 h-7 text-white fill-current" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-normal tracking-tight text-white uppercase leading-none">
                Fitexo
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                Smart Management
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative px-6 py-2 text-[11px] font-bold text-white/50 hover:text-white transition-all duration-300 uppercase tracking-[0.2em] group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <Button
              variant="ghost"
              className="text-[11px] font-bold text-white/50 hover:text-white uppercase tracking-[0.2em]"
            >
              LOGIN
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="relative group bg-primary text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider overflow-hidden shadow-lg transition-all hover:bg-primary/90">
                <span>FREE TRIAL</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 bg-white/5 border border-white/10 rounded-xl hover:border-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="bg-black/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-4 px-6 border border-white/5 rounded-xl text-white hover:text-primary hover:border-primary transition-all font-bold uppercase tracking-[0.2em] text-sm"
                    >
                      {link.name}
                      <ChevronRight className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-4 pt-8 border-t border-white/10">
                  <Button variant="ghost" className="justify-start font-bold uppercase tracking-[0.2em] text-white/50">
                    LOGIN
                  </Button>
                  <Button className="bg-primary text-white font-bold uppercase tracking-wider rounded-xl py-6 shadow-xl">
                    START FREE TRIAL
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
