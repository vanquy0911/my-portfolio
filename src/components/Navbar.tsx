import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

type NavLinkItem = {
  href: string
  label: string
  type: 'route' | 'anchor'
}

const navLinks: NavLinkItem[] = [
  { href: '/', label: 'Trang Chủ', type: 'route' },
  { href: '/about', label: 'Giới thiệu', type: 'route' },
  { href: '/projects', label: 'Dự Án', type: 'route' },
  { href: '/certificates', label: 'Chứng Chỉ', type: 'route' },
  { href: '/blog', label: 'Bài Viết', type: 'route' },
  // { href: '/#contact', label: 'Liên Hệ', type: 'anchor' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/80 backdrop-blur-lg border-b border-border'
        : 'bg-transparent'
        }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO */}
          <a
            href="/"
            className="font-display font-semibold text-xl text-foreground hover:text-primary transition-colors"
          >
            ryan<span className="gradient-text">.dev</span>
          </a>

          {/* DESKTOP NAV */}
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.type === 'route' ? (
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg transition-all duration-300 group-hover:w-full" />
                  </a>
                )}
              </li>
            ))}

            <li>
              <ThemeToggle />
            </li>

            <li>
              <a href="/#contact" className="btn-primary text-sm">
                Trò Chuyện
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
