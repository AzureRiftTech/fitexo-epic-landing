import { SubPageTemplate } from '@/components/landing/SubPageTemplate';

export const metadata = {
    title: 'Webinars | Master Your Fitness Business',
};

export default function WebinarsPage() {
    return (
        <SubPageTemplate
            title="Webinars"
            subtitle="Exclusive training sessions with fitness business experts."
        >
            <div className="space-y-12 text-muted-foreground max-w-4xl mx-auto py-12">
                <div className="bg-secondary/20 p-12 rounded-[2.5rem] border border-white/5 text-center">
                    <h3 className="text-3xl text-white mb-6 uppercase tracking-tight">Next Live Session</h3>
                    <p className="mb-4">"Scaling to Multiple Gym Locations: A Step-by-Step Guide"</p>
                    <div className="text-primary font-bold">February 15, 2026 • 2:00 PM EST</div>
                </div>
            </div>
        </SubPageTemplate>
    );
}
