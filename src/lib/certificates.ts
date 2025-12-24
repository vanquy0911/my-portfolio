export interface Certificate {
    name: string;
    filename: string;
    url: string;
}

// Load all PDFs from src/uploads/certificates
const certificateModules = import.meta.glob('/src/uploads/certificates/*.pdf', {
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

export const getCertificates = (): Certificate[] => {
    const certificates: Certificate[] = [];

    for (const path in certificateModules) {
        const filename = path.split('/').pop() || '';
        const url = certificateModules[path] as string;

        certificates.push({
            name: formatCertificateName(filename),
            filename,
            url,
        });
    }

    // Sort alphabetically by name
    return certificates.sort((a, b) => a.name.localeCompare(b.name));
};
