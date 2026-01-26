import { SubPageTemplate } from '@/components/landing/SubPageTemplate';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Solution {
    title: string;
    description: string;
    keywords: string[];
    content: string;
    features: string[];
}

const solutions: Record<string, Solution> = {
    'gym-management-software-midnapore': {
        title: 'Gym Management in Midnapore',
        description: 'Leading gym management software for fitness centers in Midnapore, West Bengal. Optimized for regional growth.',
        keywords: ['midnapore gym', 'fitness software midnapore', 'gym billing midnapore'],
        content: 'Fitexo provides specialized management tools tailored for the growing fitness community in Midnapore. Our local-first approach ensures that small to large boxes can manage their memberships effectively.',
        features: ['Local Bengali Support', 'Regional Payment Integration', 'Multi-Box Management']
    },
    'automated-billing-for-fitness-centers': {
        title: 'Automated Gym Billing',
        description: 'Stop chasing payments. Our automated billing system handles everything for you via WhatsApp and UPI.',
        keywords: ['gym billing', 'payment automation', 'fitness payment processing'],
        content: 'With Fitexo, automation is at the core. Our system tracks every renewal date, sends WhatsApp reminders, and processes payments seamlessly, allowing you to focus on training, not admin.',
        features: ['Automated UPI Links', 'GST Compliant Invoices', 'Payment Reconciliation']
    },
    'whatsapp-integrated-gym-software': {
        title: 'WhatsApp Integrated Management',
        description: 'Engage your members where they are. Full WhatsApp integration for gym notifications and renewal nudges.',
        keywords: ['whatsapp gym alerts', 'member engagement', 'fitness notifications'],
        content: 'Engagement is key to retention. Fitexo integrates directly with WhatsApp to send automated attendance alerts, renewal reminders, and motivational messages to your members instantly.',
        features: ['Scheduled Renewal Nudges', 'Attendance Confirmation', 'Lead Qualification Bot']
    },
    'biometric-attendance-system-gyms': {
        title: 'Biometric Access Control for Gyms',
        description: 'Zero revenue leakage with advanced biometric synchronization. Real-time turnout management.',
        keywords: ['biometric gym attendance', 'gym access control', 'fingerprint gym access'],
        content: 'Stop unauthorized entries. Fitexo syncs directly with biometric hardware to automatically block expired members at the gate, saving you thousands in lost membership fee revenue.',
        features: ['Real-time hardware sync', 'Turnstile auto-lock', 'Attendance heatmaps']
    },
    'gst-compliant-gym-billing-software': {
        title: 'GST Compliant Gym Accounting',
        description: 'Simplified tax compliance for Indian gym owners. Professional invoicing made easy.',
        keywords: ['gst gym software', 'gym tax compliance', 'fitness billing india'],
        content: 'Running a gym in India requires administrative compliance. Fitexo generates GST-ready invoices, tracks your tax liabilities, and provides one-click reporting for your CA.',
        features: ['GST Invoicing', 'Expense Tracking', 'CA-ready reporting']
    },
    'gym-management-software-kharagpur': {
        title: 'Elite Gym Management in Kharagpur',
        description: 'The dominant fitness SaaS for Kharagpur\'s unique demographics. From IIT faculty to Malancha commercial hubs.',
        keywords: ['kharagpur gym software', 'best gym kharagpur', 'fitness app west bengal'],
        content: 'Optimized for high-growth hubs like Kharagpur, West Bengal. Fitexo serves the student population of IIT Kharagpur and the residential sectors of Inda and Nimpura with high-performance tech.',
        features: ['Tier-2 Hub Optimization', 'WhatsApp Renewal Engine', 'Android Staff Portal']
    }
};

export async function generateStaticParams() {
    return Object.keys(solutions).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const solution = solutions[slug];
    if (!solution) return {};

    return {
        title: `${solution.title} | Fitexo Solutions`,
        description: solution.description,
        keywords: solution.keywords
    };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const solution = solutions[slug];

    if (!solution) {
        notFound();
    }

    return (
        <SubPageTemplate
            title={solution.title}
            subtitle={solution.description}
        >
            <div className="max-w-4xl mx-auto py-12 px-4">
                <div className="text-muted-foreground leading-relaxed text-xl mb-12">
                    <p>{solution.content}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {solution.features.map((feature, idx) => (
                        <div key={idx} className="p-6 bg-secondary/20 rounded-2xl border border-white/5 flex items-center gap-4">
                            <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                            <span className="text-white font-bold uppercase tracking-wider text-sm">{feature}</span>
                        </div>
                    ))}
                </div>

                <div className="p-10 bg-gradient-to-br from-primary/10 to-transparent rounded-[3rem] border border-white/10">
                    <h4 className="text-white text-2xl font-normal mb-6 uppercase tracking-tight">Why Choose Fitexo?</h4>
                    <div className="space-y-4">
                        {[
                            'Real-time dashboard analytics with biometric sync',
                            'Localized support for West Bengal (Midnapore/Kharagpur)',
                            'WhatsApp automation with 30% higher response rates',
                            'No-bloat, simple operational hub for busy owners'
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                                <span className="text-muted-foreground font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SubPageTemplate>
    );
}
