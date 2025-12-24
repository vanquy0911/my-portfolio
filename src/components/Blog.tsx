import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimateOnScroll } from './AnimateOnScroll';

const posts = [
  {
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn the patterns and practices that help you build maintainable React applications that scale with your team and grow with your product.',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'React',
    slug: '#',
  },
  {
    title: 'The Art of Writing Clean Code',
    excerpt: 'Exploring principles that make your code more readable, maintainable, and enjoyable to work with for you and your team.',
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
  return (
    <AnimateOnScroll delay={index * 100} animation="fade-up">
      <article className="group p-6 bg-card rounded-xl border border-border card-hover hover:border-primary/30 transition-all duration-300">
        {/* Category tag */}
        <div className="mb-4">
          <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground">
            {post.category}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          <a href={post.slug} className="hover:underline">
            {post.title}
          </a>
        </h3>
        
        {/* Excerpt */}
        <p className="text-sm text-muted-foreground mb-4">
          {post.excerpt}
        </p>
        
        {/* Meta footer */}
        <div className="flex items-center gap-4 pt-4 border-t border-border text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} />
            {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={14} />
            {post.readTime}
          </span>
        </div>
      </article>
    </AnimateOnScroll>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="section-padding">
      
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
            <Link 
              to="/blog" 
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-border/50 bg-card/50 backdrop-blur-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              View All Posts 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </AnimateOnScroll>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
