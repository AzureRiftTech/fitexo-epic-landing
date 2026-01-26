import { SubPageTemplate } from '@/components/landing/SubPageTemplate';

export const metadata = {
    title: 'Integrations | Connect Your Tools',
};

export default function IntegrationsPage() {
    return (
        <SubPageTemplate
            title="Integrations"
            subtitle="Connect Fitexo with the tools you already use."
        >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
                {['WhatsApp', 'Stripe', 'Google Calendar', 'Zoho CRM', 'Mailchimp', 'QuickBooks'].map((tool) => (
                    <div key={tool} className="bg-secondary/20 p-10 rounded-3xl border border-white/5 flex items-center justify-center text-xl font-bold text-white/50 uppercase tracking-widest hover:text-primary hover:border-primary/30 transition-all cursor-pointer">
                        {tool}
                    </div>
                ))}
            </div>
        </SubPageTemplate>
    );
}
