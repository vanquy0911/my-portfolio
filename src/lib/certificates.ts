export interface Certificate {
    name: string;
    filename: string;
    url: string;
    image?: string;
    description?: string;
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

// Custom certificate name mapping
// Thêm tên file PDF (không có .pdf) và tên hiển thị tùy chỉnh vào đây
const certificateNameMapping: Record<string, string> = {
    'javascript1': 'JavaScript Essentials 1 - Cisco Networking Academy',
    'javascript2': 'JavaScript Essentials 2 - Cisco Networking Academy',
    'networking': 'Networking Basics - Cisco Networking Academy',
    // Thêm các chứng chỉ khác ở đây theo format:
    // 'ten-file': 'Tên Hiển Thị Tùy Chỉnh',
};

// Custom certificate description mapping
// Thêm mô tả cho từng chứng chỉ
const certificateDescriptionMapping: Record<string, string> = {
    'javascript1': 'Chứng chỉ hoàn thành khóa học JavaScript Essentials 1, bao gồm các kiến thức cơ bản về JavaScript, biến, kiểu dữ liệu, vòng lặp và hàm.',
    'javascript2': 'Chứng chỉ hoàn thành khóa học JavaScript Essentials 2, chuyên sâu về Object-Oriented Programming, DOM manipulation, và xử lý bất đồng bộ.',
    'networking': 'Chứng chỉ nền tảng về mạng máy tính, bao gồm các giao thức mạng, mô hình OSI, TCP/IP và cấu hình mạng cơ bản.',
    // Thêm mô tả cho các chứng chỉ khác:
    // 'ten-file': 'Mô tả chi tiết về chứng chỉ',
};

// Helper to format display name from filename
const formatCertificateName = (filename: string): string => {
    // Remove .pdf extension and path
    const baseName = filename.split('/').pop()?.replace('.pdf', '') || '';

    // Check if there's a custom name mapping first
    if (certificateNameMapping[baseName.toLowerCase()]) {
        return certificateNameMapping[baseName.toLowerCase()];
    }

    // Otherwise, use automatic formatting
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
        const baseName = filename.replace('.pdf', '').toLowerCase();
        const url = certificateModules[path] as string;
        const image = findCertificateImage(filename);
        const description = certificateDescriptionMapping[baseName];

        certificates.push({
            name: formatCertificateName(filename),
            filename,
            url,
            image,
            description,
        });
    }

    // Sort alphabetically by name
    return certificates.sort((a, b) => a.name.localeCompare(b.name));
};
