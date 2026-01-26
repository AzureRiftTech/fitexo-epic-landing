import { SubPageTemplate } from '@/components/landing/SubPageTemplate';

export const metadata = {
    title: 'Privacy Policy | Fitexo',
    description: 'Learn how Fitexo handles and protects your data.',
};

export default function PrivacyPage() {
    return (
        <SubPageTemplate
            title="Privacy Policy"
            subtitle="Your data security and privacy are our top priorities."
        >
            <div className="space-y-12 text-muted-foreground max-w-4xl mx-auto py-12">
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Introduction</h2>
                    <p className="leading-relaxed text-lg">
                        At Fitexo, we take your privacy seriously. This policy describes how we collect, use, and process your personal data when you use our platform and services.
                    </p>
                </section>
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Data Collection</h2>
                    <p className="leading-relaxed text-lg">
                        We collect information that you provide directly to us, such as when you create an account, update your profile, or communicate with our support team.
                    </p>
                </section>
                <section>
                    <h2 className="text-3xl text-white mb-6 uppercase tracking-tight">Security</h2>
                    <p className="leading-relaxed text-lg">
                        We implement high-end encryption and security protocols to ensure that your gym and member information remains confidential and protected at all times.
                    </p>
                </section>
            </div>
        </SubPageTemplate>
    );
}
