export const truncateDescription = (description, maxWords) => {
    const words = description.split(' ');
    if (words.length > maxWords) {
        const truncatedWords = words.slice(0, maxWords);
        return truncatedWords.join(' ') + '...';
    }
    return description;
};