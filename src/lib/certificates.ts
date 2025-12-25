export interface Certificate {
    name: string;
    filename: string;
    url: string;
    image?: string;
}

// Load all PDFs from src/uploads/certificates
const certificateModules = import.meta.glob('/src/uploads/certificates/*.pdf', {
    eager: true,
    query: '?url',
    import: 'default'
});

// Load all images from src/uploads/certificates
const certificateImages = import.meta.glob('/src/uploads/certificates/*.{jpg,jpeg,png,webp}', {
    eager: true,
    query: '?url',
    import: 'default'
});

// Helper to format display name from filename
const formatCertificateName = (filename: string): string => {
    // Remove .pdf extension and path
    const baseName = filename.split('/').pop()?.replace('.pdf', '') || '';

    // Convert to title case and add spaces
    // e.g., "javascript1" -> "Javascript 1", "networking" -> "Networking"
    return baseName
        .replace(/([a-z])([0-9])/gi, '$1 $2') // Add space before numbers
        .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
};

// Helper to find matching image for a certificate
const findCertificateImage = (pdfFilename: string): string | undefined => {
    const baseName = pdfFilename.replace('.pdf', '').toLowerCase();

    for (const imagePath in certificateImages) {
        const imageFilename = imagePath.split('/').pop() || '';
        const imageBaseName = imageFilename.replace(/\.(jpg|jpeg|png|webp)$/i, '').toLowerCase();

        // Exact match
        if (imageBaseName === baseName) {
            return certificateImages[imagePath] as string;
        }

        // Handle typo: javascipt vs javascript
        const normalizedBaseName = baseName.replace('javascript', 'javascipt');
        const normalizedImageBaseName = imageBaseName.replace('javascript', 'javascipt');

        if (normalizedImageBaseName === normalizedBaseName) {
            return certificateImages[imagePath] as string;
        }

        // Partial match (contains)
        if (imageBaseName.includes(baseName) || baseName.includes(imageBaseName)) {
            return certificateImages[imagePath] as string;
        }
    }

    return undefined;
};

export const getCertificates = (): Certificate[] => {
    const certificates: Certificate[] = [];

    for (const path in certificateModules) {
        const filename = path.split('/').pop() || '';
        const url = certificateModules[path] as string;
        const image = findCertificateImage(filename);

        certificates.push({
            name: formatCertificateName(filename),
            filename,
            url,
            image,
        });
    }

    // Sort alphabetically by name
    return certificates.sort((a, b) => a.name.localeCompare(b.name));
};
