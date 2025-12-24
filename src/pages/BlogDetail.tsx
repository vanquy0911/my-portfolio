import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/CursorTrail';
import MarkdownRenderer from '@/components/ui/markdown-renderer';
import TableOfContents from '@/components/ui/table-of-contents';
import { getPostBySlug, BlogPost } from '@/lib/blog';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import NotFound from './NotFound';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      setIsLoading(true);
      try {
        const foundPost = await getPostBySlug(slug);
        setPost(foundPost || null);
      } catch (error) {
        console.error("Error fetching post", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-[60] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <CursorTrail />
      <Navbar />

      <main className="pt-24 pb-16">
        {/* Header / Hero */}
        <section className="relative pb-12 overflow-hidden">
          {/* Background decorative */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-7xl h-[500px] opacity-20">
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
          </div>

          <div className="section-container">
            <div className="mb-8">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft size={16} /> Back to Blog
              </Link>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  {post.category}
                </span>
              </div>

              <h1 className="heading-xl mb-6">{post.title}</h1>

              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-xs text-secondary-foreground">
                    {post.author.charAt(0)}
                  </div>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={16} />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        {post.cover && (
          <div className="section-container mb-16">
            <div className="aspect-[2/1] md:aspect-[2.5/1] overflow-hidden rounded-2xl border border-border bg-card shadow-lg relative max-w-5xl mx-auto">
              <img
                src={post.cover}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>
          </div>
        )}

        <div className="section-container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 lg:col-start-2 xl:col-span-8">
              <MarkdownRenderer content={post.content} />

              {/* Tags Footer */}
              <div className="mt-12 pt-8 border-t border-border">
                <h4 className="text-sm font-semibold mb-4 text-muted-foreground">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">
                      # {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar (TOC) */}
            <aside className="hidden lg:block lg:col-span-3 lg:col-start-10">
              <TableOfContents content={post.content} />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
