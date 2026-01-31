import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { 
    MapPin, ArrowRight, CheckCircle2, Building2, 
    Users, Zap, Phone as PhoneIcon 
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import Link from "next/link";
import { getAllLocalities, getLocalitiesByCity, getUniqueCities } from "@/lib/data/localities";

interface PageProps {
    params: Promise<{
        city: string;
    }>;
}

export async function generateStaticParams() {
    const cities = getUniqueCities();
    return cities.map(city => ({
        city: city.toLowerCase().replace(/\s+/g, '-'),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { city } = await params;
    const cityName = city.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const cityLocalities = getLocalitiesByCity(cityName);

    if (cityLocalities.length === 0) {
        // Try to find with original city name
        const allLocalities = getAllLocalities();
        const matchedCity = allLocalities.find(l => 
            l.city.toLowerCase().replace(/\s+/g, '-') === city
        );
        if (!matchedCity) return {};
    }

    const state = cityLocalities[0]?.state || "India";
    const title = `Gym Management Software in ${cityName}, ${state} | Fitexo`;
    const description = `Best gym management software in ${cityName}. Fitexo offers WhatsApp automation, biometric attendance, GST billing & more. Trusted by ${cityLocalities.length * 10}+ gyms in ${cityName}.`;

    return {
        title,
        description,
        keywords: [
            `gym software ${cityName}`,
            `gym management ${cityName}`,
            `fitness software ${cityName}`,
            `gym billing ${cityName}`,
            `biometric gym ${cityName}`,
            state
        ],
        openGraph: {
            title,
            description,
            type: "website",
            url: `https://fitexo.in/gym-software/${city}`,
        },
        alternates: {
            canonical: `https://fitexo.in/gym-software/${city}`,
        }
    };
}

export default async function CityPage({ params }: PageProps) {
    const { city } = await params;
    
    // Normalize city name
    let cityName = city.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    let cityLocalities = getLocalitiesByCity(cityName);

    // Try alternate matching
    if (cityLocalities.length === 0) {
        const allLocalities = getAllLocalities();
        const matchedLocality = allLocalities.find(l => 
            l.city.toLowerCase().replace(/\s+/g, '-') === city ||
            l.slug.includes(city)
        );
        if (matchedLocality) {
            cityName = matchedLocality.city;
            cityLocalities = getLocalitiesByCity(cityName);
        }
    }

    if (cityLocalities.length === 0) notFound();

    const state = cityLocalities[0]?.state || "India";
    const district = cityLocalities[0]?.district || cityName;
    const tier = cityLocalities[0]?.tier || 2;

    const whatsappLink = `https://wa.me/916294737722?text=Hi%20Fitexo,%20I'm%20interested%20in%20gym%20software%20for%20my%20gym%20in%20${encodeURIComponent(cityName)}`;

    // JSON-LD for Local Business
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Fitexo Gym Software - ${cityName}`,
        "description": `Professional gym management software provider serving fitness centers in ${cityName}, ${state}.`,
        "url": `https://fitexo.in/gym-software/${city}`,
        "telephone": "+91 6294 737 722",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": cityName,
            "addressRegion": state,
            "addressCountry": "IN"
        },
        "areaServed": {
            "@type": "City",
            "name": cityName
        },
        "serviceType": "Gym Management Software"
    };

    // Get nearby cities for internal linking
    const allCities = getUniqueCities();
    const nearbyCities = allCities
        .filter(c => c !== cityName)
        .slice(0, 6);

    // Areas served in this city
    const areasServed = cityLocalities.slice(0, 12);

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
                                <MapPin className="w-4 h-4" />
                                <span>Serving {cityName}, {state}</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl font-normal mb-8 leading-[1.1] tracking-tight uppercase">
                                Gym Management Software in <span className="text-primary italic">{cityName}</span>
                            </h1>
                            
                            <p className="text-xl text-muted-foreground/80 max-w-xl mb-12 font-medium">
                                Transform your fitness business in {cityName} with Fitexo — India's #1 gym management platform with WhatsApp automation, biometric attendance, and GST billing.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/pricing">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-8 rounded-xl font-bold uppercase tracking-widest gap-3 h-auto">
                                        Start Free Trial
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>
                                </Link>
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" variant="outline" className="px-10 py-8 rounded-xl font-bold uppercase tracking-widest gap-3 h-auto border-white/20 hover:bg-white/5">
                                        <WhatsAppIcon className="w-5 h-5" />
                                        Get Demo
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Stats Card */}
                        <div className="bg-secondary/20 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl">
                            <h3 className="text-2xl font-normal text-white uppercase tracking-tight mb-8 border-b border-white/5 pb-4">
                                Fitexo in {cityName}
                            </h3>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">{cityLocalities.length * 10}+</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-widest">Gyms Served</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">{areasServed.length}+</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-widest">Areas Covered</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-widest">Support</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-widest">Rating</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas Served Section */}
            {areasServed.length > 1 && (
                <section className="py-24 bg-white/5">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight mb-6">
                                Areas We <span className="text-primary italic">Serve</span> in {cityName}
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Fitexo provides local support and services across all areas of {cityName}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {areasServed.map((area, idx) => (
                                <Link 
                                    key={idx} 
                                    href={`/manage/${area.city.toLowerCase()}/${area.locality.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="p-6 bg-black/40 border border-white/5 rounded-2xl hover:border-primary/40 transition-all group"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        <h3 className="font-bold text-white group-hover:text-primary transition-colors">
                                            {area.locality}
                                        </h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                        Gym software for {area.demographic || 'fitness centers'}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Features Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight mb-6">
                            Why Gyms in {cityName} Choose <span className="text-primary italic">Fitexo</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Zap, title: "WhatsApp Automation", desc: `Send automated reminders to members in ${cityName} via WhatsApp` },
                            { icon: Users, title: "Member Management", desc: "Complete member database with profiles, packages, and history" },
                            { icon: Building2, title: "Multi-branch Support", desc: `Manage multiple gyms across ${cityName} from one dashboard` },
                            { icon: CheckCircle2, title: "Biometric Integration", desc: "Connect fingerprint and face recognition devices seamlessly" },
                            { icon: PhoneIcon, title: "Mobile App", desc: "Android app for gym owners and separate member app" },
                            { icon: MapPin, title: "Local Support", desc: `On-ground support team available in ${state}` },
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Nearby Cities Section - Internal Linking */}
            {nearbyCities.length > 0 && (
                <section className="py-24 border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl font-normal uppercase tracking-tight mb-8 text-center">
                            Also Serving <span className="text-primary italic">Nearby Cities</span>
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {nearbyCities.map(nearbyCity => (
                                <Link 
                                    key={nearbyCity} 
                                    href={`/gym-software/${nearbyCity.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-primary/40 transition-all text-sm"
                                >
                                    Gym Software in {nearbyCity}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-24 bg-primary/5 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight mb-6">
                        Ready to Transform Your Gym in {cityName}?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join hundreds of gym owners in {cityName} who trust Fitexo to manage and grow their fitness business.
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
