import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/CursorTrail';
import { activities } from '@/data/activities';
import { ArrowLeft } from 'lucide-react';
import NotFound from './NotFound';

const ActivityDetail = () => {
    const { slug } = useParams();
    const activity = activities.find(a => a.slug === slug);

    if (!activity) {
        return <NotFound />;
    }

    const Icon = activity.icon;

    return (
        <div className="min-h-screen bg-background">
            <CursorTrail />
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="section-container">
                    <Link to="/activities" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft size={16} /> Back to Activities
                    </Link>

                    <div className="max-w-2xl mx-auto">
                        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${activity.gradient} mb-6`}>
                            <Icon className="w-12 h-12 text-white" />
                        </div>

                        <h1 className="heading-lg mb-4">{activity.title}</h1>

                        <div className="flex items-center gap-4 mb-8">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                {activity.stats}
                            </span>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-xl text-muted-foreground mb-8">
                                {activity.description}
                            </p>

                            <div className="p-6 bg-card border border-border rounded-xl">
                                <h3 className="text-lg font-semibold mb-4">Activity Details</h3>
                                <p className="text-muted-foreground">
                                    More detailed information about {activity.title} will be available here. This includes specific achievements, timeline, and gallery of related media.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ActivityDetail;
