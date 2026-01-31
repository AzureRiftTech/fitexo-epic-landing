"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, X } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import Image from 'next/image';

export function LeadCaptureForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    gymName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Registration Success!",
      description: "Your gym station is being initialized. Check your email for next steps.",
    });

    setFormData({
      gymName: '',
      ownerName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      password: '',
      confirmPassword: ''
    });
    setIsOpen(false);
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/916294737722?text=Hello%20Fitexo%2C%20I'm%20interested%20in%20listing%20my%20gym."
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:opacity-60 transition-opacity" />
          <div className="relative flex items-center gap-4 bg-primary text-white px-8 py-5 rounded-2xl shadow-xl hover:scale-105 transition-all">
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            <span className="font-bold uppercase tracking-wider text-sm">
              LIST YOUR GYM
            </span>
          </div>
        </div>
      </motion.a>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl overflow-y-auto"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl my-auto py-8"
            >
              <div className="relative bg-[#0A0A0A] p-6 md:p-12 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden group">
                {/* Background Decor */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src="/images/Stock/Gym_interior_1_tools.webp" 
                    alt="Gym interior background for registration form"
                    fill
                    sizes="(max-width: 672px) 100vw, 672px"
                    quality={30}
                    priority={false}
                    className="object-cover opacity-5 group-hover:opacity-10 transition-opacity duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-transparent" />
                </div>
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 md:top-10 md:right-10 p-2 text-white/30 hover:text-primary transition-colors z-20"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Header */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-6 rounded-full">
                    <span>Initialize Station</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-normal mb-3 uppercase tracking-tight text-white leading-[1.1]">
                    Register Your <br /><span className="text-primary italic">Gym</span>
                  </h3>
                  <p className="text-muted-foreground/80 text-xs md:text-sm font-medium">
                    Enter the details below to initialize your station.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block ml-1">Gym Name</label>
                      <Input
                        type="text"
                        placeholder="YOUR GYM NAME"
                        value={formData.gymName}
                        onChange={(e) => setFormData({ ...formData, gymName: e.target.value })}
                        required
                        className="rounded-xl border-white/10 bg-white/5 h-12 md:h-14 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block ml-1">Owner Name</label>
                      <Input
                        type="text"
                        placeholder="YOUR FULL NAME"
                        value={formData.ownerName}
                        onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                        required
                        className="rounded-xl border-white/10 bg-white/5 h-12 md:h-14 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block ml-1">Email Address</label>
                      <Input
                        type="email"
                        placeholder="OWNER@GYM.COM"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="rounded-xl border-white/10 bg-white/5 h-12 md:h-14 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block ml-1">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="0000 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="rounded-xl border-white/10 bg-white/5 h-12 md:h-14 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block ml-1">Gym Address</label>
                      <Input
                        type="text"
                        placeholder="STREET NAME, AREA, PINCODE..."
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                        className="rounded-xl border-white/10 bg-white/5 h-12 md:h-14 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block ml-1">City</label>
                      <Input
                        type="text"
                        placeholder="CITY NAME..."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                        className="rounded-xl border-white/10 bg-white/5 h-12 md:h-14 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block ml-1">Password</label>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        className="rounded-xl border-white/10 bg-white/5 h-12 md:h-14 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block ml-1">Confirm Password</label>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        required
                        className="rounded-xl border-white/10 bg-white/5 h-12 md:h-14 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 font-medium"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 md:h-16 rounded-xl bg-primary text-white text-base md:text-lg font-bold uppercase tracking-widest shadow-xl transition-all hover:bg-primary/90 disabled:opacity-50 mt-4 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        INITIALIZING...
                      </span>
                    ) : (
                      <span className="flex items-center gap-3">
                        <Send className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        INITIALIZE STATION
                      </span>
                    )}
                  </Button>
                </form>

                {/* Status Footer */}
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-10 md:mt-12 text-muted-foreground/40">
                  {[
                    'Data Encrypted',
                    '24/7 Priority Support',
                    'Enterprise Security'
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
      </AnimatePresence>
    </>
  );
}
