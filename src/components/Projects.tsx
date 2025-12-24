import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimateOnScroll } from './AnimateOnScroll';
import { getProjects, Project } from '@/lib/projects';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        // Sort by featured first, then maybe random or date if available.
        // For now just taking top ones or all.
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return null; // Or a loading spinner
  }

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding scroll-mt-28">
      <div className="section-container">
        {/* Section header */}
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-primary mb-4">Dự Án Tiêu Biểu</p>
              <h2 className="heading-lg">
                Các dự án tôi đã <span className="gradient-text">thực hiện</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="btn-secondary group"
            >
              Xem Tất Cả
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </AnimateOnScroll>

        {/* Featured projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {featuredProjects.map((project, index) => (
            <AnimateOnScroll key={project.title} delay={index * 150} animation="scale">
              <Link
                to={`/project/${project.slug}`}
                className="group relative block h-full bg-card rounded-2xl border border-border overflow-hidden card-hover"
              >
                {/* Project image */}
                <div className="aspect-video overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-secondary/30 flex items-center justify-center text-muted-foreground">
                      No Image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project info */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

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
                    <span
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={16} /> Xem Chi Tiết
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <AnimateOnScroll key={project.title} delay={index * 100} animation="fade-up">
                <Link to={`/project/${project.slug}`} className="block group p-6 bg-card rounded-xl border border-border card-hover hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all">
                        <Github size={18} />
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
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
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
