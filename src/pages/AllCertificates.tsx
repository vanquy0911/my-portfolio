import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/CursorTrail';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { getCertificates } from '@/lib/certificates';
import { CertificateCard } from '@/components/ui/CertificateCard';

const AllCertificates = () => {
    const certificates = getCertificates();

    return (
        <div className="min-h-screen bg-background">
            <CursorTrail />
            <Navbar />
            <main className="pt-24 pb-16">
                <div className="section-container">
                    <AnimateOnScroll animation="fade-up">
                        <div className="max-w-2xl mb-12">
                            <p className="text-sm font-medium text-primary mb-4">Chứng Chỉ</p>
                            <h1 className="heading-lg mb-6">
                                Các <span className="gradient-text">Chứng Chỉ</span> Của Tôi
                            </h1>
                            <p className="text-muted-foreground text-lg">
                                Bộ sưu tập các chứng chỉ và chứng nhận đã đạt được.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    {/* Certificates Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((cert, index) => (
                            <AnimateOnScroll key={cert.filename} delay={index * 100} animation="scale">
                                <CertificateCard certificate={cert} index={index} />
                            </AnimateOnScroll>
                        ))}
                    </div>

                    {certificates.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-muted-foreground">Chưa có chứng chỉ nào.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AllCertificates;
