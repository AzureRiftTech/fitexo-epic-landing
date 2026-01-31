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
    },
    // Additional SEO-optimized solution pages
    'best-gym-management-software-india': {
        title: 'Best Gym Management Software in India',
        description: 'India\'s #1 rated gym management software. Trusted by 10,000+ fitness centers across all states. Start free today.',
        keywords: ['best gym software india', 'gym management software india', 'top fitness software', 'gym app india'],
        content: 'Fitexo is India\'s fastest-growing gym management platform, designed specifically for the unique needs of Indian fitness businesses. From small studios to large chains, we handle everything.',
        features: ['Made for India', 'UPI & Paytm Integration', 'Multi-language Support', 'Local Customer Success Team']
    },
    'gym-membership-management-software': {
        title: 'Gym Membership Management System',
        description: 'Complete membership lifecycle management. Track renewals, freeze memberships, manage upgrades - all in one place.',
        keywords: ['gym membership software', 'membership management system', 'member tracking', 'gym crm'],
        content: 'Never lose a member due to poor follow-up again. Fitexo\'s intelligent membership system predicts churn, automates renewals, and keeps your retention rates at industry-leading levels.',
        features: ['Churn Prediction AI', 'Auto-renewal System', 'Membership Tiers', 'Family Plans Support']
    },
    'fitness-center-software-free-trial': {
        title: 'Fitness Center Software - Free 30-Day Trial',
        description: 'Try Fitexo free for 30 days. No credit card required. Full access to all premium features. Cancel anytime.',
        keywords: ['free gym software', 'gym management free trial', 'fitness software trial', 'gym app free'],
        content: 'Experience the full power of Fitexo with zero commitment. Our 30-day trial gives you complete access to all features - member management, billing, attendance, analytics, and WhatsApp integration.',
        features: ['No Credit Card Required', 'Full Feature Access', 'Free Data Migration', 'Dedicated Setup Support']
    },
    'cloud-based-gym-software': {
        title: 'Cloud-Based Gym Management Software',
        description: 'Access your gym data anywhere, anytime. Secure cloud infrastructure with 99.9% uptime guarantee.',
        keywords: ['cloud gym software', 'online gym management', 'saas gym software', 'gym software cloud'],
        content: 'Fitexo runs on enterprise-grade cloud infrastructure hosted in India. Access your dashboard from any device - phone, tablet, or laptop. Real-time sync across all your locations.',
        features: ['99.9% Uptime SLA', 'Multi-device Access', 'Automatic Backups', 'Data Encryption']
    },
    'gym-owner-app-android': {
        title: 'Gym Owner App for Android',
        description: 'Manage your gym from your pocket. Native Android app with offline support and instant notifications.',
        keywords: ['gym owner app', 'gym management android', 'fitness business app', 'gym app download'],
        content: 'Download the Fitexo Android app and take control of your gym wherever you are. Check real-time attendance, approve payments, and manage staff - all from your smartphone.',
        features: ['Native Android App', 'Offline Mode', 'Push Notifications', 'Biometric App Lock']
    },
    'gym-billing-software-with-upi': {
        title: 'Gym Billing Software with UPI Integration',
        description: 'Accept payments instantly via UPI, PhonePe, Google Pay, and Paytm. Auto-reconciliation included.',
        keywords: ['upi gym payment', 'gym billing upi', 'paytm gym software', 'digital payment gym'],
        content: 'Fitexo integrates with all major Indian payment gateways. Generate UPI payment links with one click, send via WhatsApp, and watch payments auto-reconcile in real-time.',
        features: ['All UPI Apps Supported', 'Auto-reconciliation', 'Payment Link Generation', 'Failed Payment Retry']
    },
    'personal-trainer-management-software': {
        title: 'Personal Trainer Management Software',
        description: 'Assign trainers to members, track sessions, manage PT packages, and calculate commissions automatically.',
        keywords: ['personal trainer software', 'pt management', 'trainer scheduling', 'fitness coach app'],
        content: 'Empower your personal trainers with Fitexo. Track individual client progress, manage session bookings, calculate earnings automatically, and provide professional workout plans.',
        features: ['PT Session Tracking', 'Commission Calculator', 'Client Progress Dashboard', 'Workout Plan Builder']
    },
    'gym-analytics-and-reporting': {
        title: 'Gym Analytics & Business Intelligence',
        description: 'Data-driven decisions for gym owners. Revenue trends, member insights, and predictive analytics.',
        keywords: ['gym analytics', 'fitness business intelligence', 'gym reports', 'gym data insights'],
        content: 'Transform your gym data into actionable insights. Fitexo\'s analytics dashboard shows you revenue trends, peak hours, popular services, and member behavior patterns at a glance.',
        features: ['Revenue Analytics', 'Member Retention Reports', 'Peak Hour Analysis', 'Custom Report Builder']
    },
    'multi-branch-gym-management': {
        title: 'Multi-Branch Gym Chain Software',
        description: 'Manage multiple gym locations from one dashboard. Centralized control with local flexibility.',
        keywords: ['multi gym software', 'gym chain management', 'franchise gym software', 'multi location fitness'],
        content: 'Scale your fitness empire with confidence. Fitexo\'s multi-branch module gives you bird\'s-eye view of all locations while allowing individual managers to operate independently.',
        features: ['Centralized Dashboard', 'Cross-location Membership', 'Branch Performance Comparison', 'Role-based Access']
    },
    'gym-lead-management-crm': {
        title: 'Gym Lead Management & CRM',
        description: 'Convert more leads into members. Automated follow-ups, lead scoring, and conversion tracking.',
        keywords: ['gym crm', 'fitness lead management', 'gym sales software', 'member acquisition'],
        content: 'Stop losing leads to poor follow-up. Fitexo\'s CRM captures leads from your website, social media, and walk-ins, then nurtures them with automated WhatsApp sequences until they convert.',
        features: ['Lead Capture Forms', 'WhatsApp Follow-ups', 'Lead Scoring', 'Conversion Analytics']
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
