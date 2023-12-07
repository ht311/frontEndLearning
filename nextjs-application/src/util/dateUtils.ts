export const getFormattedDate = (date: Date | null, defaultValue = ""): string => {
    if (!date) return defaultValue;
    return new Date(date).toLocaleDateString();
};
