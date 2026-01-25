import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

export function LeadCaptureForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gymName: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "🎉 Welcome to Fitexo!",
      description: "Our team will contact you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', gymName: '' });
    setIsOpen(false);
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-full red-glow-intense shimmer font-semibold">
            <Sparkles className="w-5 h-5" />
            <span className="hidden sm:inline">Get Free Demo</span>
          </div>
        </div>
      </motion.button>

      {/* Modal Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-3xl blur-xl opacity-30" />
            
            <div className="relative glass-strong rounded-3xl p-8 md:p-10 border border-primary/20">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-primary/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center red-glow"
                >
                  <Sparkles className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                  Start Your <span className="gradient-text-red">Free Trial</span>
                </h3>
                <p className="text-muted-foreground">
                  Get a personalized demo and 14 days free access
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="neo-inset border-0 h-12 rounded-xl bg-secondary/50 placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="neo-inset border-0 h-12 rounded-xl bg-secondary/50 placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="neo-inset border-0 h-12 rounded-xl bg-secondary/50 placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Gym Name"
                      value={formData.gymName}
                      onChange={(e) => setFormData({ ...formData, gymName: e.target.value })}
                      required
                      className="neo-inset border-0 h-12 rounded-xl bg-secondary/50 placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-2xl bg-primary text-primary-foreground text-lg font-semibold red-glow-intense shimmer hover:scale-[1.02] transition-transform disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Get Free Demo
                    </span>
                  )}
                </Button>
              </form>

              {/* Trust Indicators */}
              <p className="text-center text-xs text-muted-foreground mt-6">
                🔒 Your data is secure • No credit card required • Cancel anytime
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
