import { SubPageTemplate } from '@/components/landing/SubPageTemplate';

export const metadata = {
    title: 'About Fitexo | Our Story',
};

export default function AboutPage() {
    return (
        <SubPageTemplate
            title="About Us"
            subtitle="The team behind the most powerful gym management software."
        >
            <div className="space-y-12 text-muted-foreground max-w-4xl mx-auto py-12">
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Our Mission</h2>
                    <p className="leading-relaxed text-lg">
                        Fitexo was born with a single mission: to empower gym owners with the technology they need to scale effortlessly and focus on member results.
                    </p>
                </section>
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Innovation</h2>
                    <p className="leading-relaxed text-lg">
                        We continuously push the boundaries of what fitness management software can do, integrating AI and advanced automation.
                    </p>
                </section>
            </div>
        </SubPageTemplate>
    );
}
