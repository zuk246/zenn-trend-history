// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

// not working

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------

import { expect, it } from 'vitest';
import { app } from '..';

it('root', async () => {
    const res = await app.request('/v1');
    expect(res.status).toBe(404);
});

it('items', async () => {
    const res = await app.request(
        '/v1/items/af24d4fc-7372-44ac-b903-9eefa48b25b4'
    );
    expect(res.status).toBe(202);
    expect(await res.json()).toMatchObject({
        success: true,
        message: 'ok',
    });
});

it('items not found', async () => {
    const res = await app.request('/v1/items/0000-0000-0000-0000');
    expect(res.status).toBe(404);
    expect(await res.json()).toMatchObject({
        success: false,
        message: 'Data not found.',
    });
});

it('search items', async () => {
    const res = await app.request('/v1/search?limit=10&orderBy=id');
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({
        success: true,
        message: 'ok',
        length: 10,
    });
});

it('search items not found', async () => {
    const res = await app.request(
        '/v1/search?limit=10&orderBy=id&date=2000-01-01'
    );
    expect(res.status).toBe(404);
    expect(await res.json()).toMatchObject({
        success: false,
        message: 'Data not found.',
        length: 0,
    });
});

it('random', async () => {
    const res = await app.request('/v1/random');
    expect(res.status).toBe(200);
    expect(await res.json()).toMatchObject({
        success: true,
        message: 'ok',
        length: 20,
    });
});
