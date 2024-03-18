import { Hono } from 'hono';
import { Env } from '../../types/env';
import { D1QB, FetchTypes } from 'workers-qb';
import dayjs from 'dayjs';
import { isDate, isLimit, isOrderBy } from '../../utils/check';

const api = new Hono<{ Bindings: Env }>();

api.use(async (c, next) => {
    c.header('Access-Control-Allow-Origin', '*');
    await next();
});

// random
api.get('/random', async (c) => {
    const { limit } = c.req.queries();

    const isValidLimit = limit ? isLimit(limit[0]) : true;
    if (!isValidLimit) {
        return c.json(
            { success: false, message: 'Limit is not correct value.' },
            400
        );
    }

    const today = dayjs().startOf('day').unix();
    let limitQuery = 20;

    if (limit) limitQuery = parseInt(limit[0]);

    const qb = new D1QB(c.env.DB);
    const data = await qb
        .raw({
            query: `SELECT * FROM histories WHERE createdAt < ${today} ORDER BY random() LIMIT ${limitQuery}`,
            fetchType: FetchTypes.ALL,
        })
        .execute();

    return c.json(
        {
            success: data.success,
            message: 'ok',
            length: Array.isArray(data?.results) ? data.results.length : 0,
            data: data.results ?? [],
        },
        200
    );
});

// search
api.get('/search', async (c) => {
    const { date, orderBy, limit } = c.req.queries();

    const isValidDate = date ? isDate(date[0]) : true;
    if (!isValidDate) {
        return c.json(
            { success: false, message: 'Date is not correct value.' },
            400
        );
    }

    const isValidOrderBy = orderBy ? isOrderBy(orderBy[0]) : true;
    if (!isValidOrderBy) {
        return c.json(
            { success: false, message: 'OrderBy is not correct value.' },
            400
        );
    }

    const isValidLimit = limit ? isLimit(limit[0]) : true;
    if (!isValidLimit) {
        return c.json(
            { success: false, message: 'Limit is not correct value.' },
            400
        );
    }

    let whereQuery = '';
    let orderByQuery = 'id DESC';
    let limitQuery = 20;

    if (date) {
        const startDate = dayjs(date[0]).unix();
        const endDate = dayjs(date[0]).add(1, 'day').unix();

        whereQuery = `createdAt BETWEEN ${startDate} AND ${endDate}`;
    }

    if (orderBy) orderByQuery = `${orderBy[0]} DESC`;

    if (limit) limitQuery = parseInt(limit[0]);

    const qb = new D1QB(c.env.DB);
    const data = await qb
        .fetchAll({
            tableName: 'histories',
            where: whereQuery
                ? {
                      conditions: whereQuery,
                  }
                : undefined,
            orderBy: orderByQuery ?? undefined,
            limit: limitQuery ?? 20,
        })
        .execute();

    if (data.results?.length == 0) {
        return c.json(
            { success: false, message: 'Data not found.', length: 0 },
            404
        );
    }

    return c.json(
        {
            success: true,
            message: 'ok',
            length: data?.results?.length ?? 0,
            data: data.results ?? [],
        },
        200
    );
});

// items
api.get('/items/:id', async (c) => {
    const { id } = c.req.param();
    const qb = new D1QB(c.env.DB);
    const data = await qb
        .fetchOne({
            tableName: 'histories',
            where: {
                conditions: `id = "${id}"`,
            },
        })
        .execute();

    if (!data.success) {
        return c.json({ success: false, message: 'Data not found.' }, 404);
    }

    return c.json(
        {
            success: true,
            message: 'ok',
            data: data.results,
        },
        200
    );
});

export { api as api_v1 };
