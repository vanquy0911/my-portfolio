import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import personImage from '@/uploads/personal/person.jpg';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
];

const highlights = [
  { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, well-documented code that scales' },
  { icon: Palette, title: 'Design Focus', description: 'Creating intuitive interfaces with attention to detail' },
  { icon: Rocket, title: 'Performance', description: 'Optimizing for speed and best user experience' },
  { icon: Users, title: 'Collaboration', description: 'Working effectively with cross-functional teams' },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section header */}
        <AnimateOnScroll animation="fade-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-primary mb-4">About Me</p>
              <h2 className="heading-lg mb-6">
                Passionate about building <span className="gradient-text">meaningful products</span>
              </h2>
              <p className="body-lg">
                I am an IT student with a strong interest in web development,
                building projects using React.js, Node.js, Express.js, JavaScript, TypeScript,
                and Tailwind CSS. I am looking for an Intern position to gain real-world experience,
                learn from professionals, and grow as a developer.
              </p>
            </div>

            {/* Profile Image */}
            <div className="relative group">
              <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border-2 border-border rotate-3 transition-transform duration-500 group-hover:rotate-0">
                {/* Fallback or real image */}
                <img
                  src={personImage}
                  alt="Ryan Quý"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 top-4 right-4 w-full h-full border-2 border-primary/20 rounded-2xl hidden md:block" />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <AnimateOnScroll key={item.title} delay={index * 100} animation="scale">
              <div className="p-6 rounded-xl bg-card border border-border card-hover group">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:animate-bounce-soft">
                  <item.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Skills */}
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
            <h3 className="heading-md mb-8">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup, groupIndex) => (
                <AnimateOnScroll key={skillGroup.category} delay={groupIndex * 150} animation="slide-left">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                          style={{ animationDelay: `${skillIndex * 50}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default About;
