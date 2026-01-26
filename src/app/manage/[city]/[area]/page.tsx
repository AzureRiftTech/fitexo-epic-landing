import { localities } from "@/lib/data/localities";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
    Smartphone, Zap, Shield, CreditCard, Users, Clock,
    MapPin, Phone as PhoneIcon, Calendar, ArrowRight, CheckCircle2
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/icons";

interface PageProps {
    params: Promise<{
        city: string;
        area: string;
    }>;
}

export async function generateStaticParams() {
    return localities.map((loc) => ({
        city: loc.city.toLowerCase(),
        area: loc.locality.toLowerCase(),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { city, area } = await params;
    const data = localities.find(
        (l) => l.city.toLowerCase() === city && l.locality.toLowerCase() === area
    );

    if (!data) return {};

    const title = `Best Gym Management Software in ${data.locality}, ${data.city} | Fitexo`;
    const description = `Scale your gym in ${data.locality} with Fitexo. India's #1 Fitness SaaS featuring WhatsApp automation, Biometric sync, and GST billing. Visit us at ${data.address}.`;

    return {
        title,
        description,
        keywords: [...data.keywords, "gym software India", "fitness SaaS", data.city, "GBP specialized"],
        openGraph: {
            title,
            description,
            type: "website",
            url: `https://fitexo.in/manage/${city}/${area}?utm_source=gbp&utm_medium=organic&utm_campaign=local_seo`,
        },
    };
}

export default async function LocalityPage({ params }: PageProps) {
    const { city, area } = await params;
    const data = localities.find(
        (l) => l.city.toLowerCase() === city && l.locality.toLowerCase() === area
    );

    if (!data) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Fitexo ${data.locality} Hub`,
        "image": "https://fitexo.in/logo.png",
        "description": `Elite Gym Management Solutions for fitness centers in ${data.locality}, ${data.city}.`,
        "@id": `https://fitexo.in/manage/${city}/${area}`,
        "url": `https://fitexo.in/manage/${city}/${area}`,
        "telephone": data.phone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": data.address.split(',')[0],
            "addressLocality": data.city,
            "addressRegion": "WB",
            "postalCode": data.address.match(/\d{6}/)?.[0] || "721301",
            "addressCountry": "IN"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "05:00",
                "closes": "23:00"
            }
        ],
        "service": data.services.map(s => ({
            "@type": "Service",
            "name": s
        }))
    };

    const whatsappLink = `https://wa.me/916294737722?text=Hello%20Fitexo%2C%20I'm%20from%20${data.locality}%20and%20want%20to%20list%20my%20gym.&utm_source=gbp&utm_medium=local_page&utm_campaign=${data.slug}`;

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0 opacity-20 industrial-grid" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] pointer-events-none rounded-full" />

                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-left">
                            <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 rounded-full">
                                <span>Verified Local Hub in {data.city}</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-normal mb-8 leading-[1.1] tracking-tight uppercase">
                                Fitexo <span className="text-primary italic">{data.locality}</span> <br />
                                Operations
                            </h1>
                            <p className="text-xl text-muted-foreground/80 max-w-xl mb-12 font-medium">
                                The premier gym management ecosystem for {data.demographic} in {data.locality}. Automated billing, biometric sync, and WhatsApp engagement.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href={whatsappLink}>
                                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-8 rounded-xl font-bold uppercase tracking-widest gap-3 h-auto">
                                        <WhatsAppIcon className="w-5 h-5" />
                                        LIST YOUR GYM
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* NAP Card for Google Business Profile Consistency */}
                        <div className="bg-secondary/20 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8">
                                <CheckCircle2 className="w-12 h-12 text-primary/20 group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-2xl font-normal text-white uppercase tracking-tight mb-8 border-b border-white/5 pb-4">Establishment Details</h3>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <MapPin className="w-6 h-6 text-primary shrink-0" />
                                    <div>
                                        <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Address</h5>
                                        <p className="text-muted-foreground font-medium">{data.address}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <PhoneIcon className="w-6 h-6 text-primary shrink-0" />
                                    <div>
                                        <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Phone</h5>
                                        <p className="text-muted-foreground font-medium">{data.phone}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Calendar className="w-6 h-6 text-primary shrink-0" />
                                    <div>
                                        <h5 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2">Support Hours</h5>
                                        <p className="text-muted-foreground font-medium">{data.hours}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Menu */}
            <section className="py-32 bg-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-normal uppercase tracking-tight mb-6">
                            Our <span className="text-primary italic">Services</span> for {data.locality}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto uppercase text-xs font-bold tracking-[0.2em]">Verified Gym Growth Solutions</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.services.map((service, idx) => (
                            <div key={idx} className="p-8 bg-black/40 border border-white/5 rounded-3xl hover:border-primary/40 transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                    <Zap className="w-6 h-6 text-primary group-hover:text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-2">{service}</h4>
                                <p className="text-muted-foreground text-sm uppercase tracking-widest text-[10px]">Optimized for {data.locality} demographic</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local Insights Component */}
            <section className="py-32 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-24 items-center">
                        <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/images/Stock/Gym_interior_1_tools.webp"
                                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-1000"
                                alt={`${data.locality} Gym Operations`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            <div className="absolute bottom-12 left-12">
                                <p className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-4">Fitexo Local Presence</p>
                                <h4 className="text-3xl text-white font-normal uppercase leading-tight">Serving {data.establishments}</h4>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-normal mb-10 uppercase tracking-tight">
                                Designed for <br /> <span className="text-primary italic">{data.locality}</span> Needs
                            </h2>
                            <div className="space-y-8">
                                <div className="p-8 bg-secondary/10 rounded-3xl border border-white/5">
                                    <h4 className="text-white font-bold uppercase tracking-wider mb-4">Locality Requirement: {data.needs}</h4>
                                    <p className="text-muted-foreground leading-relaxed font-medium">
                                        We understand that gyms in {data.locality} require specific optimizations for {data.demographic}. Our system is tailored to handle these precise environmental challenges.
                                    </p>
                                </div>
                                <div className="flex items-center gap-6 p-6">
                                    <div className="w-1 h-20 bg-primary/20 rounded-full" />
                                    <p className="text-muted-foreground italic font-medium">
                                        "Fitexo has transformed how we manage high-volume member tracking across our Kharagpur branches."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Structured CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -skew-y-3 translate-y-12" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-5xl md:text-8xl font-normal mb-12 uppercase tracking-tighter">
                        READY TO <span className="text-primary italic">DOMINATE?</span>
                    </h2>
                    <a href={whatsappLink}>
                        <Button size="lg" className="bg-primary text-white text-xl px-16 py-10 rounded-[2rem] font-bold uppercase tracking-widest shadow-[0_30px_60px_-15px_rgba(220,38,38,0.5)] hover:scale-105 transition-all gap-4">
                            <WhatsAppIcon className="w-6 h-6" />
                            START AT {data.locality} HUB
                        </Button>
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
