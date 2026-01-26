import { SubPageTemplate } from '@/components/landing/SubPageTemplate';

export const metadata = {
    title: 'Cloud API | Build on Fitexo',
};

export default function APIPage() {
    return (
        <SubPageTemplate
            title="Messaging API"
            subtitle="Robust GraphQL and REST endpoints for custom integrations."
        >
            <div className="space-y-12 text-muted-foreground max-w-4xl mx-auto py-12">
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Cloud Messaging API</h2>
                    <p className="leading-relaxed text-lg mb-8">
                        Our Cloud Messaging API endpoint allows you to send automated WhatsApp and SMS notifications directly from your custom workflows.
                    </p>
                    <div className="bg-black/50 p-8 rounded-2xl font-mono text-sm border border-white/5">
                        <span className="text-primary">POST</span> https://api.fitexo.in/v1/messages
                    </div>
                </section>
            </div>
        </SubPageTemplate>
    );
}
