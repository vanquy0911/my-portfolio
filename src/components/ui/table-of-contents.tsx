import { useEffect, useState } from 'react';

interface ToCItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    content: string;
}

const TableOfContents = ({ content }: TableOfContentsProps) => {
    const [headings, setHeadings] = useState<ToCItem[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        // simple regex to match markdown headers
        // Matches # Header, ## Header, etc.
        const regX = /^(#{2,3})\s+(.+)$/gm;
        const items: ToCItem[] = [];
        let match;

        while ((match = regX.exec(content)) !== null) {
            const level = match[1].length;
            const text = match[2].trim();
            // Create a simple slug for the id
            const id = text
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');

            items.push({ id, text, level });
        }

        setHeadings(items);
    }, [content]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -80% 0px' }
        );

        const headingElements = document.querySelectorAll('h2, h3');
        headingElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [headings]); // Dependencies updated to re-run when headings generated

    if (headings.length === 0) return null;

    return (
        <nav className="sticky top-24 max-h-[calc(100vh-120px)] overflow-auto p-4 hidden lg:block">
            <h4 className="text-sm font-semibold mb-4 text-foreground/80 uppercase tracking-wider">
                On this page
            </h4>
            <ul className="space-y-2 border-l border-border pl-4">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
                    >
                        <a
                            href={`#${heading.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(`#${heading.id}`)?.scrollIntoView({
                                    behavior: 'smooth',
                                });
                                setActiveId(heading.id);
                            }}
                            className={`block text-sm transition-colors duration-200 border-l-2 -ml-[17px] pl-4 py-1.5 ${activeId === heading.id
                                    ? 'border-primary text-primary font-medium bg-primary/5'
                                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                                }`}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
