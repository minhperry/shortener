import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { redirect } from './kvHandler/kv'
import { embed } from './ogp/embed'

type Binding = {shortener: KVNamespace}

const app = new Hono<{Bindings: Binding}>()
app.use('/*', cors())

app
	.get('/', (c) => c.text('Please enter something'))
	.get('/e', (c) => embed(c))
	.get('/:id', (c) => redirect(c))

export default app