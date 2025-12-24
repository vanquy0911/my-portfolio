import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowUpRight } from 'lucide-react';
import { BlogPost } from '@/lib/blog';

interface BlogCardProps {
    post: BlogPost;
    featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
    return (
        <Link
            to={`/blog/${post.slug}`}
            className={`group block h-full ${featured ? 'md:col-span-2' : ''}`}
        >
            <article className="h-full flex flex-col bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                {/* Image Container */}
                <div className={`relative overflow-hidden ${featured ? 'aspect-[2/1]' : 'aspect-video'}`}>
                    {post.cover ? (
                        <img
                            src={post.cover}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-secondary/30 flex items-center justify-center text-muted-foreground">
                            No Cover Image
                        </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60" />

                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-md border border-border/50 text-foreground">
                            {post.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </time>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock size={14} />
                            <span>{post.readingTime}</span>
                        </div>
                    </div>

                    <h3 className={`font-display font-bold leading-tight mb-3 group-hover:text-primary transition-colors ${featured ? 'text-2xl' : 'text-xl'}`}>
                        {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1">
                        {post.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">
                                    <Tag size={10} /> {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            Read Post <ArrowUpRight size={16} />
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default BlogCard;
