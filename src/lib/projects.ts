import frontMatter from 'front-matter';

export interface Project {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    image?: string;
    githubUrl: string;
    liveUrl?: string; // Optional
    featured: boolean;
    category: string;
    year: string;
    id: string; // Keep ID for compatibility, though slug is better
    content: string;
}

export interface ProjectFrontMatter {
    title: string;
    slug: string;
    description: string;
    tags: string[];
    image?: string;
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    category: string;
    year: string;
    id?: string;
}

const projectsModules = import.meta.glob('/src/content/projects/*.md', { query: '?raw', import: 'default' });
const imageModules = import.meta.glob('/src/uploads/project/*.{png,jpg,jpeg,svg,webp}', { eager: true, query: '?url', import: 'default' });

const resolveImage = (imagePath?: string): string | undefined => {
    if (!imagePath) return undefined;
    if (imagePath.startsWith('http')) return imagePath;

    const filename = imagePath.split('/').pop();
    if (filename) {
        const matchingPath = Object.keys(imageModules).find(path => path.endsWith(filename));
        if (matchingPath) {
            return imageModules[matchingPath] as string;
        }
    }
    return imagePath;
};

export const getProjects = async (): Promise<Project[]> => {
    const projects: Project[] = [];

    for (const path in projectsModules) {
        const content = await projectsModules[path]() as string;
        const { attributes, body } = frontMatter<ProjectFrontMatter>(content);

        projects.push({
            ...attributes,
            image: resolveImage(attributes.image),
            content: body,
            slug: attributes.slug || path.split('/').pop()?.replace('.md', '') || '',
            id: attributes.id || Math.random().toString(36).substr(2, 9),
            githubUrl: attributes.githubUrl || '#',
        });
    }

    return projects;
};

export const getProjectBySlug = async (slug: string): Promise<Project | undefined> => {
    const projects = await getProjects();
    return projects.find((p) => p.slug === slug);
};
