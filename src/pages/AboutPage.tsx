import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/CursorTrail';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import personImages from '@/uploads/personal/person.jpg';
import { Code2, Rocket, Heart, Target, Award, BookOpen, Users, Zap } from 'lucide-react';

const AboutPage = () => {
    const [activeTab, setActiveTab] = useState<'skills' | 'values'>('skills');

    const skills = [
        { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
        { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'ASP.Net Core', 'C#', 'JavaScript'] },
        { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Postman'] },
        { category: 'Soft Skills', items: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management'] },
    ];

    const values = [
        {
            icon: Code2,
            title: 'Clean Code',
            description: 'I believe in writing maintainable, readable code that stands the test of time.',
        },
        {
            icon: Rocket,
            title: 'Continuous Growth',
            description: 'Learning every day, staying updated with the latest technologies and best practices.',
        },
        {
            icon: Users,
            title: 'Collaboration',
            description: 'Great products are built by great teams. I value open communication and teamwork.',
        },
        {
            icon: Zap,
            title: 'Performance',
            description: 'Optimizing for speed and efficiency to deliver the best user experience.',
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <CursorTrail />
            <Navbar />

            <main className="pt-32 pb-16 md:pt-40 md:pb-24">
                {/* Hero Section */}
                <section className="section-container mb-20 relative">
                    <div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/2 -translate-y-1/2">
                        <div className="w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
                    </div>
                    <AnimateOnScroll animation="fade-up">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">About Me</p>
                            <h1 className="heading-xl mb-6">
                                Passionate about <span className="gradient-text">Technology</span> & <span className="gradient-text">Innovation</span>
                            </h1>

                            {/* Personal Bio Section - Redesigned to match user reference image */}
                            <div className="max-w-4xl mx-auto text-left space-y-12 mt-16">
                                <AnimateOnScroll animation="fade-up" delay={100}>
                                    <p className="text-lg md:text-xl text-muted-foreground/90 lg:leading-[2.2] md:leading-[2] leading-relaxed">
                                        Tôi là Văn Tấn Quý,đang là sinh viên năm cuối ngành <span className="text-foreground font-bold decoration-primary/30 underline-offset-8">Công nghệ Thông tin</span>, có niềm đam mê với lĩnh vực <span className="text-foreground font-bold decoration-primary/30 underline-offset-8">phát triển web và mobile</span> và các công nghệ phần mềm hiện đại. Trong quá trình học tập và rèn luyện, tôi đã trang bị cho mình những kiến thức nền tảng về lập trình, đặc biệt là phát triển giao diện người dùng và xây dựng ứng dụng web.
                                    </p>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fade-up" delay={200}>
                                    <p className="text-lg md:text-xl text-muted-foreground/90 lg:leading-[2.2] md:leading-[2] leading-relaxed">
                                        Hiện tại, tôi đã và đang học tập, tìm hiểu các công nghệ như <span className="text-foreground font-bold">JavaScript, TypeScript, React.js, Node.js, Express.js, Flutter, Dart,  HTML, CSS và Tailwind CSS</span>. Tôi có khả năng xây dựng giao diện web theo hướng component-based, chú trọng đến trải nghiệm người dùng, tính thẩm mỹ và khả năng mở rộng của hệ thống.
                                    </p>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fade-up" delay={300}>
                                    <p className="text-lg md:text-xl text-muted-foreground/90 lg:leading-[2.2] md:leading-[2] leading-relaxed">
                                        Bên cạnh việc học lý thuyết, tôi luôn chủ động thực hành thông qua các dự án cá nhân, trong đó có website CV cá nhân và các dự án web khác. Thông qua những dự án này, tôi đã rèn luyện được tư duy phân tích, kỹ năng giải quyết vấn đề và khả năng tự học công nghệ mới.
                                    </p>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fade-up" delay={400}>
                                    <p className="text-lg md:text-xl text-muted-foreground/90 lg:leading-[2.2] md:leading-[2] leading-relaxed">
                                        Mục tiêu của tôi là trở thành một <span className="text-foreground font-bold decoration-primary/30 uderline-offset-8">lập trình viên web chuyên nghiệp</span> trong tương lai. Hiện tại, tôi mong muốn tìm kiếm cơ hội <span className="text-foreground font-bold italic decoration-primary decoration-2 underline-offset-8">Thực tập (Intern)</span> trong môi trường làm việc chuyên nghiệp để áp dụng kiến thức đã học vào thực tế, đồng thời tiếp tục học hỏi, nâng cao kỹ năng và tích lũy kinh nghiệm làm việc.
                                    </p>
                                </AnimateOnScroll>
                            </div>

                        </div>
                    </AnimateOnScroll>

                    {/* Profile Image */}
                    <AnimateOnScroll animation="scale" delay={100}>
                        <div className="max-w-md mx-auto mb-16">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                                <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-border bg-card">
                                    <img
                                        src={personImages}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                </section>

                {/* Tabs Navigation */}
                <section className="section-container mb-12">
                    <AnimateOnScroll animation="fade-up">
                        <div className="flex justify-center gap-4 mb-12">
                            {(['skills', 'values'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === tab
                                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                                        : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
                                        }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </AnimateOnScroll>
                </section>

                {/* Skills Section */}
                {activeTab === 'skills' && (
                    <section className="section-container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {skills.map((skillGroup, index) => (
                                <AnimateOnScroll key={skillGroup.category} delay={index * 100} animation="fade-up">
                                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover">
                                        <h3 className="text-xl font-semibold mb-4 gradient-text">{skillGroup.category}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1.5 rounded-lg text-sm bg-secondary/50 text-foreground hover:bg-primary/10 hover:text-primary transition-all"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </section>
                )}

                {/* Values Section */}
                {activeTab === 'values' && (
                    <section className="section-container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {values.map((value, index) => (
                                <AnimateOnScroll key={value.title} delay={index * 100} animation="scale">
                                    <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover relative overflow-hidden">
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative z-10">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <value.icon className="text-white" size={24} />
                                            </div>
                                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                                {value.title}
                                            </h3>
                                            <p className="text-muted-foreground">{value.description}</p>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                {/* <section className="section-container mt-20">
                    <AnimateOnScroll animation="fade-up">
                        <div className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
                            <Heart className="w-12 h-12 mx-auto mb-6 text-primary" />
                            <h2 className="heading-md mb-4">Let's Work Together</h2>
                            <p className="body-lg text-muted-foreground mb-8">
                                Tôi đang tìm kiếm cơ hội thực tập để tích lũy kinh nghiệm thực tế và phát triển bản thân.
                            </p>
                            <a
                                href="#contact"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                <Target size={18} />
                                Get In Touch
                            </a>
                        </div>
                    </AnimateOnScroll>
                </section> */}
            </main>

            <Footer />
        </div>
    );
};

export default AboutPage;
