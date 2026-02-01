import { motion } from 'framer-motion';
import { Smartphone, Zap, Shield, CreditCard, Landmark, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export function KnowledgeSection() {
    return (
        <section className="py-24 bg-black/40 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 rounded-full">
                        <span>Market Analysis</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-normal text-white uppercase tracking-tight mb-8">
                        Why Fitexo is <span className="text-primary italic">India-Ready</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
                        The Indian fitness industry is evolving. Fitexo bridges the gap between fragmented gyms and digitally integrated wellness ecosystems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-8 rounded-3xl bg-secondary/20 border border-white/10 hover:border-primary/40 transition-all relative overflow-hidden group">
                        <Image 
                            src="/images/Stock/gym_owner_male.webp" 
                            alt="Gym owner using WhatsApp automation feature" 
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-cover opacity-5 group-hover:opacity-20 transition-opacity duration-500" 
                            loading="lazy"
                            quality={60}
                        />
                        <div className="relative z-10">
                            <MessageCircle className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white uppercase tracking-[0.1em] mb-4">WhatsApp Automation</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Shift from manually tracking renewals to recurring revenue. Fitexo sends automated nudges via WhatsApp 7, 3, and 1 day(s) before expiry with direct UPI handles.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-secondary/20 border border-white/10 hover:border-primary/40 transition-all relative overflow-hidden group">
                        <Image 
                            src="/images/Stock/Gym_interior_1_weight bar.webp" 
                            alt="Gym biometric access control system" 
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-cover opacity-5 group-hover:opacity-20 transition-opacity duration-500" 
                            loading="lazy"
                            quality={60}
                        />
                        <div className="relative z-10">
                            <Shield className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white uppercase tracking-[0.1em] mb-4">Biometric Synchronization</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Plug the revenue leakage. Real-time integration with biometric systems prevents proxy attendance and unauthorized access, saving up to 15% in lost revenue.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-secondary/20 border border-white/10 hover:border-primary/40 transition-all relative overflow-hidden group">
                        <Image 
                            src="/images/Stock/gym_owner_male_2.webp" 
                            alt="Gym owner managing GST compliant billing" 
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-cover opacity-5 group-hover:opacity-20 transition-opacity duration-500" 
                            loading="lazy"
                            quality={60}
                        />
                        <div className="relative z-10">
                            <Landmark className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white uppercase tracking-[0.1em] mb-4">GST-Compliant Billing</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Compliance made simple. Generate professional, GST-ready invoices that streamline your tax reporting and establish financial authority for your gym.
                            </p>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-secondary/20 border border-white/10 hover:border-primary/40 transition-all relative overflow-hidden group">
                        <Image 
                            src="/images/Stock/Gym_trainer_3.webp" 
                            alt="Gym trainer using Android member portal app" 
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-cover opacity-5 group-hover:opacity-20 transition-opacity duration-500" 
                            loading="lazy"
                            quality={60}
                        />
                        <div className="relative z-10">
                            <Smartphone className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white uppercase tracking-[0.1em] mb-4">Android Member Portal</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                A digital front door for your gym. Members can view progress, track diet charts, and renew memberships directly from our high-performance Android application.
                            </p>
                        </div>
                    </div>

                    <div className="p-1 rounded-3xl bg-gradient-to-br from-primary/40 to-transparent lg:col-span-2 group">
                        <div className="h-full p-8 rounded-[1.4rem] bg-[#0A0A0A] border border-white/5 relative overflow-hidden">
                            <Image 
                                src="/images/Stock/Gym_interior_1_tools.webp" 
                                alt="Gym interior in Kharagpur showing fitness equipment" 
                                fill
                                sizes="(max-width: 768px) 100vw, 800px"
                                className="object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-700" 
                                loading="lazy"
                                quality={60}
                            />
                            <div className="relative z-10">
                                <Zap className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-xl font-bold text-white uppercase tracking-[0.1em] mb-4">Tier-2 Growth Focus: Kharagpur Deployment</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    Optimized for high-growth hubs like Kharagpur. We understand the specific demographics of regions like Inda, Malancha, and Nimpura, where digital native faculty and students demand sophisticated, self-service solutions.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['IIT-Area', 'Malancha Road', 'Inda Commercial Hub', 'Nimpura Industrial'].map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] font-bold text-primary uppercase tracking-widest">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
