import { SubPageTemplate } from '@/components/landing/SubPageTemplate';

export const metadata = {
    title: 'Press & Media | Fitexo',
};

export default function PressPage() {
    return (
        <SubPageTemplate
            title="Press"
            subtitle="The latest news and media resources from Fitexo."
        >
            <div className="space-y-12 text-muted-foreground max-w-4xl mx-auto py-12">
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Recent Press Releases</h2>
                    <div className="space-y-8">
                        {[1, 2].map((i) => (
                            <div key={i} className="border-l-2 border-primary/20 pl-8 py-2 hover:border-primary transition-all cursor-pointer">
                                <div className="text-xs font-bold text-primary mb-2">NEWS</div>
                                <h4 className="text-xl text-white mb-2">Fitexo Reaches 10,000 Active Gym Users Worldwide</h4>
                                <p className="text-sm">Fitexo continues its exponential growth in the APAC region.</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </SubPageTemplate>
    );
}
