export function formatDate(date: number) {
    const d = new Date(date * 1000);
    const today = new Date();
    const diff =
        Math.floor((today.getTime() - d.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    return diff;
}

export function formatURL(url: string) {
    return url.replace('https://zenn.dev', '');
}
