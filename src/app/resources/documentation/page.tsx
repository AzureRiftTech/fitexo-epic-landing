import { SubPageTemplate } from '@/components/landing/SubPageTemplate';

export const metadata = {
    title: 'Documentation | How to use Fitexo',
};

export default function DocumentationPage() {
    return (
        <SubPageTemplate
            title="Documentation"
            subtitle="Complete guide to mastering the Fitexo ecosystem."
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                {['Quick Start', 'Member CSV Import', 'Setting up Packages', 'WhatsApp Automation', 'Biometric Setup', 'Financial Reporting'].map((topic) => (
                    <div key={topic} className="bg-secondary/20 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all cursor-pointer">
                        <h4 className="text-white font-bold mb-4">{topic}</h4>
                        <p className="text-sm text-muted-foreground">Step-by-step instructions for {topic.toLowerCase()}.</p>
                    </div>
                ))}
            </div>
        </SubPageTemplate>
    );
}
