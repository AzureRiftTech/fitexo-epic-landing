import { SubPageTemplate } from '@/components/landing/SubPageTemplate';

export const metadata = {
    title: 'Security Protocols | Fitexo',
};

export default function SecurityPage() {
    return (
        <SubPageTemplate
            title="Security"
            subtitle="Enterprise-grade protection for your fitness business."
        >
            <div className="space-y-12 text-muted-foreground max-w-4xl mx-auto py-12">
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Encryption</h2>
                    <p className="leading-relaxed text-lg">
                        All data transmitted through Fitexo is encrypted using industry-standard SSL/TLS protocols.
                    </p>
                </section>
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Infrastructure</h2>
                    <p className="leading-relaxed text-lg">
                        Our systems are hosted on ultra-secure cloud infrastructure with 99.9% uptime and 24/7 monitoring.
                    </p>
                </section>
            </div>
        </SubPageTemplate>
    );
}
