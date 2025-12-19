import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { AnimateOnScroll } from './AnimateOnScroll';

const posts = [
  {
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn the patterns and practices that help you build maintainable React applications that scale with your team.',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'React',
    slug: '#',
  },
  {
    title: 'The Art of Writing Clean Code',
    excerpt: 'Exploring principles that make your code more readable, maintainable, and enjoyable to work with.',
    date: '2024-12-08',
    readTime: '6 min read',
    category: 'Best Practices',
    slug: '#',
  },
  {
    title: 'Modern CSS Techniques Every Developer Should Know',
    excerpt: 'A deep dive into CSS Grid, Flexbox, custom properties, and other modern features that simplify layouts.',
    date: '2024-11-30',
    readTime: '10 min read',
    category: 'CSS',
    slug: '#',
  },
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Section header */}
        <AnimateOnScroll animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-primary mb-4">Blog</p>
              <h2 className="heading-lg">
                Thoughts & <span className="gradient-text">learnings</span>
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline group">
              View All Posts <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimateOnScroll>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <AnimateOnScroll key={post.title} delay={index * 100} animation="fade-up">
              <article className="group flex flex-col bg-card rounded-xl border border-border overflow-hidden card-hover hover:border-primary/30 transition-all duration-300">
                {/* Category tag */}
                <div className="px-6 pt-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium gradient-bg text-primary-foreground animate-shimmer bg-[length:200%_100%]">
                    {post.category}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    <a href={post.slug} className="hover:underline decoration-primary/50 underline-offset-4">{post.title}</a>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                
                {/* Meta */}
                <div className="px-6 pb-6 pt-0">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 group-hover:text-foreground transition-colors">
                      <Calendar size={14} />
                      {formatDate(post.date)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 group-hover:text-foreground transition-colors">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
