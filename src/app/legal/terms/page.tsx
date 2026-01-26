import { SubPageTemplate } from '@/components/landing/SubPageTemplate';

export const metadata = {
    title: 'Terms of Service | Fitexo',
};

export default function TermsPage() {
    return (
        <SubPageTemplate
            title="Terms of Service"
            subtitle="The rules and guidelines for using the Fitexo platform."
        >
            <div className="space-y-12 text-muted-foreground max-w-4xl mx-auto py-12">
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Agreement</h2>
                    <p className="leading-relaxed text-lg">
                        By accessing and using Fitexo, you agree to comply with our service terms and conditions.
                    </p>
                </section>
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Usage Rights</h2>
                    <p className="leading-relaxed text-lg">
                        Fitexo grants you a non-exclusive license to use the management tools for your fitness business operations.
                    </p>
                </section>
            </div>
        </SubPageTemplate>
    );
}
