import { SubPageTemplate } from '@/components/landing/SubPageTemplate';

export const metadata = {
    title: 'Community | Join the Gym Owner Network',
};

export default function CommunityPage() {
    return (
        <SubPageTemplate
            title="Community"
            subtitle="Connect with over 10,000 gym owners worldwide."
        >
            <div className="text-center py-24 space-y-8">
                <h3 className="text-4xl text-white font-normal uppercase tracking-tight">Access Restricted to Partners</h3>
                <p className="text-muted-foreground text-xl max-w-xl mx-auto">
                    Our exclusive community forum is currently available only to active Fitexo subscribers.
                </p>
            </div>
        </SubPageTemplate>
    );
}
