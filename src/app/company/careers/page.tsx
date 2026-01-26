import { SubPageTemplate } from '@/components/landing/SubPageTemplate';

export const metadata = {
    title: 'Careers | Join the Fitexo Team',
};

export default function CareersPage() {
    return (
        <SubPageTemplate
            title="Careers"
            subtitle="Help us build the future of fitness technology."
        >
            <div className="space-y-12 text-muted-foreground max-w-4xl mx-auto py-12">
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Work With Us</h2>
                    <p className="leading-relaxed text-lg">
                        We are always looking for passionate engineers, designers, and fitness enthusiasts to join our remote-first team.
                    </p>
                </section>
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Open Positions</h2>
                    <p className="leading-relaxed text-lg">
                        Check back soon for new opportunities in Product Development and Customer Success.
                    </p>
                </section>
            </div>
        </SubPageTemplate>
    );
}
