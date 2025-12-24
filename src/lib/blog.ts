import frontMatter from 'front-matter';

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    category: string;
    readingTime: string;
    cover?: string; // Optional cover image
    published: boolean;
    content: string; // The markdown content
}

export interface BlogFrontMatter {
    title: string;
    slug: string;
    description: string;
    date: string;
    author: string;
    tags: string[];
    category: string;
    readingTime: string;
    cover?: string;
    published: boolean;
}

// 1. Load markdown files
// 1. Load markdown files
const postsModules = import.meta.glob('/src/content/*.md', { query: '?raw', import: 'default' });

// 2. Load images from src/uploads/blog
// 'as: url' returns the path to the asset (e.g., /src/uploads/blog/image.jpg)
const imageModules = import.meta.glob('/src/uploads/blog/*.{png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' });

// Helper to resolve cover image path
const resolveCoverImage = (coverPath?: string): string | undefined => {
    if (!coverPath) return undefined;

    // If it's already an absolute URL or external link, return as is
    if (coverPath.startsWith('http')) return coverPath;

    // Check if the filename exists in our imported images
    // We assume coverPath in markdown is just the filename like "blog1.jpg"
    // or a relative path like "/src/uploads/blog/blog1.jpg"

    // Try to match by filename
    const filename = coverPath.split('/').pop();
    if (filename) {
        // Check key endings. Keys are full paths like /src/uploads/blog/blog1.jpg
        const matchingPath = Object.keys(imageModules).find(path => path.endsWith(filename));
        if (matchingPath) {
            return imageModules[matchingPath] as string;
        }
    }

    return coverPath;
};

// Helper to load all blog posts
export const getBlogPosts = async (): Promise<BlogPost[]> => {
    const posts: BlogPost[] = [];

    for (const path in postsModules) {
        const content = await postsModules[path]() as string;
        const { attributes, body } = frontMatter<BlogFrontMatter>(content);

        if (attributes.published) {
            posts.push({
                ...attributes,
                cover: resolveCoverImage(attributes.cover),
                content: body,
                // Fallback for slug if not in frontmatter
                slug: attributes.slug || path.split('/').pop()?.replace('.md', '') || '',
            });
        }
    }

    // Sort by date descending
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
    const posts = await getBlogPosts();
    return posts.find((post) => post.slug === slug);
};

export const getAllCategories = async (): Promise<string[]> => {
    const posts = await getBlogPosts();
    const categories = new Set(posts.map(post => post.category));
    return Array.from(categories);
};

export const getAllTags = async (): Promise<string[]> => {
    const posts = await getBlogPosts();
    const tags = new Set(posts.flatMap(post => post.tags));
    return Array.from(tags);
}
