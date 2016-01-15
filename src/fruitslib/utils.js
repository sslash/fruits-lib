export function truncate(str, maxLen) {
    if (!str || !maxLen) {
        return str;
    }

    if (str.length > maxLen) {
        let substr = str.substring(0, maxLen - 3).trim();
        return substr + '...';
    }

    return str;
}

export function immutableComparator (key) {
    return (a, b) => a.get(key) - b.get(key);
}
