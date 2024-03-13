export type RSS = {
    _declaration: {
        _attributes: {
            version: string;
            encoding: string;
        };
    };
    rss: {
        _attributes: {
            'xmlns:dc': string;
            'xmlns:content': string;
            'xmlns:atom': string;
            version: string;
        };
        channel: {
            title: {
                _cdata: string;
            };
            description: {
                _cdata: string;
            };
            link: {
                _text: string;
            };
            image: {
                url: {
                    _text: string;
                };
                title: {
                    _text: string;
                };
                link: {
                    _text: string;
                };
            };
            generator: {
                _text: string;
            };
            lastBuildDate: {
                _text: string;
            };
            'atom:link': {
                _attributes: {
                    href: string;
                    rel: string;
                    type: string;
                };
            };
            language: {
                _cdata: string;
            };
            item: {
                title: {
                    _cdata: string;
                };
                description: {
                    _cdata: string;
                };
                link: {
                    _text: string;
                };
                guid: {
                    _attributes: {
                        isPermaLink: 'true' | 'false' | null | undefined;
                    };
                    _text: string;
                };
                pubDate: {
                    _text: string;
                };
                enclosure: {
                    _attributes: {
                        url: string;
                        length: string;
                        type: string;
                    };
                };
                'dc:creator': {
                    _text: string;
                };
            }[];
        };
    };
};
