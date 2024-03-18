import { Hono } from 'hono';
import { Env } from './types/env';
import scheduled from './feature/scheduled';
import { prettyJSON } from 'hono/pretty-json';
import { api_v1 } from './api/v1';

const app = new Hono<{ Bindings: Env }>();

app.route('/v1', api_v1);

app.use(prettyJSON());
app.notFound((c) => {
    return c.json({ message: 'Not Found', success: false }, 404);
});

export default {
    fetch: app.fetch,
    scheduled: scheduled,
};

export { app };
