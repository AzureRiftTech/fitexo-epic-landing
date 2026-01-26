import { SubPageTemplate } from '@/components/landing/SubPageTemplate';
import { notFound } from 'next/navigation';

interface Solution {
    title: string;
    description: string;
    keywords: string[];
    content: string;
}

const solutions: Record<string, Solution> = {
    'gym-management-software-midnapore': {
        title: 'Gym Management in Midnapore',
        description: 'Leading gym management software for fitness centers in Midnapore, West Bengal.',
        keywords: ['midnapore gym', 'fitness software midnapore', 'gym billing midnapore'],
        content: 'Fitexo provides specialized management tools tailored for the growing fitness community in Midnapore. Our local-first approach ensures that small to large boxes can manage their memberships effectively.'
    },
    'automated-billing-for-fitness-centers': {
        title: 'Automated Gym Billing',
        description: 'Stop chasing payments. Our automated billing system handles everything for you.',
        keywords: ['gym billing', 'payment automation', 'fitness payment processing'],
        content: 'With Fitexo, automation is at the core. Our system tracks every renewal date, sends WhatsApp reminders, and processes payments seamlessly, allowing you to focus on training, not admin.'
    },
    'whatsapp-integrated-gym-software': {
        title: 'WhatsApp Integrated Management',
        description: 'Engage your members where they are. Full WhatsApp integration for gym notifications.',
        keywords: ['whatsapp gym alerts', 'member engagement', 'fitness notifications'],
        content: 'Engagement is key to retention. Fitexo integrates directly with WhatsApp to send automated attendance alerts, renewal reminders, and motivational messages to your members instantly.'
    }
};

export async function generateStaticParams() {
    return Object.keys(solutions).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const solution = solutions[params.slug];
    if (!solution) return {};

    return {
        title: solution.title,
        description: solution.description,
        keywords: solution.keywords
    };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
    const solution = solutions[params.slug];

    if (!solution) {
        notFound();
    }

    return (
        <SubPageTemplate
            title={solution.title}
            subtitle={solution.description}
        >
            <div className="max-w-4xl mx-auto py-12 text-muted-foreground leading-relaxed text-xl">
                <p>{solution.content}</p>
                <div className="mt-12 p-8 bg-secondary/20 rounded-3xl border border-white/5">
                    <h4 className="text-white font-bold mb-4 uppercase tracking-widest">Why choose Fitexo?</h4>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span>Real-time dashboard analytics</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span>Local support from AzureRift Technologies</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span>Scalable architecture for multiple branches</span>
                        </li>
                    </ul>
                </div>
            </div>
        </SubPageTemplate>
    );
}
