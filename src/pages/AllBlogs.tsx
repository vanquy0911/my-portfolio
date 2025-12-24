import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/CursorTrail';
import BlogCard from '@/components/BlogCard';
import { getBlogPosts, BlogPost, getAllCategories, getAllTags } from '@/lib/blog';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { Search, X } from 'lucide-react';

const AllBlogs = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    // const [tags, setTags] = useState<string[]>([]);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [loadedPosts, loadedCategories] = await Promise.all([
                    getBlogPosts(),
                    getAllCategories(),
                    // getAllTags()
                ]);
                setPosts(loadedPosts);
                setCategories(loadedCategories);
                // setTags(loadedTags);
                setFilteredPosts(loadedPosts);
            } catch (error) {
                console.error("Failed to fetch blog data", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        let result = posts;

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(post =>
                post.title.toLowerCase().includes(query) ||
                post.description.toLowerCase().includes(query) ||
                post.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }

        if (selectedCategory) {
            result = result.filter(post => post.category === selectedCategory);
        }

        setFilteredPosts(result);
    }, [posts, searchQuery, selectedCategory]);

    return (
        <div className="min-h-screen bg-background">
            <CursorTrail />
            <Navbar />

            <main className="pt-32 pb-16 md:pt-40 md:pb-24">
                {/* Hero Section */}
                <section className="section-container mb-16 relative">
                    {/* Simple background decorative element */}
                    <div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/2 -translate-y-1/2">
                        <div className="w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
                    </div>

                    <AnimateOnScroll animation="fade-up">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Blog</p>
                            <h1 className="heading-xl mb-6">
                                Khám Phá <span className="gradient-text">Kiến Thức</span> & <span className="gradient-text">Câu Chuyện</span>
                            </h1>
                            <p className="body-lg text-muted-foreground">
                                Tổng hợp suy nghĩ về phát triển, thiết kế và công nghệ.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    {/* Controls */}
                    <AnimateOnScroll animation="fade-up" delay={100}>
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-2xl shadow-sm">
                            {/* Search */}
                            <div className="relative w-full md:w-96">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm bài viết..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-background border border-input rounded-xl py-2 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    >
                                        <X size={16} />
                                    </button>
                                )}
                            </div>

                            {/* Categories */}
                            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-hide">
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === null
                                        ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                                        : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                                        }`}
                                >
                                    Tất cả
                                </button>
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                            ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                                            : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </AnimateOnScroll>

                    {/* Posts Grid */}
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="h-96 bg-card animate-pulse rounded-2xl border border-border"></div>
                            ))}
                        </div>
                    ) : filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <AnimateOnScroll key={post.slug} delay={index * 50} animation="fade-up">
                                    <BlogCard post={post} featured={index === 0 && !searchQuery && !selectedCategory} />
                                </AnimateOnScroll>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-xl text-muted-foreground">Không tìm thấy bài viết nào phù hợp.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
                                className="mt-4 text-primary hover:underline"
                            >
                                Xóa bộ lọc
                            </button>
                        </div>
                    )}

                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AllBlogs;
