import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { 
    CheckCircle2, ArrowRight, Zap, Shield, Users, 
    CreditCard, Smartphone, BarChart3, Clock, MessageCircle 
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import Link from "next/link";

// Keyword data for programmatic pages
const keywordPages = {
    // Software Type Keywords
    "gym-management-software": {
        keyword: "Gym Management Software",
        title: "Best Gym Management Software in India | Fitexo",
        description: "Fitexo is India's #1 gym management software with WhatsApp automation, biometric attendance, and GST billing. Trusted by 10,000+ gyms. Start free trial!",
        h1: "India's Most Powerful Gym Management Software",
        heroText: "Transform your fitness business with Fitexo — the all-in-one gym management platform that automates billing, attendance, and member engagement.",
        features: ["Member Management", "Automated Billing", "WhatsApp Integration", "Biometric Attendance", "Analytics Dashboard", "Mobile App"],
        category: "software"
    },
    "gym-management-system": {
        keyword: "Gym Management System",
        title: "Complete Gym Management System | Cloud-Based | Fitexo",
        description: "Comprehensive gym management system with member tracking, billing automation, trainer scheduling, and real-time analytics. Try Fitexo free for 14 days.",
        h1: "Complete Gym Management System for Modern Fitness Centers",
        heroText: "Streamline every aspect of your gym operations with a unified system that handles members, payments, schedules, and reports — all from one dashboard.",
        features: ["Centralized Dashboard", "Member Database", "Payment Processing", "Class Scheduling", "Staff Management", "Reporting"],
        category: "software"
    },
    "gym-management-app": {
        keyword: "Gym Management App",
        title: "Best Gym Management App for Android & iOS | Fitexo",
        description: "Download Fitexo — the top-rated gym management app for owners and members. Manage your gym from anywhere with real-time sync and WhatsApp integration.",
        h1: "Gym Management App That Fits in Your Pocket",
        heroText: "Run your entire gym from your smartphone. Our mobile app gives you complete control over members, payments, and operations — anytime, anywhere.",
        features: ["Mobile Dashboard", "Push Notifications", "Offline Mode", "Quick Check-in", "Payment Collection", "Member App"],
        category: "software"
    },
    "fitness-management-software": {
        keyword: "Fitness Management Software",
        title: "Fitness Management Software for Studios & Gyms | Fitexo",
        description: "All-in-one fitness management software for gyms, yoga studios, and fitness centers. Automate operations and grow your business with Fitexo.",
        h1: "Fitness Management Software Built for Growth",
        heroText: "Whether you run a boutique studio or a multi-location chain, Fitexo adapts to your needs with powerful automation and analytics.",
        features: ["Multi-location Support", "Class Booking", "Trainer Management", "Revenue Analytics", "Marketing Tools", "Custom Branding"],
        category: "software"
    },
    "gym-billing-software": {
        keyword: "Gym Billing Software",
        title: "Gym Billing Software with GST Compliance | Fitexo",
        description: "Automate gym billing with GST-compliant invoices, online payments, and automated reminders. Fitexo handles all your billing needs.",
        h1: "Automated Gym Billing Software with GST Support",
        heroText: "Say goodbye to manual billing. Fitexo automates invoicing, payment collection, and GST compliance so you can focus on your members.",
        features: ["GST Invoicing", "Auto-debit", "Payment Links", "UPI Integration", "Revenue Reports", "Tax Compliance"],
        category: "features"
    },
    "gym-attendance-software": {
        keyword: "Gym Attendance Software",
        title: "Gym Attendance Software with Biometric Integration | Fitexo",
        description: "Track gym attendance automatically with biometric, QR code, or app-based check-ins. Real-time reports and member insights with Fitexo.",
        h1: "Smart Gym Attendance Tracking System",
        heroText: "Accurate attendance tracking is the foundation of good gym management. Fitexo supports multiple check-in methods and provides actionable insights.",
        features: ["Biometric Integration", "QR Code Check-in", "Face Recognition", "Real-time Reports", "Attendance Analytics", "Late Entry Alerts"],
        category: "features"
    },
    // Feature Keywords
    "whatsapp-gym-software": {
        keyword: "WhatsApp Gym Software",
        title: "Gym Software with WhatsApp Automation | Fitexo",
        description: "Automate member communication via WhatsApp — renewal reminders, birthday wishes, payment receipts, and more. Try Fitexo today!",
        h1: "WhatsApp-Powered Gym Management Software",
        heroText: "Reach your members where they are. Fitexo's WhatsApp automation sends personalized messages that boost engagement and reduce churn.",
        features: ["Renewal Reminders", "Birthday Wishes", "Payment Receipts", "Promotional Messages", "Lead Follow-up", "Bulk Messaging"],
        category: "features"
    },
    "biometric-gym-software": {
        keyword: "Biometric Gym Software",
        title: "Biometric Attendance System for Gyms | Fitexo",
        description: "Integrate biometric devices with your gym software. Fingerprint and face recognition attendance with Fitexo. Accurate, fast, and reliable.",
        h1: "Biometric Integration for Seamless Gym Check-ins",
        heroText: "Eliminate buddy punching and manual errors. Fitexo integrates with popular biometric devices for touchless, accurate attendance tracking.",
        features: ["Fingerprint Scanners", "Face Recognition", "Device Integration", "Real-time Sync", "Multiple Devices", "Access Control"],
        category: "features"
    },
    // Business Type Keywords
    "small-gym-software": {
        keyword: "Small Gym Software",
        title: "Affordable Gym Software for Small Gyms | Fitexo",
        description: "Perfect gym management software for small gyms and startups. Easy to use, affordable pricing, and powerful features. Start with Fitexo today!",
        h1: "Gym Software Designed for Small Fitness Centers",
        heroText: "You don't need a big budget to run a professional gym. Fitexo offers enterprise-grade features at prices that work for small businesses.",
        features: ["Affordable Plans", "Quick Setup", "Easy Interface", "Essential Features", "Growth Tools", "Local Support"],
        category: "business"
    },
    "yoga-studio-software": {
        keyword: "Yoga Studio Software",
        title: "Yoga Studio Management Software | Class Scheduling | Fitexo",
        description: "Manage your yoga studio effortlessly with class scheduling, member management, and online booking. Fitexo — built for wellness businesses.",
        h1: "Yoga Studio Management Made Simple",
        heroText: "Focus on teaching, not admin work. Fitexo handles class scheduling, member registrations, and payments so you can focus on your practice.",
        features: ["Class Scheduling", "Online Booking", "Package Management", "Instructor Management", "Member Portal", "Wellness Tracking"],
        category: "business"
    },
    "crossfit-gym-software": {
        keyword: "CrossFit Gym Software",
        title: "CrossFit Box Management Software | WOD Tracking | Fitexo",
        description: "Specialized software for CrossFit boxes — WOD tracking, class management, and community features. Power your box with Fitexo.",
        h1: "CrossFit Box Management Software",
        heroText: "Run your box like the elite athletes you train. Fitexo offers specialized features for CrossFit affiliates and functional fitness gyms.",
        features: ["WOD Tracking", "Class Capacity", "Performance Analytics", "Community Features", "Competition Mode", "Leaderboards"],
        category: "business"
    },
    // Comparison Keywords
    "best-gym-management-software": {
        keyword: "Best Gym Management Software",
        title: "Best Gym Management Software 2026 | Top Rated | Fitexo",
        description: "Looking for the best gym management software? Fitexo is rated #1 by gym owners for features, support, and value. Compare and choose the best!",
        h1: "Why Fitexo is the Best Gym Management Software",
        heroText: "Join 10,000+ gym owners who chose Fitexo over competitors. See why we're rated the best gym software in India.",
        features: ["#1 Rated", "24/7 Support", "Best Value", "Complete Features", "Easy Migration", "Proven Results"],
        category: "comparison"
    },
    "gym-software-pricing": {
        keyword: "Gym Software Pricing",
        title: "Gym Management Software Pricing & Plans | Fitexo",
        description: "Transparent gym software pricing starting from ₹399/month. No hidden fees, no long-term contracts. See Fitexo plans and features.",
        h1: "Simple, Transparent Gym Software Pricing",
        heroText: "We believe in honest pricing. Choose a plan that fits your gym size and scale as you grow. No surprises, no hidden fees.",
        features: ["From ₹399/month", "No Hidden Fees", "Monthly Billing", "Free Migration", "Cancel Anytime", "All Features Included"],
        category: "comparison"
    },
    "free-gym-software": {
        keyword: "Free Gym Software",
        title: "Free Gym Management Software Trial | 14 Days | Fitexo",
        description: "Try Fitexo gym management software free for 14 days. Full features, no credit card required. Start your free trial today!",
        h1: "Start Free with Fitexo Gym Software",
        heroText: "Experience the power of Fitexo with our 14-day free trial. Full access to all features, no credit card required.",
        features: ["14-Day Free Trial", "All Features", "No Credit Card", "Free Support", "Easy Setup", "No Commitment"],
        category: "comparison"
    },
    // Question Keywords
    "how-to-manage-gym-business": {
        keyword: "How to Manage Gym Business",
        title: "How to Manage a Gym Business Successfully | Guide | Fitexo",
        description: "Complete guide on managing a gym business — from member retention to billing automation. Learn the best practices with Fitexo.",
        h1: "How to Manage a Gym Business Successfully",
        heroText: "Running a successful gym requires the right tools and strategies. Learn how Fitexo helps gym owners streamline operations and grow revenue.",
        features: ["Member Retention", "Billing Automation", "Staff Management", "Marketing Tips", "Analytics", "Growth Strategies"],
        category: "questions"
    },
    "is-gym-business-profitable": {
        keyword: "Is Gym Business Profitable",
        title: "Is Gym Business Profitable in India? | Analysis | Fitexo",
        description: "Discover the profitability of gym business in India. Learn how to maximize revenue with the right gym management software.",
        h1: "Is Running a Gym Business Profitable?",
        heroText: "The fitness industry in India is booming. With the right tools and strategy, a gym can be highly profitable. Here's what you need to know.",
        features: ["Market Analysis", "Revenue Streams", "Cost Control", "Member Retention", "Scaling Tips", "Success Stories"],
        category: "questions"
    },
    "what-is-gym-management-system": {
        keyword: "What is Gym Management System",
        title: "What is a Gym Management System? | Complete Guide | Fitexo",
        description: "Learn what a gym management system is, its features, and benefits. Understand why your gym needs one with this complete guide.",
        h1: "What is a Gym Management System?",
        heroText: "A gym management system is software that helps fitness centers manage members, billing, attendance, and operations efficiently.",
        features: ["Definition", "Key Features", "Benefits", "How It Works", "Choosing the Right One", "Implementation"],
        category: "questions"
    }
};

const keywordSlugs = Object.keys(keywordPages);

interface PageProps {
    params: Promise<{
        keyword: string;
    }>;
}

export async function generateStaticParams() {
    return keywordSlugs.map(keyword => ({
        keyword,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { keyword } = await params;
    const data = keywordPages[keyword as keyof typeof keywordPages];

    if (!data) return {};

    return {
        title: data.title,
        description: data.description,
        keywords: [data.keyword, "gym software", "fitness management", "Fitexo", "gym billing", "gym attendance"],
        openGraph: {
            title: data.title,
            description: data.description,
            type: "website",
            url: `https://fitexo.in/features/${keyword}`,
        },
        alternates: {
            canonical: `https://fitexo.in/features/${keyword}`,
        }
    };
}

export default async function KeywordPage({ params }: PageProps) {
    const { keyword } = await params;
    const data = keywordPages[keyword as keyof typeof keywordPages];

    if (!data) notFound();

    const whatsappLink = `https://wa.me/916294737722?text=Hi%20Fitexo,%20I'm%20interested%20in%20${encodeURIComponent(data.keyword)}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Fitexo - " + data.keyword,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, Android, iOS",
        "description": data.description,
        "offers": {
            "@type": "Offer",
            "price": "399",
            "priceCurrency": "INR"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "10000"
        }
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `What is ${data.keyword}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": data.heroText
                }
            },
            {
                "@type": "Question",
                "name": `How much does ${data.keyword} cost?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fitexo offers plans starting from ₹399/month with all features included. We offer a 14-day free trial with no credit card required."
                }
            }
        ]
    };

    // Related keywords for internal linking
    const relatedKeywords = keywordSlugs
        .filter(k => k !== keyword)
        .filter(k => keywordPages[k as keyof typeof keywordPages].category === data.category)
        .slice(0, 4);

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0 opacity-20 industrial-grid" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />

                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 rounded-full">
                            <span>Trusted by 10,000+ Gyms</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-8 leading-[1.1] tracking-tight">
                            {data.h1}
                        </h1>
                        
                        <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 font-medium">
                            {data.heroText}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/pricing">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-8 rounded-xl font-bold uppercase tracking-widest gap-3 h-auto">
                                    Start Free Trial
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="px-10 py-8 rounded-xl font-bold uppercase tracking-widest gap-3 h-auto border-white/20 hover:bg-white/5">
                                    <WhatsAppIcon className="w-5 h-5" />
                                    Chat With Us
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight mb-6">
                            Key <span className="text-primary italic">Features</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to manage and grow your fitness business
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.features.map((feature, idx) => (
                            <div key={idx} className="p-8 bg-black/40 border border-white/5 rounded-3xl hover:border-primary/40 transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">{feature}</h3>
                                <p className="text-muted-foreground text-sm">Included with all Fitexo plans</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Fitexo Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight mb-8">
                                Why Choose <span className="text-primary italic">Fitexo</span>?
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { icon: Zap, title: "Lightning Fast Setup", desc: "Get started in under 24 hours with our guided onboarding" },
                                    { icon: Shield, title: "Bank-Grade Security", desc: "Your data is protected with enterprise-level encryption" },
                                    { icon: MessageCircle, title: "24/7 Support", desc: "Our team is always available via WhatsApp and phone" },
                                    { icon: BarChart3, title: "Actionable Analytics", desc: "Make data-driven decisions with real-time insights" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                            <item.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-secondary/20 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem]">
                            <h3 className="text-2xl font-normal text-white uppercase tracking-tight mb-8">Get Started Today</h3>
                            <ul className="space-y-4 mb-8">
                                {["14-day free trial", "No credit card required", "Full feature access", "Free migration support", "Cancel anytime"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/pricing">
                                <Button className="w-full bg-primary hover:bg-primary/90 py-6 rounded-xl font-bold uppercase tracking-widest">
                                    Start Free Trial
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Keywords Section - Internal Linking */}
            {relatedKeywords.length > 0 && (
                <section className="py-24 border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl font-normal uppercase tracking-tight mb-8 text-center">
                            Related <span className="text-primary italic">Solutions</span>
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {relatedKeywords.map(slug => {
                                const related = keywordPages[slug as keyof typeof keywordPages];
                                return (
                                    <Link key={slug} href={`/features/${slug}`} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/40 transition-all group">
                                        <h3 className="font-bold text-white group-hover:text-primary transition-colors mb-2">{related.keyword}</h3>
                                        <p className="text-muted-foreground text-sm line-clamp-2">{related.description.slice(0, 80)}...</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-24 bg-primary/5 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight mb-6">
                        Ready to Transform Your Gym?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join thousands of gym owners who trust Fitexo to manage and grow their fitness business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/pricing">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 rounded-xl font-bold uppercase tracking-widest">
                                Start Free Trial
                            </Button>
                        </Link>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <Button size="lg" variant="outline" className="px-10 py-6 rounded-xl font-bold uppercase tracking-widest border-white/20 hover:bg-white/5">
                                <WhatsAppIcon className="w-5 h-5 mr-2" />
                                Talk to Sales
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Export keyword data for sitemap
export { keywordPages, keywordSlugs };
