import { Code2, Palette, Rocket, Users } from 'lucide-react';

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
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary mb-4">About Me</p>
          <h2 className="heading-lg mb-6">
            Passionate about building <span className="gradient-text">meaningful products</span>
          </h2>
          <p className="body-lg">
            With 5+ years of experience in software development, I specialize in creating 
            full-stack applications that combine beautiful design with robust functionality. 
            I believe in writing code that tells a story.
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <item.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
          <h3 className="heading-md mb-8">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h4 className="font-semibold text-foreground mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
