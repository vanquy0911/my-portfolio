import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/CursorTrail';
import { getProjectBySlug, Project } from '@/lib/projects';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import NotFound from './NotFound';
import { useEffect, useState } from 'react';
import MarkdownRenderer from '@/components/ui/markdown-renderer';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) return;
      const data = await getProjectBySlug(slug);
      setProject(data || null);
      setLoading(false);
    }
    fetchProject();
  }, [slug]);

  if (loading) return <div>Đang tải...</div>; // Ideally a skeleton loader

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <CursorTrail />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="section-container">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} /> Trở về Dự Án
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="aspect-video overflow-hidden rounded-2xl border border-border mb-8">
                {project.image && <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 btn-secondary justify-center"
                >
                  GitHub <Github size={18} />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 btn-primary justify-center"
                  >
                    Xem Demo <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <h1 className="heading-lg">{project.title}</h1>
                {project.role && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                    {project.role}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Giới thiệu về dự án</h3>
                <div className="text-muted-foreground">
                  {/* Render the markdown content */}
                  <MarkdownRenderer content={project.content} />
                </div>
                <div className="p-4 bg-secondary/30 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">
                    Trạng thái dự án: {project.featured ? 'Nổi bật' : 'Hoàn thành'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
