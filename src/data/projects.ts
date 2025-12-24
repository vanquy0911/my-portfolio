export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  gallery: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: string;
  year: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'flowboard',
    title: 'Flowboard',
    description: 'A collaborative project management tool with real-time updates and intuitive drag-and-drop interface.',
    longDescription: `Flowboard is a modern project management platform designed for teams who value simplicity and real-time collaboration. Built with performance and user experience at its core, it enables teams to organize, track, and deliver projects efficiently.

The application features a beautiful kanban-style board with smooth drag-and-drop interactions, real-time updates via WebSocket connections, and a powerful filtering system for managing complex projects.

Key technical achievements include implementing optimistic UI updates for instant feedback, building a custom drag-and-drop system from scratch for precise control, and designing a scalable real-time architecture using Socket.io.`,
    tags: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'TailwindCSS', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop',
    ],
    liveUrl: 'https://flowboard.example.com',
    githubUrl: 'https://github.com/example/flowboard',
    featured: true,
    category: 'Web Application',
    year: '2024',
    highlights: [
      'Real-time collaboration with WebSocket integration',
      'Custom drag-and-drop engine with accessibility support',
      'Optimistic UI updates for instant feedback',
      'Role-based access control and team management',
    ],
  },
  {
    id: 'cryptotrack',
    title: 'CryptoTrack',
    description: 'Real-time cryptocurrency portfolio tracker with price alerts and performance analytics.',
    longDescription: `CryptoTrack is a comprehensive cryptocurrency portfolio management application that helps investors track their holdings, monitor market trends, and make informed decisions.

The dashboard provides real-time price updates, historical charts, and portfolio analytics. Users can set custom price alerts, track multiple wallets, and visualize their portfolio allocation across different assets.

Technical highlights include integration with multiple exchange APIs, efficient WebSocket handling for real-time prices, and a performant charting system using Chart.js with custom optimizations.`,
    tags: ['Next.js', 'TailwindCSS', 'Chart.js', 'REST API', 'WebSocket', 'Redis'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&h=800&fit=crop',
    ],
    liveUrl: 'https://cryptotrack.example.com',
    githubUrl: 'https://github.com/example/cryptotrack',
    featured: true,
    category: 'Finance',
    year: '2024',
    highlights: [
      'Real-time price updates from multiple exchanges',
      'Custom alert system with push notifications',
      'Interactive charts with technical indicators',
      'Multi-wallet portfolio tracking',
    ],
  },
  {
    id: 'devnotes',
    title: 'DevNotes',
    description: 'Markdown-based note-taking app for developers with code syntax highlighting and cloud sync.',
    longDescription: `DevNotes is a note-taking application specifically designed for developers. It combines the simplicity of Markdown with powerful features like code syntax highlighting, live preview, and seamless cloud synchronization.

The editor supports 50+ programming languages for syntax highlighting, includes a split-pane live preview, and features smart code block detection with copy functionality.

Built with a focus on performance, the app handles large documents smoothly and syncs changes in real-time across devices using a conflict-free replicated data type (CRDT) algorithm.`,
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Electron', 'CodeMirror'],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=800&fit=crop',
    ],
    liveUrl: 'https://devnotes.example.com',
    githubUrl: 'https://github.com/example/devnotes',
    featured: false,
    category: 'Productivity',
    year: '2023',
    highlights: [
      'Support for 50+ programming languages',
      'Real-time sync with CRDT algorithm',
      'Desktop app with Electron',
      'Offline-first architecture',
    ],
  },
  {
    id: 'weatherscope',
    title: 'WeatherScope',
    description: 'Beautiful weather application with location-based forecasts and interactive weather maps.',
    longDescription: `WeatherScope brings weather data to life with stunning visualizations and intuitive interactions. The app provides accurate forecasts, severe weather alerts, and detailed conditions for any location worldwide.

Features include animated weather icons, interactive radar maps, hourly and weekly forecasts, and beautiful data visualizations that make understanding weather data effortless.

The mobile app was built with React Native for cross-platform compatibility, featuring smooth animations and native performance on both iOS and Android.`,
    tags: ['React Native', 'TypeScript', 'Weather API', 'MapBox', 'Lottie'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?w=1200&h=800&fit=crop',
    ],
    liveUrl: 'https://weatherscope.example.com',
    githubUrl: 'https://github.com/example/weatherscope',
    featured: false,
    category: 'Mobile App',
    year: '2023',
    highlights: [
      'Cross-platform React Native app',
      'Interactive MapBox integration',
      'Animated Lottie weather icons',
      'Severe weather push notifications',
    ],
  },
  {
    id: 'codeforge',
    title: 'CodeForge',
    description: 'An online code editor with real-time collaboration, supporting multiple programming languages.',
    longDescription: `CodeForge is a powerful online IDE that enables developers to write, run, and collaborate on code directly in the browser. It supports multiple programming languages and frameworks with intelligent code completion and real-time collaboration.

The editor features Monaco (VS Code's editor), custom theming, integrated terminal, and seamless Git integration. Multiple users can edit the same file simultaneously with cursor presence and live updates.

Technical achievements include implementing operational transformation for conflict-free collaborative editing and building a secure sandboxed code execution environment.`,
    tags: ['React', 'Monaco Editor', 'Docker', 'WebRTC', 'Go', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=800&fit=crop',
    ],
    liveUrl: 'https://codeforge.example.com',
    githubUrl: 'https://github.com/example/codeforge',
    featured: false,
    category: 'Developer Tools',
    year: '2024',
    highlights: [
      'Real-time collaborative editing',
      'Sandboxed code execution',
      'Support for 20+ languages',
      'Integrated Git workflows',
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(projects.map(project => project.category))];
};
