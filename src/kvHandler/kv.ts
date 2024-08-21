import { Context } from "hono";

export async function redirect(c: Context) {
    const kv = c.env.shortener
    const id = c.req.param('id')

    try {
        const value = await kv.get(id)
        if (!value) {
            return c.text('Key ' + id + ' not found', 404)
        }
        return c.redirect(value)
    } catch (error) {
        console.error('Console returned an error:', error)
        return new Response('Internal Server Error (KV)', { status: 500 })
    }
}