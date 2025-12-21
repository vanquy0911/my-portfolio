import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import Hero3DKeyboard from './Hero3DKeyboard';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse opacity-50" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
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
              className="body-lg max-w-xl mb-10 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              I craft elegant digital experiences with clean code and thoughtful design. 
              Specializing in React, TypeScript, and modern web technologies.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4 mb-12 opacity-0 animate-fade-in-up"
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
              className="flex items-center gap-6 opacity-0 animate-fade-in-up"
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
                  className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.label}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right 3D Keyboard */}
          <div 
            className="hidden lg:block h-[500px] opacity-0 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Hero3DKeyboard />
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
