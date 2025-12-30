import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/CursorTrail';
import { getProjects, Project } from '@/lib/projects';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AllProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProjects();
            setProjects(data);
        };
        fetchProjects();
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <CursorTrail />
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="section-container">
                    <AnimateOnScroll animation="fade-up">
                        <div className="max-w-2xl mb-12">
                            <p className="text-sm font-medium text-primary mb-4">Hồ Sơ Năng Lực</p>
                            <h1 className="heading-lg mb-6">
                                Tất Cả <span className="gradient-text">Dự Án</span>
                            </h1>
                            <p className="text-muted-foreground text-lg">
                                Bộ sưu tập các dự án cá nhân và thử nghiệm của tôi.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <AnimateOnScroll key={project.title} delay={index * 100} animation="fade-up">
                                <article className="group h-full flex flex-col bg-card rounded-xl border border-border card-hover hover:border-primary/30 transition-all duration-300">
                                    <div className="aspect-video overflow-hidden rounded-t-xl relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                                                    <Link to={`/project/${project.slug}`} className="hover:underline">
                                                        {project.title}
                                                    </Link>
                                                </h3>
                                                {project.role && <p className="text-xs text-primary font-medium">{project.role}</p>}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all"
                                                    aria-label="GitHub"
                                                >
                                                    <Github size={18} />
                                                </a>
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all"
                                                        aria-label="Live demo"
                                                    >
                                                        <ArrowUpRight size={18} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 rounded text-xs text-muted-foreground bg-secondary/50"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AllProjects;
