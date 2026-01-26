import { SubPageTemplate } from '@/components/landing/SubPageTemplate';

export const metadata = {
    title: 'GDPR Compliance | Fitexo',
};

export default function GDPRPage() {
    return (
        <SubPageTemplate
            title="GDPR Compliance"
            subtitle="Ensuring global data protection standards."
        >
            <div className="space-y-12 text-muted-foreground max-w-4xl mx-auto py-12">
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Our Commitment</h2>
                    <p className="leading-relaxed text-lg">
                        Fitexo is fully committed to compliance with the General Data Protection Regulation (GDPR).
                    </p>
                </section>
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Your Rights</h2>
                    <p className="leading-relaxed text-lg">
                        Users have the right to access, rectify, and delete their data as governed by GDPR guidelines.
                    </p>
                </section>
            </div>
        </SubPageTemplate>
    );
}
