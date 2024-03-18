import { D1QB } from 'workers-qb';
import dayjs from 'dayjs';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';
import { Env } from '../types/env';
import { RSS } from '../types/rss';

const ZENN_RSS_URL = 'https://zenn.dev/feed';

// curl http://localhost:8787/__scheduled?cron=*+*+*+*+*

export default async function scheduled(
    req: Request,
    env: Env,
    ctx: { waitUntil: (arg0: Promise<void>) => void }
) {
    ctx.waitUntil(createZennHistory(env));
}

async function createZennHistory(env: Env) {
    const res = await fetch(ZENN_RSS_URL);
    const textResponse = await res.text();
    const json = JSON.parse(
        convert.xml2json(textResponse, { compact: true, spaces: 4 })
    ) as RSS;

    const qb = new D1QB(env.DB);

    for (let item of json.rss.channel.item) {
        await qb
            .insert({
                tableName: 'histories',
                data: {
                    id: uuidv4(),
                    title: item.title._cdata,
                    description: item.description._cdata,
                    link: item.link._text,
                    image: item.enclosure._attributes.url,
                    creator: item['dc:creator']._text,
                    publishedAt: dayjs(item.pubDate._text).unix(),
                    createdAt: dayjs().unix(),
                },
            })
            .execute();
    }

    return;
}
