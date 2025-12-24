import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimateOnScroll } from './AnimateOnScroll';
import { useEffect, useState } from 'react';
import { BlogPost, getBlogPosts } from '@/lib/blog';
import BlogCard from './BlogCard';

const Blog = () => {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getBlogPosts();
      setRecentPosts(allPosts.slice(0, 3));
    };
    fetchPosts();
  }, []);

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
          {recentPosts.map((post, index) => (
            <AnimateOnScroll key={post.slug} delay={index * 100} animation="fade-up">
              {/* We can reuse the BlogCard from components, which is already designed for BlogPost */}
              <BlogCard post={post} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
