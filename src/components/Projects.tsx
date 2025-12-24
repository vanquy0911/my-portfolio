import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimateOnScroll } from './AnimateOnScroll';

const projects = [
  {
    title: 'Flowboard',
    description: 'A collaborative project management tool with real-time updates and intuitive drag-and-drop interface.',
    tags: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'CryptoTrack',
    description: 'Real-time cryptocurrency portfolio tracker with price alerts and performance analytics.',
    tags: ['Next.js', 'TailwindCSS', 'Chart.js', 'REST API'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'DevNotes',
    description: 'Markdown-based note-taking app for developers with code syntax highlighting and cloud sync.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=500&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'WeatherScope',
    description: 'Beautiful weather application with location-based forecasts and interactive weather maps.',
    tags: ['React Native', 'TypeScript', 'Weather API'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        {/* Section header */}
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-primary mb-4">Selected Work</p>
              <h2 className="heading-lg">
                Projects I've <span className="gradient-text">crafted</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="btn-secondary group"
            >
              View All Projects
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </AnimateOnScroll>

        {/* Featured projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <AnimateOnScroll key={project.title} delay={index * 150} animation="scale">
              <article className="group relative bg-card rounded-2xl border border-border overflow-hidden card-hover">
                {/* Project image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Project info */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground transition-all duration-300 hover:bg-primary/10"
                        style={{ transitionDelay: `${tagIndex * 30}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline group/link"
                    >
                      Live Demo <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <AnimateOnScroll key={project.title} delay={index * 100} animation="fade-up">
              <article className="group p-6 bg-card rounded-xl border border-border card-hover hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all"
                      aria-label="Live demo"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
