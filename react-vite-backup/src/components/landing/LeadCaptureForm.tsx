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
      title: "Success! We'll be in touch.",
      description: "Your trial is being activated. Check your email for details.",
    });

    setFormData({ name: '', email: '', phone: '', gymName: '' });
    setIsOpen(false);
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:opacity-60 transition-opacity" />
          <div className="relative flex items-center gap-4 bg-primary text-white px-8 py-5 rounded-2xl shadow-xl hover:scale-105 transition-all">
            <Sparkles className="w-5 h-5 fill-current" />
            <span className="font-bold uppercase tracking-wider text-sm">
              <span className="hidden sm:inline">START</span> TRIAL
            </span>
          </div>
        </div>
      </motion.button>

      {/* Modal Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl"
          >
            <div className="relative bg-card p-10 md:p-14 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 p-2 text-white/30 hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 rounded-full">
                  <span>Sign Up Now</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-normal mb-4 uppercase tracking-tight text-white">
                  Start Your <br /><span className="text-primary underline decoration-primary/20 underline-offset-8">Free Trial</span>
                </h3>
                <p className="text-muted-foreground/80 text-sm font-medium">
                  Get full access to all features for 14 days. No commitment required.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest block ml-1">Full Name</label>
                    <Input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="rounded-xl border-white/10 bg-white/5 h-14 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest block ml-1">Email Address</label>
                    <Input
                      type="email"
                      placeholder="e.g. john@gym.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="rounded-xl border-white/10 bg-white/5 h-14 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 font-medium"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest block ml-1">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="e.g. +1 234 567 890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="rounded-xl border-white/10 bg-white/5 h-14 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 font-medium"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest block ml-1">Gym Name</label>
                    <Input
                      type="text"
                      placeholder="e.g. Iron Fitness"
                      value={formData.gymName}
                      onChange={(e) => setFormData({ ...formData, gymName: e.target.value })}
                      required
                      className="rounded-xl border-white/10 bg-white/5 h-14 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 font-medium"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-xl bg-primary text-white text-lg font-bold uppercase tracking-widest shadow-xl transition-all hover:bg-primary/90 disabled:opacity-50 mt-4"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      PROCESSING...
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      <Send className="w-6 h-6" />
                      SUBMIT REQUEST
                    </span>
                  )}
                </Button>
              </form>

              {/* Status */}
              <div className="flex justify-center items-center gap-8 mt-12 text-muted-foreground/50">
                {[
                  'Data Secured',
                  'Cancel Anytime',
                  'No Credit Card'
                ].map((text) => (
                  <div key={text} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                    <span className="text-[8px] font-bold uppercase tracking-widest">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
