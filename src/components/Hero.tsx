import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 opacity-0 animate-fade-in-up hover:border-primary/50 transition-colors cursor-default"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
          </div>

          {/* Main heading */}
          <h1
            className="heading-xl mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Hi, I'm <span className="gradient-text bg-[length:200%_auto] animate-gradient-shift">Alex Chen</span>
            <br />
            <span className="text-muted-foreground">Software Developer</span>
          </h1>

          {/* Description */}
          <p
            className="body-lg max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            I craft elegant digital experiences with clean code and thoughtful design. 
            Specializing in React, TypeScript, and modern web technologies.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <a href="#projects" className="btn-primary group relative overflow-hidden">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a href="#contact" className="btn-secondary group">
              <span>Get In Touch</span>
              <span className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-lg transition-all duration-300" />
            </a>
          </div>

          {/* Social links */}
          <div
            className="flex items-center justify-center gap-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
                aria-label={social.label}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <span className="text-xs font-medium">Scroll</span>
            <ArrowDown size={16} className="animate-bounce group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
