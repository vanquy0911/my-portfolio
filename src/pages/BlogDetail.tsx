import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Twitter, Linkedin, Copy, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPostById, blogPosts, type BlogPost } from '@/data/blogPosts';

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-border z-[60]">
      <div 
        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

const ShareButtons = ({ title, url }: { title: string; url: string }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:text-primary transition-all"
        aria-label="Share on Twitter"
      >
        <Twitter size={18} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:text-primary transition-all"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={18} />
      </a>
      <button
        onClick={copyLink}
        className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:text-primary transition-all"
        aria-label="Copy link"
      >
        {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
      </button>
    </div>
  );
};

const MarkdownContent = ({ content }: { content: string }) => {
  // Simple markdown-like rendering
  const renderContent = () => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let inCodeBlock = false;
    let codeContent: string[] = [];
    let codeLanguage = '';

    lines.forEach((line, index) => {
      // Code block handling
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.slice(3).trim();
          codeContent = [];
        } else {
          inCodeBlock = false;
          elements.push(
            <div key={index} className="my-6 rounded-xl overflow-hidden border border-border">
              <div className="bg-secondary/50 px-4 py-2 text-xs font-mono text-muted-foreground border-b border-border">
                {codeLanguage || 'code'}
              </div>
              <pre className="bg-card p-4 overflow-x-auto">
                <code className="text-sm font-mono text-foreground">{codeContent.join('\n')}</code>
              </pre>
            </div>
          );
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      // Headers
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="text-3xl md:text-4xl font-display font-bold text-foreground mt-12 mb-6">
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-2xl md:text-3xl font-display font-semibold text-foreground mt-10 mb-4">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl md:text-2xl font-display font-semibold text-foreground mt-8 mb-3">
            {line.slice(4)}
          </h3>
        );
      }
      // Lists
      else if (line.match(/^\d+\.\s/)) {
        elements.push(
          <li key={index} className="text-lg text-foreground/90 leading-relaxed ml-6 list-decimal">
            {line.replace(/^\d+\.\s/, '')}
          </li>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={index} className="text-lg text-foreground/90 leading-relaxed ml-6 list-disc">
            {line.slice(2)}
          </li>
        );
      }
      // Regular paragraph
      else if (line.trim()) {
        // Handle inline code
        const processedLine = line.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-secondary text-primary font-mono text-sm">$1</code>');
        // Handle bold
        const withBold = processedLine.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>');
        
        elements.push(
          <p 
            key={index} 
            className="text-lg text-foreground/90 leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: withBold }}
          />
        );
      }
    });

    return elements;
  };

  return <div className="prose-custom">{renderContent()}</div>;
};

const RelatedPosts = ({ currentId, category }: { currentId: string; category: string }) => {
  const related = blogPosts
    .filter(post => post.id !== currentId)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-20 pt-12 border-t border-border">
      <h3 className="text-2xl font-display font-semibold text-foreground mb-8">More Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="group block p-6 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-all"
          >
            <span className="text-xs font-medium text-primary mb-2 block">{post.category}</span>
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
              {post.title}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = id ? getPostById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 right-0 h-[60vh]">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          </div>
        </div>

        <div className="section-container">
          {/* Back button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
              <Tag size={14} />
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Calendar size={16} />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="heading-xl max-w-4xl mb-6">{post.title}</h1>

          {/* Excerpt */}
          <p className="body-lg max-w-3xl mb-8">{post.excerpt}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 rounded-lg text-sm bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <ShareButtons title={post.title} url={currentUrl} />
        </div>
      </section>

      {/* Content */}
      <article className="pb-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <MarkdownContent content={post.content} />
          </div>

          {/* Related Posts */}
          <div className="max-w-5xl mx-auto">
            <RelatedPosts currentId={post.id} category={post.category} />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
