import { Code2, Coffee, Gamepad2, Music, BookOpen, Plane, Camera, Dumbbell, ArrowRight } from 'lucide-react';
import { AnimateOnScroll, StaggerChildren } from './AnimateOnScroll';

import { activities } from '@/data/activities';

const Activities = () => {
  return (
    <section id="activities" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="section-container relative z-10">
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground mb-4">
                Beyond Code
              </span>
              <h2 className="heading-lg mb-4">
                My <span className="gradient-text">Activities</span>
              </h2>
              <p className="body-lg max-w-2xl">
                When I'm not coding, here's what keeps me inspired and creative
              </p>
            </div>
            <a
              href="/activities"
              className="btn-secondary group"
            >
              View All Activities
              <ArrowRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <AnimateOnScroll key={activity.title} delay={index * 100} animation="fade-up">
              <ActivityCard activity={activity} index={index} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ActivityCardProps {
  activity: typeof activities[0];
  index: number;
}

const ActivityCard = ({ activity, index }: ActivityCardProps) => {
  const Icon = activity.icon;

  return (
    <div
      className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-500 overflow-hidden"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

      {/* Glow effect */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${activity.gradient} mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {activity.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {activity.description}
        </p>

        {/* Stats badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/80 border border-border text-xs font-medium text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {activity.stats}
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default Activities;
