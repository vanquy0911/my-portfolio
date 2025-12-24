import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="font-display font-semibold text-lg text-foreground">
              ryan<span className="gradient-text">.dev</span>
            </a>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Ryan Quy. Made with <Heart size={14} className="text-destructive" />
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Giới Thiệu
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dự Án
            </a>
            <a href="/certificates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Chứng Chỉ
            </a>
            <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Bài Viết
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Liên Hệ
            </a>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/vanquy0911', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/v%C4%83n-qu%C3%BD-03b9533a2/', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
