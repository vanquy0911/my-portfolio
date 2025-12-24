import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects, getAllCategories, type Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('');
  };

  return (
    <Link 
      to={`/projects/${project.id}`}
      className={`group block ${featured ? 'md:col-span-2' : ''}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform }}
        className={`relative h-full overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.25)] ${
          featured ? '' : ''
        }`}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        </div>

        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? 'aspect-[2/1]' : 'aspect-video'}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border/50">
              <Layers size={12} />
              {project.category}
            </span>
          </div>

          {/* Links overlay */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.githubUrl}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              aria-label="View on GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={project.liveUrl}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              aria-label="View live demo"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className={`relative p-6 ${featured ? 'md:p-8' : ''}`}>
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className={`font-display font-semibold text-foreground group-hover:text-primary transition-colors ${
              featured ? 'text-2xl' : 'text-xl'
            }`}>
              {project.title}
            </h3>
            <span className="text-sm text-muted-foreground">{project.year}</span>
          </div>

          <p className={`text-muted-foreground mb-4 line-clamp-2 ${featured ? 'text-base' : 'text-sm'}`}>
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, featured ? 6 : 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary/80 text-secondary-foreground border border-border/50 transition-all group-hover:border-primary/30"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > (featured ? 6 : 4) && (
              <span className="px-2.5 py-1 text-xs text-muted-foreground">
                +{project.tags.length - (featured ? 6 : 4)} more
              </span>
            )}
          </div>

          {/* View project indicator */}
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            View project
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProjectsListing = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllCategories();

  const filteredProjects = selectedCategory
    ? projects.filter(p => p.category === selectedCategory)
    : projects;

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="section-container text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Portfolio</p>
          <h1 className="heading-xl mb-6">
            Selected <span className="gradient-text">Projects</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            A showcase of my work in web development, mobile apps, and design systems—each crafted with attention to detail and user experience.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !selectedCategory
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
              }`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 md:pb-28">
        <div className="section-container">
          {/* Featured projects */}
          {featuredProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          )}

          {/* Regular projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsListing;
