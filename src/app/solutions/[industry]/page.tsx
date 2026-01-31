import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, CheckCircle2, Dumbbell, Heart, Zap, 
    Users, Calendar, CreditCard, BarChart3, Shield
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import Link from "next/link";

// Industry solution pages data
const industrySolutions: Record<string, {
    title: string;
    heroTitle: string;
    heroHighlight: string;
    description: string;
    longDescription: string;
    icon: string;
    benefits: string[];
    features: { title: string; description: string }[];
    useCases: string[];
    faqs: { question: string; answer: string }[];
    keywords: string[];
}> = {
    "gym": {
        title: "Gym Management Software",
        heroTitle: "The Complete",
        heroHighlight: "Gym Management",
        description: "All-in-one gym management software with member tracking, billing, WhatsApp automation & biometric attendance.",
        longDescription: "Fitexo is designed specifically for modern gyms that want to automate operations, increase member retention, and grow revenue. Our platform handles everything from member sign-ups to payment collection.",
        icon: "dumbbell",
        benefits: [
            "Reduce membership churn by 40%",
            "Automate 90% of admin work",
            "Increase revenue by 25%",
            "Save 15+ hours per week"
        ],
        features: [
            { title: "Member Management", description: "Complete member database with photos, packages, history and attendance tracking" },
            { title: "Billing & Invoicing", description: "Automated GST billing, recurring payments, and online payment collection" },
            { title: "WhatsApp Automation", description: "Send renewal reminders, payment alerts, and workout tips automatically" },
            { title: "Biometric Attendance", description: "Fingerprint and face recognition integration for accurate tracking" },
            { title: "Staff Management", description: "Track trainer schedules, commissions, and performance metrics" },
            { title: "Reports & Analytics", description: "Real-time dashboards for revenue, attendance, and member insights" }
        ],
        useCases: [
            "Small neighborhood gyms",
            "Large fitness chains",
            "24/7 access gyms",
            "Boutique fitness studios"
        ],
        faqs: [
            { question: "How long does it take to set up?", answer: "Most gyms are fully operational within 24-48 hours. Our team handles data migration and training." },
            { question: "Does it work with my existing biometric device?", answer: "Yes! Fitexo integrates with all major biometric brands including eSSL, Realtime, and ZKTeco." },
            { question: "Can I manage multiple gym branches?", answer: "Absolutely. Our multi-branch feature lets you manage unlimited locations from one dashboard." }
        ],
        keywords: ["gym management software", "gym software", "fitness software", "gym billing", "gym CRM"]
    },
    "yoga-studio": {
        title: "Yoga Studio Management Software",
        heroTitle: "Mindful Management for",
        heroHighlight: "Yoga Studios",
        description: "Specialized software for yoga studios with class scheduling, member packages, and retreat management.",
        longDescription: "Fitexo helps yoga studios create a seamless experience for practitioners while simplifying operations. From class bookings to workshop management, handle everything in one place.",
        icon: "heart",
        benefits: [
            "Manage unlimited class types",
            "Handle drop-ins and packages",
            "Automate class reminders",
            "Track instructor availability"
        ],
        features: [
            { title: "Class Scheduling", description: "Create recurring classes, workshops, and special events with capacity limits" },
            { title: "Package Management", description: "Sell monthly passes, class packs, and unlimited memberships" },
            { title: "Online Booking", description: "Let students book classes through your website or mobile app" },
            { title: "Instructor Management", description: "Schedule teachers, track hours, and calculate payouts" },
            { title: "Waitlist Management", description: "Automatic waitlist handling with instant notifications" },
            { title: "Retreat & Workshop Tools", description: "Manage special events, retreats, and teacher trainings" }
        ],
        useCases: [
            "Hatha yoga studios",
            "Hot yoga centers",
            "Multi-style studios",
            "Corporate yoga providers"
        ],
        faqs: [
            { question: "Can students book classes online?", answer: "Yes! Students can book via your website, our app, or receive a booking link via WhatsApp." },
            { question: "How do class passes work?", answer: "You can create unlimited class packs (5, 10, 20 classes) with custom validity periods." },
            { question: "Can I manage workshop registrations?", answer: "Yes, Fitexo handles special events and workshops with their own pricing and capacity." }
        ],
        keywords: ["yoga studio software", "yoga management software", "yoga class booking", "yoga studio CRM"]
    },
    "crossfit-box": {
        title: "CrossFit Box Management Software",
        heroTitle: "Built for",
        heroHighlight: "CrossFit Boxes",
        description: "Powerful software for CrossFit affiliates with WOD tracking, member PRs, and competition management.",
        longDescription: "Fitexo understands the unique needs of CrossFit boxes. Track member progress, manage class capacity, and build a thriving community with tools designed for functional fitness.",
        icon: "zap",
        benefits: [
            "Track member PRs and benchmarks",
            "Manage class capacity easily",
            "Build community engagement",
            "Handle competitions & events"
        ],
        features: [
            { title: "WOD Management", description: "Post daily WODs, track scores, and maintain workout history" },
            { title: "PR Tracking", description: "Automatic personal record tracking for lifts and benchmarks" },
            { title: "Class Reservations", description: "Members book spots in WOD classes with automatic limits" },
            { title: "Leaderboards", description: "Weekly and monthly leaderboards to drive competition" },
            { title: "Community Feed", description: "Share achievements, photos, and announcements with members" },
            { title: "Competition Tools", description: "Run in-house competitions and throwdowns" }
        ],
        useCases: [
            "CrossFit affiliates",
            "Functional fitness gyms",
            "HIIT studios",
            "Olympic lifting clubs"
        ],
        faqs: [
            { question: "Can members log their WOD scores?", answer: "Yes! Members can log scores via the app and see how they rank on leaderboards." },
            { question: "Does it track Olympic lifting PRs?", answer: "Absolutely. Track all major lifts including snatch, clean & jerk, back squat, deadlift, etc." },
            { question: "Can I run a competition through Fitexo?", answer: "Yes, our competition module handles registrations, scoring, and live leaderboards." }
        ],
        keywords: ["crossfit software", "crossfit box management", "WOD tracking software", "crossfit gym software"]
    },
    "personal-training": {
        title: "Personal Training Management Software",
        heroTitle: "Scale Your",
        heroHighlight: "Personal Training",
        description: "Software for personal trainers to manage clients, schedule sessions, and track progress.",
        longDescription: "Whether you're an independent trainer or run a PT studio, Fitexo helps you deliver exceptional service while growing your business. Manage clients, track progress, and handle payments effortlessly.",
        icon: "users",
        benefits: [
            "Manage unlimited clients",
            "Schedule sessions easily",
            "Track client progress",
            "Automate payment collection"
        ],
        features: [
            { title: "Client Management", description: "Complete client profiles with goals, measurements, and history" },
            { title: "Session Scheduling", description: "Book and manage training sessions with calendar sync" },
            { title: "Progress Tracking", description: "Log measurements, photos, and achievement milestones" },
            { title: "Workout Builder", description: "Create custom programs and share with clients" },
            { title: "Package Sales", description: "Sell PT packages and track remaining sessions" },
            { title: "Automated Reminders", description: "WhatsApp reminders for upcoming sessions and renewals" }
        ],
        useCases: [
            "Independent personal trainers",
            "PT studios",
            "Online coaches",
            "Fitness bootcamps"
        ],
        faqs: [
            { question: "Can I share workout plans with clients?", answer: "Yes! Create programs and share them via app or WhatsApp with exercise videos." },
            { question: "How do I track remaining sessions?", answer: "Fitexo automatically tracks sessions used and alerts you when packages are low." },
            { question: "Can clients book sessions themselves?", answer: "Yes, enable self-booking and let clients pick from your available slots." }
        ],
        keywords: ["personal training software", "PT management", "trainer software", "fitness coaching software"]
    },
    "martial-arts": {
        title: "Martial Arts School Software",
        heroTitle: "Manage Your",
        heroHighlight: "Martial Arts School",
        description: "Complete software for martial arts schools with belt progression, class management, and tournament tracking.",
        longDescription: "From karate dojos to MMA gyms, Fitexo helps martial arts schools manage students, track belt progressions, and run successful academies. Handle everything from trial classes to tournament registrations.",
        icon: "shield",
        benefits: [
            "Track belt progressions",
            "Manage trial students",
            "Handle tournament registrations",
            "Automate grading notifications"
        ],
        features: [
            { title: "Belt/Rank Tracking", description: "Track student progressions through belt/rank systems" },
            { title: "Trial Management", description: "Convert trial students to members with automated follow-ups" },
            { title: "Family Accounts", description: "Manage families with multiple students and sibling discounts" },
            { title: "Grading System", description: "Schedule gradings, track attendance requirements, and certify students" },
            { title: "Tournament Management", description: "Handle registrations and results for competitions" },
            { title: "Attendance Streaks", description: "Gamify attendance with streak tracking and rewards" }
        ],
        useCases: [
            "Karate schools",
            "Taekwondo academies",
            "MMA gyms",
            "Brazilian Jiu-Jitsu academies"
        ],
        faqs: [
            { question: "Can I set attendance requirements for belt tests?", answer: "Yes! Set minimum attendance thresholds for grading eligibility." },
            { question: "Does it handle family discounts?", answer: "Absolutely. Create family accounts with automatic sibling discounts." },
            { question: "Can parents track their child's progress?", answer: "Yes, parents get access to attendance, belt progress, and upcoming gradings." }
        ],
        keywords: ["martial arts software", "karate school software", "MMA gym management", "dojo software"]
    },
    "pilates-studio": {
        title: "Pilates Studio Management Software",
        heroTitle: "Elevate Your",
        heroHighlight: "Pilates Studio",
        description: "Specialized software for Pilates studios with reformer scheduling, instructor management, and package tracking.",
        longDescription: "Fitexo helps Pilates studios deliver personalized experiences while managing complex equipment schedules. Handle reformer bookings, mat classes, and private sessions seamlessly.",
        icon: "heart",
        benefits: [
            "Manage equipment bookings",
            "Handle mixed class types",
            "Track instructor certifications",
            "Automate membership renewals"
        ],
        features: [
            { title: "Equipment Scheduling", description: "Book reformers, cadillacs, and other apparatus efficiently" },
            { title: "Class Type Management", description: "Mat, reformer, tower, and private sessions in one system" },
            { title: "Instructor Scheduling", description: "Match certified instructors with appropriate classes" },
            { title: "Client Assessments", description: "Track initial assessments and physical limitations" },
            { title: "Package Flexibility", description: "Sell class-specific or all-access memberships" },
            { title: "Cancellation Policies", description: "Enforce late cancel fees and no-show policies" }
        ],
        useCases: [
            "Classical Pilates studios",
            "Contemporary Pilates",
            "Reformer-only studios",
            "Physical therapy Pilates"
        ],
        faqs: [
            { question: "Can I manage reformer availability?", answer: "Yes! Set reformer counts per class and manage equipment maintenance schedules." },
            { question: "How do privates vs group classes work?", answer: "Create separate class types with different pricing and instructor assignments." },
            { question: "Can clients see available equipment?", answer: "Clients see class capacity, and you manage equipment allocation on the backend." }
        ],
        keywords: ["pilates software", "pilates studio management", "reformer booking software", "pilates CRM"]
    },
    "dance-studio": {
        title: "Dance Studio Management Software",
        heroTitle: "Choreograph Your",
        heroHighlight: "Dance Studio",
        description: "All-in-one software for dance studios with recital management, costume tracking, and class scheduling.",
        longDescription: "From ballet academies to hip-hop studios, Fitexo helps dance schools manage students, classes, and performances. Handle recitals, costumes, and competitions while keeping parents informed.",
        icon: "heart",
        benefits: [
            "Manage recitals & performances",
            "Track costume orders",
            "Handle age-based classes",
            "Automate parent communications"
        ],
        features: [
            { title: "Class Scheduling", description: "Manage multiple dance styles, levels, and age groups" },
            { title: "Recital Management", description: "Organize performances, rehearsals, and ticket sales" },
            { title: "Costume Tracking", description: "Track costume orders, sizes, and payments" },
            { title: "Parent Portal", description: "Parents view schedules, make payments, and receive updates" },
            { title: "Competition Registration", description: "Manage team registrations and travel logistics" },
            { title: "Video Sharing", description: "Share choreography videos with students securely" }
        ],
        useCases: [
            "Ballet academies",
            "Hip-hop studios",
            "Ballroom dance schools",
            "Competition dance teams"
        ],
        faqs: [
            { question: "Can parents pay for costumes through the app?", answer: "Yes! Add costume fees to student accounts with online payment options." },
            { question: "How do I manage recital ticket sales?", answer: "Fitexo handles ticket inventory, sales, and seat assignments." },
            { question: "Can I share practice videos?", answer: "Yes, upload videos that students can access through their app." }
        ],
        keywords: ["dance studio software", "dance school management", "recital management software", "dance CRM"]
    },
    "swimming-academy": {
        title: "Swimming Academy Management Software",
        heroTitle: "Dive Into Better",
        heroHighlight: "Pool Management",
        description: "Software for swimming academies with lane booking, skill level tracking, and safety certifications.",
        longDescription: "Fitexo helps swimming academies manage pool schedules, track student progress through skill levels, and maintain safety certifications. Handle group lessons, private coaching, and competitive swim teams.",
        icon: "zap",
        benefits: [
            "Manage pool lane bookings",
            "Track swim levels",
            "Handle safety certifications",
            "Automate lesson reminders"
        ],
        features: [
            { title: "Pool Scheduling", description: "Manage lanes, time slots, and instructor assignments" },
            { title: "Skill Level Tracking", description: "Track progress through learn-to-swim levels" },
            { title: "Certification Management", description: "Track lifeguard and instructor certifications" },
            { title: "Group & Private Lessons", description: "Handle different lesson types with capacity limits" },
            { title: "Swim Team Management", description: "Manage competitive swimmers, meets, and times" },
            { title: "Parent Communication", description: "Update parents on skill achievements and schedules" }
        ],
        useCases: [
            "Learn-to-swim programs",
            "Competitive swim clubs",
            "Hotel pool academies",
            "Aquatic fitness centers"
        ],
        faqs: [
            { question: "Can I track swim level progression?", answer: "Yes! Define your skill levels and track each student's progress and certifications." },
            { question: "How do lane bookings work?", answer: "Set up lanes with time slots and assign them to classes or lap swim sessions." },
            { question: "Can I manage a swim team?", answer: "Yes, track meet registrations, times, and qualifying standards." }
        ],
        keywords: ["swimming software", "swim academy management", "pool management software", "swim school CRM"]
    },
    "sports-academy": {
        title: "Sports Academy Management Software",
        heroTitle: "Champion-Level",
        heroHighlight: "Sports Academy",
        description: "Complete software for sports academies with team management, tournament tracking, and performance analytics.",
        longDescription: "Fitexo empowers sports academies to manage athletes, track performance, and run successful programs. From cricket academies to football schools, handle everything in one platform.",
        icon: "zap",
        benefits: [
            "Manage multiple sports",
            "Track athlete performance",
            "Handle tournaments",
            "Parent communication portal"
        ],
        features: [
            { title: "Multi-Sport Support", description: "Manage cricket, football, tennis, badminton, and more" },
            { title: "Team Management", description: "Create teams, manage rosters, and track attendance" },
            { title: "Performance Tracking", description: "Log stats, times, and improvement metrics" },
            { title: "Tournament Management", description: "Handle registrations, fixtures, and results" },
            { title: "Facility Booking", description: "Manage courts, fields, and equipment" },
            { title: "Coach Scheduling", description: "Assign coaches to sessions and track payouts" }
        ],
        useCases: [
            "Cricket academies",
            "Football schools",
            "Tennis clubs",
            "Multi-sport complexes"
        ],
        faqs: [
            { question: "Can I manage multiple sports?", answer: "Yes! Create different programs for each sport with separate schedules and pricing." },
            { question: "How do I track athlete stats?", answer: "Log sport-specific metrics and view progress over time." },
            { question: "Can I run tournaments?", answer: "Yes, manage fixtures, results, and standings for internal and external tournaments." }
        ],
        keywords: ["sports academy software", "cricket academy management", "football school software", "sports CRM"]
    },
    "wellness-center": {
        title: "Wellness Center Management Software",
        heroTitle: "Holistic Management for",
        heroHighlight: "Wellness Centers",
        description: "Integrated software for wellness centers combining fitness, spa, nutrition, and therapeutic services.",
        longDescription: "Fitexo helps wellness centers deliver integrated health experiences. Manage fitness classes, spa appointments, nutrition consultations, and therapeutic services all in one platform.",
        icon: "heart",
        benefits: [
            "Manage diverse services",
            "Unified member profiles",
            "Cross-sell services",
            "Integrated scheduling"
        ],
        features: [
            { title: "Multi-Service Booking", description: "Gym, spa, nutrition, and therapy in one booking system" },
            { title: "Wellness Assessments", description: "Track holistic health metrics and goals" },
            { title: "Practitioner Scheduling", description: "Manage nutritionists, therapists, and trainers" },
            { title: "Package Bundling", description: "Sell integrated wellness packages" },
            { title: "Room & Resource Management", description: "Book treatment rooms, equipment, and facilities" },
            { title: "Health Records", description: "Maintain confidential client health information" }
        ],
        useCases: [
            "Holistic wellness centers",
            "Corporate wellness facilities",
            "Resort wellness spas",
            "Integrative health clinics"
        ],
        faqs: [
            { question: "Can I manage different service types?", answer: "Yes! Create separate categories for fitness, spa, nutrition, and more." },
            { question: "How do wellness packages work?", answer: "Bundle multiple services (gym + spa + nutrition) into discounted packages." },
            { question: "Can practitioners have separate calendars?", answer: "Yes, each practitioner has their own schedule with custom availability." }
        ],
        keywords: ["wellness center software", "spa management", "health center software", "wellness CRM"]
    }
};

export const industrySlugs = Object.keys(industrySolutions);

interface PageProps {
    params: Promise<{
        industry: string;
    }>;
}

export async function generateStaticParams() {
    return industrySlugs.map(industry => ({ industry }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { industry } = await params;
    const solution = industrySolutions[industry];
    
    if (!solution) return {};

    return {
        title: `${solution.title} | Fitexo - #1 Fitness Business Platform`,
        description: solution.description,
        keywords: solution.keywords,
        openGraph: {
            title: solution.title,
            description: solution.description,
            type: "website",
            url: `https://fitexo.in/solutions/${industry}`,
        },
        alternates: {
            canonical: `https://fitexo.in/solutions/${industry}`,
        }
    };
}

export default async function IndustryPage({ params }: PageProps) {
    const { industry } = await params;
    const solution = industrySolutions[industry];

    if (!solution) notFound();

    const whatsappLink = `https://wa.me/916294737722?text=Hi%20Fitexo,%20I'm%20interested%20in%20your%20${encodeURIComponent(solution.title)}`;

    // JSON-LD Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": `Fitexo - ${solution.title}`,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, Android, iOS",
        "description": solution.longDescription,
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR",
            "description": "Free trial available"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "500"
        }
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": solution.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

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

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 rounded-full">
                        <Dumbbell className="w-4 h-4" />
                        <span>Industry Solutions</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-8 leading-[1.1] tracking-tight uppercase">
                        {solution.heroTitle} <br />
                        <span className="text-primary italic">{solution.heroHighlight}</span> Software
                    </h1>
                    
                    <p className="text-xl text-muted-foreground/80 max-w-3xl mx-auto mb-12 font-medium">
                        {solution.longDescription}
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
                                Get Demo
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {solution.benefits.map((benefit, idx) => (
                            <div key={idx} className="p-8 bg-black/40 border border-white/10 rounded-3xl text-center">
                                <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-4" />
                                <p className="text-lg font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight mb-6">
                            Features Built for <span className="text-primary italic">Your Business</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solution.features.map((feature, idx) => {
                            const icons = [Zap, Users, Calendar, CreditCard, BarChart3, Shield];
                            const Icon = icons[idx % icons.length];
                            
                            return (
                                <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-primary/40 transition-all">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-24 bg-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight mb-6">
                            Perfect For
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {solution.useCases.map((useCase, idx) => (
                            <div key={idx} className="px-8 py-4 bg-black/40 border border-white/10 rounded-full">
                                <span className="text-white font-medium">{useCase}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight mb-6">
                            Frequently Asked <span className="text-primary italic">Questions</span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {solution.faqs.map((faq, idx) => (
                            <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                                <p className="text-muted-foreground">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Solutions - Internal Linking */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-normal uppercase tracking-tight mb-8 text-center">
                        Explore More <span className="text-primary italic">Solutions</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {industrySlugs.filter(slug => slug !== industry).slice(0, 5).map(slug => (
                            <Link 
                                key={slug} 
                                href={`/solutions/${slug}`}
                                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-primary/40 transition-all text-sm capitalize"
                            >
                                {slug.replace(/-/g, ' ')}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary/5 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-normal uppercase tracking-tight mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join thousands of fitness businesses using Fitexo to grow and succeed.
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
