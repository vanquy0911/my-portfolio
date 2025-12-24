import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/CursorTrail';
import { activities } from '@/data/activities';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Link } from 'react-router-dom';

const AllActivities = () => {
    return (
        <div className="min-h-screen bg-background">
            <CursorTrail />
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="section-container">
                    <AnimateOnScroll animation="fade-up">
                        <div className="max-w-2xl mb-12">
                            <p className="text-sm font-medium text-primary mb-4">Lifestyle</p>
                            <h1 className="heading-lg mb-6">
                                All <span className="gradient-text">Activities</span>
                            </h1>
                            <p className="text-muted-foreground text-lg">
                                Things I do when I'm not coding.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {activities.map((activity, index) => {
                            const Icon = activity.icon;
                            return (
                                <AnimateOnScroll key={activity.title} delay={index * 100} animation="fade-up">
                                    <Link to={`/activity/${activity.slug}`} className="block h-full">
                                        <div
                                            className="group h-full relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                                            <div className="relative z-10 flex flex-col h-full">
                                                <div className={`inline-flex self-start p-3 rounded-xl bg-gradient-to-br ${activity.gradient} mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>

                                                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                    {activity.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                                                    {activity.description}
                                                </p>

                                                <div className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/80 border border-border text-xs font-medium text-muted-foreground mt-auto">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                                    {activity.stats}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </AnimateOnScroll>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AllActivities;
