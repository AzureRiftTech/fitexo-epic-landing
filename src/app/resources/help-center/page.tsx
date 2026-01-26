import { SubPageTemplate } from '@/components/landing/SubPageTemplate';

export const metadata = {
    title: 'Help Center | Need Assistance?',
};

export default function HelpCenterPage() {
    return (
        <SubPageTemplate
            title="Help Center"
            subtitle="Find answers to common questions or reach out to support."
        >
            <div className="space-y-12 text-muted-foreground max-w-4xl mx-auto py-12">
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">FAQ</h2>
                    <div className="space-y-6">
                        <div className="bg-secondary/10 p-6 rounded-xl">
                            <h5 className="text-white font-bold mb-2 uppercase text-sm tracking-widest">How do I start my 14-day trial?</h5>
                            <p>Simply click any "Free Trial" button on our home page to begin.</p>
                        </div>
                    </div>
                </section>
            </div>
        </SubPageTemplate>
    );
}
