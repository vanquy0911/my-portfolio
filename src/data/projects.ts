export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  featured: boolean;
  slug: string;
  category: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Hotel Booking Website',
    description: 'A hotel booking website integrated with an AI chatbot that supports consultation, room availability lookup, and automated booking, improving user experience and operational efficiency.',
    tags: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Node.js', 'Javascipt'],
    image: 'src/uploads/project/hotel.jpg',
    githubUrl: 'https://github.com/vanquy0911/BE-HOTEL',
    featured: true,
    slug: 'hotel-booking',
    category: 'Web App',
    year: '2024'
  },
  {
    id: '2',
    title: 'Buddhist Sutra Reading & Search App',
    description: 'Read App is a mobile application that allows users to read books and articles offline.',
    tags: ['Dart', 'Flutter', 'TailwindCSS', 'REST API', 'Firebase'],
    image: 'src/uploads/project/read-app.jpg',
    githubUrl: 'https://github.com/NerdKandev/Sang03_Nhom01_AppTimBaiDocTheoNgay',
    featured: true,
    slug: 'read-app',
    category: 'Mobile App',
    year: '2024'
  },
  {
    id: '3',
    title: 'DevNotes',
    description: 'Markdown-based note-taking app for developers with code syntax highlighting and cloud sync.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    image: 'src/uploads/project/devnotes.jpg',
    githubUrl: '#',
    featured: false,
    slug: 'devnotes',
    category: 'Web App',
    year: '2023'
  },
  // {
  //   id: '4',
  //   title: 'WeatherScope',
  //   description: 'Beautiful weather application with location-based forecasts and interactive weather maps.',
  //   tags: ['React Native', 'TypeScript', 'Weather API'],
  //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
  //   githubUrl: '#',
  //   featured: false,
  //   slug: 'weatherscope',
  //   category: 'Mobile App',
  //   year: '2024'
  // },
];

export const getAllCategories = (): string[] => {
  const categories = new Set(projects.map(project => project.category));
  return Array.from(categories);
};
