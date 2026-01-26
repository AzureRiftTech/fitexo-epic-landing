import { SubPageTemplate } from '@/components/landing/SubPageTemplate';

export const metadata = {
    title: 'Blog | Fitexo Insights',
};

export default function BlogPage() {
    return (
        <SubPageTemplate
            title="Our Blog"
            subtitle="Insights, tips, and trends from the fitness industry."
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-secondary/20 p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group">
                        <div className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">January 26, 2026</div>
                        <h3 className="text-2xl text-white mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">How to Increase Retention by 40%</h3>
                        <p className="text-muted-foreground mb-8">Discover the specific strategies top gym owners use to keep members engaged long-term.</p>
                        <span className="text-white text-xs font-bold uppercase tracking-widest border-b border-primary/40 pb-1">Read More</span>
                    </div>
                ))}
            </div>
        </SubPageTemplate>
    );
}
