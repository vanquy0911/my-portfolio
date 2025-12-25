import { FileText, ExternalLink } from 'lucide-react';
import { Certificate } from '@/lib/certificates';

interface CertificateCardProps {
    certificate: Certificate;
    index?: number;
}

export const CertificateCard = ({ certificate, index = 0 }: CertificateCardProps) => {
    return (
        <a
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover overflow-hidden"
        >
            {certificate.image && (
                <div className="aspect-video overflow-hidden relative">
                    <img
                        src={certificate.image}
                        alt={certificate.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}
            <div className="p-6">
                <div className="flex items-start gap-4">
                    {!certificate.image && (
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <FileText className="text-primary" size={24} />
                        </div>
                    )}
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {certificate.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            {certificate.filename}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-primary">
                            <span>Xem chứng chỉ</span>
                            <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};
