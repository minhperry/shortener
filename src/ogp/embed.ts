import { Context } from "hono";

function generateEmbedHTML(title: string, description: string): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
      </head>
      <body>
        <h1>${title}</h1>
        <p>${description}</p>
      </body>
      </html>
    `;
  }


export function embed (c: Context) {
    const title = c.req.query('t') || 'Default Title';
    const description = c.req.query('d') || 'Default Description';

    const html = generateEmbedHTML(title, description);

    return c.html(html);
} 