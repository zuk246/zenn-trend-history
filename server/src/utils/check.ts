export function isDate(data: string) {
    return /^[0-9]{4}-[0-1][0-9]-[0-3][0-9]$/.test(data);
}

export function isOrderBy(data: string) {
    return ['id', 'title', 'creator', 'description', 'publishedAt'].includes(
        data
    );
}

export function isLimit(data: string) {
    return /^(1|20|[2-9]|1[0-9])$/.test(data);
}
