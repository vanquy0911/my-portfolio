import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';
import { useState } from 'react';

const posts = [
  {
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn the patterns and practices that help you build maintainable React applications that scale with your team and grow with your product.',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'React',
    slug: '#',
    featured: true,
  },
  {
    title: 'The Art of Writing Clean Code',
    excerpt: 'Exploring principles that make your code more readable, maintainable, and enjoyable to work with for you and your team.',
    date: '2024-12-08',
    readTime: '6 min read',
    category: 'Best Practices',
    slug: '#',
    featured: false,
  },
  {
    title: 'Modern CSS Techniques Every Developer Should Know',
    excerpt: 'A deep dive into CSS Grid, Flexbox, custom properties, and other modern features that simplify layouts.',
    date: '2024-11-30',
    readTime: '10 min read',
    category: 'CSS',
    slug: '#',
    featured: false,
  },
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

interface BlogCardProps {
  post: typeof posts[0];
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimateOnScroll delay={index * 100} animation="fade-up">
      <article 
        className={`group relative flex flex-col h-full bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden transition-all duration-500 ease-out ${
          isHovered ? 'border-primary/40 shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)]' : ''
        } ${post.featured ? 'md:col-span-2 md:flex-row' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />
        
        {/* Featured image placeholder for featured post */}
        {post.featured && (
          <div className="relative md:w-1/2 h-48 md:h-auto bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen className={`w-16 h-16 text-primary/30 transition-all duration-500 ${isHovered ? 'scale-110 text-primary/50' : ''}`} />
            </div>
            {/* Animated gradient lines */}
            <div className="absolute inset-0 opacity-30">
              <div className={`absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-700 ${isHovered ? 'translate-x-4' : '-translate-x-4'}`} />
              <div className={`absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent transition-transform duration-700 delay-100 ${isHovered ? '-translate-x-4' : 'translate-x-4'}`} />
              <div className={`absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-700 delay-200 ${isHovered ? 'translate-x-4' : '-translate-x-4'}`} />
            </div>
          </div>
        )}
        
        {/* Content */}
        <div className={`relative flex-1 flex flex-col p-6 md:p-8 ${post.featured ? 'md:w-1/2' : ''}`}>
          {/* Category tag */}
          <div className="mb-4">
            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
              isHovered 
                ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]' 
                : 'bg-secondary text-muted-foreground'
            }`}>
              {post.category}
            </span>
          </div>
          
          {/* Title */}
          <h3 className={`text-xl md:text-2xl font-bold text-foreground mb-3 leading-snug transition-colors duration-300 ${
            post.featured ? 'md:text-3xl' : ''
          } ${isHovered ? 'text-primary' : ''}`}>
            <a href={post.slug} className="hover:underline decoration-primary/50 underline-offset-4 decoration-2">
              {post.title}
            </a>
          </h3>
          
          {/* Excerpt */}
          <p className={`text-muted-foreground mb-6 leading-relaxed flex-1 ${post.featured ? 'text-base md:text-lg' : 'text-sm line-clamp-3'}`}>
            {post.excerpt}
          </p>
          
          {/* Meta footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className={`inline-flex items-center gap-1.5 transition-colors duration-300 ${isHovered ? 'text-foreground' : ''}`}>
                <Calendar size={14} className="text-primary/70" />
                {formatDate(post.date)}
              </span>
              <span className={`inline-flex items-center gap-1.5 transition-colors duration-300 ${isHovered ? 'text-foreground' : ''}`}>
                <Clock size={14} className="text-accent/70" />
                {post.readTime}
              </span>
            </div>
            
            {/* Read more arrow */}
            <span className={`inline-flex items-center gap-1 text-sm font-medium text-primary transition-all duration-300 ${
              isHovered ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
            }`}>
              Read <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </article>
    </AnimateOnScroll>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative">
        {/* Section header */}
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Blog</p>
              <h2 className="heading-lg mb-4">
                Thoughts & <span className="gradient-text">Learnings</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sharing insights on development, design, and the journey of building great software.
              </p>
            </div>
            <a 
              href="#" 
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-border/50 bg-card/50 backdrop-blur-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              View All Posts 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </AnimateOnScroll>

        {/* Blog posts grid - featured post spans 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
