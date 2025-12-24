export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn the patterns and practices that help you build maintainable React applications that scale with your team and grow with your product.',
    content: `
# Building Scalable React Applications with TypeScript

When building large-scale React applications, the decisions you make early on can have lasting effects on your codebase. TypeScript provides the foundation for building maintainable, self-documenting code that scales with your team.

## Why TypeScript?

TypeScript adds static typing to JavaScript, catching errors at compile time rather than runtime. This is especially valuable in large codebases where the ripple effects of changes can be hard to track.

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

const fetchUser = async (id: string): Promise<User> => {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
};
\`\`\`

## Component Architecture

A well-structured component hierarchy is essential. Follow these principles:

1. **Single Responsibility**: Each component should do one thing well
2. **Composition over Inheritance**: Build complex UIs by composing simple components
3. **Prop Drilling Prevention**: Use context or state management for deeply nested data

\`\`\`tsx
// Good: Focused, single-purpose component
const UserAvatar = ({ user, size = 'md' }: UserAvatarProps) => {
  return (
    <img 
      src={user.avatarUrl} 
      alt={user.name}
      className={cn('rounded-full', sizeClasses[size])}
    />
  );
};
\`\`\`

## State Management Patterns

For scalable applications, consider these patterns:

- **Local state** for UI-specific data
- **Context** for theme, auth, and app-wide settings
- **Server state** with React Query for API data
- **URL state** for shareable/bookmarkable views

## Conclusion

Building scalable React applications requires intentional architecture decisions. TypeScript, proper component structure, and smart state management form the foundation of maintainable codebases.
    `,
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'React',
    tags: ['React', 'TypeScript', 'Architecture', 'Best Practices'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=630&fit=crop',
    featured: true,
  },
  {
    id: 'art-of-clean-code',
    title: 'The Art of Writing Clean Code',
    excerpt: 'Exploring principles that make your code more readable, maintainable, and enjoyable to work with for you and your team.',
    content: `
# The Art of Writing Clean Code

Clean code is not just about making things work—it's about making things work beautifully. Code is read far more often than it's written, so investing in readability pays dividends.

## Naming Things

The hardest problem in computer science is naming things. Good names tell a story:

\`\`\`javascript
// Bad
const d = new Date();
const fn = (u) => u.filter(x => x.a);

// Good
const currentDate = new Date();
const getActiveUsers = (users) => users.filter(user => user.isActive);
\`\`\`

## Functions Should Do One Thing

A function should do one thing, do it well, and do it only. If you find yourself using "and" to describe what a function does, it's doing too much.

\`\`\`javascript
// Bad: Does multiple things
function processUserData(user) {
  validateUser(user);
  saveToDatabase(user);
  sendWelcomeEmail(user);
  logAnalytics(user);
}

// Good: Single responsibility
function saveUser(user) {
  return database.save(user);
}
\`\`\`

## Comments: The Good and Bad

Good comments explain *why*, not *what*. The code itself should explain what it does.

\`\`\`javascript
// Bad: Explains what (the code already tells us this)
// Increment counter by 1
counter += 1;

// Good: Explains why
// Using += 1 instead of ++ for consistency with team style guide
counter += 1;
\`\`\`

## The Boy Scout Rule

Leave the code better than you found it. Small improvements add up over time.
    `,
    date: '2024-12-08',
    readTime: '6 min read',
    category: 'Best Practices',
    tags: ['Clean Code', 'Best Practices', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop',
    featured: true,
  },
  {
    id: 'modern-css-techniques',
    title: 'Modern CSS Techniques Every Developer Should Know',
    excerpt: 'A deep dive into CSS Grid, Flexbox, custom properties, and other modern features that simplify layouts.',
    content: `
# Modern CSS Techniques Every Developer Should Know

CSS has evolved dramatically. Features that once required JavaScript or complex hacks are now native to the language.

## CSS Grid: Two-Dimensional Layouts

Grid is perfect for complex, two-dimensional layouts:

\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr 300px;
  grid-template-rows: auto 1fr auto;
  gap: 1.5rem;
  min-height: 100vh;
}

.sidebar { grid-row: 1 / -1; }
.main { grid-column: 2; }
.aside { grid-row: 1 / -1; }
\`\`\`

## Custom Properties (CSS Variables)

Design tokens that cascade and can be updated dynamically:

\`\`\`css
:root {
  --color-primary: hsl(239 84% 67%);
  --color-accent: hsl(187 92% 45%);
  --spacing-unit: 0.25rem;
}

.button {
  background: var(--color-primary);
  padding: calc(var(--spacing-unit) * 4);
}

.dark .button {
  --color-primary: hsl(239 84% 75%);
}
\`\`\`

## Container Queries

Style based on container size, not viewport:

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    gap: 1rem;
  }
}
\`\`\`

## The :has() Selector

Finally, a parent selector!

\`\`\`css
/* Style form when it has invalid inputs */
form:has(:invalid) {
  border-color: red;
}

/* Card with image gets different layout */
.card:has(img) {
  grid-template-rows: 200px 1fr;
}
\`\`\`
    `,
    date: '2024-11-30',
    readTime: '10 min read',
    category: 'CSS',
    tags: ['CSS', 'Grid', 'Flexbox', 'Frontend'],
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=630&fit=crop',
    featured: false,
  },
  {
    id: 'api-design-principles',
    title: 'RESTful API Design Principles',
    excerpt: 'Best practices for designing clean, intuitive, and developer-friendly REST APIs that stand the test of time.',
    content: `
# RESTful API Design Principles

A well-designed API is a joy to work with. Here are the principles that guide great API design.

## Use Nouns, Not Verbs

Resources should be nouns. HTTP methods provide the verbs:

\`\`\`
GET    /users          # List users
POST   /users          # Create user
GET    /users/:id      # Get user
PUT    /users/:id      # Update user
DELETE /users/:id      # Delete user
\`\`\`

## Consistent Response Structure

Always return consistent response shapes:

\`\`\`json
{
  "data": { ... },
  "meta": {
    "page": 1,
    "total": 100
  },
  "errors": null
}
\`\`\`

## Versioning

Plan for change from the start:

\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

## Error Handling

Provide actionable error messages:

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "field": "email"
  }
}
\`\`\`
    `,
    date: '2024-11-20',
    readTime: '7 min read',
    category: 'Backend',
    tags: ['API', 'REST', 'Backend', 'Best Practices'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop',
    featured: false,
  },
  {
    id: 'testing-strategies',
    title: 'Frontend Testing Strategies That Actually Work',
    excerpt: 'A practical guide to testing React applications with confidence, covering unit, integration, and e2e testing.',
    content: `
# Frontend Testing Strategies That Actually Work

Testing should give you confidence, not slow you down. Here's how to build a testing strategy that works.

## The Testing Trophy

Focus on integration tests—they give the best ROI:

1. **Static Analysis**: TypeScript, ESLint
2. **Unit Tests**: Pure functions, utilities
3. **Integration Tests**: Component behavior (most valuable!)
4. **E2E Tests**: Critical user paths

## Testing Components

Test behavior, not implementation:

\`\`\`tsx
test('shows error when email is invalid', async () => {
  render(<SignupForm />);
  
  await userEvent.type(screen.getByLabelText(/email/i), 'invalid');
  await userEvent.click(screen.getByRole('button', { name: /submit/i }));
  
  expect(screen.getByText(/valid email required/i)).toBeInTheDocument();
});
\`\`\`

## Mocking API Calls

Use MSW for realistic API mocking:

\`\`\`typescript
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: 'John' }]));
  }),
];
\`\`\`

## When to Write E2E Tests

Reserve E2E tests for critical paths:
- Authentication flows
- Payment processes
- Core user journeys
    `,
    date: '2024-11-10',
    readTime: '9 min read',
    category: 'Testing',
    tags: ['Testing', 'React', 'Jest', 'Cypress'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=630&fit=crop',
    featured: false,
  },
];

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(blogPosts.map(post => post.category))];
};
