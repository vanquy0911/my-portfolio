import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Check, Layers, Calendar } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProjectById, projects, type Project } from '@/data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-4">Project not found</h1>
          <Link to="/projects" className="text-primary hover:underline">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const otherProjects = projects.filter(p => p.id !== project.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 right-0 h-[50vh]">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
          </div>
        </div>

        <div className="section-container">
          {/* Back button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to projects
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
              <Layers size={14} />
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Calendar size={16} />
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h1 className="heading-xl max-w-4xl mb-6">{project.title}</h1>

          {/* Description */}
          <p className="body-lg max-w-3xl mb-8">{project.description}</p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink size={18} />
              View Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={18} />
              View Source
            </a>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-secondary border border-border text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16">
        <div className="section-container">
          {/* Main image */}
          <div className="relative rounded-2xl overflow-hidden border border-border mb-4 bg-card">
            <img
              src={project.gallery[activeImage]}
              alt={`${project.title} screenshot ${activeImage + 1}`}
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            {project.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative flex-shrink-0 w-32 md:w-40 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === index
                    ? 'border-primary ring-2 ring-primary/20'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <img
                  src={image}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="pb-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Long description */}
            <div className="lg:col-span-2">
              <h2 className="heading-md mb-6">About This Project</h2>
              <div className="prose prose-lg">
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-foreground/90 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Highlights sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
                <h3 className="font-display font-semibold text-foreground mb-6">Key Features</h3>
                <ul className="space-y-4">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check size={12} className="text-primary" />
                      </span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Projects */}
      <section className="pb-20 border-t border-border pt-16">
        <div className="section-container">
          <div className="flex items-center justify-between mb-12">
            <h2 className="heading-md">More Projects</h2>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all projects
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((proj) => (
              <Link
                key={proj.id}
                to={`/projects/${proj.id}`}
                className="group block overflow-hidden rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary mb-2 block">{proj.category}</span>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{proj.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
