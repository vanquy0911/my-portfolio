import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // Check if effectively dark (either explicit 'dark' or system dark)
  // For the icon logic, we can simplify or just check theme === 'dark'
  // But since the provider sets the class on the html element, checking theme state is enough
  // assuming 'system' resolves to one or the other.
  // Ideally useTheme would expose resolvedTheme, but simplistic check:
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl bg-secondary/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative w-5 h-5">
        <Sun
          className={`absolute inset-0 text-amber-500 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
            }`}
          size={20}
        />
        <Moon
          className={`absolute inset-0 text-primary transition-all duration-300 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
            }`}
          size={20}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
