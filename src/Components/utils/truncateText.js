export const truncateDescription = (description, maxWords) => {
    if (description) {
        const words = description.split(' ');
        if (words.length > maxWords) {
            const truncatedWords = words.slice(0, maxWords);
            return truncatedWords.join(' ') + '...';
        }
    }
    return description;
};